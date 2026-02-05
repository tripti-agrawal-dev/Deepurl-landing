import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Zap, Route, BarChart3, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "About DeepURL | The Engine Behind Flawless Mobile Growth",
  description:
    "We built DeepURL to fix broken user journeys. See how we combine <100ms routing speed with privacy-safe attribution to turn clicks into loyal customers.",
}

export default function AboutPage() {
  return (
    <main className="bg-white text-foreground">
      <Header />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About DeepURL
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          We built DeepURL to fix broken user journeys. See how we combine &lt;100ms routing speed with privacy-safe attribution to turn clicks into loyal customers.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            We Were Tired of &quot;Unknown Sources&quot; &amp; Broken Journeys
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Let&apos;s be honest for a second. There is nothing worse for a marketer than seeing &quot;Unknown Source&quot; in your analytics.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You spend real money on ads, influencers, and email campaigns. You work hard to get that click. But when the user moves from the mobile web to the app store, the data often gets lost. The link breaks. The user installs your app, opens it, and lands on a generic homepage instead of the product they wanted.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            That&apos;s a broken journey. And it&apos;s killing your ROI.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We built DeepURL because we believe mobile growth shouldn&apos;t be a guessing game. We believe that if a user clicks a link for &quot;Red Sneakers&quot; on Instagram, they should land on that exact &quot;Red Sneaker&quot; page inside your app—even if they have to install the app first.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What We Actually Do</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Technically, we are a Mobile Attribution and Deep Linking Platform. But in simple terms? We connect the dots.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6 font-medium">
            We are the bridge between your marketing and your user.
          </p>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="shrink-0 rounded-lg bg-primary/10 p-2">
                <Zap className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">We Handle the Logic</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  When someone clicks your link, our system instantly asks: &quot;Does this user have the app? Are they on iOS or Android?&quot;
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="shrink-0 rounded-lg bg-primary/10 p-2">
                <Route className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">We Route the Traffic</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  If they have the app: We open it directly to the right content (&lt;100ms).
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  If they don&apos;t: We send them to the App Store.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>The Magic Part (Deferred Deep Linking):</strong> Once they install and open the app, we remember where they wanted to go and take them there immediately. No searching required.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="shrink-0 rounded-lg bg-primary/10 p-2">
                <BarChart3 className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">We Give You the Truth</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We tell you exactly which ad, tweet, or QR code drove that install. No more blind spots.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Why We Built a New Platform (The &quot;Legacy&quot; Problem)
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            You might ask, &quot;Aren&apos;t there other tools that do this?&quot; Yes, there are. But they were built for an older internet.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            When we looked at the &quot;Legacy Platforms&quot; (you know the big names), we saw three problems:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-2">
            <li><strong>They were too slow.</strong> In mobile, every millisecond counts. Waiting 200ms+ for a redirect is too long.</li>
            <li><strong>They were too complex.</strong> Integration took weeks of developer time.</li>
            <li><strong>They were hiding data.</strong> Privacy changes like iOS 14+ scared them.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We decided to build something modern. We engineered DeepURL for speed (&lt;100ms routing). We made it simple (setup in &lt;1 hour). And we solved the privacy puzzle with Next-Gen Predictive Modeling (PAM), so you get accurate data without violating user trust.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Who is DeepURL For?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We built this for the High-Growth Teams who are done with &quot;good enough.&quot;
          </p>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary font-medium shrink-0">For the E-Commerce Giants:</span>
              Who want to increase Average Order Value by landing users directly on the checkout page.
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-medium shrink-0">For the SaaS Founders:</span>
              Who want to lower CAC by creating seamless onboarding links from email to app.
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-medium shrink-0">For the Creators:</span>
              Who need branded links that track installs across YouTube and TikTok.
            </li>
          </ul>
        </section>

        <section className="mb-12 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
          <div className="flex gap-3 mb-4">
            <Shield className="size-6 shrink-0 text-primary" />
            <h2 className="text-2xl font-bold">Our Promise: Transparency &amp; Results</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We don&apos;t believe in &quot;Contact Sales&quot; for basic pricing. We don&apos;t believe in hidden fees. And we definitely don&apos;t believe in hoarding your data.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We are here to help you recover lost attribution, boost retention, and finally see the true ROI of your hard work.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The mobile ecosystem is complex, but your growth strategy doesn&apos;t have to be. Let us handle the links, so you can focus on the product.
          </p>
        </section>

        <section className="text-center">
          <p className="text-xl font-semibold mb-6">Stop guessing. Start growing.</p>
          <Button asChild size="lg">
            <Link href="/contact">Request a Demo</Link>
          </Button>
        </section>
      </article>
      <Footer />
    </main>
  )
}
