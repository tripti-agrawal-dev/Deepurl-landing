"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/deepUrlLogo.png"
            alt="DeepURL Logo"
            width={110}
            height={32}
            className="rounded scale-150 origin-left"
            priority
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-sm hover:text-accent transition">
            Features
          </Link>
          <Link href="/#use-cases" className="text-sm hover:text-accent transition">
            Use Cases
          </Link>
          <Link href="/#pricing" className="text-sm hover:text-accent transition">
            Pricing
          </Link>
          <Link href="/#faq" className="text-sm hover:text-accent transition">
            FAQ
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://dashboard.deepurls.com"
            target="_blank"
            className="px-4 py-2 text-sm font-medium hover:text-accent transition"
          >
            Log in
          </a>

          <Link
            href="/#pricing"
            className="px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Request a Demo
          </Link>

        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border px-4 py-4 space-y-4">
          <Link href="/#features" className="block text-sm hover:text-accent transition" onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link href="/#use-cases" className="block text-sm hover:text-accent transition" onClick={() => setIsOpen(false)}>
            Use Cases
          </Link>
          <Link href="/#pricing" className="block text-sm hover:text-accent transition" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link href="/#faq" className="block text-sm hover:text-accent transition" onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
          <a
            href="https://dashboard.deepurls.com"
            target="_blank"
            className="block px-4 py-2 text-sm font-medium hover:text-accent transition"
            onClick={() => setIsOpen(false)}
          >
            Log in
          </a>
          <Link
            href="/#pricing"
            className="block w-full px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            Request a Demo
          </Link>
        </div>
      )}
    </header>
  )
}
