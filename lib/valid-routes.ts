/**
 * Valid app routes (no trailing slash). Used to redirect invalid/junk paths to home.
 */
export const VALID_ROUTES = new Set([
  "/",
  "/about",
  "/admin",
  "/blogs",
  "/contact",
  "/docs",
  "/features",
  "/integrations",
  "/link-tester",
  "/pricing",
  "/privacy",
  "/support",
  "/terms",
  "/use-cases",
])

/** Paths that are valid when they match a pattern (e.g. /blog/slug) */
export function isValidRoute(pathname: string): boolean {
  const path = pathname.replace(/\/$/, "") || "/"
  if (VALID_ROUTES.has(path)) return true
  const blogMatch = /^\/blog\/[^/]+$/i.test(path)
  return blogMatch
}
