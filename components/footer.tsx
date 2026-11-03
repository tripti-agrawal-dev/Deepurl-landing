import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { PRODUCT_LINKS, RESOURCE_LINKS } from "@/lib/site-nav"

const columns = [
  { title: "Product", links: [...PRODUCT_LINKS.map(({ label, href }) => ({ label, href })), { label: "Pricing", href: "/pricing" }] },
  { title: "Resources", links: RESOURCE_LINKS.map(({ label, href }) => ({ label, href })) },
  { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }, { label: "Use cases", href: "/use-cases" }] },
  { title: "Legal", links: [{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }, { label: "Support", href: "/support" }] },
]

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/share/1DdWxZSX2Z/" },
  { label: "X", href: "https://x.com/Deepurltracking" },
  { label: "Instagram", href: "https://www.instagram.com/deepurltracking?igsh=dGY2ZXB5eTI0MjNw" },
  { label: "YouTube", href: "https://youtube.com/@deepurl-g2p?si=TLvkdKLfzrBdhi5z" },
  { label: "Pinterest", href: "https://pin.it/5fINpzFyz" },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-gradient-to-b from-secondary/70 to-[oklch(0.93_0.04_290)]">
      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <h2 className="sr-only">Site map</h2>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="DeepURL home" className="inline-block">
              <Image src="/DurlBranding.png" alt="DeepURL" width={140} height={40} className="h-9 w-auto mix-blend-multiply" />
            </Link>
            <p className="mt-4 max-w-xs text-lg leading-relaxed text-foreground/75">
              Every click, on the right screen. Every install, traced to its source.
            </p>
            <Link href="/link-tester" className="btn-primary mt-6 inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-medium text-primary-foreground">
              Try the link tester
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold">{column.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-foreground/70">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="transition hover:text-accent">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-foreground/10 pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-foreground/70">&copy; {new Date().getFullYear()} DeepURL. All rights reserved.</p>
          <ul className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex rounded-full border border-foreground/15 bg-card/70 px-3.5 py-1.5 text-foreground/80 hover:text-accent">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* oversized wordmark, cropped by the bottom edge */}
      <p aria-hidden="true" className="text-gradient pointer-events-none mt-6 select-none text-center font-display text-[22vw] font-medium leading-[0.72] tracking-tighter opacity-25 [mask-image:linear-gradient(to_bottom,#000_40%,transparent)] lg:text-[16rem]">
        DeepURL
      </p>
    </footer>
  )
}
