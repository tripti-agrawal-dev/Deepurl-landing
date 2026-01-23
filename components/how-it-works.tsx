import { Link2, Zap, BarChart3 } from "lucide-react"

const steps = [
  {
    step: "1",
    icon: Link2,
    title: "Create the Link",
    description: "Use our dashboard or API to create a smart link for your ad, email, or QR code.",
  },
  {
    step: "2",
    icon: Zap,
    title: "We Handle the Logic",
    description: "When clicked, DeepURL instantly checks: Device? OS? App Installed? and routes the user perfectly.",
  },
  {
    step: "3",
    icon: BarChart3,
    title: "You See the Data",
    description: "Watch clicks turn into installs and revenue in your real-time dashboard.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            From Click to Conversion in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              3 Steps
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition h-full">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <Icon size={32} className="text-white" />
                </div>
                <div className="text-sm font-semibold text-primary mb-2">Step {step.step}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
