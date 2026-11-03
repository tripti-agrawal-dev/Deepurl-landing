"use client"

import { useState, type ReactNode } from "react"
import { Check, CreditCard, Download, MousePointerClick, ShoppingBag, Smartphone, Split, Store } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import { cn } from "@/lib/utils"

type Step = {
  id: string
  label: string
  icon: typeof Check
  title: string
  body: string
  does: string[]
  tint: string
  screen: ReactNode
}

const Row = ({ k, v, ok }: { k: string; v: string; ok?: boolean }) => (
  <div className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2 text-sm">
    <span className="text-muted-foreground">{k}</span>
    <span className="flex items-center gap-1.5 font-medium">
      {ok && <Check className="size-4 text-emerald-600" aria-hidden="true" />}
      {v}
    </span>
  </div>
)

const steps: Step[] = [
  {
    id: "click",
    label: "Ad click",
    icon: MousePointerClick,
    title: "Someone taps your link",
    body: "It could be an Instagram ad, an email button, a creator's bio or a printed QR code. Every link carries its campaign tags from the first tap.",
    does: ["Reads utm_source and utm_campaign", "Starts one journey ID for this person"],
    tint: "tint-peach",
    screen: (
      <div className="space-y-3">
        <div className="rounded-2xl border border-border bg-card p-3">
          <div className="flex items-center gap-2">
            <span className="size-8 rounded-full bg-gradient-to-br from-[oklch(0.7_0.16_45)] to-[oklch(0.62_0.2_330)]" />
            <span className="text-sm font-medium">stride.run</span>
            <span className="ml-auto text-xs text-muted-foreground">Sponsored</span>
          </div>
          <div className="mt-3 h-24 rounded-xl bg-gradient-to-br from-[oklch(0.93_0.06_285)] to-[oklch(0.95_0.05_55)]" />
          <div className="mt-3 flex items-center justify-between rounded-xl bg-accent px-3 py-2 text-sm font-medium text-accent-foreground">
            Shop the Red Runner <MousePointerClick className="size-4" aria-hidden="true" />
          </div>
        </div>
        <Row k="Link" v="stride.link/red-runner" />
      </div>
    ),
  },
  {
    id: "route",
    label: "Smart routing",
    icon: Split,
    title: "DeepURL decides where to send them",
    body: "In under 100ms we check the device, the operating system and whether your app is installed, then pick the best destination.",
    does: ["Detects iPhone, Android or desktop", "Chooses app, store or web page"],
    tint: "tint-lavender",
    screen: (
      <div className="space-y-2">
        <Row k="Device" v="iPhone, iOS 18" ok />
        <Row k="App installed" v="No" />
        <Row k="Campaign" v="Instagram, spring" ok />
        <div className="rounded-xl bg-primary px-3 py-2.5 text-center text-sm font-medium text-primary-foreground">Route: App Store, then deep link</div>
      </div>
    ),
  },
  {
    id: "store",
    label: "App Store",
    icon: Store,
    title: "No app yet? They go to the store",
    body: "People who haven't installed your app land on the right store page, not a dead end. Their intended destination is saved for later.",
    does: ["Opens App Store or Google Play", "Remembers the Red Runner page"],
    tint: "tint-sky",
    screen: (
      <div className="rounded-2xl border border-border bg-card p-4">
        <div className="flex items-center gap-3">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.58_0.22_25)] to-[oklch(0.7_0.16_45)] font-display text-2xl text-white">S</span>
          <div>
            <p className="font-medium">Stride</p>
            <p className="text-xs text-muted-foreground">Running shoes and gear</p>
          </div>
          <span className="ml-auto rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">Get</span>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Saved for after install: Red Runner product page</p>
      </div>
    ),
  },
  {
    id: "install",
    label: "Install",
    icon: Download,
    title: "The install is matched to the click",
    body: "When the app opens for the first time, we connect that install back to the exact ad and campaign, even with iOS privacy limits.",
    does: ["Privacy-safe matching (PAM)", "Credits the right channel"],
    tint: "tint-mint",
    screen: (
      <div className="space-y-3">
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-sm font-medium">Installing Stride</p>
          <div className="mt-3 h-2 rounded-full bg-muted"><div className="h-full w-4/5 rounded-full bg-accent" /></div>
        </div>
        <Row k="Install source" v="Instagram, spring" ok />
        <Row k="Match" v="Privacy-safe" ok />
      </div>
    ),
  },
  {
    id: "deferred",
    label: "Deep link",
    icon: Smartphone,
    title: "The app opens on the right screen",
    body: "This is deferred deep linking. After install, the app opens on the Red Runner page, not the home screen, so the user keeps their place.",
    does: ["Opens the exact product", "No searching for it again"],
    tint: "tint-butter",
    screen: (
      <div className="rounded-2xl border border-border bg-card p-4">
        <p className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[oklch(0.94_0.07_55)] px-2.5 py-1 text-[11px] font-medium text-[oklch(0.35_0.1_45)]"><Check className="size-3" /> Opened from your link</p>
        <div className="h-24 rounded-xl bg-gradient-to-br from-[oklch(0.93_0.06_285)] to-[oklch(0.96_0.04_55)]" />
        <p className="mt-3 font-display text-lg">Red Runner</p>
        <p className="text-sm text-muted-foreground">$89 · Sizes 8 to 12</p>
      </div>
    ),
  },
  {
    id: "purchase",
    label: "Purchase",
    icon: ShoppingBag,
    title: "The sale is credited to the campaign",
    body: "You see the full path from ad to revenue in one place, so you can put budget behind what actually pays off.",
    does: ["Click, install and purchase in one view", "Revenue per channel"],
    tint: "tint-lavender",
    screen: (
      <div className="space-y-2">
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
          <span className="flex size-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><CreditCard className="size-5" aria-hidden="true" /></span>
          <div>
            <p className="font-medium">Order confirmed</p>
            <p className="text-xs text-muted-foreground">Red Runner, size 9</p>
          </div>
          <span className="ml-auto font-display text-xl">$89</span>
        </div>
        <Row k="Credited to" v="Instagram, spring" ok />
      </div>
    ),
  },
]

export default function Journey() {
  const [active, setActive] = useState(0)
  const step = steps[active]
  const pct = (active / (steps.length - 1)) * 100

  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Follow one link from the first tap to the sale"
          description="Pick a step to see what the person sees and what DeepURL does behind the scenes."
        />

        {/* stepper */}
        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute left-[8%] right-[8%] top-6 hidden h-0.5 bg-border md:block" aria-hidden="true">
            <div className="journey-fill h-full bg-accent" style={{ width: `${pct}%` }} />
          </div>
          <div role="tablist" aria-label="Link journey steps" className="relative grid grid-cols-3 gap-y-6 md:grid-cols-6">
            {steps.map((s, i) => {
              const Icon = s.icon
              const on = i === active
              const done = i < active
              return (
                <button
                  key={s.id}
                  role="tab"
                  id={`tab-${s.id}`}
                  aria-selected={on}
                  aria-controls="journey-panel"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex flex-col items-center gap-2 text-center"
                >
                  <span
                    className={cn(
                      "relative z-10 flex size-12 items-center justify-center rounded-full border transition",
                      on ? "scale-110 border-accent bg-accent text-accent-foreground shadow-float" : done ? "border-accent/40 bg-accent/10 text-accent" : "border-border bg-card text-muted-foreground group-hover:border-accent/50 group-hover:text-accent",
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className={cn("text-sm", on ? "font-semibold" : "text-muted-foreground")}>{s.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* panel */}
        <div
          id="journey-panel"
          role="tabpanel"
          aria-labelledby={`tab-${step.id}`}
          className="mx-auto mt-12 grid max-w-6xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft md:grid-cols-2"
        >
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-sm font-medium text-accent">Step {active + 1} of {steps.length}</p>
            <h3 className="mt-2 font-display text-3xl font-medium leading-tight md:text-4xl">{step.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{step.body}</p>
            <ul className="mt-6 space-y-2.5">
              {step.does.map((d) => (
                <li key={d} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div key={step.id} className={cn(step.tint, "lane-in flex items-center justify-center p-6 md:p-12")}>
            <div className="w-full max-w-sm">{step.screen}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
