import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact DeepURL | Get in Touch",
  description:
    "Connect with DeepURL. Whether for enterprise solutions, technical support, or media inquiries, our team in Hong Kong is ready to assist you.",
}

export default function ContactPage() {
  return (
    <main className="bg-white text-foreground">
      <Header />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact DeepURL</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Connect with DeepURL. Whether for enterprise solutions, technical support, or media inquiries, our team in Hong Kong is ready to assist you.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At DeepURL, we believe in building long-term partnerships. Whether you are looking to integrate our platform, request a demo for your enterprise team, or simply have a query about mobile attribution, we are here to provide the answers you need.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Centralized Communication</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            To ensure your inquiry reaches the right department swiftly, we utilize a centralized communication channel. Please email us, and our team will route your request to the appropriate specialist (Sales, Support, or Engineering) immediately.
          </p>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 px-4 py-4">
            <Mail className="size-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium">General Inquiries</p>
              <a
                href="mailto:info@deepurls.com"
                className="text-primary hover:underline"
              >
                info@deepurls.com
              </a>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            We aim to acknowledge all business inquiries within 24 hours.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How Can We Assist You?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            When emailing us or filling out the form below, please specify your area of interest so we can serve you better:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary font-medium shrink-0">Enterprise Solutions:</span>
              For large-scale volume pricing, custom contracts, and dedicated support plans.
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-medium shrink-0">Technical Support:</span>
              For assistance with SDK integration, API documentation, or deep linking configuration.
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-medium shrink-0">Partnerships:</span>
              For agency collaborations, affiliate programs, and media relations.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <ContactForm />
        </section>
      </article>
      <Footer />
    </main>
  )
}
