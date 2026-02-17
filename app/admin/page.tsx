"use client"

import { useEffect } from "react"

export default function AdminPage() {
  useEffect(() => {
    window.location.href = "/admin/index.html"
  }, [])
  return (
    <div className="grid min-h-screen place-items-center bg-background">
      <p className="text-muted-foreground">Loading Tina CMS…</p>
    </div>
  )
}
