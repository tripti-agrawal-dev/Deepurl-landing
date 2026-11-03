import type { Metadata } from "next"
import Link from "next/link"
import { Code2, Globe, Megaphone, QrCode, Smartphone } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import FooterCTA from "@/components/footer-cta"
import { canonical } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Integrations | Ad Platforms, App Stores and SDKs | DeepURL",
  description:
    "DeepURL connects with the ad platforms you buy on, the app stores people install from, and the stack you already run.",
  alternates: { canonical: canonical("/integrations") },
}

const groups = [
  {
    icon: Megaphone,
    title: "Ad platforms",
    description: "Attribute installs and revenue back to the campaigns that drove them.",
    items: ["Facebook", "Google", "TikTok"],
  },
  {
    icon: Smartphone,
    title: "Apps and stores",
    description: "Open the right screen whether or not the app is installed yet.",
    items: ["iOS Universal Links", "Android App Links", "App Store and Google Play"],
  },
  {
    icon: Globe,
    title: "Web",
    description: "Move mobile web visitors into your app without losing their place.",
    items: ["Smart banners", "Branded link domains", "Desktop to phone QR codes"],
  },
  {
    icon: QrCode,
    title: "Campaign channels",
    description: "Tag every link so the channel shows up in your data.",
    items: ["Email", "Social and influencers", "Print and QR codes", "UTM parameters"],
  },
  {
    icon: Code2,
    title: "Developer tools",
    description: "Add it once, then let marketing run campaigns without code.",
    items: ["SDK for web, Android and iOS", "Link generation from your app", "Raw data export"],
  },
]

export default function IntegrationsPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <PageHero
        title="Works with the tools you already use"
        description="From the ads that bring people in to the store that gets them installed, DeepURL keeps the link and the data intact."
      />

      <section className="pb-20 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {groups.map((group) => {
            const Icon = group.icon
            return (
              <article key={group.title} className="card-lift rounded-3xl border border-border bg-card p-8">
                <div className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight">{group.title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">{group.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full border border-border bg-background px-3 py-1 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}

          <article className="flex flex-col justify-between rounded-3xl bg-peach p-8">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight">Don&apos;t see your tool?</h2>
              <p className="mt-2 leading-relaxed text-foreground/70">
                Tell us what you run and we&apos;ll show you how it fits, or read the integration guide.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-full btn-primary px-5 text-sm font-medium text-primary-foreground"
              >
                Talk to us
              </Link>
              <Link
                href="/docs"
                className="inline-flex h-11 items-center rounded-full border border-foreground/20 px-5 text-sm font-medium transition hover:bg-white/50"
              >
                Read the docs
              </Link>
            </div>
          </article>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
