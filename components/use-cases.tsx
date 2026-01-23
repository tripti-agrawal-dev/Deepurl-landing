import { ShoppingBag, Briefcase, Users } from "lucide-react"

const useCases = [
  {
    title: "For E-Commerce",
    win: "Link directly to the Red Sneakers page inside the app. If they don't have the app, show them the web version or the App Store.",
    outcome: "3x Higher Average Order Value (AOV).",
    icon: ShoppingBag,
  },
  {
    title: "For SaaS & Apps",
    win: "Create custom onboarding links. When a user clicks Sign Up in an email, they land directly inside the app, logged in and ready.",
    outcome: "60% Lower Customer Acquisition Cost (CAC).",
    icon: Briefcase,
  },
  {
    title: "For Creators & Affiliates",
    win: "Give influencers branded links (brand.link/sarah) that track installs even after the user leaves Instagram or YouTube.",
    outcome: "Accurate payouts and happy affiliates.",
    icon: Users,
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              High-Growth Mobile Teams
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase) => {
            const Icon = useCase.icon
            return (
              <div
                key={useCase.title}
                className="group relative bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition" />
                <div className="relative space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">{useCase.title}</h3>
                  <div>
                    <p className="font-medium mb-2">The Win:</p>
                    <p className="text-muted-foreground mb-4">{useCase.win}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-primary">Outcome: {useCase.outcome}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
