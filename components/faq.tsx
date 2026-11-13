"use client"

import { Plus } from "lucide-react"
import { useId, useState } from "react"
import SectionHeading from "@/components/section-heading"
import { cn } from "@/lib/utils"

export const faqs = [
  {
    question: "What exactly is DeepURL?",
    answer:
      "DeepURL is a growth engine for your mobile app. It combines intelligent deep linking (routing users to the right content) with precise attribution (tracking where users came from). Think of us as the bridge that connects your marketing ads directly to your app's success.",
  },
  {
    question: "Why does my app need DeepURL? What's the advantage?",
    answer:
      "Without DeepURL, you risk broken user journeys and blind data. The biggest advantages are:\n\nHigher Conversions: Users land exactly on the product they clicked, not a generic homepage.\n\nClear ROI: You stop guessing. You'll know exactly which ad, influencer, or email drove that install.",
  },
  {
    question: "Do I need a developer to use this?",
    answer:
      "Just once. Your developer adds our lightweight SDK (takes ~30 mins). After that, your marketing team can create unlimited smart links and track campaigns without writing a single line of code.",
  },
  {
    question: "Do you offer a free plan or trial?",
    answer:
      "DeepURL is an enterprise-grade solution. We don't offer a generic free tier because every app's needs are unique. Instead, we invite you to Request a Demo. Our team will give you a personalized walkthrough and build a custom plan tailored specifically to your growth goals.",
  },
]

export default function FAQ({ heading = true }: { heading?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="faq" className="scroll-mt-20 section-y">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {heading && <SectionHeading title="Everything you need to know" />}

        <div className={cn("divide-y divide-border border-y border-border", heading && "mt-12")}>
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    id={`${baseId}-q${index}`}
                    aria-expanded={open}
                    aria-controls={`${baseId}-a${index}`}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium transition hover:text-accent"
                  >
                    {faq.question}
                    <Plus
                      className={cn("size-5 shrink-0 text-muted-foreground transition-transform duration-200", open && "rotate-45")}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {open && (
                  <div
                    id={`${baseId}-a${index}`}
                    role="region"
                    aria-labelledby={`${baseId}-q${index}`}
                    className="whitespace-pre-line pb-6 pr-10 leading-relaxed text-muted-foreground"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
