import { StaticTinaMarkdown } from "tinacms/dist/rich-text/static"
import Image from "next/image"

const defaultComponents = {
  img: (props: { url?: string; alt?: string }) => {
    if (!props.url) return null
    return (
      <span className="relative my-6 block aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={props.url}
          alt={props.alt ?? ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 672px"
          unoptimized
        />
      </span>
    )
  },
}

type Props = { content: unknown }

export default function BlogBody({ content }: Props) {
  if (content == null) return null
  const nodes = Array.isArray(content) ? content : (content as { children?: unknown[] }).children
  if (!nodes?.length) return null
  return (
    <div className="tina-content">
      <StaticTinaMarkdown content={content} components={defaultComponents} />
    </div>
  )
}
