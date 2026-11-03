// Soft vertical bars that fade upward, as in the Mixpanel reference. Decorative.
const heights = [18, 26, 22, 34, 30, 42, 38, 50, 46, 58, 52, 64, 56, 70, 60, 74, 66, 80, 70, 76, 62, 68, 54, 60, 46, 52, 40, 44, 34, 38, 28, 30]

export default function GradientBars({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-x-0 bottom-0 flex h-56 items-end ${className}`} aria-hidden="true">
      {heights.map((h, i) => (
        <div
          key={i}
          className="flex-1 border-r border-white/40"
          style={{
            height: `${h}%`,
            background: `linear-gradient(to top, oklch(${0.78 + (i % 5) * 0.01} 0.11 ${i % 2 ? 195 : 275} / 0.55), oklch(0.97 0.02 ${i % 2 ? 195 : 285} / 0))`,
          }}
        />
      ))}
    </div>
  )
}
