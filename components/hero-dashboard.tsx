import { Check, Smartphone } from "lucide-react"

// Illustrative product preview for the hero. The numbers are sample data, and the card says so.
const stats = [
  { label: "Clicks", value: "24,810", delta: "+12%" },
  { label: "Installs", value: "6,392", delta: "+9%" },
  { label: "Purchases", value: "1,284", delta: "+14%" },
]

const channels = [
  { name: "Instagram", share: 46 },
  { name: "Email", share: 27 },
  { name: "QR codes", share: 17 },
  { name: "Creators", share: 10 },
]

export default function HeroDashboard() {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      {/* floating notes, large screens only */}
      <div
        className="glass shadow-float absolute -left-6 top-24 z-10 hidden w-56 rounded-2xl border border-white/80 p-3.5 xl:block"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="flex size-7 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Smartphone className="size-4" />
          </span>
          iPhone, app installed
        </div>
        <p className="mt-2 text-xs leading-snug text-muted-foreground">Opens the red sneakers page inside the app.</p>
      </div>
      <div
        className="glass shadow-float absolute -right-6 bottom-28 z-10 hidden w-56 rounded-2xl border border-white/80 p-3.5 xl:block"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
            <Check className="size-4" />
          </span>
          Deferred deep link
        </div>
        <p className="mt-2 text-xs leading-snug text-muted-foreground">After install, the app opens on the right page.</p>
      </div>

      <div className="shadow-float overflow-hidden rounded-[1.75rem] border border-border bg-card/90 p-2 [mask-image:linear-gradient(to_bottom,#000_72%,transparent)]">
        <div className="rounded-[1.25rem] border border-border bg-card">
          <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5">
            <p className="truncate rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
              dashboard.deepurls.com / analytics
            </p>
            <p className="text-xs text-muted-foreground">Sample data</p>
          </div>

          <div className="grid gap-4 p-4 md:grid-cols-3 md:p-6">
            <div className="md:col-span-2">
              <h3 className="sr-only">Last 30 days</h3>
              <dl className="grid grid-cols-3 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-background p-3 sm:p-4">
                    <dt className="text-xs text-muted-foreground">{s.label}</dt>
                    <dd className="mt-1 font-display text-lg font-medium tracking-tight sm:text-2xl">{s.value}</dd>
                    <p className="mt-0.5 text-xs font-medium text-emerald-700">{s.delta}</p>
                  </div>
                ))}
              </dl>

              <div className="mt-3 rounded-xl border border-border bg-background p-4">
                <p className="text-xs text-muted-foreground">Clicks, last 30 days</p>
                <svg viewBox="0 0 400 130" className="mt-2 h-auto w-full" role="img" aria-label="Line chart showing clicks rising over 30 days">
                  <defs>
                    <linearGradient id="hd-fill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="oklch(0.5 0.21 275)" stopOpacity="0.22" />
                      <stop offset="1" stopColor="oklch(0.5 0.21 275)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[30, 65, 100].map((y) => (
                    <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="oklch(0.9 0.014 75)" />
                  ))}
                  <path
                    d="M0 108 C 30 100, 50 104, 80 88 S 130 92, 160 70 S 215 74, 245 52 S 300 58, 330 34 S 380 28, 400 18 V130 H0 Z"
                    fill="url(#hd-fill)"
                  />
                  <path
                    d="M0 108 C 30 100, 50 104, 80 88 S 130 92, 160 70 S 215 74, 245 52 S 300 58, 330 34 S 380 28, 400 18"
                    fill="none"
                    stroke="oklch(0.5 0.21 275)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    pathLength="100"
                    className="route-run"
                  />
                </svg>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-4">
              <p className="text-xs text-muted-foreground">Where installs came from</p>
              <ul className="mt-4 space-y-4">
                {channels.map((c) => (
                  <li key={c.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span>{c.name}</span>
                      <span className="text-muted-foreground">{c.share}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 rounded-full bg-muted">
                      <div className="h-full rounded-full bg-accent" style={{ width: `${c.share * 2}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
