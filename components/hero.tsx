import { ArrowRight, LinkIcon } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              Smart deep links that{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                drive growth
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Automatically route users to the right destination—app store, installed app, or web. Track every
              conversion with intelligent attribution analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition flex items-center justify-center gap-2">
                Create Your First Link
                <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3 border border-border hover:bg-muted rounded-full font-medium transition">
                Book Demo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
            <div className="relative bg-card border border-border rounded-2xl p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm font-medium">Smart Detection</span>
                </div>
                <div className="h-2 bg-border rounded-full w-3/4" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-sm font-medium">iOS/Android/Web</span>
                </div>
                <div className="h-2 bg-border rounded-full w-4/5" />
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <LinkIcon size={16} />
                  deepurl.app/promo123
                </div>
                <div className="mt-3 text-2xl font-bold text-primary">↓ Routes Intelligently</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
