"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, Megaphone, ShoppingBag, Smartphone, Building2 } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import { DEMO_URL } from "@/lib/site-nav"
import { cn } from "@/lib/utils"

const options = [
  {
    id: "store",
    icon: ShoppingBag,
    label: "An online store",
    plan: "Growth",
    link: "shop.link/red-runner",
    why: "Send shoppers straight to the product inside your app, and to the web page if they don't have it.",
    features: ["Reliable deep linking for iOS and Android", "Web-to-app smart banners", "Custom branded links and QR codes"],
    cta: { label: "See Growth pricing", href: "/pricing" },
  },
  {
    id: "app",
    icon: Smartphone,
    label: "A subscription or SaaS app",
    plan: "Growth",
    link: "app.link/welcome",
    why: "Make email sign-up links open the app signed in and ready, with deferred deep linking after install.",
    features: ["Deferred deep linking after install", "SDK-based link generation", "Click analytics and referrer tracking"],
    cta: { label: "See Growth pricing", href: "/pricing" },
  },
  {
    id: "creators",
    icon: Megaphone,
    label: "Creator or affiliate campaigns",
    plan: "Enterprise",
    link: "brand.link/sarah",
    why: "Give every creator a branded link and trace each install back to them for accurate payouts.",
    features: ["Accurate attribution (Facebook, Google, TikTok)", "UTM tracking and campaigns", "Fraud protection and raw data export"],
    cta: { label: "Talk to sales", href: DEMO_URL },
  },
  {
    id: "scale",
    icon: Building2,
    label: "Many apps or high volume",
    plan: "Enterprise",
    link: "links.yourbrand.com/offer",
    why: "Run several apps and large campaigns with privacy-safe attribution and dedicated support.",
    features: ["Privacy-safe predictive modeling (PAM)", "Fraud protection and raw data export", "Volume pricing and dedicated support"],
    cta: { label: "Talk to sales", href: DEMO_URL },
  },
]

export default function Recommend() {
  const [active, setActive] = useState(0)
  const o = options[active]

  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Not sure where to start?" description="Tell us what you're linking to and we'll suggest a setup." />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <fieldset className="grid gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <legend className="sr-only">What are you linking to?</legend>
            {options.map((opt, i) => {
              const Icon = opt.icon
              const on = i === active
              return (
                <label
                  key={opt.id}
                  className={cn(
                    "card-lift flex cursor-pointer items-center gap-4 rounded-2xl border bg-card p-4 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent",
                    on ? "border-accent/50 shadow-float" : "border-border",
                  )}
                >
                  <input type="radio" name="goal" className="sr-only" checked={on} onChange={() => setActive(i)} />
                  <span className={cn("flex size-11 shrink-0 items-center justify-center rounded-xl", on ? "bg-accent text-accent-foreground" : "tint-lavender text-accent")}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-medium">{opt.label}</span>
                  {on && <Check className="ml-auto size-5 text-accent" aria-hidden="true" />}
                </label>
              )
            })}
          </fieldset>

          <div key={o.id} aria-live="polite" className="lane-in panel-aurora rounded-[2rem] p-8 md:p-10 lg:col-span-7">
            <p className="text-sm font-medium text-accent">Our suggestion</p>
            <h3 className="mt-1 font-display text-4xl font-medium">{o.plan} plan</h3>
            <p className="mt-3 text-lg leading-relaxed text-foreground/75">{o.why}</p>
            <p className="mt-5 inline-flex rounded-full border border-white/80 bg-white/80 px-4 py-2 font-mono text-sm shadow-soft">{o.link}</p>
            <ul className="mt-6 space-y-2.5">
              {o.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href={o.cta.href} className="btn-primary mt-8 inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-medium text-primary-foreground">
              {o.cta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
