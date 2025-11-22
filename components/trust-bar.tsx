export default function TrustBar() {
  const companies = [
    { name: "Spotify", logo: "🎵" },
    { name: "Instagram", logo: "📸" },
    { name: "TikTok", logo: "🎬" },
    { name: "Discord", logo: "💬" },
    { name: "Slack", logo: "⚡" },
  ]

  return (
    <section className="border-y border-border py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading app & growth teams</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div key={company.name} className="text-4xl opacity-60 hover:opacity-100 transition cursor-pointer">
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
