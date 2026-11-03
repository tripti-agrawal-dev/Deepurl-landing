import type { Metadata } from "next"
import { ArrowRight, Link2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import FooterCTA from "@/components/footer-cta"
import { useCases } from "@/components/use-cases"
import { cn } from "@/lib/utils"
import { canonical } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Use Cases | E-commerce, SaaS and Creators | DeepURL",
  description:
    "See how e-commerce brands, SaaS teams and creators use DeepURL to send people to the exact right screen and track every install.",
  alternates: { canonical: canonical("/use-cases") },
}

const examples: Record<string, { link: string; steps: string[] }> = {
  "e-commerce": {
    link: "shop.example.com/sneakers/red",
    steps: ["App installed: opens the red sneakers page in the app", "No app: shows the web page or the App Store", "After install: the app opens on the same product"],
  },
  saas: {
    link: "app.example.com/onboarding",
    steps: ["Email click opens the app, not a login screen", "New users install, then land on onboarding", "Every signup traced back to its campaign"],
  },
  creators: {
    link: "brand.link/sarah",
    steps: ["One branded link per influencer", "Installs tracked even after the user leaves Instagram or YouTube", "Payouts based on real, attributed installs"],
  },
}

export default function UseCasesPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <PageHero
        title="One link, whatever your team is trying to grow"
        description="The same deep linking and attribution, set up for how e-commerce, SaaS and creator teams actually work."
      />

      <div className="mx-auto max-w-6xl space-y-6 px-4 pb-20 sm:px-6 md:pb-28 lg:px-8">
        {useCases.map((useCase, index) => {
          const Icon = useCase.icon
          const example = examples[useCase.id]
          return (
            <section
              key={useCase.id}
              id={useCase.id}
              className="grid scroll-mt-24 gap-10 rounded-[2rem] border border-border bg-card p-8 md:grid-cols-2 md:p-12"
            >
              <div className={cn(index % 2 === 1 && "md:order-2")}>
                <div className="flex size-11 items-center justify-center rounded-xl bg-peach">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h2 className="mt-6 text-3xl font-semibold leading-tight md:text-4xl">{useCase.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{useCase.win}</p>
                <p className="mt-6 inline-flex rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                  {useCase.outcome}
                </p>
              </div>

              <div className="panel-aurora flex flex-col justify-center rounded-3xl p-6 md:p-8">
                <p className="flex items-center gap-2 rounded-xl bg-card px-4 py-3 font-mono border border-border text-sm">
                  <Link2 className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span className="truncate">{example.link}</span>
                </p>
                <ul className="mt-5 space-y-3">
                  {example.steps.map((step) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-foreground/80">
                      <ArrowRight className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )
        })}
      </div>

      <FooterCTA />
      <Footer />
    </main>
  )
}
