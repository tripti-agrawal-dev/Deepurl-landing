import { Apple, Facebook, Globe, Mail, Play, QrCode, Smartphone, Tag, Youtube } from "lucide-react"

const items = [
  { name: "Facebook", icon: Facebook },
  { name: "Google", icon: Globe },
  { name: "TikTok", icon: Play },
  { name: "App Store", icon: Apple },
  { name: "Google Play", icon: Smartphone },
  { name: "YouTube", icon: Youtube },
  { name: "Email", icon: Mail },
  { name: "QR codes", icon: QrCode },
  { name: "UTM tags", icon: Tag },
]

export default function IntegrationsStrip() {
  const row = [...items, ...items]
  return (
    <section aria-labelledby="works-with" className="border-y border-border bg-card/70 py-8">
      <h2 id="works-with" className="mb-5 text-center text-sm font-medium text-muted-foreground" style={{ fontFamily: "var(--font-geist), system-ui, sans-serif", letterSpacing: 0 }}>
        Works with the channels and stores you already use
      </h2>
      <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="marquee-track flex items-center gap-12 px-6">
          {row.map((item, i) => {
            const Icon = item.icon
            return (
              <li key={`${item.name}-${i}`} aria-hidden={i >= items.length ? true : undefined} className="flex items-center gap-2.5 text-lg font-medium text-foreground/70 transition hover:text-accent">
                <Icon className="size-5" aria-hidden="true" />
                {item.name}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
