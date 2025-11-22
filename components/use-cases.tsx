import { Share2, Megaphone, Package, User } from "lucide-react"

const useCases = [
  {
    title: "Social Media Campaigns",
    description: "Track shares across Instagram, TikTok, and Twitter with automatic platform detection.",
    icon: Share2,
  },
  {
    title: "Influencer Marketing",
    description: "Generate personalized links for influencers with dedicated tracking dashboards.",
    icon: User,
  },
  {
    title: "Email Campaigns",
    description: "Convert email subscribers to app users with intelligent routing and attribution.",
    icon: Megaphone,
  },
  {
    title: "Product Packaging",
    description: "Add QR codes to physical packaging for seamless digital-to-app conversion.",
    icon: Package,
  },
]

export default function UseCases() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Use cases for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">every team</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase) => {
            const Icon = useCase.icon
            return (
              <div
                key={useCase.title}
                className="group relative bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition" />
                <div className="relative flex gap-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
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
