import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Plus } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import adsArt from "@/public/uploads/ads-attribution.png"
import { canonical } from "@/lib/site-url"
import { DEMO_URL } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "FAQ | DeepURL Deep Linking & Attribution Questions",
  description:
    "Answers about DeepURL: how deep linking and attribution work, what setup involves, pricing, data privacy and support.",
  alternates: { canonical: canonical("/faq") },
}

type QA = { q: string; a: string }
type Group = { id: string; title: string; items: QA[] }

const groups: Group[] = [
  {
    id: "product",
    title: "About DeepURL",
    items: [
      {
        q: "What exactly is DeepURL?",
        a: "DeepURL is a growth engine for your mobile app. It combines intelligent deep linking, which routes people to the right content, with precise attribution, which shows where they came from. It is the bridge between your marketing and your app's results.",
      },
      {
        q: "What is the difference between a deep link and a deferred deep link?",
        a: "A deep link opens a specific screen in your app when the app is already installed. A deferred deep link covers people who do not have the app yet: they go to the App Store or Google Play, and after installing, the app opens on the content they originally clicked.",
      },
      {
        q: "Why does my app need DeepURL?",
        a: "Without it you risk broken journeys, where people click a product ad and land on a generic homepage, and blind data, where installs show up as an unknown source. DeepURL fixes both so you can see and improve what drives growth.",
      },
    ],
  },
  {
    id: "setup",
    title: "Setup and integration",
    items: [
      {
        q: "Do I need a developer to use this?",
        a: "Just once. Your developer adds our lightweight SDK, which takes around 30 minutes. After that, your marketing team can create smart links and track campaigns without writing code.",
      },
      {
        q: "Can I use my own domain and QR codes?",
        a: "Yes. You can share custom branded links on your own domain and generate QR codes that open content in your app or a fallback web page.",
      },
      {
        q: "Can I create links from my own app or through the API?",
        a: "Yes. The SDK lets you generate links from inside your app, for example behind a share button, and links can be managed from the dashboard or API. See the documentation for details.",
      },
      {
        q: "What happens if someone does not have my app installed?",
        a: "You choose the fallback. They can be sent to the matching app store, or to a web page showing the same content, so the journey is never a dead end.",
      },
    ],
  },
  {
    id: "attribution",
    title: "Attribution and data",
    items: [
      {
        q: "How does attribution work with iOS privacy rules?",
        a: "Our Privacy-Safe Predictive Modeling (PAM) is designed to give accurate attribution while respecting modern privacy rules, including those on iOS 14 and later.",
      },
      {
        q: "Which ad platforms are supported?",
        a: "Attribution covers major channels such as Facebook, Google and TikTok. See the integrations page for the current list.",
      },
      {
        q: "Can I export my raw data?",
        a: "Yes. Fraud protection and raw data export are part of the Enterprise plan, so you can take your data into your own warehouse or analysis tools.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing and support",
    items: [
      {
        q: "Do you offer a free plan or trial?",
        a: "DeepURL is an enterprise-grade solution, so there is no generic free tier. Request a demo and our team will walk you through the product and shape a plan around your goals.",
      },
      {
        q: "How is my data protected?",
        a: "Data is encrypted in transit and at rest, and traffic is screened for fraud. You can read the details on our Security page and in the Privacy Policy.",
      },
      {
        q: "How do I get help?",
        a: "Visit the Support page for guides, or contact us through the contact form. We aim to reply within 24 hours on business days.",
      },
    ],
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  ),
}

export default function FaqPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PageHero
        title="Frequently asked questions"
        description="Straight answers about deep linking, attribution, setup and pricing."
      />

      <section className="pb-16 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="FAQ topics" className="sticky top-28">
              <p className="text-sm font-semibold">Topics</p>
              <ul className="mt-4 space-y-1 border-l border-border">
                {groups.map((group) => (
                  <li key={group.id}>
                    <a
                      href={`#${group.id}`}
                      className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition hover:border-accent hover:text-accent"
                    >
                      {group.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="min-w-0 space-y-14 lg:col-span-9">
            {groups.map((group) => (
              <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className="scroll-mt-28">
                <h2 id={`${group.id}-title`} className="text-2xl font-semibold md:text-3xl">
                  {group.title}
                </h2>
                <div className="mt-6 divide-y divide-border border-y border-border">
                  {group.items.map((item) => (
                    <details key={item.q} className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-medium transition hover:text-accent [&::-webkit-details-marker]:hidden">
                        {item.q}
                        <Plus
                          className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                          aria-hidden="true"
                        />
                      </summary>
                      <p className="pb-6 pr-10 leading-relaxed text-muted-foreground">{item.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <div className="panel-aurora mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 md:py-14 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-7">
            <h2 className="text-balance text-3xl font-semibold leading-tight md:text-4xl">Still have questions?</h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Tell us what you are trying to achieve and we will point you to the right answer, or set up a walkthrough.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={DEMO_URL} className="btn-primary inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium text-primary-foreground">
                Contact us
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="/support" className="btn-ghost inline-flex h-12 items-center justify-center rounded-full border border-foreground/15 bg-card px-7 text-sm font-medium">
                Visit support
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Image
              src={adsArt}
              alt="Illustration of an ad on a web page with coins, a cursor and a growth chart"
              className="mx-auto h-auto w-full max-w-sm rounded-2xl"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
