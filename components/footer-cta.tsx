import { ArrowRight } from "lucide-react"

export default function FooterCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to supercharge your growth?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join the thousands of apps using DeepURL to deliver seamless experiences and drive revenue.
        </p>
        <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition flex items-center justify-center gap-2 mx-auto">
          Start Now
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  )
}
