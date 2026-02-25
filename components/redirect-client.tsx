"use client"

import { useEffect } from "react"

export default function RedirectClient({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])
  return (
    <div className="grid min-h-[40vh] place-items-center">
      <p className="text-muted-foreground">Redirecting…</p>
    </div>
  )
}
