import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import client from "@/tina/__generated__/client"
import { canonical } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Blog | DeepURL – Insights on Deep Linking & Mobile Attribution",
  description: "Discover tips, guides, and the latest news on deep linking, mobile attribution, and growing your app with DeepURL.",
  alternates: { canonical: canonical("/blogs") },
}

const FALLBACK_POSTS = [
  {
    slug: "deep-linking-best-practices-2026",
    title: "Deep Linking Best Practices for 2026 (iOS, Android & Web)",
    excerpt: "Learn how to implement reliable deep links across platforms and avoid common pitfalls that hurt attribution.",
    featuredImage: null as string | null,
    featuredImageAlt: null as string | null,
  },
]

async function getPosts() {
  try {
    const res = await client.queries.postConnection({ first: 100 })
    const edges = res.data?.postConnection?.edges ?? []
    if (edges.length === 0) return FALLBACK_POSTS
    return edges.map((edge) => {
      const node = edge?.node
      const slug = node?.slug ?? node?._sys?.filename ?? ""
      return {
        slug,
        title: node?.title ?? "",
        excerpt: node?.excerpt ?? "",
        featuredImage: node?.featuredImage ?? null,
        featuredImageAlt: node?.featuredImageAlt ?? null,
      }
    }).filter((p) => p.slug && p.title)
  } catch {
    return FALLBACK_POSTS
  }
}

function BlogCard({
  slug,
  title,
  excerpt,
  featuredImage,
  featuredImageAlt,
}: {
  slug: string
  title: string
  excerpt: string
  featuredImage?: string | null
  featuredImageAlt?: string | null
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block rounded-2xl bg-card border border-border overflow-hidden hover:border-accent/50 transition"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-muted via-muted/80 to-background relative overflow-hidden">
        {featuredImage ? (
          <img
            src={featuredImage}
            alt={featuredImageAlt ?? title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="text-xs font-medium text-white/90 uppercase tracking-wider">
            Read more
          </span>
          <ArrowRight className="w-4 h-4 text-white opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
        </div>
      </div>
      <div className="p-6">
        <h2 className="font-semibold text-lg text-foreground group-hover:text-accent transition line-clamp-2 mb-2">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
      </div>
    </Link>
  )
}

export default async function BlogsPage() {
  const posts = await getPosts()

  return (
    <main className="bg-white text-foreground">
      <Header />

      {/* Hero / intro section */}
      <section className="border-b border-border bg-muted/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-card border border-border text-sm font-medium text-foreground mb-6">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            DeepURL{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover tips, tutorials, and the latest news on deep linking, mobile attribution, and growing your app with DeepURL.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              featuredImage={post.featuredImage}
              featuredImageAlt={post.featuredImageAlt}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
