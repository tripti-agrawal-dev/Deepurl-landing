import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
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
      className="group card-lift block overflow-hidden rounded-3xl border border-border bg-card"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-[oklch(0.93_0.06_285)] via-[oklch(0.95_0.05_55)] to-[oklch(0.94_0.05_165)] relative overflow-hidden">
        {featuredImage ? (
          <img
            src={featuredImage}
            alt={featuredImageAlt ?? title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
        
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground">
            Read more
          </span>
          <ArrowRight className="size-8 rounded-full bg-primary p-2 text-primary-foreground opacity-0 -translate-x-1 transition group-hover:translate-x-0 group-hover:opacity-100" />
        </div>
      </div>
      <div className="p-6">
        <h2 className="font-display text-xl font-medium text-foreground group-hover:text-accent transition line-clamp-2 mb-2">
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
    <main className="bg-background text-foreground">
      <Header />

      <PageHero
        align="left"
        art="read"
        title="Insights on deep linking and mobile growth"
        description="Tips, tutorials and news on deep linking, mobile attribution, and growing your app with DeepURL."
      />

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
