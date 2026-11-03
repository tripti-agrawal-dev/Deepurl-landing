import { BarChart3, Link2, Zap } from "lucide-react"
import SectionHeading from "@/components/section-heading"

const steps = [
  {
    icon: Link2,
    tint: "tint-peach",
    title: "Create the link",
    description: "Use the dashboard or the API to create a smart link for your ad, email or QR code.",
  },
  {
    icon: Zap,
    tint: "tint-lavender",
    title: "We handle the logic",
    description: "On every click, DeepURL checks the device, the OS and whether the app is installed, then routes the user to the right place.",
  },
  {
    icon: BarChart3,
    tint: "tint-mint",
    title: "You see the data",
    description: "Watch clicks turn into installs and revenue in your real-time dashboard.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="From click to conversion in three steps" />

        <ol className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <li key={step.title} className={`${step.tint} card-lift relative rounded-3xl border border-white/70 p-8`}>
                <span className="font-display text-7xl font-medium leading-none text-foreground/15">{index + 1}</span>
                <div className="mt-4 flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-foreground/75">{step.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
