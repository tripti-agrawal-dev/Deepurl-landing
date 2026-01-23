export default function Solution() {
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          One Platform. Flawless Journeys.
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Route every user to the right place and track every dollar they spend.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-primary">{index + 1}.</span>
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
    </section>
  )
}
