import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import SectionHeading from "@/components/section-heading"
import FooterCTA from "@/components/footer-cta"
import { canonical } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Pricing | Deep Linking from $189/month | DeepURL",
  description:
    "Start with reliable deep linking on the Growth plan, or talk to us about Enterprise attribution, fraud protection and raw data export.",
  alternates: { canonical: canonical("/pricing") },
}

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <PageHero
        title="Plans that scale as fast as you do"
        description="Start with essential deep linking today. Move to enterprise attribution when you're ready."
      />
      <Pricing heading={false} />
      <div>
        <SectionHeading title="Questions about pricing and setup" />
        <FAQ heading={false} />
      </div>
      <FooterCTA />
      <Footer />
    </main>
  )
}
