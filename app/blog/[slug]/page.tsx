import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"
import client from "@/tina/__generated__/client"

const FALLBACK_SLUG = "deep-linking-best-practices-2026"

type Props = { params: Promise<{ slug: string }> }

async function getSlugs(): Promise<{ slug: string }[]> {
  try {
    const res = await client.queries.postConnection({ first: 100 })
    const edges = res.data?.postConnection?.edges ?? []
    if (edges.length === 0) return [{ slug: FALLBACK_SLUG }]
    return edges.map((edge) => {
      const node = edge?.node
      const slug = node?.slug ?? node?._sys?.filename ?? ""
      return { slug }
    }).filter((p) => p.slug)
  } catch {
    return [{ slug: FALLBACK_SLUG }]
  }
}

export async function generateStaticParams() {
  return getSlugs()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const res = await client.queries.post({ relativePath: `${slug}.mdx` })
    const post = res.data?.post
    if (!post) return { title: "Blog | DeepURL" }
    const meta = post.seo
    return {
      title: meta?.metaTitle ?? `${post.title} | DeepURL Blog`,
      description: meta?.metaDescription ?? post.excerpt ?? "Read more on the DeepURL blog.",
    }
  } catch {
    return { title: "Blog | DeepURL" }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  let post: { title: string; excerpt?: string | null; body?: unknown } | null = null
  try {
    const res = await client.queries.post({ relativePath: `${slug}.mdx` })
    post = res.data?.post ?? null
  } catch {
    // fallback for static export when Tina not running: show placeholder for known demo slug
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
        {post.body != null ? (
          <div className="prose prose-lg max-w-none text-foreground">
            {/* Tina rich-text body can be rendered here with @tinacms/cli or a custom renderer */}
            <p className="text-muted-foreground">
            Full post content is available when viewing with Tina CMS. Add MDX files under{" "}
              <code className="text-foreground bg-muted px-1 rounded">content/posts</code> and run the Tina server to edit.
            </p>
          </div>
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
