import { Check } from "lucide-react"
import SectionHeading from "@/components/section-heading"

const comparisonData = [
  { feature: "Routing speed", deepurl: "<100ms (instant)", competitors: "200ms+ (slower)" },
  { feature: "Pricing", deepurl: "Transparent and fair", competitors: "Contact sales (hidden)" },
  { feature: "Setup time", deepurl: "<1 hour", competitors: "Weeks of integration" },
  { feature: "Privacy model", deepurl: "Next-gen (PAM)", competitors: "Retrofitted" },
]

export default function Comparison() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why modern teams switch to DeepURL"
          description="Legacy platforms are heavy, expensive and complex. We built DeepURL for speed and simplicity."
        />

        <div className="mt-12 overflow-x-auto rounded-3xl border border-border bg-card">
          <table className="w-full min-w-[34rem] text-left">
            <caption className="sr-only">DeepURL compared with legacy platforms</caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="p-5 text-sm font-medium text-muted-foreground md:p-6">
                  Feature
                </th>
                <th scope="col" className="bg-accent/5 p-5 text-sm font-semibold md:p-6">
                  DeepURL
                </th>
                <th scope="col" className="p-5 text-sm font-medium text-muted-foreground md:p-6">
                  Legacy platforms (Branch, etc.)
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr key={row.feature} className="border-b border-border last:border-b-0">
                  <th scope="row" className="p-5 font-medium md:p-6">
                    {row.feature}
                  </th>
                  <td className="bg-accent/5 p-5 font-semibold md:p-6">
                    <span className="inline-flex items-center gap-2">
                      <Check className="size-4 text-accent" aria-hidden="true" />
                      {row.deepurl}
                    </span>
                  </td>
                  <td className="p-5 text-muted-foreground md:p-6">{row.competitors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
