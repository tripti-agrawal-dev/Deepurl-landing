import SectionHeading from "@/components/section-heading"

const problems = [
  {
    title: "Broken journeys",
    description: "Users click a product ad but land on a generic homepage. Friction kills sales.",
  },
  {
    title: "Blind data",
    description: "\"Unknown source\" in your analytics means you can't optimize what you can't see.",
  },
  {
    title: "Dev headaches",
    description: "Engineers lose hours fixing link routing every time an OS update changes the rules.",
  },
]

const solutions = [
  {
    title: "Bulletproof deep linking",
    fix: "Links that work everywhere. On iOS, Android or desktop, with the app installed or not, DeepURL routes users to the exact content they want instantly.",
    result: "Boost retention by 40%.",
  },
  {
    title: "Precision attribution",
    fix: "Track ROI, not just clicks. Our hybrid tracking model handles the privacy puzzle, even on iOS 14+, so you get accurate data to scale your best campaigns.",
    result: "Recover 94% of lost attribution data.",
  },
  {
    title: "Full-funnel visibility",
    fix: "We don't stop at the store. We connect ad click, install and purchase, so you see the complete picture of your user's journey.",
    result: "See your true ROI instantly.",
  },
]

export default function ProblemSolution() {
  return (
    <>
      <section className="section-y">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
          <div className="lg:col-span-2">
            <SectionHeading
              align="left"
              title="Is your mobile traffic hitting a dead end?"
              description="You pay for clicks, but are you getting customers? When users move from web to app, links break and data gets lost. The result is wasted budget and frustrated users."
            />
            <p className="mt-8 text-lg font-medium">DeepURL fixes the flow. No broken links. No blind spots.</p>
          </div>

          <ul className="divide-y divide-border border-y border-border lg:col-span-3">
            {problems.map((problem) => (
              <li key={problem.title} className="grid gap-2 py-7 sm:grid-cols-3 sm:gap-8">
                <h3 className="font-display text-xl font-semibold tracking-tight">{problem.title}</h3>
                <p className="leading-relaxed text-muted-foreground sm:col-span-2">{problem.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:pb-20 lg:px-8">
        <div className="panel-aurora mx-auto max-w-7xl rounded-[2rem] px-6 py-16 sm:px-10 md:py-20 lg:px-16">
          <SectionHeading
            title="One platform. Flawless journeys."
            description="Route every user to the right place and track every dollar they spend."
          />

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {solutions.map((solution) => (
              <article key={solution.title} className="card-lift flex flex-col rounded-2xl border border-border bg-card/85 p-6">
                <h3 className="font-display text-2xl font-semibold tracking-tight">{solution.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{solution.fix}</p>
                <p className="mt-6 inline-flex w-fit rounded-full bg-accent/10 px-3.5 text-accent py-1.5 text-sm font-medium">
                  {solution.result}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
