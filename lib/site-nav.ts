export type NavLink = { label: string; href: string; description?: string }

export const PRODUCT_LINKS: NavLink[] = [
  { label: "Features", href: "/features", description: "Deep linking, attribution and full-funnel tracking" },
  { label: "Link tester", href: "/link-tester", description: "See where a link sends people on iPhone, Android and desktop" },
  { label: "Integrations", href: "/integrations", description: "Ad platforms, app stores and your own stack" },
  { label: "How it works", href: "/#how-it-works", description: "From click to conversion in three steps" },
]

export const SOLUTION_LINKS: NavLink[] = [
  { label: "E-commerce", href: "/use-cases#e-commerce", description: "Send shoppers to the exact product" },
  { label: "SaaS and apps", href: "/use-cases#saas", description: "Onboarding links that land users signed in" },
  { label: "Creators and affiliates", href: "/use-cases#creators", description: "Branded links with accurate payouts" },
]

export const RESOURCE_LINKS: NavLink[] = [
  { label: "Documentation", href: "/docs", description: "Integrate smart links on web, Android and iOS" },
  { label: "Blog", href: "/blogs", description: "Guides on deep linking and attribution" },
  { label: "Support", href: "/support", description: "Get help from the team" },
]

export const LOGIN_URL = "https://dashboard.deepurls.com"
export const DEMO_URL = "/contact"
