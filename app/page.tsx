import Header from "@/components/header"
import Hero from "@/components/hero"
import TrustBar from "@/components/trust-bar"
import Features from "@/components/features"
import DashboardPreview from "@/components/dashboard-preview"
import UseCases from "@/components/use-cases"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {

  return (
    <main className=" bg-white text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <Features />
      <DashboardPreview />
      <UseCases />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
