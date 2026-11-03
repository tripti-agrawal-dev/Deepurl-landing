"use client"

import { useState, type ReactNode } from "react"
import { BarChart3, Copy, Link2, QrCode } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import QrArt from "@/components/qr-art"
import { cn } from "@/lib/utils"

const Field = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-xs text-muted-foreground">{label}</p>
    <p className="mt-1 truncate rounded-xl border border-border bg-background px-3 py-2 text-sm">{value}</p>
  </div>
)

const tabs: { id: string; icon: typeof Link2; title: string; blurb: string; mock: ReactNode }[] = [
  {
    id: "links",
    icon: Link2,
    title: "Smart links",
    blurb: "One link, the right destination on every device.",
    mock: (
      <div className="space-y-4">
        <Field label="Destination" value="https://stride.run/shoes/red-runner" />
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="iPhone, if app not installed" value="App Store, Stride" />
          <Field label="Android, if app not installed" value="Google Play, Stride" />
        </div>
        <Field label="Campaign tags" value="utm_source=instagram&utm_campaign=spring" />
        <div className="flex items-center justify-between rounded-2xl bg-primary p-4 text-primary-foreground">
          <span className="font-mono text-sm">stride.link/red-runner</span>
          <Copy className="size-4" aria-hidden="true" />
        </div>
      </div>
    ),
  },
  {
    id: "attribution",
    icon: BarChart3,
    title: "Attribution",
    blurb: "See which campaign earned each install and sale.",
    mock: (
      <div className="overflow-x-auto">
        <table className="w-full min-w-[26rem] text-left text-sm">
          <caption className="sr-only">Sample campaign results</caption>
          <thead className="text-xs text-muted-foreground">
            <tr className="border-b border-border">
              <th scope="col" className="py-2 font-medium">Campaign</th>
              <th scope="col" className="py-2 font-medium">Installs</th>
              <th scope="col" className="py-2 font-medium">Purchases</th>
              <th scope="col" className="py-2 font-medium">Share</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Instagram, spring", "2,940", "612", 46],
              ["Email, welcome", "1,730", "401", 27],
              ["QR, in-store", "1,085", "148", 17],
              ["Creator, Sarah", "637", "123", 10],
            ].map(([n, i, p, w]) => (
              <tr key={n as string} className="border-b border-border last:border-0">
                <th scope="row" className="py-3 font-medium">{n}</th>
                <td>{i}</td>
                <td>{p}</td>
                <td className="w-32">
                  <span className="block h-2 rounded-full bg-muted"><span className="block h-full rounded-full bg-accent" style={{ width: `${(w as number) * 2}%` }} /></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Click analytics",
    blurb: "Live clicks by device, place and referrer.",
    mock: (
      <div className="grid gap-4 sm:grid-cols-5">
        <div className="sm:col-span-3">
          <p className="text-xs text-muted-foreground">Clicks, last 14 days</p>
          <div className="mt-3 flex h-40 items-end gap-1.5">
            {[30, 44, 38, 55, 49, 62, 58, 71, 66, 78, 70, 85, 80, 92].map((h, i) => (
              <span key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i > 10 ? "oklch(0.5 0.21 275)" : "oklch(0.8 0.08 285)" }} />
            ))}
          </div>
        </div>
        <div className="sm:col-span-2">
          <p className="text-xs text-muted-foreground">Device split</p>
          <svg viewBox="0 0 100 100" className="mx-auto mt-3 size-32 -rotate-90">
            <circle cx="50" cy="50" r="38" fill="none" stroke="oklch(0.94 0.02 285)" strokeWidth="16" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="oklch(0.5 0.21 275)" strokeWidth="16" strokeDasharray="124 239" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="oklch(0.72 0.12 195)" strokeWidth="16" strokeDasharray="86 239" strokeDashoffset="-124" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="oklch(0.7 0.16 45)" strokeWidth="16" strokeDasharray="29 239" strokeDashoffset="-210" />
          </svg>
          <p className="mt-3 text-center text-xs text-muted-foreground">iOS 52% · Android 36% · Web 12%</p>
        </div>
      </div>
    ),
  },
  {
    id: "qr",
    icon: QrCode,
    title: "QR and branded links",
    blurb: "Put your own domain on every link, in print or on screen.",
    mock: (
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <div className="rounded-3xl border border-border bg-background p-5"><QrArt className="size-36" /></div>
        <div className="w-full space-y-3">
          <Field label="Your domain" value="links.stride.run/offer" />
          <Field label="Opens in app" value="Spring sale page" />
          <Field label="If app is missing" value="Web version of the sale" />
        </div>
      </div>
    ),
  },
]

export default function Showcase() {
  const [active, setActive] = useState(0)
  const t = tabs[active]
  return (
    <section className="bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="The product, up close" description="A quick look at what your team will use every day." />

        <div className="mt-14 grid-cols-1 gap-6 lg:grid-cols-12">
          <div role="tablist" aria-label="Product areas" className="grid gap-2 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
            {tabs.map((tab, i) => {
              const Icon = tab.icon
              const on = i === active
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={on}
                  aria-controls="showcase-panel"
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex items-start gap-4 rounded-2xl border p-4 text-left transition",
                    on ? "border-accent/40 bg-card shadow-float" : "border-transparent hover:border-border hover:bg-card/70",
                  )}
                >
                  <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl", on ? "bg-accent text-accent-foreground" : "bg-card text-accent")}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-medium">{tab.title}</span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">{tab.blurb}</span>
                  </span>
                </button>
              )
            })}
          </div>

          <div id="showcase-panel" role="tabpanel" className="lg:col-span-8">
            <div className="shadow-float rounded-[2rem] border border-border bg-card p-2">
              <div className="rounded-3xl border border-border bg-background">
                <div className="flex items-center justify-between border-b border-border px-5 py-3 text-xs text-muted-foreground">
                  <span>dashboard.deepurls.com / {t.id}</span>
                  <span>Sample data</span>
                </div>
                <div key={t.id} className="lane-in min-h-[22rem] p-5 md:p-8">{t.mock}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
