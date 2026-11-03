import Link from "next/link"
import { ArrowRight, Briefcase, ShoppingBag, Users } from "lucide-react"
import SectionHeading from "@/components/section-heading"

export const useCases = [
  {
    id: "e-commerce",
    title: "E-commerce",
    icon: ShoppingBag,
    tint: "tint-peach",
    chip: "shop.link/red-runner",
    win: "Link directly to the red sneakers page inside the app. If the shopper doesn't have the app, show the web version or the App Store.",
    outcome: "3x higher average order value.",
  },
  {
    id: "saas",
    title: "SaaS and apps",
    icon: Briefcase,
    tint: "tint-lavender",
    chip: "app.link/welcome?user=ana",
    win: "Create custom onboarding links. When someone clicks Sign up in an email, they land inside the app, logged in and ready.",
    outcome: "60% lower customer acquisition cost.",
  },
  {
    id: "creators",
    title: "Creators and affiliates",
    icon: Users,
    tint: "tint-mint",
    chip: "brand.link/sarah",
    win: "Give influencers branded links (brand.link/sarah) that track installs even after the user leaves Instagram or YouTube.",
    outcome: "Accurate payouts and happy affiliates.",
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading align="left" title="Built for high-growth mobile teams" />
          <Link href="/use-cases" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent">
            See all use cases
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {useCases.map((useCase) => {
            const Icon = useCase.icon
            return (
              <article
                key={useCase.id}
                className="flex flex-col card-lift card-lift rounded-3xl border border-border bg-card p-4"
              >
                <div className={`${useCase.tint} relative flex h-36 flex-col justify-between overflow-hidden rounded-2xl p-4`} aria-hidden="true">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <span className="w-fit rounded-full border border-white/80 bg-white/80 px-3 py-1.5 font-mono text-xs text-foreground/80 shadow-soft">
                    {useCase.chip}
                  </span>
                </div>
                <h3 className="mt-5 px-3 font-display text-2xl font-semibold tracking-tight">{useCase.title}</h3>
                <p className="mt-3 flex-1 px-3 leading-relaxed text-muted-foreground">{useCase.win}</p>
                <p className="mt-6 mx-3 mb-2 border-t border-border pt-4 font-medium">{useCase.outcome}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
