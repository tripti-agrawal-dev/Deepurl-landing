import type { Metadata } from "next"
import Link from "next/link"
import { Cookie, Settings2, ShieldCheck } from "lucide-react"
import LegalLayout, { type LegalHighlight, type LegalSection } from "@/components/legal-layout"
import { canonical } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Cookie Policy | DeepURL",
  description:
    "How DeepURL uses cookies and similar technologies on its website, what each category is for, and how you can control them.",
  alternates: { canonical: canonical("/cookies") },
}

const categories = [
  {
    name: "Strictly necessary",
    purpose: "Keep the site working: security, load balancing and remembering basic interface choices.",
    control: "Cannot be switched off without breaking the site.",
  },
  {
    name: "Analytics and performance",
    purpose: "Show us which pages are visited and how the site performs so we can improve it.",
    control: "Block in your browser or opt out of Google Analytics.",
  },
  {
    name: "Tag management",
    purpose: "Our tag manager loads measurement tags. Any cookies set depend on the tags enabled at the time.",
    control: "Block in your browser or with a content blocker.",
  },
]

const highlights: LegalHighlight[] = [
  { icon: Cookie, title: "Only what we need", body: "A small set of cookies, grouped into clear categories." },
  { icon: Settings2, title: "You stay in control", body: "Block or delete cookies in your browser, or opt out of analytics." },
  { icon: ShieldCheck, title: "No data broker sales", body: "DeepURL does not sell personal user lists to data brokers." },
]

const sections: LegalSection[] = [
  {
    id: "what-are-cookies",
    title: "1. What are cookies?",
    body: (
      <>
        <p>
          Cookies are small text files that a website stores on your device. Similar technologies, such as local
          storage and pixels, do the same kind of job. They help a site remember your device, keep it secure and
          understand how it is used.
        </p>
        <p>
          This policy covers the DeepURL marketing website. It explains how we use these technologies there. How we
          handle personal data more broadly is described in our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-them",
    title: "2. How we use cookies",
    body: (
      <>
        <p>We keep our use of cookies small and group it into the categories below.</p>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[34rem] text-left text-sm">
            <thead className="bg-muted text-foreground">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Category</th>
                <th scope="col" className="px-4 py-3 font-semibold">What it is for</th>
                <th scope="col" className="px-4 py-3 font-semibold">Your control</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {categories.map((row) => (
                <tr key={row.name} className="align-top">
                  <th scope="row" className="px-4 py-3 font-medium text-foreground">{row.name}</th>
                  <td className="px-4 py-3">{row.purpose}</td>
                  <td className="px-4 py-3">{row.control}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          As our <Link href="/privacy">Privacy Policy</Link> explains, DeepURL does not sell personal user lists to
          data brokers.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "3. Third-party services",
    body: (
      <>
        <p>Some measurement on this website is provided by third parties acting on our behalf:</p>
        <ul>
          <li>
            <strong>Google Tag Manager:</strong> loads the measurement tags we configure. Depending on those tags,
            analytics cookies such as those used by Google Analytics may be set.
          </li>
          <li>
            <strong>Vercel Web Analytics:</strong> gives us aggregate page-view statistics about the site.
          </li>
        </ul>
        <p>
          These providers have their own privacy practices, which we encourage you to read. The exact list of cookies
          can change when we add or remove tags, so we describe categories here rather than individual cookie names.
        </p>
      </>
    ),
  },
  {
    id: "dashboard-and-links",
    title: "4. DeepURL links and the dashboard",
    body: (
      <>
        <p>
          This policy is about our website. When someone clicks a DeepURL smart link, we process technical signals
          such as device type and operating system to route them to the right place. That processing is described in
          the <Link href="/privacy">Privacy Policy</Link>.
        </p>
        <p>
          The customer dashboard may use cookies or similar storage to keep you signed in securely. Those are
          strictly necessary for the service you asked for.
        </p>
      </>
    ),
  },
  {
    id: "your-choices",
    title: "5. Your choices",
    body: (
      <>
        <p>You can control cookies in several ways:</p>
        <ul>
          <li>
            <strong>Browser settings:</strong> most browsers let you block or delete cookies. Blocking strictly
            necessary cookies may stop parts of a site from working.
          </li>
          <li>
            <strong>Google Analytics opt-out:</strong> Google provides a{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              browser add-on
            </a>{" "}
            that stops your visits being used by Google Analytics.
          </li>
          <li>
            <strong>Do Not Track and privacy tools:</strong> content blockers and privacy-focused browsers can limit
            measurement tags.
          </li>
        </ul>
        <p>
          Deleting cookies only affects the device and browser you are using, so repeat the steps on each one you
          use.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "6. Changes to this policy",
    body: (
      <p>
        We may update this policy when our website or the services behind it change. The date at the top of this page
        shows when it was last revised. Material changes will be reflected here before they take effect.
      </p>
    ),
  },
  {
    id: "contact",
    title: "7. Contact us",
    body: (
      <>
        <p>
          Questions about this policy or your data? Email{" "}
          <a href="mailto:privacy@deepurl.com">privacy@deepurl.com</a> or use our{" "}
          <Link href="/contact">contact page</Link>.
        </p>
        <p>
          <strong>DeepUrl Privacy Office</strong>
          <br />
          16192 Coastal Highway, Lewes, Delaware 19958, United States.
        </p>
      </>
    ),
  },
]

export default function CookiesPage() {
  return (
    <LegalLayout
      highlights={highlights}
      title="Cookie Policy"
      description="What cookies and similar technologies we use on the DeepURL website, why, and how you stay in control."
      updated="November 5, 2026"
      currentHref="/cookies"
      sections={sections}
    />
  )
}
