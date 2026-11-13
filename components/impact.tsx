import SectionHeading from "@/components/section-heading"

const impacts = [
  { value: "3x", label: "Increase in app engagement", description: "Top brands use DeepURL to optimize their campaigns.", tint: "tint-peach", path: "M0 34 C 20 32, 30 36, 48 26 S 80 24, 100 6" },
  { value: "180%", label: "Growth in mobile revenue", description: "Real results from teams using DeepURL.", tint: "tint-lavender", path: "M0 36 C 22 30, 34 32, 52 22 S 84 14, 100 4" },
  { value: "85%", label: "Uplift in app installs", description: "Seamless linking improves the customer experience.", tint: "tint-mint", path: "M0 30 C 18 34, 36 24, 54 20 S 86 12, 100 8" },
  { value: "99.9%", label: "Link reliability", description: "A flawless experience across all devices.", tint: "tint-sky", path: "M0 10 C 30 9, 60 11, 100 8" },
]

export default function Impact() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Results that matter"
          description="Top brands use DeepURL to optimize their campaigns and improve the customer experience."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact) => (
            <div key={impact.label} className={`${impact.tint} card-lift flex flex-col rounded-3xl border border-white/70 p-7`}>
              <p className="font-display text-6xl font-medium tracking-tight">{impact.value}</p>
              <svg viewBox="0 0 100 40" className="mt-4 h-10 w-full" aria-hidden="true" preserveAspectRatio="none">
                <path d={impact.path} fill="none" stroke="oklch(0.5 0.21 275)" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              </svg>
              <p className="mt-4 text-base font-medium">{impact.label}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
