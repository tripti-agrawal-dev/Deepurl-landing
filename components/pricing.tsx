import { Check, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Growth",
    label: "STARTING AT",
    price: "$189",
    period: "/month",
    volume: "100k Monthly Active Users",
    description: "Professional deep linking infrastructure to power your user growth.",
    features: [
      "Reliable Deep Linking (iOS/Android)",
      "Custom Branded Links & QR Codes",
      "Web-to-App Smart Banners",
    ],
    cta: "Start now",
    highlight: false,
  },
  {
    name: "Enterprise",
    label: "VOLUME PRICING",
    price: "Custom",
    period: "",
    volume: "Unlimited Scale & Support",
    description: "Unlock accurate attribution and full-funnel visibility across every channel.",
    features: [
      "Accurate Attribution (FB, Google, TikTok)",
      "Privacy-Safe Predictive Modeling (PAM)",
      "Fraud Protection & Raw Data Export",
    ],
    cta: "Contact Sales",
    highlight: true,
    showArrow: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Plans that scale as fast as{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">you do</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start with essential deep linking today, and upgrade to enterprise attribution when you're ready to dominate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl transition ${
                plan.highlight
                  ? "bg-card border-2 border-accent shadow-lg md:scale-105"
                  : "bg-card border border-border hover:border-accent/50"
              }`}
            >
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {plan.label}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-sm text-muted-foreground mb-6">{plan.volume}</p>

                <button
                  className={`w-full py-3 rounded-lg font-medium transition mb-8 flex items-center justify-center gap-2 ${
                    plan.highlight
                      ? "bg-accent text-accent-foreground hover:opacity-90"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  {plan.cta}
                  {plan.showArrow && <ArrowRight size={18} />}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
