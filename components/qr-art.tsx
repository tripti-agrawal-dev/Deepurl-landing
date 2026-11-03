// Decorative QR-style pattern (not scannable).
export default function QrArt({ className = "size-14" }: { className?: string }) {
  const cells = "1110111 1010101 1110101 0001000 1101011 0111010 1010111".split(" ")
  return (
    <svg viewBox="0 0 70 70" className={className} aria-hidden="true">
      {cells.map((row, y) =>
        row.split("").map((c, x) =>
          c === "1" ? <rect key={`${x}-${y}`} x={x * 10} y={y * 10} width="8" height="8" rx="2" fill="oklch(0.22 0.05 280)" /> : null,
        ),
      )}
    </svg>
  )
}
