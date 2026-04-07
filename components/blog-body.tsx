import { StaticTinaMarkdown } from "tinacms/dist/rich-text/static"
import type { Components, TinaMarkdownContent } from "tinacms/dist/rich-text/static"
import Image from "next/image"

// ✅ YouTube regex
const youtubeRegex =
  /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/

// ✅ INLINE-SAFE embed (IMPORTANT: span, not div/section)
function YoutubeEmbed({ videoId }: { videoId: string }) {
  return (
    <span className="block my-6 aspect-video w-full rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </span>
  )
}

const defaultComponents: Components<{}> = {
  // ✅ Image handling
  img: (props: { url: string; caption?: string; alt?: string }) => {
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

  // ✅ Handle markdown links
  a: (props: { url: string; children: JSX.Element }) => {
    const href = props.url ?? ""
    const match = href.match(youtubeRegex)

    if (match) {
      return <YoutubeEmbed videoId={match[1]} />
    }

    return (
      <a href={href} className="text-indigo-600 underline hover:text-indigo-800">
        {props.children}
      </a>
    )
  },

  // ✅ KEY FIX: handle plain text URLs safely
  text: (props: { children: string }) => {
    const text = props.children.trim()
    const match = text.match(youtubeRegex)

    // Only replace if FULL text is URL
    if (match && text === match[0]) {
      return <YoutubeEmbed videoId={match[1]} />
    }

    return <>{props.children}</>
  },
}

type Props = {
  content: TinaMarkdownContent | TinaMarkdownContent[]
}

export default function BlogBody({ content }: Props) {
  if (content == null) return null

  return (
    <div className="tina-content">
      <StaticTinaMarkdown content={content} components={defaultComponents} />
    </div>
  )
}