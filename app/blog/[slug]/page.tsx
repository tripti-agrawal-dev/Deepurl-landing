import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import client from "@/tina/__generated__/client"
import { canonical } from "@/lib/site-url"
import { BLOG_SLUG_REDIRECTS } from "@/lib/blog-redirects"
import RedirectClient from "@/components/redirect-client"
import BlogBody from "@/components/blog-body"

const FALLBACK_SLUG = "deep-linking-best-practices-2026"

const SLUG_TO_FILENAME: Record<string, string> = {
  "what-is-deep-linking": "What-Is-Deep-Linking-Full-Guide-In-2026",
  "deep-linking-best-practices": "DEEP-LINKING-BEST-PRACTICES-Unlock-3x-Conversion-Uplifts-for-US-App-Marketers-",
  "deep-linking-vs-universal-links": "Deep-Linking-vs-Universal-Links",
  "how-app-attribution-works": "How-App-Attribution-Works",
  "how-deferred-deep-linking-works": "How-Deferred-Deep-Linking-Works",
  "mobile-attribution-explained": "Mobile-Attribution-Explained",
}

type Props = { params: Promise<{ slug: string }> }

async function getSlugs(): Promise<{ slug: string }[]> {
  const redirectSlugs = Object.keys(BLOG_SLUG_REDIRECTS).map((slug) => ({ slug }))
  try {
    const res = await client.queries.postConnection({ first: 100 })
    const edges = res.data?.postConnection?.edges ?? []
    const fromTina = edges.length === 0 ? [{ slug: FALLBACK_SLUG }] : edges.map((edge) => {
      const node = edge?.node
      const slug = node?.slug ?? node?._sys?.filename ?? ""
      return { slug }
    }).filter((p) => p.slug)
    return [...redirectSlugs, ...fromTina]
  } catch {
    return [...redirectSlugs, { slug: FALLBACK_SLUG }]
  }
}

export async function generateStaticParams() {
  return getSlugs()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const filename = SLUG_TO_FILENAME[slug] ?? slug
    const res = await client.queries.post({ relativePath: `${filename}.mdx` })
    const post = res.data?.post
    if (!post) return { title: "Blog | DeepURL", alternates: { canonical: canonical(`/blog/${slug}`) } }
    const meta = post.seo
    const canonicalUrl = canonical(`/blog/${slug}`)
    return {
      title: meta?.metaTitle ?? `${post.title} | DeepURL Blog`,
      description: meta?.metaDescription ?? post.excerpt ?? "Read more on the DeepURL blog.",
      alternates: { canonical: canonicalUrl },
    }
  } catch {
    return { title: "Blog | DeepURL", alternates: { canonical: canonical(`/blog/${slug}`) } }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const redirectTarget = BLOG_SLUG_REDIRECTS[slug]
  if (redirectTarget) {
    return <RedirectClient to={`/blog/${redirectTarget}`} />
  }
  let post: {
    title: string
    excerpt?: string | null
    body?: unknown
    featuredImage?: string | null
    featuredImageAlt?: string | null
  } | null = null
  try {
    const filename = SLUG_TO_FILENAME[slug] ?? slug
    const res = await client.queries.post({ relativePath: `${filename}.mdx` })
    post = res.data?.post ?? null
  } catch {
    if (slug === FALLBACK_SLUG) {
      post = {
        title: "Deep Linking Best Practices for 2026 (iOS, Android & Web)",
        excerpt: "Learn how to implement reliable deep links across platforms and avoid common pitfalls that hurt attribution.",
      }
    }
  }
  if (!post) notFound()

  return (
    <main className="bg-white text-foreground">
      <Header />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <Link href="/blogs" className="text-sm text-accent hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
        {post.excerpt && (
          <p className="text-lg text-muted-foreground mb-8">{post.excerpt}</p>
        )}
        {post.featuredImage && (
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl mb-10">
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt ?? post.title}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
              unoptimized
            />
          </div>
        )}
        {post.body != null && (Array.isArray(post.body) || (typeof post.body === "object" && post.body !== null && "children" in post.body)) ? (
          <BlogBody content={post.body} />
        ) : post.body != null ? (
          <p className="text-muted-foreground">Content format not supported.</p>
        ) : (
          <p className="text-muted-foreground">
            This post is coming soon. Content can be managed via Tina CMS in{" "}
            <code className="text-foreground bg-muted px-1 rounded">content/posts</code>.
          </p>
        )}
      </article>
      <Footer />
    </main>
  )
}