import Header from "@/components/header"
import Hero from "@/components/hero"
import IntegrationsStrip from "@/components/integrations-strip"
import ProblemSolution from "@/components/problem-solution"
import Journey from "@/components/journey"
import Showcase from "@/components/showcase"
import TrustBar from "@/components/trust-bar"
import Impact from "@/components/impact"
import UseCases from "@/components/use-cases"
import Recommend from "@/components/recommend"
import Comparison from "@/components/comparison"
import CustomerStories from "@/components/customer-stories"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import FooterCTA from "@/components/footer-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <IntegrationsStrip />
      <ProblemSolution />
      <Journey />
      <Showcase />
      <TrustBar />
      <Impact />
      <UseCases />
      <Recommend />
      <Comparison />
      <CustomerStories />
      <Pricing />
      <FAQ />
      <FooterCTA />
      <Footer />
    </main>
  )
}
