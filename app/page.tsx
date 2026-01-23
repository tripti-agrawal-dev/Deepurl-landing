import Header from "@/components/header"
import Hero from "@/components/hero"
import TrustBar from "@/components/trust-bar"
import ProblemSolution from "@/components/problem-solution"
import Impact from "@/components/impact"
import UseCases from "@/components/use-cases"
import Comparison from "@/components/comparison"
import HowItWorks from "@/components/how-it-works"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import FooterCTA from "@/components/footer-cta"
import Footer from "@/components/footer"

export default function Home() {

  return (
    <main className=" bg-white text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <Impact />
      <UseCases />
      <Comparison />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FooterCTA />
      <Footer />
    </main>
  )
}
