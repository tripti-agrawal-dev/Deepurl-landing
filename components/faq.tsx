"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left"
            >
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-accent transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-muted-foreground leading-relaxed whitespace-pre-line">{faq.answer}</p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
