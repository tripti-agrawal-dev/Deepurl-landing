import { Check, Heart, ShoppingBag } from "lucide-react"

// Decorative phone showing the "red sneakers" example used across the site.
export default function PhoneMock({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative aspect-[9/18.5] w-[250px] rounded-[2.6rem] border-[7px] border-[oklch(0.22_0.05_280)] bg-card shadow-[0_40px_80px_-30px_oklch(0.3_0.12_280/0.55)] ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-[oklch(0.22_0.05_280)]" />
      <div className="flex h-full flex-col overflow-hidden rounded-[2.1rem] bg-background">
        <div className="mt-9 flex items-center justify-between px-4">
          <span className="font-display text-sm font-medium">Stride</span>
          <span className="flex gap-2 text-muted-foreground">
            <Heart className="size-4" />
            <ShoppingBag className="size-4" />
          </span>
        </div>

        <div className="mx-3 mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-[oklch(0.94_0.07_55)] px-2.5 py-1 text-[10px] font-medium text-[oklch(0.35_0.1_45)]">
          <Check className="size-3" /> Opened from your Instagram link
        </div>

        <div className="relative mx-3 mt-3 flex-1 overflow-hidden rounded-2xl bg-gradient-to-b from-[oklch(0.93_0.06_285)] to-[oklch(0.96_0.04_55)]">
          <svg viewBox="0 0 200 140" className="absolute inset-x-0 bottom-3 w-full">
            <ellipse cx="100" cy="124" rx="78" ry="8" fill="oklch(0.3 0.08 280 / 0.18)" />
            <path d="M24 100 C 24 80, 40 70, 58 66 L 84 40 C 92 32, 104 36, 108 44 L 116 60 C 138 62, 168 70, 178 92 L 178 104 C 178 108, 174 112, 168 112 L 32 112 C 26 112, 24 108, 24 104 Z" fill="oklch(0.58 0.22 25)" />
            <path d="M24 104 H178 V112 C 178 116 174 118 168 118 H34 C 28 118 24 116 24 112 Z" fill="white" />
            <path d="M92 58 L106 52 M98 70 L114 62 M106 80 L124 70" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <div className="px-4 pb-4 pt-3">
          <p className="font-display text-lg font-medium leading-tight">Red Runner</p>
          <p className="text-xs text-muted-foreground">Lightweight road shoe</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="font-medium">$89</span>
            <span className="flex gap-1">
              {["8", "9", "10"].map((s) => (
                <span key={s} className="flex size-6 items-center justify-center rounded-md border border-border text-[10px]">{s}</span>
              ))}
            </span>
          </div>
          <div className="btn-primary mt-3 rounded-full py-2 text-center text-xs font-medium text-primary-foreground">Add to cart</div>
        </div>
      </div>
    </div>
  )
}
