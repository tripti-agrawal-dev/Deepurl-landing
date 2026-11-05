import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, DatabaseZap, FileLock2, KeyRound, Lock, ShieldCheck, Trash2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import SectionHeading from "@/components/section-heading"
import FooterCTA from "@/components/footer-cta"
import { canonical } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Security & Data Protection | DeepURL",
  description:
    "How DeepURL protects link and attribution data: encryption in transit and at rest, fraud protection, privacy-safe attribution and clear data retention.",
  alternates: { canonical: canonical("/security") },
}

const pillars = [
  {
    icon: Lock,
    title: "Encrypted in transit",
    body: "Link clicks and dashboard traffic travel over TLS 1.3, so data is protected between devices and our servers.",
  },
  {
    icon: FileLock2,
    title: "Encrypted at rest",
    body: "Data stored in our databases is protected with AES-256 encryption.",
  },
  {
    icon: ShieldCheck,
    title: "Fraud protection",
    body: "We analyze traffic patterns to block bot farms from inflating your click and install numbers.",
  },
  {
    icon: DatabaseZap,
    title: "Privacy-safe attribution",
    body: "Our Privacy-Safe Predictive Modeling (PAM) delivers accurate attribution within modern iOS privacy rules.",
  },
  {
    icon: KeyRound,
    title: "Payments handled by partners",
    body: "Raw card numbers are handled only by PCI-compliant payment partners such as Stripe, never stored by DeepURL.",
  },
  {
    icon: Trash2,
    title: "Clear retention",
    body: "When an account is cancelled, data enters a deletion queue and is purged within 30 days, apart from what law requires us to keep.",
  },
]

const practices = [
  "Quarterly vulnerability scans by our engineering team to find and patch exploits early.",
  "Data hosted with established cloud infrastructure providers that offer encryption and physical security.",
  "Error and latency monitoring so platform issues are spotted quickly.",
  "Data collected only when it has a routing, fraud-prevention or stability purpose.",
  "You can request an export of your account data or its permanent deletion at any time.",
]

export default function SecurityPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <PageHero
        title="Security built into every redirect"
        description="Your links carry your customers. Here is how we protect the data that moves through them."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium text-primary-foreground">
            Request a security review
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link href="/privacy" className="btn-ghost inline-flex h-12 items-center justify-center rounded-full border border-foreground/15 bg-card px-7 text-sm font-medium">
            Read the Privacy Policy
          </Link>
        </div>
      </PageHero>

      <section className="bg-secondary/70 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How we protect your data"
            description="The same safeguards described in our Privacy Policy, in one place."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, body }) => (
              <li key={title} className="card-lift shadow-float rounded-2xl border border-border bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <dl className="panel-aurora mx-auto grid max-w-7xl gap-8 rounded-[2rem] px-6 py-10 text-center sm:grid-cols-3 sm:px-10 md:py-14">
          {[
            { value: "TLS 1.3", label: "Encryption in transit" },
            { value: "AES-256", label: "Encryption at rest" },
            { value: "30 days", label: "Deletion after cancellation" },
          ].map((fact) => (
            <div key={fact.label}>
              <dt className="order-2 mt-2 text-sm text-muted-foreground">{fact.label}</dt>
              <dd className="text-gradient font-display text-4xl font-medium md:text-5xl">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold md:text-4xl">Everyday safeguards</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Security is routine work, not a one-off project. These are the practices we follow day to day.
            </p>
          </div>
          <ul className="space-y-3 lg:col-span-7">
            {practices.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-border bg-mist p-4">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Need something specific?</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Procurement questionnaire, data processing questions or a vulnerability to report? Tell us through the{" "}
            <Link href="/contact" className="text-accent underline-offset-4 hover:underline">contact page</Link> and
            we will route it to the right person.
          </p>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
