export default function ProblemSolution() {
  const problems = [
    {
      title: "Broken Journeys",
      description: "Users click a product ad but land on a generic homepage. Friction kills sales.",
    },
    {
      title: "Blind Data",
      description: "Unknown Source in your analytics means you can't optimize what you can't see.",
    },
    {
      title: "Dev Headaches",
      description: "Wasting engineering hours on fixing link routing for every new OS update.",
    },
  ]

  const solutions = [
    {
      title: "Bulletproof Deep Linking",
      fix: "Links that work everywhere. Whether on iOS, Android, or Desktop—app installed or not—DeepURL routes users to the exact content they want instantly.",
      result: "Boost retention by 40%.",
    },
    {
      title: "Precision Attribution",
      fix: "Track ROI, not just clicks. Stop guessing. Our hybrid tracking model solves the privacy puzzle (yes, even on iOS 14+), giving you accurate data to scale your best campaigns.",
      result: "Recover 94% of lost attribution data.",
    },
    {
      title: "Full-Funnel Visibility",
      fix: "Bridge the Web-to-App gap. We don't stop at the store. We connect the dots from Ad Click → Install → Purchase, giving you a complete picture of your user's journey.",
      result: "See your True ROI instantly.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Is Your Mobile Traffic Hitting a Dead End?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            You pay for clicks, but are you getting customers? When users move from web to app, links break and data gets lost. The result? Wasted budget and frustrated users.
          </p>

          <div className="max-w-4xl mx-auto space-y-6 mb-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  {/* <span className="text-2xl flex-shrink-0">❌</span> */}
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xl font-semibold text-center max-w-3xl mx-auto">
            DeepURL fixes the flow. No broken links. No blind spots.
          </p>
        </div>

        {/* Solution Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            One Platform. Flawless Journeys.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Route every user to the right place and track every dollar they spend.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary flex-shrink-0">{index + 1}.</span>
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium mb-2">The Fix:</p>
                    <p className="text-muted-foreground leading-relaxed">{solution.fix}</p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="font-semibold text-primary">Result: {solution.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
