import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site-url"
import client from "@/tina/__generated__/client"
import { BLOG_SLUG_REDIRECTS } from "@/lib/blog-redirects"

export const dynamic = "force-static"

const BASE = SITE_URL.replace(/\/$/, "")

async function getBlogSlugs(): Promise<string[]> {
  try {
    const res = await client.queries.postConnection({ first: 500 })
    const edges = res.data?.postConnection?.edges ?? []
    return edges
      .map((e) => e?.node?._sys?.filename ?? e?.node?.slug)
      .filter(Boolean) as string[]
  } catch {
    return [...new Set(Object.values(BLOG_SLUG_REDIRECTS))]
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = await getBlogSlugs()
  const blogUrls: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE + "/", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: BASE + "/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/blogs", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: BASE + "/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: BASE + "/docs", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/privacy", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: BASE + "/support", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: BASE + "/terms", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ]

  return [...staticPages, ...blogUrls]
}
