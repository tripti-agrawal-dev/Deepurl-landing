import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import SectionHeading from "@/components/section-heading"
import HowItWorks from "@/components/how-it-works"
import FooterCTA from "@/components/footer-cta"
import { coreFeatures } from "@/components/trust-bar"
import { DEMO_URL } from "@/lib/site-nav"
import { canonical } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Features | Deep Linking, Attribution and Full-Funnel Tracking | DeepURL",
  description:
    "Reliable deep linking, accurate attribution and full-funnel visibility in one platform. See everything DeepURL does between the click and the purchase.",
  alternates: { canonical: canonical("/features") },
}

const extras = [
  { title: "Custom branded links and QR codes", description: "Share links on your own domain, in print or on screen." },
  { title: "Web-to-app smart banners", description: "Move mobile web visitors into your app without a dead end." },
  { title: "Click analytics and referrer tracking", description: "See where every click came from and what happened next." },
  { title: "UTM tracking and campaigns", description: "Let your marketing team create and tag campaigns without code." },
  { title: "Privacy-safe predictive modeling (PAM)", description: "Accurate attribution that holds up under iOS privacy rules." },
  { title: "Fraud protection and raw data export", description: "Filter out bad traffic and take your data wherever you need it." },
  { title: "Link activation control", description: "Switch links on and off when a campaign starts or ends." },
  { title: "SDK-based link generation", description: "Create links from inside your own app, such as share buttons." },
]

export default function FeaturesPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <PageHero
        title="Everything between the click and the purchase"
        description="Route users to the right screen, trace every install to its source, and see the whole journey in one place."
      >
        <Link
          href={DEMO_URL}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full btn-primary px-7 text-sm font-medium text-primary-foreground"
        >
          Request a demo
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="mx-auto max-w-5xl divide-y divide-border px-4 sm:px-6 lg:px-8">
          {coreFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <article key={feature.title} className="grid gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-5 md:gap-12">
                <div className="md:col-span-2">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold leading-tight">{feature.title}</h2>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground md:col-span-3">{feature.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="And the details that make it work day to day" />
          <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {extras.map((item) => (
              <li key={item.title} className="border-t border-border pt-5">
                <Check className="size-4 text-accent" aria-hidden="true" />
                <h3 className="mt-3 font-medium">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HowItWorks />
      <FooterCTA />
      <Footer />
    </main>
  )
}
