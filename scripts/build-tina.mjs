#!/usr/bin/env node
import { readFileSync, existsSync } from "fs"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"
import { spawnSync } from "child_process"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, "..")
const envPath = resolve(root, ".env.local")

// Load .env.local if it exists (local dev). In CI the values come from real
// environment variables (GitHub Secrets), so no .env.local file is needed.
if (existsSync(envPath)) {
  const raw = readFileSync(envPath, "utf8")
  for (const line of raw.split("\n")) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) continue
    const eq = trimmed.indexOf("=")
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    // Never let an empty value in the file overwrite a real environment variable.
    if (value || !process.env[key]) process.env[key] = value
  }
}

const required = ["NEXT_PUBLIC_TINA_CLIENT_ID", "TINA_TOKEN"]
const missing = required.filter((k) => !process.env[k]?.trim())
if (missing.length) {
  console.error("Missing required env vars (set them in .env.local locally, or as GitHub Secrets in CI):", missing.join(", "))
  process.exit(1)
}

const run = (command, args) => {
  const isWindows = process.platform === "win32"
  const opts = { stdio: "inherit", cwd: root, env: process.env }
  const result = isWindows
    ? spawnSync(`${command} ${args.join(" ")}`, [], { ...opts, shell: true })
    : spawnSync(command, args, opts)
  return result.status
}

console.log("Tina env loaded from .env.local, running tinacms build…")
if (run("npx", ["tinacms", "build"]) !== 0) process.exit(1)

console.log("Running next build…")
const nextStatus = run("npx", ["next", "build"])
process.exit(nextStatus !== undefined && nextStatus !== null ? nextStatus : 0)
