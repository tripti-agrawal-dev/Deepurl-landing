/**
 * Canonical base URL for the site. Set NEXT_PUBLIC_SITE_URL in env (e.g. https://www.deepurl.com).
 * Used for canonical links and Open Graph URLs.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.deepurl.com"

export function canonical(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`
  return `${SITE_URL.replace(/\/$/, "")}${p}`
}
