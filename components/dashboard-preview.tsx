import { TrendingUp, Users, Clock as Click } from "lucide-react"

export default function DashboardPreview() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Analytics that{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">matter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time insights into clicks, installs, retention, and engagement
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-muted/30 border-b border-border px-8 py-6 flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Click size={18} className="text-accent" />
                  <span className="text-sm text-muted-foreground">Total Clicks</span>
                </div>
                <div className="text-3xl font-bold">125,847</div>
                <div className="text-xs text-green-500 font-medium">+12.5% this week</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Conversions</span>
                </div>
                <div className="text-3xl font-bold">38,294</div>
                <div className="text-xs text-green-500 font-medium">+8.3% this week</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <TrendingUp size={18} className="text-accent" />
                  <span className="text-sm text-muted-foreground">Open Rate</span>
                </div>
                <div className="text-3xl font-bold">34.2%</div>
                <div className="text-xs text-green-500 font-medium">+2.1% this week</div>
              </div>
            </div>

            <div className="h-40 bg-gradient-to-t from-primary/10 to-accent/10 rounded-lg border border-border/50 flex items-end justify-between p-4 gap-2">
              {[40, 60, 45, 70, 55, 80, 65].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t opacity-70 hover:opacity-100 transition"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
