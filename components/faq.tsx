"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How does DeepURL detect user devices?",
    answer:
      "DeepURL uses advanced device detection technology to identify iOS, Android, Desktop, and Web users in real-time, automatically routing them to the appropriate destination.",
  },
  {
    question: "Can I track attribution across campaigns?",
    answer:
      "Yes! Our platform supports UTM parameters and custom campaign tracking. Every click is attributed to its original source, helping you measure ROI across all channels.",
  },
  {
    question: "Do you support custom branding on QR codes?",
    answer:
      "Absolutely. You can customize QR codes with your brand colors, logos, and design to maintain brand consistency across all marketing materials.",
  },
  {
    question: "What SDKs and platforms do you support?",
    answer:
      "We offer native SDKs for iOS, Android, Web, React Native, and Flutter, plus full REST API support for custom integrations.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "You can generate your first deep link in minutes. Our onboarding is designed to be quick and intuitive, with comprehensive docs and support.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We follow industry-leading security practices including end-to-end encryption, regular security audits, and compliance with GDPR, CCPA, and SOC 2.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">questions</span>
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
                {openIndex === index && <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
