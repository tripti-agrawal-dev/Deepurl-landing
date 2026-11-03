import { BarChart3, Check, Route, Waypoints } from "lucide-react"
import SectionHeading from "@/components/section-heading"

export const coreFeatures = [
  {
    icon: Route,
    title: "Reliable deep linking",
    description:
      "Never lose a user to a broken link again. Our deferred deep linking checks whether the app is installed. If it isn't, people go to the App Store, and the app opens on the exact content they clicked right after install.",
  },
  {
    icon: BarChart3,
    title: "Accurate attribution",
    description:
      "Data you can trust, down to the last install. See which ads, influencers or social channels drive real revenue, so you can scale budget with confidence instead of guessing.",
  },
  {
    icon: Waypoints,
    title: "The entire user journey",
    description:
      "Most tools lose track when someone switches from web to app. DeepURL follows them from the first click on mobile web, through the app store, to the in-app purchase.",
  },
]

function RoutingVisual() {
  return (
    <svg viewBox="0 0 360 190" className="h-full w-full" aria-hidden="true">
      <g fill="none" strokeWidth="2" strokeLinecap="round">
        <path d="M60 95 H140" stroke="oklch(0.5 0.21 275)" pathLength="100" className="route-run" />
        <path d="M200 95 C 235 95, 240 48, 280 48" stroke="oklch(0.5 0.21 275)" pathLength="100" className="route-run" />
        <path d="M200 95 C 235 95, 240 142, 280 142" stroke="oklch(0.2 0.045 280 / 0.3)" strokeDasharray="4 6" />
      </g>
      <g fontFamily="var(--font-geist), system-ui, sans-serif" fontSize="12" textAnchor="middle" fill="oklch(0.2 0.045 280)">
        <rect x="14" y="74" width="46" height="42" rx="13" fill="white" stroke="oklch(0.2 0.045 280 / 0.15)" />
        <text x="37" y="99">Tap</text>
        <rect x="140" y="64" width="60" height="62" rx="16" fill="white" stroke="oklch(0.2 0.045 280 / 0.15)" />
        <text x="170" y="92">Check</text>
        <text x="170" y="108" fontSize="10" fillOpacity="0.6">device</text>
        <rect x="280" y="28" width="68" height="40" rx="13" fill="oklch(0.5 0.21 275)" />
        <text x="314" y="52" fill="white">Open app</text>
        <rect x="280" y="122" width="68" height="40" rx="13" fill="white" stroke="oklch(0.2 0.045 280 / 0.15)" />
        <text x="314" y="146">App Store</text>
      </g>
    </svg>
  )
}

function AttributionVisual() {
  const bars = [
    { label: "Instagram", v: 88, c: "oklch(0.5 0.21 275)" },
    { label: "Email", v: 62, c: "oklch(0.68 0.17 45)" },
    { label: "QR", v: 41, c: "oklch(0.62 0.15 190)" },
    { label: "Creators", v: 28, c: "oklch(0.62 0.2 330)" },
  ]
  return (
    <div className="flex h-full items-end justify-between gap-3 px-2" aria-hidden="true">
      {bars.map((b) => (
        <div key={b.label} className="flex flex-1 flex-col items-center gap-2">
          <div className="w-full rounded-t-xl" style={{ height: `${b.v * 1.5}px`, background: b.c }} />
          <span className="text-[11px] text-foreground/70">{b.label}</span>
        </div>
      ))}
    </div>
  )
}

function JourneyVisual() {
  const steps = ["Click", "Store", "Install", "Purchase"]
  return (
    <ol className="flex h-full flex-col justify-center gap-3" aria-hidden="true">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-3">
          <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Check className="size-4" />
          </span>
          <span className="h-2 rounded-full bg-foreground/10" style={{ width: `${100 - i * 18}%` }}>
            <span className="block h-full rounded-full bg-accent/80" style={{ width: `${100 - i * 12}%` }} />
          </span>
          <span className="w-16 text-xs text-foreground/70">{s}</span>
        </li>
      ))}
    </ol>
  )
}

const visuals = [
  { node: <RoutingVisual />, tint: "tint-peach" },
  { node: <AttributionVisual />, tint: "tint-lavender" },
  { node: <JourneyVisual />, tint: "tint-mint" },
]

export default function TrustBar() {
  return (
    <section id="features" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Built for the whole journey, not just the click"
          description="Three things most link tools only half do, working together in one platform."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {coreFeatures.map((feature, index) => {
            const Icon = feature.icon
            const v = visuals[index]
            return (
              <article key={feature.title} className="card-lift flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-3">
                <div className={`${v.tint} h-56 overflow-hidden rounded-2xl p-5`}>{v.node}</div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-medium tracking-tight">{feature.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
