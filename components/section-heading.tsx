import { cn } from "@/lib/utils"

type Props = {
  title: string
  description?: string
  align?: "center" | "left"
  tone?: "light" | "dark"
  as?: "h1" | "h2"
  className?: string
}

export default function SectionHeading({
  title,
  description,
  align = "center",
  tone = "light",
  as: Tag = "h2",
  className,
}: Props) {
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "text-left", "max-w-3xl", className)}>
      <Tag
        className={cn(
          "text-balance text-4xl font-semibold leading-[1.05] md:text-5xl",
          tone === "dark" && "text-white",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "mt-4 text-balance text-lg leading-relaxed",
            tone === "dark" ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
