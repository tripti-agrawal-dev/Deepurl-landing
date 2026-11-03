import Link from "next/link"
import { ArrowRight, BarChart3, ChevronRight, Gauge, QrCode } from "lucide-react"
import LinkTester from "@/components/link-tester"
import PhoneMock from "@/components/phone-mock"
import QrArt from "@/components/qr-art"
import GradientBars from "@/components/gradient-bars"
import { DEMO_URL } from "@/lib/site-nav"

const channels = [
  { name: "Instagram", v: 46, w: "92%" },
  { name: "Email", v: 27, w: "62%" },
  { name: "QR codes", v: 17, w: "40%" },
  { name: "Creators", v: 10, w: "24%" },
]

export default function Hero() {
  return (
    <section className="relative -mt-16 overflow-hidden pt-16">
      <div className="hero-wash absolute inset-0" aria-hidden="true" />
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <GradientBars />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-28 pt-12 sm:px-6 md:pt-16 lg:grid-cols-12 lg:gap-6 lg:px-8">
        {/* copy + tester */}
        <div className="lg:col-span-6">
          <Link
            href="/link-tester"
            className="glass shadow-soft inline-flex items-center gap-2 rounded-full border border-white/80 py-1 pl-1 pr-3.5 text-sm text-foreground/80 transition hover:text-foreground"
          >
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">Free</span>
            Test any link, no sign-up
            <ChevronRight className="size-4" aria-hidden="true" />
          </Link>

          <h1 className="mt-6 text-balance text-5xl leading-[1.0] sm:text-6xl xl:text-[5rem]">
            Turn clicks <span className="text-gradient italic">into growth</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            One smart link sends each person to the right screen on iPhone, Android or web, and shows you exactly which
            campaign brought them.
          </p>

          <div id="link-tester" className="ring-gradient mt-8 max-w-xl scroll-mt-24 rounded-3xl bg-card/60">
            <LinkTester />
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href={DEMO_URL}
              className="btn-primary inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium text-primary-foreground"
            >
              Request a demo
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/features"
              className="btn-ghost inline-flex h-12 items-center justify-center rounded-full border border-foreground/15 bg-card/80 px-7 text-sm font-medium"
            >
              See how it works
            </Link>
          </div>
        </div>

        {/* visual: phone with overlapping data cards */}
        <div className="relative mx-auto h-[600px] w-full max-w-md lg:col-span-6 lg:max-w-none" aria-hidden="true">
          <div className="arch absolute bottom-0 left-1/2 top-6 w-[62%] -translate-x-[40%] opacity-90" />
          <PhoneMock className="float-b absolute left-1/2 top-12 -translate-x-[40%]" />

          {/* number card */}
          <div className="card-lift shadow-float absolute left-0 top-24 w-44 rounded-2xl border border-border bg-card p-4 sm:left-4">
            <p className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
              <Gauge className="size-3.5 text-accent" /> Avg. route time
            </p>
            <p className="mt-1 text-center font-display text-4xl font-medium">87ms</p>
            <p className="mx-auto mt-1 w-fit rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-800">Sample data</p>
          </div>

          {/* distribution card */}
          <div className="card-lift shadow-float absolute right-0 top-10 w-60 rounded-2xl border border-border bg-card p-4 sm:right-2">
            <p className="flex items-center gap-1.5 text-xs font-medium"><BarChart3 className="size-4 text-accent" /> Installs by channel</p>
            <p className="text-[10px] text-muted-foreground">Last 30 days</p>
            <ul className="mt-3 space-y-2">
              {channels.map((c, i) => (
                <li key={c.name} className="flex items-center gap-2 text-[11px]">
                  <span className="w-14 text-muted-foreground">{c.name}</span>
                  <span className="h-2.5 flex-1 rounded-sm bg-muted">
                    <span className="block h-full rounded-sm" style={{ width: c.w, background: i === 0 ? "oklch(0.5 0.21 275)" : `oklch(${0.62 + i * 0.07} 0.14 ${255 - i * 12})` }} />
                  </span>
                  <span className="w-6 text-right">{c.v}%</span>
                </li>
              ))}
            </ul>
          </div>

          {/* line chart card */}
          <div className="card-lift shadow-float absolute bottom-10 left-0 hidden w-72 rounded-2xl border border-border bg-card p-4 sm:block lg:left-2">
            <p className="flex items-center gap-1.5 text-xs font-medium"><QrCode className="size-4 text-accent" /> Clicks by platform</p>
            <div className="mt-1 flex gap-3 text-[10px] text-muted-foreground">
              <span><i className="mr-1 inline-block size-2 rounded-sm bg-[oklch(0.5_0.21_275)]" />iOS</span>
              <span><i className="mr-1 inline-block size-2 rounded-sm bg-[oklch(0.72_0.12_195)]" />Android</span>
              <span><i className="mr-1 inline-block size-2 rounded-sm bg-[oklch(0.7_0.16_45)]" />Web</span>
            </div>
            <svg viewBox="0 0 220 80" className="mt-2 w-full">
              {[20, 40, 60].map((y) => <line key={y} x1="0" x2="220" y1={y} y2={y} stroke="oklch(0.9 0.014 75)" />)}
              <path d="M0 60 C 30 56, 50 58, 80 46 S 130 44, 160 28 S 200 20, 220 8" fill="none" stroke="oklch(0.5 0.21 275)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M0 66 C 30 60, 60 64, 90 54 S 140 52, 170 40 S 205 34, 220 26" fill="none" stroke="oklch(0.72 0.12 195)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M0 72 C 40 70, 70 70, 110 64 S 170 60, 220 52" fill="none" stroke="oklch(0.7 0.16 45)" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* QR card */}
          <div className="card-lift shadow-float float-a absolute bottom-24 right-0 flex items-center gap-3 rounded-2xl border border-border bg-card p-3 sm:right-4">
            <QrArt />
            <div>
              <p className="text-xs font-medium">Scan to open</p>
              <p className="text-[11px] text-muted-foreground">Same link, any device</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
