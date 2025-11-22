import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: ["Up to 1,000 clicks/month", "Basic analytics", "5 custom links", "Email support"],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$99",
    description: "For growing teams",
    features: [
      "Unlimited clicks",
      "Advanced analytics",
      "Unlimited custom links",
      "QR code generation",
      "Custom branding",
      "Priority support",
      "API access",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Advanced security & compliance",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom integrations",
      "Team collaboration tools",
      "On-premise options",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple, transparent{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">Choose the plan that works for your team</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>

                <button
                  className={`w-full py-2 rounded-lg font-medium transition mb-8 ${
                    plan.highlight
                      ? "bg-accent text-accent-foreground hover:opacity-90"
                      : "border border-border hover:bg-muted"
                  }`}
                >
                  {plan.cta}
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
