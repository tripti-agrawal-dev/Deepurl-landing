import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import { cn } from "@/lib/utils"
import { DEMO_URL } from "@/lib/site-nav"

const plans = [
  {
    name: "Growth",
    label: "Starting at",
    price: "$189",
    period: "/month",
    volume: "100k monthly active users",
    description: "Professional deep linking infrastructure to power your user growth.",
    features: [
      "Reliable deep linking (iOS and Android)",
      "Custom branded links and QR codes",
      "Web-to-app smart banners",
    ],
    cta: "Start now",
    highlight: false,
  },
  {
    name: "Enterprise",
    label: "Volume pricing",
    price: "Custom",
    period: "",
    volume: "Unlimited scale and support",
    description: "Unlock accurate attribution and full-funnel visibility across every channel.",
    features: [
      "Accurate attribution (Facebook, Google, TikTok)",
      "Privacy-safe predictive modeling (PAM)",
      "Fraud protection and raw data export",
    ],
    cta: "Contact sales",
    highlight: true,
  },
]

export default function Pricing({ heading = true }: { heading?: boolean }) {
  return (
    <section id="pricing" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {heading && (
          <SectionHeading
            title="Plans that scale as fast as you do"
            description="Start with essential deep linking today, and move to enterprise attribution when you're ready."
          />
        )}

        <div className={cn("mx-auto grid max-w-4xl gap-4 md:grid-cols-2", heading && "mt-14")}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "flex flex-col rounded-3xl p-8 md:p-10",
                plan.highlight ? "panel-aurora ring-1 ring-accent/30" : "card-lift border border-border bg-card",
              )}
            >
              <p className={cn("text-sm", "text-muted-foreground")}>{plan.label}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">{plan.name}</h3>

              <p className="mt-6">
                <span className="font-display text-5xl font-semibold tracking-tight">{plan.price}</span>
                {plan.period && (
                  <span className={"text-muted-foreground"}>{plan.period}</span>
                )}
              </p>
              <p className={cn("mt-1 text-sm", "text-muted-foreground")}>{plan.volume}</p>

              <p className={cn("mt-6 leading-relaxed", "text-muted-foreground")}>
                {plan.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      className={cn("mt-0.5 size-4 shrink-0", "text-accent")}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={DEMO_URL}
                className={cn(
                  "mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full text-sm font-medium transition",
                  "btn-primary text-primary-foreground",
                )}
              >
                {plan.cta}
                {plan.highlight && <ArrowRight className="size-4" aria-hidden="true" />}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
