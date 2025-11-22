import { Zap, QrCode, BarChart3, Smartphone } from "lucide-react"

const features = [
  {
    title: "Smart Deep Links",
    description: "Detect device and automatically redirect users. Open app directly or fallback to store/web.",
    icon: Zap,
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "QR Code Generation",
    description: "Auto-generated shareable QR codes with custom branding support for any campaign.",
    icon: QrCode,
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "App Attribution",
    description: "Track conversions from ads, social media, and campaigns with precision attribution.",
    icon: BarChart3,
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Developer Friendly",
    description: "Easy SDKs for iOS, Android, Web, React Native, and Flutter. Full REST API support.",
    icon: Smartphone,
    color: "from-accent/20 to-primary/20",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              accelerate growth
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed for modern marketing and product teams
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`relative group bg-gradient-to-br ${feature.color} border border-border rounded-2xl p-8 hover:border-accent/50 transition`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-accent/5 group-hover:to-primary/5 rounded-2xl transition" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
