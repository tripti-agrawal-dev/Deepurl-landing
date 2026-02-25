import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { canonical } from "@/lib/site-url"
import { BookOpen, Link2, BarChart3, HelpCircle, Code, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "DeepURLs Support | Master Deep Linking & Mobile Attribution",
  description:
    "Get expert help with DeepURLs. Deferred deep linking tutorials, and attribution analytics to build flawless mobile user journeys.",
  alternates: { canonical: canonical("/support") },
}

const quickStartGuides = [
  {
    title: "Creating Your First Smart Link",
    description: "A step-by-step guide to generating a link that routes users perfectly across iOS, Android, and Web.",
  },
  {
    title: "Installing Our SDK",
    description: "Simple instructions for a lightweight integration that unlocks deferred deep linking and precise attribution.",
  },
  {
    title: "Dashboard Deep Dive",
    description: "Learn how to navigate your real-time dashboard to monitor clicks, installs, and revenue from day one.",
  },
]

const platformFeatures = [
  {
    title: "How Deferred Deep Linking Works",
    description: "Understand the magic behind routing users from the App Store or Google Play directly to their intended content after install.",
  },
  {
    title: "Setting Up Custom Branded Links",
    description: "Create trustworthy, on-brand links (e.g., yourbrand.link/offer) for your campaigns.",
  },
  {
    title: "Web-to-App Smart Banners",
    description: "A guide to implementing banners that seamlessly drive your mobile web traffic into the app.",
  },
  {
    title: "QR Codes with Deep Linking",
    description: "Generate and track QR codes that open content directly in your app or a fallback web page.",
  },
]

const attributionAnalytics = [
  {
    title: "Understanding Your Attribution Data",
    description: "A clear breakdown of how we track the user journey from the first click to the final in-app purchase.",
  },
  {
    title: "Our Privacy-Safe Attribution Model (PAM)",
    description: "How we deliver accurate data, even on iOS 14+, without compromising user privacy.",
  },
  {
    title: "Integrating Ad Networks (Facebook, Google, TikTok)",
    description: "Connect your ad accounts to see true ROI and optimize spend.",
  },
  {
    title: "Exporting Raw Data",
    description: "How to access and export your data for custom analysis in your data warehouse.",
  },
]

const faqs = [
  "My links aren't opening the app correctly. What should I check?",
  "Why do my attribution numbers look different from my ad network's dashboard?",
  "How do I handle routing for users in different countries?",
  "What is the difference between a deep link and a deferred deep link?",
  "Can I create links via the API?",
]

const developerResources = [
  { title: "API Reference", description: "Comprehensive documentation for our link creation and data export APIs." },
  { title: "Testing Your Integration", description: "A checklist to ensure your deep linking works flawlessly in every scenario." },
  { title: "Status Page", description: "Check the real-time status of the DeepURLs platform." },
]

function SupportCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-5 hover:border-accent/50 transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default function SupportPage() {
  return (
    <main className="bg-white text-foreground">
      <Header />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">DeepURL Support</h1>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Welcome to DeepURL Support. We&apos;re here to help you build flawless user journeys. Whether you&apos;re just setting up your first smart link or diving deep into attribution data, you&apos;ll find the resources you need below. If you can&apos;t find what you&apos;re looking for, our team is just an email away.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-accent" />
            Quick Start Guides
          </h2>
          <p className="text-muted-foreground mb-6">Get up and running in under an hour.</p>
          <div className="space-y-4">
            {quickStartGuides.map((item) => (
              <SupportCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Link2 className="w-6 h-6 text-accent" />
            Platform &amp; Features
          </h2>
          <p className="text-muted-foreground mb-6">Master the tools to power your growth.</p>
          <div className="space-y-4">
            {platformFeatures.map((item) => (
              <SupportCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-accent" />
            Attribution &amp; Analytics
          </h2>
          <p className="text-muted-foreground mb-6">Stop guessing. Start scaling what works.</p>
          <div className="space-y-4">
            {attributionAnalytics.map((item) => (
              <SupportCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-accent" />
            Troubleshooting &amp; FAQs
          </h2>
          <p className="text-muted-foreground mb-6">Quick answers to common questions.</p>
          <ul className="space-y-3">
            {faqs.map((q) => (
              <li key={q} className="bg-card border border-border rounded-lg px-5 py-3 text-foreground">
                {q}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Code className="w-6 h-6 text-accent" />
            Developer Resources
          </h2>
          <p className="text-muted-foreground mb-6">Built for engineers who value clean, efficient code.</p>
          <div className="space-y-4">
            {developerResources.map((item) => (
              <SupportCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </section>

        <section className="border-t border-border pt-12">
          <h2 className="text-2xl font-bold mb-4">Still have questions? We&apos;re here to help.</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Our support team is staffed by product experts who understand the mobile ecosystem inside and out. We&apos;re committed to providing you with a fast, clear answer.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Mail className="w-5 h-5 text-accent" />
            <span className="text-muted-foreground">Email us at:</span>
            <a href="mailto:info@deepurls.com" className="font-medium text-accent hover:underline">
              info@deepurls.com
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            For enterprise customers with a dedicated support SLAs, please use your support email or contact your Customer Success Manager.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/" className="text-accent hover:underline">
            ← Back to Home
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  )
}
