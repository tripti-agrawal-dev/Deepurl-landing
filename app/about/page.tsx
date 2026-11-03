import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BarChart3, Route, Shield, Zap } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import FooterCTA from "@/components/footer-cta"
import { canonical } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "About DeepURL | The Engine Behind Flawless Mobile Growth",
  description:
    "We built DeepURL to fix broken user journeys. See how we combine <100ms routing speed with privacy-safe attribution to turn clicks into loyal customers.",
  alternates: { canonical: canonical("/about") },
}

const whatWeDo = [
  {
    icon: Zap,
    title: "We handle the logic",
    body: "When someone clicks your link, we ask in an instant: does this person have the app, and are they on iOS or Android?",
  },
  {
    icon: Route,
    title: "We route the traffic",
    body: "If they have the app, it opens on the right content in under 100ms. If not, they go to the store, and after install the app opens exactly where they meant to go. That's deferred deep linking.",
  },
  {
    icon: BarChart3,
    title: "We give you the truth",
    body: "You see which ad, tweet or QR code drove each install. No more blind spots.",
  },
]

const legacy = [
  { title: "They were too slow.", body: "In mobile, every millisecond counts. Waiting 200ms or more for a redirect is too long." },
  { title: "They were too complex.", body: "Integration took weeks of developer time." },
  { title: "They were hiding data.", body: "Privacy changes like iOS 14+ scared them off." },
]

const audience = [
  { who: "E-commerce teams", what: "Raise average order value by landing people straight on the checkout page." },
  { who: "SaaS founders", what: "Lower CAC with onboarding links that go from email to the right place in the app." },
  { who: "Creators", what: "Share branded links that track installs across YouTube and TikTok." },
]

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <PageHero
        align="left"
        art="story"
        title="We got tired of “Unknown source” in our analytics"
        description="DeepURL fixes the moment where a click turns into an install and the trail goes cold."
      />

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <h2 className="text-3xl leading-tight md:text-4xl lg:col-span-4">The broken journey</h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
            <p>
              There is nothing worse for a marketer than seeing “Unknown source”. You spend real money on ads,
              influencers and email, and work hard to earn the click. Then the user moves from mobile web to the app
              store and the data goes missing.
            </p>
            <p>
              They install, open the app, and land on a generic home screen instead of the product they wanted. That is
              a broken journey, and it quietly eats your ROI.
            </p>
            <p className="text-foreground">
              If someone taps a link for red sneakers on Instagram, they should land on those sneakers inside your app,
              even if they have to install it first.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-secondary/70 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl leading-tight md:text-4xl">
            In plain terms, we connect your marketing to your app
          </h2>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {whatWeDo.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.title} className="card-lift rounded-3xl border border-border bg-card p-7">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Why new */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-4">
            <h2 className="text-3xl leading-tight md:text-4xl">Why we built something new</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Other tools do this. They were built for an older internet, and we saw three problems.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="divide-y divide-border border-y border-border">
              {legacy.map((item) => (
                <li key={item.title} className="py-5">
                  <p className="font-display text-xl font-medium">{item.title}</p>
                  <p className="mt-1 text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              So we built for speed (under 100ms routing), kept setup short (under an hour), and used privacy-safe
              predictive modeling (PAM) so the data holds up without breaking user trust.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl leading-tight md:text-4xl">Made for teams done with “good enough”</h2>
          <dl className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-3">
            {audience.map((item) => (
              <div key={item.who} className="border-t-2 border-foreground pt-4">
                <dt className="font-display text-xl font-medium">{item.who}</dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">{item.what}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Promise */}
      <section className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-border bg-mist p-8 md:flex-row md:items-start md:gap-10 md:p-12">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Shield className="size-6" aria-hidden="true" />
          </div>
          <div className="max-w-3xl">
            <h2 className="text-3xl leading-tight md:text-4xl">Our promise: clear pricing and your data stays yours</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              No “contact sales” for basic pricing, no hidden fees, and no hoarding your data. We are here to help you
              recover lost attribution, improve retention and see the real return on your work. Let us handle the links
              so you can focus on the product.
            </p>
            <Link
              href="/pricing"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              See pricing
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
