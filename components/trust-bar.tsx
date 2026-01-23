export default function TrustBar() {
  const features = [
    {
      title: "Reliable Deep Linking",
      description: "Never lose a user to a broken link again. Ensure a flawless experience across every device and platform. Our intelligent Deferred Deep Linking technology detects if the user has your app installed. If not, it routes them to the App Store and then automatically opens the exact content they clicked immediately after installation.",
    },
    {
      title: "Accurate Attribution",
      description: "Data you can trust, down to the last install. Stop optimizing based on guesswork. We provide precise attribution data that cuts through the noise. Identify exactly which ads, influencers, or social channels are driving real revenue, giving you the clarity to scale your budget with confidence.",
    },
    {
      title: "Entire User Journey",
      description: "Connect the dots from Web to App. Most tools lose track when a user switches platforms. DeepURL bridges the gap. We give you Full-Funnel Visibility—tracking the user seamlessly from their first click on the mobile web, through the app store, and all the way to their in-app purchase.",
    },
  ]

  return (
    <section id="features" className="border-y border-border py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">Core Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-primary">{index + 1}.</span>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
