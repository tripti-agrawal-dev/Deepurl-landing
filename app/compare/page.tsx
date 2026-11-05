import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Gauge, Timer, ShieldCheck } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import Comparison from "@/components/comparison"
import FooterCTA from "@/components/footer-cta"
import { canonical } from "@/lib/site-url"
import { DEMO_URL } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "DeepURL vs Legacy Deep Linking Platforms | Compare",
  description:
    "See how DeepURL compares with legacy deep linking and attribution platforms on routing speed, setup time, pricing transparency and privacy.",
  alternates: { canonical: canonical("/compare") },
}

const reasons = [
  {
    icon: Gauge,
    title: "Built for speed",
    body: "Routing in under 100ms, because waiting 200ms or more for a redirect is too long on mobile.",
  },
  {
    icon: Timer,
    title: "Short setup",
    body: "Add the lightweight SDK once, in under an hour, instead of weeks of developer time.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-first data",
    body: "Privacy-safe predictive modeling (PAM) keeps attribution accurate without breaking user trust.",
  },
]

export default function ComparePage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <PageHero
        title="DeepURL vs legacy platforms"
        description="Older tools were built for an older internet. Here is how DeepURL is different."
      >
        <Link
          href={DEMO_URL}
          className="btn-primary inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium text-primary-foreground"
        >
          Request a demo
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </PageHero>

      <Comparison />

      <section className="bg-secondary/70 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl leading-tight md:text-4xl">What that means for your team</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, body }) => (
              <li key={title} className="card-lift rounded-3xl border border-border bg-card p-7">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-medium">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
