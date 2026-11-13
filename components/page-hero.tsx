import type { ReactNode } from "react"
import GradientBars from "@/components/gradient-bars"
import PageArt, { type ArtKind } from "@/components/page-art"

export default function PageHero({
  title,
  description,
  align = "center",
  art,
  children,
}: {
  title: string
  description: string
  align?: "center" | "left"
  art?: ArtKind
  children?: ReactNode
}) {
  const left = align === "left"
  return (
    <section className="relative -mt-16 overflow-hidden pt-16">
      <div className="hero-wash absolute inset-0 opacity-90" aria-hidden="true" />
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <GradientBars className="h-40 opacity-80" />
      <div
        className={
          left
            ? "relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-16 sm:px-6 md:pb-20 md:pt-24 lg:grid-cols-12 lg:px-8"
            : "relative mx-auto max-w-4xl px-4 pb-12 pt-16 text-center sm:px-6 md:pb-16 md:pt-24 lg:px-8"
        }
      >
        <div className="lg:col-span-7">
          <h1 className="text-balance text-4xl leading-[1.05] sm:text-5xl md:text-6xl">{title}</h1>
          <p className={left ? "mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl" : "mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl"}>
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
        {left && art && (
          <div className="relative hidden lg:col-span-5 lg:block">
            <PageArt kind={art} />
          </div>
        )}
      </div>
    </section>
  )
}
