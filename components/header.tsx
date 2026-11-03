"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  DEMO_URL,
  LOGIN_URL,
  PRODUCT_LINKS,
  RESOURCE_LINKS,
  SOLUTION_LINKS,
  type NavLink,
} from "@/lib/site-nav"

const MENUS: { id: string; label: string; links: NavLink[] }[] = [
  { id: "product", label: "Product", links: PRODUCT_LINKS },
  { id: "solutions", label: "Solutions", links: SOLUTION_LINKS },
  { id: "resources", label: "Resources", links: RESOURCE_LINKS },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!openMenu) return
    const onPointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenMenu(null)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null)
    }
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [openMenu])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const closeAll = () => {
    setOpenMenu(null)
    setMobileOpen(false)
  }

  return (
    <header
      className={cn(
        "sticky top-3 z-50 px-3 transition-all duration-200 sm:px-6",
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 rounded-full border px-4 transition-all duration-200 sm:px-6",
          scrolled ? "glass shadow-float border-border" : "border-white/70 bg-white/50 backdrop-blur",
        )}
      >
        <Link href="/" className="flex shrink-0 items-center" onClick={closeAll} aria-label="DeepURL home">
          <Image
            src="/DurlBranding.png"
            alt="DeepURL"
            width={140}
            height={40}
            className="h-9 w-auto mix-blend-multiply"
            priority
          />
        </Link>

        <div ref={navRef} className="hidden items-center gap-1 md:flex">
          {MENUS.map((menu) => {
            const open = openMenu === menu.id
            return (
              <div
                key={menu.id}
                className="relative"
                onMouseEnter={() => setOpenMenu(menu.id)}
                onMouseLeave={() => setOpenMenu((current) => (current === menu.id ? null : current))}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`menu-${menu.id}`}
                  onClick={() => setOpenMenu(open ? null : menu.id)}
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-muted",
                    open && "bg-muted",
                  )}
                >
                  {menu.label}
                  <ChevronDown
                    className={cn("size-3.5 text-muted-foreground transition-transform", open && "rotate-180")}
                    aria-hidden="true"
                  />
                </button>

                {open && (
                  <div id={`menu-${menu.id}`} className="absolute left-0 top-full w-80 pt-2">
                    <ul className="shadow-float rounded-2xl border border-border bg-card p-2">
                      {menu.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={closeAll}
                            className="block rounded-xl px-3 py-2.5 transition hover:bg-muted"
                          >
                            <span className="block text-sm font-medium">{link.label}</span>
                            {link.description && (
                              <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                {link.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}

          <Link href="/pricing" className="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-muted">
            Pricing
          </Link>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-muted"
          >
            Log in
          </a>
          <Link
            href={DEMO_URL}
            className="rounded-full btn-primary px-5 py-2 text-sm font-medium text-primary-foreground"
          >
            Request a demo
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 rounded-lg p-2 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="glass shadow-float mx-auto mt-2 max-h-[calc(100dvh-6rem)] max-w-6xl overflow-y-auto rounded-3xl border border-border px-4 pb-8 pt-4 md:hidden">
          {MENUS.map((menu) => (
            <div key={menu.id} className="mb-5">
              <p className="mb-1 px-3 text-xs font-medium text-muted-foreground">{menu.label}</p>
              <ul>
                {menu.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeAll}
                      className="block rounded-xl px-3 py-2.5 text-base font-medium transition hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <Link
            href="/pricing"
            onClick={closeAll}
            className="mb-5 block rounded-xl px-3 py-2.5 text-base font-medium transition hover:bg-muted"
          >
            Pricing
          </Link>

          <div className="flex flex-col gap-2">
            <Link
              href={DEMO_URL}
              onClick={closeAll}
              className="rounded-full btn-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Request a demo
            </Link>
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAll}
              className="rounded-full border border-border px-5 py-3 text-center text-sm font-medium"
            >
              Log in
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
