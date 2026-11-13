"use client"

import { useState } from "react"
import { Quote } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import { testimonials } from "@/components/testimonials"
import { cn } from "@/lib/utils"

const tints = ["tint-peach", "tint-lavender", "tint-mint", "tint-sky", "tint-butter"]
// Short takeaway for each story, taken from what the customer says in the quote.
const takeaways = [
  ["Fewer broken journeys", "Higher retention"],
  ["Trusted attribution", "Doubled ad spend"],
  ["One source of truth", "Every channel linked"],
  ["Effortless SDK setup", "A real partnership"],
  ["Every install traced", "Clear mobile ROI"],
]

export default function CustomerStories() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section id="testimonials" className="scroll-mt-20 section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Teams that stopped guessing" description="Hear from the people who use DeepURL to connect campaigns to customers." />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* featured quote */}
          <figure key={active} className={cn(tints[active % tints.length], "lane-in relative overflow-hidden rounded-[2rem] border border-white/70 p-8 md:p-12 lg:col-span-8")}>
            <Quote className="size-12 text-accent/30" aria-hidden="true" />
            <blockquote className="mt-4 font-display text-2xl font-medium leading-snug md:text-[1.9rem] md:leading-[1.3]">
              {t.quote}
            </blockquote>
            <div className="mt-6 flex flex-wrap gap-2">
              {takeaways[active % takeaways.length].map((x) => (
                <span key={x} className="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-sm font-medium">{x}</span>
              ))}
            </div>
            <figcaption className="mt-8 flex items-center gap-4 border-t border-foreground/10 pt-6">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary font-display text-2xl text-primary-foreground" aria-hidden="true">{t.name.charAt(0)}</span>
              <span>
                <span className="block text-lg font-semibold">{t.name}</span>
                <span className="block text-sm text-foreground/70">{t.title}, {t.company}</span>
                <span className="block text-xs text-foreground/60">{t.location}</span>
              </span>
            </figcaption>
          </figure>

          {/* picker */}
          <div role="tablist" aria-label="Customer stories" className="grid gap-2 lg:col-span-4">
            {testimonials.map((x, i) => (
              <button
                key={x.name}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "flex items-center gap-3 rounded-2xl border p-4 text-left transition",
                  i === active ? "border-accent/40 bg-card shadow-float" : "border-border bg-card/60 hover:border-accent/30 hover:bg-card",
                )}
              >
                <span className={cn("flex size-11 shrink-0 items-center justify-center rounded-full font-display text-lg", tints[i % tints.length])} aria-hidden="true">{x.name.charAt(0)}</span>
                <span className="min-w-0">
                  <span className="block truncate font-medium">{x.name}</span>
                  <span className="block truncate text-sm text-muted-foreground">{x.title}, {x.company}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
