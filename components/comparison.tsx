import { Check, X } from "lucide-react"

const comparisonData = [
  {
    feature: "Routing Speed",
    deepurl: "<100ms (Instant)",
    competitors: "200ms+ (Slower)",
  },
  {
    feature: "Pricing",
    deepurl: "Transparent & Fair",
    competitors: "Contact Sales (Hidden)",
  },
  {
    feature: "Setup Time",
    deepurl: "<1 Hour",
    competitors: "Weeks of Integration",
  },
  {
    feature: "Privacy Model",
    deepurl: "Next-Gen (PAM)",
    competitors: "Retrofitted",
  },
]

export default function Comparison() {
  return (
    <section className="py-20 md:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Modern Teams Switch to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DeepURL
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Legacy platforms are heavy, expensive, and complex. We built DeepURL for speed and simplicity.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left p-6 font-semibold">Feature</th>
                  <th className="text-center p-6 font-semibold">DeepURL (Us)</th>
                  <th className="text-center p-6 font-semibold text-muted-foreground">Legacy Platforms (Branch, etc.)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-border ${index % 2 === 0 ? "bg-background" : "bg-muted/10"}`}
                  >
                    <td className="p-6 font-medium">{row.feature}</td>
                    <td className="p-6 text-center font-semibold text-primary">{row.deepurl}</td>
                    <td className="p-6 text-center text-muted-foreground">{row.competitors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
