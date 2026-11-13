import type { Metadata } from "next"
import { Mail } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"
import { canonical } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Contact DeepURL | Get in Touch",
  description:
    "Connect with DeepURL. Whether for enterprise solutions, technical support, or media inquiries, our team in Hong Kong is ready to assist you.",
  alternates: { canonical: canonical("/contact") },
}

const topics = [
  { title: "Enterprise solutions", body: "Volume pricing, custom contracts and dedicated support plans." },
  { title: "Technical support", body: "SDK integration, API documentation or deep link configuration." },
  { title: "Partnerships", body: "Agency collaborations, affiliate programs and media relations." },
]

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <PageHero
        align="left"
        art="mail"
        title="Talk to the DeepURL team"
        description="Want a demo, help with an integration, or a partnership? Tell us what you need and we'll point your message to the right person."
      />

      <section className="pb-14 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-5">
            <div className="flex items-start gap-4 rounded-3xl border border-border bg-mist p-6">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Mail className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-medium">General inquiries</p>
                <a href="mailto:info@deepurls.com" className="text-accent underline-offset-4 hover:underline">
                  info@deepurls.com
                </a>
                <p className="mt-2 text-sm text-muted-foreground">
                  One inbox for everything. We send your request to Sales, Support or Engineering and aim to reply
                  within 24 hours on business days.
                </p>
              </div>
            </div>

            <h2 className="mt-12 text-2xl">What can we help with?</h2>
            <p className="mt-2 text-muted-foreground">Mention your topic so we can reply faster.</p>
            <dl className="mt-6 divide-y divide-border border-y border-border">
              {topics.map((topic) => (
                <div key={topic.title} className="py-4">
                  <dt className="font-medium">{topic.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{topic.body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="shadow-soft card-lift rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-2xl">Send a message</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
