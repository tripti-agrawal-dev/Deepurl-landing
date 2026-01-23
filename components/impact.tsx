import { TrendingUp, Users, DollarSign, Shield } from "lucide-react"

const impacts = [
  {
    icon: TrendingUp,
    value: "3x",
    label: "Increase in App Engagement",
    description: "Top brands use DeepURL to optimize their campaigns",
  },
  {
    icon: DollarSign,
    value: "180%",
    label: "Growth in Mobile Revenue",
    description: "Real results from real customers using DeepURL",
  },
  {
    icon: Users,
    value: "85%",
    label: "Uplift in App Installs",
    description: "Improve customer experience with seamless linking",
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Link Reliability",
    description: "Ensure flawless experience across all devices",
  },
]

export default function Impact() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Results That{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Matter
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Top brands use DeepURL to optimize their campaigns and improve customer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:border-accent/50 transition"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {impact.value}
                </div>
                <div className="text-lg font-semibold mb-2">{impact.label}</div>
                <p className="text-sm text-muted-foreground">{impact.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
