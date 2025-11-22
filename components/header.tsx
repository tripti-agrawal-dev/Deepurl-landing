"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          DeepURL
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm hover:text-accent transition">
            Features
          </a>
          <a href="#pricing" className="text-sm hover:text-accent transition">
            Pricing
          </a>
          <a href="#faq" className="text-sm hover:text-accent transition">
            FAQ
          </a>
          <Link href="/docs" className="text-sm hover:text-accent transition">
            Docs
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium hover:text-accent transition">Log in</button>
          <button className="px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition">
            Sign up
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border px-4 py-4 space-y-4">
          <a href="#features" className="block text-sm hover:text-accent transition">
            Features
          </a>
          <a href="#pricing" className="block text-sm hover:text-accent transition">
            Pricing
          </a>
          <a href="#faq" className="block text-sm hover:text-accent transition">
            FAQ
          </a>
          <button className="w-full px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
            Sign up
          </button>
        </div>
      )}
    </header>
  )
}
