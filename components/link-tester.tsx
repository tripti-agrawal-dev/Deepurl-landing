"use client"

import { useId, useRef,useState } from "react"
import { AlertTriangle, Check, ChevronRight, Link2, Monitor, Smartphone, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type Status = "ok" | "warn" | "fail"

type Check = { status: "ok" | "warn"; text: string }

type Analysis = {
  kind: "web" | "app"
  host: string
  display: string
  destination: string
  secure: boolean
  local: boolean
  checks: Check[]
}

type Lane = {
  id: string
  label: string
  device: "phone" | "desktop"
  status: Status
  steps: string[]
  note: string
}

const EXAMPLE = "https://shop.example.com/sneakers/red?utm_source=instagram&utm_campaign=spring"

const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
  "ttclid",
  "msclkid",
]

function isLocalHost(host: string) {
  return (
    host === "localhost" ||
    host.endsWith(".local") ||
    host.endsWith(".test") ||
    /^127\./.test(host) ||
    /^10\./.test(host) ||
    /^192\.168\./.test(host)
  )
}

function analyzeLink(raw: string): { ok: true; analysis: Analysis } | { ok: false; error: string } {
  const input = raw.trim()
  if (!input) {
    return { ok: false, error: "Paste a link to test, like https://shop.example.com/sneakers." }
  }

  const hasScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(input)
  if (!hasScheme && /^[a-z][a-z0-9+.-]*:(?!\d)/i.test(input)) {
    return { ok: false, error: "Only web links (https://) and app links (myapp://) can be tested." }
  }
  let url: URL
  try {
    url = new URL(hasScheme ? input : `https://${input}`)
  } catch {
    return { ok: false, error: "That doesn't look like a link. Check for typos and try again." }
  }

  const isWeb = url.protocol === "https:" || url.protocol === "http:"
  const host = url.hostname || url.host
  if (!host) {
    return { ok: false, error: "That link has no address. Try something like https://shop.example.com/sneakers." }
  }

  const path = url.pathname === "/" ? "" : url.pathname
  const checks: Check[] = []
  const local = isWeb && isLocalHost(host)

  if (isWeb) {
    if (url.protocol === "https:") {
      checks.push({ status: "ok", text: "Secure link. iOS and Android can open it straight in your app." })
    } else {
      checks.push({
        status: "warn",
        text: "This link uses http. Universal Links and App Links need https to open your app.",
      })
    }
    if (!path && !url.search) {
      checks.push({
        status: "warn",
        text: "It points to the homepage. Link to the exact page so people land where they meant to.",
      })
    } else {
      checks.push({ status: "ok", text: `Points to a specific page${path ? ` (${path})` : ""}.` })
    }
  } else {
    checks.push({
      status: "warn",
      text: `${url.protocol}// links only work when the app is installed. Use an https link so everyone gets somewhere.`,
    })
    checks.push({ status: "ok", text: `Points inside the app (${host}${url.pathname === "/" ? "" : url.pathname}).` })
  }

  const found = TRACKING_KEYS.filter((key) => url.searchParams.has(key))
  if (found.length > 0) {
    checks.push({ status: "ok", text: `Campaign tags found: ${found.join(", ")}.` })
  } else {
    checks.push({
      status: "warn",
      text: "No campaign tags. Add utm_source and utm_campaign so installs trace back to a channel.",
    })
  }

  if (local) {
    checks.push({ status: "warn", text: "This address only works on your own network. Phones can't open it." })
  }

  const destination = isWeb ? (path ? path : "the home screen") : `${host}${path}`

  return {
    ok: true,
    analysis: {
      kind: isWeb ? "web" : "app",
      host,
      display: `${host}${path}`,
      destination,
      secure: url.protocol === "https:",
      local,
      checks,
    },
  }
}

function buildLanes(a: Analysis, installed: boolean): Lane[] {
  const open = `Opens app at ${a.destination}`

  if (a.kind === "app") {
    const gone = "Nothing opens"
    return [
      {
        id: "ios",
        label: "iPhone",
        device: "phone",
        status: installed ? "ok" : "fail",
        steps: installed ? ["Tap link", "App scheme", open] : ["Tap link", "App scheme", gone],
        note: installed ? "Works, but only because the app is installed." : "Safari shows an error. There's no fallback.",
      },
      {
        id: "android",
        label: "Android",
        device: "phone",
        status: installed ? "ok" : "fail",
        steps: installed ? ["Tap link", "App scheme", open] : ["Tap link", "App scheme", gone],
        note: installed ? "Works, but only because the app is installed." : "Nothing happens and there's no store fallback.",
      },
      {
        id: "desktop",
        label: "Desktop",
        device: "desktop",
        status: "fail",
        steps: ["Click link", "App scheme", gone],
        note: "Browsers can't open an app address. People get a dead end.",
      },
    ]
  }

  if (a.local) {
    return [
      {
        id: "ios",
        label: "iPhone",
        device: "phone",
        status: "fail",
        steps: ["Tap link", "Address not found"],
        note: "Phones can't reach an address on your own network.",
      },
      {
        id: "android",
        label: "Android",
        device: "phone",
        status: "fail",
        steps: ["Tap link", "Address not found"],
        note: "Phones can't reach an address on your own network.",
      },
      {
        id: "desktop",
        label: "Desktop",
        device: "desktop",
        status: "warn",
        steps: ["Click link", "Web page on this machine"],
        note: "Works only on the computer that runs the site.",
      },
    ]
  }

  if (!a.secure) {
    const note = "http links open in the browser. Universal Links and App Links need https."
    return [
      { id: "ios", label: "iPhone", device: "phone", status: "warn", steps: ["Tap link", "Browser", "Web page"], note },
      { id: "android", label: "Android", device: "phone", status: "warn", steps: ["Tap link", "Browser", "Web page"], note },
      {
        id: "desktop",
        label: "Desktop",
        device: "desktop",
        status: "ok",
        steps: ["Click link", "Web page", "QR code for phone"],
        note: "Same on every desktop: the web page opens, with a QR code to continue on a phone.",
      },
    ]
  }

  return [
    {
      id: "ios",
      label: "iPhone",
      device: "phone",
      status: "ok",
      steps: installed
        ? ["Tap link", "Universal Link", open]
        : ["Tap link", "App Store", "Install", open],
      note: installed
        ? "Opens straight in your app."
        : "Deferred deep link: after install, the app opens at the right page.",
    },
    {
      id: "android",
      label: "Android",
      device: "phone",
      status: "ok",
      steps: installed
        ? ["Tap link", "App Link", open]
        : ["Tap link", "Google Play", "Install", open],
      note: installed
        ? "Opens straight in your app."
        : "Deferred deep link: after install, the app opens at the right page.",
    },
    {
      id: "desktop",
      label: "Desktop",
      device: "desktop",
      status: "ok",
      steps: ["Click link", "Web page", "QR code for phone"],
      note: "Same on every desktop: the web page opens, with a QR code to continue on a phone.",
    },
  ]
}

const statusStyles: Record<Status, { chip: string; icon: string }> = {
  ok: { chip: "bg-primary text-primary-foreground", icon: "text-emerald-600" },
  warn: { chip: "bg-amber-100 text-amber-900", icon: "text-amber-600" },
  fail: { chip: "bg-red-100 text-red-800", icon: "text-red-600" },
}

export default function LinkTester({ className }: { className?: string }) {
  const inputId = useId()
  const [value, setValue] = useState("")
  const [installed, setInstalled] = useState(true)
  const [analysis, setAnalysis] = useState<Analysis | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [run, setRun] = useState(0)
  const resultsRef = useRef<HTMLDivElement>(null)

  function runTest(raw: string) {
    const out = analyzeLink(raw)
    if (!out.ok) {
      setAnalysis(null)
      setError(out.error)
      return
    }
    setError(null)
    setAnalysis(out.analysis)
    setRun((n) => n + 1),
    requestAnimationFrame(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }))
  }

  const lanes = analysis ? buildLanes(analysis, installed) : null

  return (
    <div className={cn("glass shadow-float rounded-3xl border border-white/80 p-2 text-left", className)}>
      <div className="rounded-[1.25rem] border border-border bg-card">
        <form
          onSubmit={(event) => {
            event.preventDefault()
            runTest(value)
          }}
          className="flex flex-col gap-2 p-3 sm:flex-row sm:items-center"
          noValidate
        >
          <label htmlFor={inputId} className="sr-only">
            Link to test
          </label>
          <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl px-3">
            <Link2 className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
            <input
              id={inputId}
              type="text"
              inputMode="url"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Paste any link to test"
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? `${inputId}-error` : undefined}
              className="h-11 w-full min-w-0 bg-transparent text-base outline-none placeholder:text-muted-foreground"
            />
          </div>
          <button
            type="submit"
            className="h-11 shrink-0 rounded-xl btn-primary px-5 text-sm font-medium text-primary-foreground transition active:scale-[0.98]"
          >
            Test link
          </button>
        </form>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>No link handy?</span>
            <button
              type="button"
              onClick={() => {
                setValue(EXAMPLE)
                runTest(EXAMPLE)
              }}
              className="rounded-full border border-border bg-background px-3 py-1 text-foreground transition hover:border-accent hover:text-accent"
            >
              Try an example
            </button>
          </div>

          <div role="radiogroup" aria-label="Is the app installed?" className="inline-flex rounded-full bg-muted p-1 text-sm">
            {[
              { label: "App installed", value: true },
              { label: "Not installed", value: false },
            ].map((option) => (
              <button
                key={option.label}
                type="button"
                role="radio"
                aria-checked={installed === option.value}
                onClick={() => setInstalled(option.value)}
                className={cn(
                  "rounded-full px-3 py-1 transition",
                  installed === option.value
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <p id={`${inputId}-error`} role="alert" className="border-t border-border px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        )}

        <div ref={resultsRef} aria-live="polite" className="border-t border-border">
          {!lanes || !analysis ? (
            <div className="grid gap-px p-4 sm:grid-cols-3" aria-hidden={error ? true : undefined}>
              {["iPhone", "Android", "Desktop"].map((label) => (
                <div key={label} className="rounded-xl border border-dashed border-border px-4 py-3 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground/70">{label}</span>
                  <p className="mt-1">Waiting for a link</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4">
              <p className="mb-3 truncate text-sm text-muted-foreground">
                Routing for <span className="font-medium text-foreground">{analysis.display}</span>
              </p>

              <ul key={`${run}-${installed}`} className="space-y-2">
                {lanes.map((lane, index) => {
                  const Icon = lane.device === "phone" ? Smartphone : Monitor
                  const styles = statusStyles[lane.status]
                  const StatusIcon = lane.status === "ok" ? Check : lane.status === "warn" ? AlertTriangle : XCircle
                  return (
                    <li
                      key={lane.id}
                      className="lane-in rounded-xl border border-border bg-background/60 p-3"
                      style={{ animationDelay: `${index * 110}ms` }}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                        <div className="flex w-28 shrink-0 items-center gap-2 text-sm font-medium">
                          <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
                          {lane.label}
                        </div>
                        <ol className="flex flex-1 flex-wrap items-center gap-1.5 text-xs">
                          {lane.steps.map((step, stepIndex) => {
                            const last = stepIndex === lane.steps.length - 1
                            return (
                              <li key={step} className="flex items-center gap-1.5">
                                <span
                                  className={cn(
                                    "rounded-full px-2.5 py-1",
                                    last ? styles.chip : "border border-border bg-card text-muted-foreground",
                                  )}
                                >
                                  {step}
                                </span>
                                {!last && <ChevronRight className="size-3 text-muted-foreground" aria-hidden="true" />}
                              </li>
                            )
                          })}
                        </ol>
                        <StatusIcon className={cn("hidden size-4 shrink-0 sm:block", styles.icon)} aria-hidden="true" />
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground sm:pl-32">{lane.note}</p>
                    </li>
                  )
                })}
              </ul>

              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {analysis.checks.map((check) => (
                  <li key={check.text} className="flex items-start gap-2 text-sm">
                    {check.status === "ok" ? (
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
                    ) : (
                      <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-600" aria-hidden="true" />
                    )}
                    <span className="text-foreground/80">{check.text}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xs text-muted-foreground">
                This is a preview. It reads the link you paste and shows how DeepURL routes it once your app and store
                links are set up. It doesn&apos;t visit the page.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
