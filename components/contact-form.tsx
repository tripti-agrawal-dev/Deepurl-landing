"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Subject: ${subject}`,
      "",
      message,
    ].join("\n")

    const mailto = `mailto:info@deepurls.com?subject=${encodeURIComponent(subject || "Contact from DeepURL website")}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/30 p-6 text-center">
        <p className="font-medium text-green-800 dark:text-green-200">
          Thank you for your inquiry.
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Your email client should have opened. If it did not, please email us at{" "}
          <a href="mailto:info@deepurls.com" className="text-primary hover:underline">
            info@deepurls.com
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            required
            className="h-10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Business Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            className="h-10"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input
          id="company"
          name="company"
          type="text"
          placeholder="Your company"
          className="h-10"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder="e.g. Enterprise Solutions, Technical Support"
          className="h-10"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help?"
          rows={5}
          required
        />
      </div>
      <Button type="submit" size="lg" disabled={loading}>
        {loading ? "Opening email…" : "Submit Inquiry"}
      </Button>
    </form>
  )
}
