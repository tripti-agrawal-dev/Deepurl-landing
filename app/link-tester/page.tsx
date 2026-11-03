import type { Metadata } from "next"
import { Check } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import LinkTester from "@/components/link-tester"
import FooterCTA from "@/components/footer-cta"
import { canonical } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Link Tester | See Where Your Link Sends People | DeepURL",
  description:
    "Paste a link to see how it would route on iPhone, Android and desktop, with and without your app installed.",
  alternates: { canonical: canonical("/link-tester") },
}

const checks = [
  { title: "Where it opens", description: "The path on iPhone, Android and desktop, with or without the app installed." },
  { title: "Secure links", description: "Whether the link uses https, which Universal Links and App Links require." },
  { title: "The exact page", description: "Whether it points to a specific page or only to your homepage." },
  { title: "Campaign tags", description: "Whether utm and click ID parameters are there to trace installs to a channel." },
]

export default function LinkTesterPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <PageHero
        title="Test a link before you send it"
        description="Paste any link to see where it sends people on iPhone, Android and desktop."
      />

      <section className="px-4 pb-20 sm:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <LinkTester />
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold md:text-4xl">What the tester looks at</h2>
          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {checks.map((item) => (
              <li key={item.title} className="flex gap-4 border-t border-border pt-5">
                <Check className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
