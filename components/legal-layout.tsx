import type { ReactNode } from "react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import FooterCTA from "@/components/footer-cta"

export type LegalSection = {
  id: string
  title: string
  body: ReactNode
}

export type LegalHighlight = {
  icon: LucideIcon
  title: string
  body: string
}

const RELATED = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Security", href: "/security" },
]

/** "1. Introduction" -> "Introduction" (the number is shown in a badge instead) */
const plainTitle = (title: string) => title.replace(/^\d+\.\s*/, "")

/**
 * Shared shell for long-form policy pages (privacy, terms, cookies):
 * hero, highlight cards, sticky contents list, numbered section cards,
 * related-policy buttons and the standard call to action.
 */
export default function LegalLayout({
  title,
  description,
  updated,
  currentHref,
  highlights = [],
  sections,
}: {
  title: string
  description: string
  updated: string
  currentHref: string
  highlights?: LegalHighlight[]
  sections: LegalSection[]
}) {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <PageHero title={title} description={description}>
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm text-muted-foreground">
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
          Last updated: {updated}
        </p>
      </PageHero>

      {highlights.length > 0 && (
        <section className="pb-12 md:pb-16">
          <ul className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            {highlights.map(({ icon: Icon, title: t, body }) => (
              <li key={t} className="card-lift shadow-float rounded-3xl border border-border bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-display text-xl font-medium">{t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="bg-secondary/70 py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="On this page" className="shadow-soft sticky top-28 rounded-3xl border border-border bg-card p-5">
              <p className="text-sm font-semibold">On this page</p>
              <ol className="mt-3 space-y-0.5">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex items-start gap-2.5 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition hover:bg-accent/10 hover:text-accent"
                    >
                      <span className="mt-0.5 text-xs font-semibold text-accent/70">{index + 1}</span>
                      {plainTitle(section.title)}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0 space-y-6 lg:col-span-9">
            {sections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="shadow-soft scroll-mt-28 rounded-3xl border border-border bg-card p-6 sm:p-9"
              >
                <header className="flex items-center gap-4">
                  <span
                    className="btn-primary flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-primary-foreground"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <h2 className="text-balance text-2xl font-semibold leading-tight md:text-3xl">{plainTitle(section.title)}</h2>
                </header>
                <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground [&_a]:break-words [&_a]:font-medium [&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline [&_h3]:pt-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                  {section.body}
                </div>
              </article>
            ))}

            <nav aria-label="Related policies" className="flex flex-wrap items-center gap-2 pt-2">
              <span className="mr-1 text-sm text-muted-foreground">Related:</span>
              {RELATED.filter((item) => item.href !== currentHref).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="btn-ghost inline-flex rounded-full border border-foreground/15 bg-card px-4 py-1.5 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
