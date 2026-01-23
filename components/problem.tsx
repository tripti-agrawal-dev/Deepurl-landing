export default function Problem() {
  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Is Your Mobile Traffic Hitting a Dead End?
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          You pay for clicks, but are you getting customers? When users move from web to app, links break and data gets lost. The result? Wasted budget and frustrated users.
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start gap-4">
              {/* <span className="text-2xl">❌</span> */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Broken Journeys</h3>
                <p className="text-muted-foreground">
                  Users click a product ad but land on a generic homepage. Friction kills sales.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start gap-4">
              {/* <span className="text-2xl">❌</span> */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Blind Data</h3>
                <p className="text-muted-foreground">
                  Unknown Source in your analytics means you can't optimize what you can't see.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start gap-4">
              {/* <span className="text-2xl">❌</span> */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Dev Headaches</h3>
                <p className="text-muted-foreground">
                  Wasting engineering hours on fixing link routing for every new OS update.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xl font-semibold mt-12">
          DeepURL fixes the flow. No broken links. No blind spots.
        </p>
      </div>
    </section>
  )
}
