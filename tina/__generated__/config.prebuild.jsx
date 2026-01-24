// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.NEXT_PUBLIC_BRANCH || process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ==========================================
      // GLOBAL SETTINGS
      // ==========================================
      {
        name: "globalSettings",
        label: "Global Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          // Navigation Menu
          {
            type: "object",
            name: "navigation",
            label: "Navigation Menu",
            fields: [
              {
                type: "object",
                name: "menuItems",
                label: "Menu Items",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.label || "Menu Item" })
                },
                fields: [
                  { type: "string", name: "label", label: "Label", required: true },
                  { type: "string", name: "href", label: "Link URL", required: true },
                  { type: "boolean", name: "isExternal", label: "Open in new tab" }
                ]
              }
            ]
          },
          // Footer Management
          {
            type: "object",
            name: "footer",
            label: "Footer Management",
            fields: [
              { type: "string", name: "copyrightText", label: "Copyright Text" },
              {
                type: "object",
                name: "socialLinks",
                label: "Social Media Links",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.platform || "Social Link" })
                },
                fields: [
                  { type: "string", name: "platform", label: "Platform Name" },
                  { type: "string", name: "url", label: "URL" }
                ]
              },
              {
                type: "object",
                name: "footerMenus",
                label: "Footer Menu Sections",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.title || "Menu Section" })
                },
                fields: [
                  { type: "string", name: "title", label: "Section Title" },
                  {
                    type: "object",
                    name: "links",
                    label: "Links",
                    list: true,
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "href", label: "URL" }
                    ]
                  }
                ]
              }
            ]
          },
          // Global SEO
          {
            type: "object",
            name: "seo",
            label: "Global SEO",
            fields: [
              { type: "string", name: "defaultTitle", label: "Default Meta Title" },
              { type: "string", name: "defaultDescription", label: "Default Meta Description", ui: { component: "textarea" } },
              { type: "image", name: "favicon", label: "Favicon" },
              { type: "image", name: "ogImage", label: "Default OG Image" }
            ]
          }
        ]
      },
      // ==========================================
      // BLOG / ARTICLES
      // ==========================================
      {
        name: "post",
        label: "Blog / Articles",
        path: "content/posts",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "slug", label: "URL Slug", required: true },
          { type: "image", name: "featuredImage", label: "Featured Image" },
          { type: "string", name: "featuredImageAlt", label: "Featured Image Alt Text" },
          { type: "string", name: "author", label: "Author" },
          { type: "datetime", name: "publishDate", label: "Publish Date" },
          { type: "string", name: "excerpt", label: "Excerpt", ui: { component: "textarea" } },
          {
            type: "object",
            name: "seo",
            label: "Advanced SEO",
            fields: [
              { type: "string", name: "metaTitle", label: "Meta Title" },
              { type: "string", name: "metaDescription", label: "Meta Description", ui: { component: "textarea" } },
              { type: "string", name: "canonicalUrl", label: "Canonical URL" }
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "VideoEmbed",
                label: "Video Embed",
                fields: [
                  { type: "string", name: "url", label: "YouTube/Vimeo URL", required: true },
                  { type: "string", name: "title", label: "Video Title" }
                ]
              }
            ]
          }
        ],
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`
        }
      },
      // ==========================================
      // HOMEPAGE
      // ==========================================
      {
        name: "homepage",
        label: "Homepage",
        path: "content/pages",
        format: "json",
        match: {
          include: "home"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          // Hero Section
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "headline", label: "Headline", required: true },
              { type: "string", name: "subheadline", label: "Sub-headline", ui: { component: "textarea" } },
              { type: "image", name: "backgroundImage", label: "Background Image" },
              { type: "string", name: "backgroundVideo", label: "Background Video URL" },
              {
                type: "object",
                name: "primaryCta",
                label: "Primary CTA Button",
                fields: [
                  { type: "string", name: "text", label: "Button Text" },
                  { type: "string", name: "link", label: "Button Link" }
                ]
              },
              {
                type: "object",
                name: "secondaryCta",
                label: "Secondary CTA Button",
                fields: [
                  { type: "string", name: "text", label: "Button Text" },
                  { type: "string", name: "link", label: "Button Link" }
                ]
              }
            ]
          },
          // Social Proof
          {
            type: "object",
            name: "socialProof",
            label: "Social Proof (Trusted By)",
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              {
                type: "object",
                name: "logos",
                label: "Company Logos",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.name || "Logo" })
                },
                fields: [
                  { type: "string", name: "name", label: "Company Name" },
                  { type: "image", name: "logo", label: "Logo Image" }
                ]
              }
            ]
          },
          // Features Grid
          {
            type: "object",
            name: "features",
            label: "Features Grid",
            fields: [
              { type: "string", name: "sectionTitle", label: "Section Title" },
              { type: "string", name: "sectionSubtitle", label: "Section Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "featureCards",
                label: "Feature Cards",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.title || "Feature" })
                },
                fields: [
                  { type: "string", name: "icon", label: "Icon Name (Lucide icon)" },
                  { type: "string", name: "title", label: "Title", required: true },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // Problem Section
          {
            type: "object",
            name: "problem",
            label: "Problem Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "problems",
                label: "Problem Items",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description" }
                ]
              },
              { type: "string", name: "closingText", label: "Closing Text" }
            ]
          },
          // Solution Section
          {
            type: "object",
            name: "solution",
            label: "Solution Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subheadline", label: "Sub-headline" },
              {
                type: "object",
                name: "solutions",
                label: "Solution Items",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "fix", label: "The Fix", ui: { component: "textarea" } },
                  { type: "string", name: "result", label: "Result" }
                ]
              }
            ]
          },
          // Impact Section
          {
            type: "object",
            name: "impact",
            label: "Impact Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subheadline", label: "Sub-headline" },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                fields: [
                  { type: "string", name: "value", label: "Value (e.g., 3x, 180%)" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "description", label: "Description" }
                ]
              }
            ]
          },
          // Use Cases
          {
            type: "object",
            name: "useCases",
            label: "Use Cases Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              {
                type: "object",
                name: "cases",
                label: "Use Case Cards",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "win", label: "The Win", ui: { component: "textarea" } },
                  { type: "string", name: "outcome", label: "Outcome" }
                ]
              }
            ]
          },
          // Comparison Section
          {
            type: "object",
            name: "comparison",
            label: "Comparison Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subheadline", label: "Sub-headline" },
              {
                type: "object",
                name: "rows",
                label: "Comparison Rows",
                list: true,
                fields: [
                  { type: "string", name: "feature", label: "Feature" },
                  { type: "string", name: "deepurl", label: "DeepURL" },
                  { type: "string", name: "competitors", label: "Competitors" }
                ]
              }
            ]
          },
          // How It Works
          {
            type: "object",
            name: "howItWorks",
            label: "How It Works Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Step Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // FAQ Section
          {
            type: "object",
            name: "faq",
            label: "FAQ Section",
            fields: [
              { type: "string", name: "headline", label: "Section Headline" },
              {
                type: "object",
                name: "questions",
                label: "FAQ Items",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.question || "Question" })
                },
                fields: [
                  { type: "string", name: "question", label: "Question", required: true },
                  { type: "string", name: "answer", label: "Answer", required: true, ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // Footer CTA
          {
            type: "object",
            name: "footerCta",
            label: "Footer CTA Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "buttonText", label: "Button Text" },
              { type: "string", name: "buttonLink", label: "Button Link" }
            ]
          }
        ]
      },
      // ==========================================
      // SAAS PAGES - PRICING
      // ==========================================
      {
        name: "pricing",
        label: "Pricing Page",
        path: "content/pages",
        format: "json",
        match: {
          include: "pricing"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          { type: "string", name: "headline", label: "Headline" },
          { type: "string", name: "subheadline", label: "Sub-headline", ui: { component: "textarea" } },
          { type: "string", name: "monthlyLabel", label: "Monthly Toggle Label" },
          { type: "string", name: "yearlyLabel", label: "Yearly Toggle Label" },
          {
            type: "object",
            name: "plans",
            label: "Pricing Plans",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name || "Plan" })
            },
            fields: [
              { type: "string", name: "name", label: "Plan Name", required: true },
              { type: "string", name: "description", label: "Description" },
              { type: "string", name: "priceLabel", label: "Price Label (e.g., STARTING AT)" },
              { type: "string", name: "price", label: "Price" },
              { type: "string", name: "period", label: "Period (e.g., /month)" },
              { type: "string", name: "volume", label: "Volume Text" },
              { type: "boolean", name: "highlighted", label: "Highlight this plan" },
              {
                type: "string",
                name: "features",
                label: "Features",
                list: true
              },
              { type: "string", name: "ctaText", label: "CTA Button Text" },
              { type: "string", name: "ctaLink", label: "CTA Button Link" }
            ]
          }
        ]
      },
      // ==========================================
      // COMPANY - TESTIMONIALS
      // ==========================================
      {
        name: "testimonial",
        label: "Testimonials",
        path: "content/testimonials",
        format: "json",
        fields: [
          { type: "string", name: "name", label: "Client Name", isTitle: true, required: true },
          { type: "string", name: "title", label: "Job Title" },
          { type: "string", name: "company", label: "Company" },
          { type: "string", name: "location", label: "Location" },
          { type: "image", name: "photo", label: "Photo" },
          { type: "string", name: "quote", label: "Review Text", required: true, ui: { component: "textarea" } },
          { type: "number", name: "rating", label: "Rating (1-5)" }
        ]
      },
      // ==========================================
      // COMPANY - ABOUT US / TEAM
      // ==========================================
      {
        name: "teamMember",
        label: "Team Members",
        path: "content/team",
        format: "json",
        fields: [
          { type: "string", name: "name", label: "Name", isTitle: true, required: true },
          { type: "string", name: "role", label: "Role/Position" },
          { type: "image", name: "photo", label: "Photo" },
          { type: "string", name: "bio", label: "Bio", ui: { component: "textarea" } },
          {
            type: "object",
            name: "social",
            label: "Social Links",
            fields: [
              { type: "string", name: "linkedin", label: "LinkedIn URL" },
              { type: "string", name: "twitter", label: "Twitter URL" }
            ]
          }
        ]
      },
      {
        name: "aboutPage",
        label: "About Us Page",
        path: "content/pages",
        format: "json",
        match: {
          include: "about"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          { type: "string", name: "headline", label: "Headline" },
          { type: "rich-text", name: "mainContent", label: "Main Content" },
          { type: "string", name: "teamSectionTitle", label: "Team Section Title" }
        ]
      },
      // ==========================================
      // LEGAL PAGES
      // ==========================================
      {
        name: "legalPage",
        label: "Legal Pages",
        path: "content/legal",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Page Title", isTitle: true, required: true },
          { type: "string", name: "slug", label: "URL Slug", required: true },
          { type: "datetime", name: "lastUpdated", label: "Last Updated" },
          { type: "datetime", name: "effectiveDate", label: "Effective Date" },
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              { type: "string", name: "metaTitle", label: "Meta Title" },
              { type: "string", name: "metaDescription", label: "Meta Description", ui: { component: "textarea" } }
            ]
          },
          { type: "rich-text", name: "body", label: "Content", isBody: true }
        ],
        ui: {
          router: ({ document }) => `/${document._sys.filename}`
        }
      },
      // ==========================================
      // DOCUMENTATION
      // ==========================================
      {
        name: "docPage",
        label: "Documentation",
        path: "content/docs",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "slug", label: "URL Slug", required: true },
          { type: "number", name: "order", label: "Order in Sidebar" },
          { type: "string", name: "category", label: "Category" },
          { type: "rich-text", name: "body", label: "Content", isBody: true }
        ],
        ui: {
          router: ({ document }) => `/docs/${document._sys.filename}`
        }
      }
    ]
  }
});
export {
  config_default as default
};
