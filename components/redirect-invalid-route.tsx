"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { isValidRoute } from "@/lib/valid-routes"

/**
 * When the host serves the app for unknown paths (e.g. /hruth), redirect to home
 * so the URL bar shows the canonical path instead of the junk.
 */
export default function RedirectInvalidRoute() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return
    if (isValidRoute(pathname)) return
    window.location.replace("/")
  }, [pathname])

  return null
}
