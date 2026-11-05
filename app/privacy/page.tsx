import type { Metadata } from "next"
import { Database, Scale, ShieldCheck } from "lucide-react"
import LegalLayout, { type LegalHighlight, type LegalSection } from "@/components/legal-layout"
import { canonical } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "DeepUrl Privacy Policy: Data Security & Compliance",
  description: "Understand DeepUrl's data framework. We explain our telemetry, API security, and storage protocols clearly. No legal jargon—just transparent privacy.",
  alternates: { canonical: canonical("/privacy") },
}

const highlights: LegalHighlight[] = [
  { icon: Database, title: "Only what routing needs", body: "We collect data for routing, fraud prevention and platform stability." },
  { icon: ShieldCheck, title: "Encrypted end to end", body: "TLS 1.3 in transit and AES-256 at rest." },
  { icon: Scale, title: "Your rights, your call", body: "Request an export or permanent deletion of your data any time." },
]

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    body: (
      <>
<p className="text-muted-foreground leading-relaxed">
              Welcome to DeepUrl. We are the infrastructure that powers seamless connections between websites and mobile apps. 
              When you use our deep linking technology, APIs, SDKs, or visit our website (collectively, the "Services"), you are trusting us with your data. 
              We see ourselves as the guardians of that information, not just processors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We have written this Privacy Policy to explain exactly how DeepUrl Inc. ("we," "us," or "our") handles your personal and technical information. 
              Our goal is transparency: we want you to understand what we collect, why we need it to route your links effectively, and how we protect your digital footprint.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We know legal documents can be overwhelming, so we have drafted this policy in plain, accessible language. 
              This document applies to everyone interacting with our ecosystem—whether you are an Enterprise Client integrating our tools, a Developer using our documentation, or an End-User clicking a DeepUrl link.
            </p>
      </>
    ),
  },
  {
    id: "data-we-process",
    title: "2. Data We Process",
    body: (
      <>
<p className="text-muted-foreground leading-relaxed">
              To ensure your links function correctly across different devices and operating systems, we need to process specific data points. We categorize this data into three buckets:
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">A. Account & Administrative Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                This is information you consciously provide to set up your DeepUrl workspace:
              </p>
              <ul className="text-muted-foreground">
                <li><strong>Credentials:</strong> Your work email, GitHub/SSO login tokens, and developer dashboard passwords.</li>
                <li><strong>Billing Profiles:</strong> Invoicing addresses and payment tokens (Note: Raw credit card numbers are handled exclusively by our PCI-compliant payment partners like Stripe).</li>
                <li><strong>Support Queries:</strong> Debugging logs or screenshots you upload when opening a ticket with our engineering team.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">B. System-Generated Telemetry</h3>
              <p className="text-muted-foreground leading-relaxed">
                When a user clicks a DeepUrl link, our servers perform a "handshake" to determine where to route them. During this millisecond process, we capture:
              </p>
              <ul className="text-muted-foreground">
                <li><strong>Digital Fingerprints:</strong> User-Agent strings, OS versions (iOS vs. Android), and browser engines.</li>
                <li><strong>Network Signals:</strong> IP addresses (used for geographic routing and fraud prevention) and carrier information.</li>
                <li><strong>Interaction Metrics:</strong> Timestamps of clicks, app-open success rates, and redirect latencies.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">C. Integration Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you link DeepUrl with external platforms, data flows between systems:
              </p>
              <ul className="text-muted-foreground">
                <li><strong>Attribution Partners:</strong> Data confirming if a link click resulted in an app install.</li>
                <li><strong>Analytics Suites:</strong> If you connect tools like Mixpanel or Google Analytics, we receive aggregated cohort data to visualize campaign performance.</li>
              </ul>
            </div>
      </>
    ),
  },
  {
    id: "why-we-need-this-data",
    title: "3. Why We Need This Data",
    body: (
      <>
<p className="text-muted-foreground leading-relaxed">
              We do not hoard data. Every byte we collect has a specific engineering or business function:
            </p>
            <ul className="text-muted-foreground">
              <li><strong>Intelligent Routing:</strong> We use device data to decide if a user should go to the App Store, Play Store, or a specific page inside your app.</li>
              <li><strong>Fraud Guard:</strong> Analyzing IP patterns helps us block bot farms from inflating your click analytics.</li>
              <li><strong>Platform Stability:</strong> Error logs help our DevOps team spot latency spikes or API failures in real-time.</li>
              <li><strong>Compliance & Updates:</strong> Sending you critical alerts regarding SDK deprecations or Terms of Service changes.</li>
            </ul>
      </>
    ),
  },
  {
    id: "data-sharing-and-third-party-processors",
    title: "4. Data Sharing & Third-Party Processors",
    body: (
      <>
<p className="text-muted-foreground leading-relaxed">
              We do not run a marketplace for your data. DeepUrl does not sell personal user lists to data brokers. However, to keep our platform running, we work with the following types of infrastructure partners:
            </p>
            <ul className="text-muted-foreground">
              <li><strong>Cloud Infrastructure:</strong> Data is hosted on secure servers (e.g., AWS/GCP) that provide encryption and physical security.</li>
              <li><strong>Transaction Processors:</strong> For handling SaaS subscription billing.</li>
              <li><strong>Communication Relays:</strong> Services used to deliver transactional emails (like password resets).</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Legal Exception:</strong> We reserve the right to disclose data if compelled by a valid court order or to stop an active cyber-attack on our infrastructure.
            </p>
      </>
    ),
  },
  {
    id: "user-sovereignty-your-rights",
    title: "5. User Sovereignty (Your Rights)",
    body: (
      <>
<p className="text-muted-foreground leading-relaxed">
              Regardless of where you are located, DeepUrl empowers you with control over your digital footprint:
            </p>
            <ul className="text-muted-foreground">
              <li><strong>The Right to Audit:</strong> You may request a complete export of the data logged under your account identifiers.</li>
              <li><strong>The Right to be Forgotten:</strong> You can request the permanent deletion of your account and associated logs from our active databases.</li>
              <li><strong>The Right to Limit:</strong> You can instruct us not to use your data for any non-essential purpose (like newsletter marketing).</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              <strong>For California Residents (CCPA/CPRA Statement):</strong> DeepUrl acknowledges that transferring data to analytics vendors can technically be classified as "sharing" under California law. We respect your right to opt-out. We do not discriminate against users who exercise their privacy rights.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Action Item:</strong> To exercise any of these rights, drop a request to our compliance team at{" "}
              <a href="mailto:privacy@deepurl.com" className="text-accent hover:underline">privacy@deepurl.com</a>.
            </p>
      </>
    ),
  },
  {
    id: "data-retention-protocols",
    title: "6. Data Retention Protocols",
    body: (
      <>
<p className="text-muted-foreground leading-relaxed">
              We adhere to a "Storage Limitation" principle.
            </p>
            <ul className="text-muted-foreground">
              <li><strong>Active Accounts:</strong> Data is kept as long as your subscription is active to provide historical analytics.</li>
              <li><strong>Deleted Accounts:</strong> Upon cancellation, data is moved to a "deletion queue" and purged within 30 days, retaining only what is strictly necessary for tax and legal records.</li>
            </ul>
      </>
    ),
  },
  {
    id: "security-architecture",
    title: "7. Security Architecture",
    body: (
      <>
<p className="text-muted-foreground leading-relaxed">
              We employ TLS 1.3 encryption for all data in transit (when links are clicked) and AES-256 encryption for data at rest (stored in our databases). Our engineering team performs quarterly vulnerability scans to patch potential exploits.
            </p>
      </>
    ),
  },
  {
    id: "policy-updates",
    title: "8. Policy Updates",
    body: (
      <>
<p className="text-muted-foreground leading-relaxed">
              Technology evolves fast. If we introduce new features (like AI-based predictive routing) that change how we handle data, we will update this document and notify you via the dashboard or email.
            </p>
      </>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    body: (
      <>
<div className="text-muted-foreground leading-relaxed space-y-2">
              <p><strong>DeepUrl Privacy Office</strong></p>
              <p>
                Email: <a href="mailto:privacy@deepurl.com" className="text-accent hover:underline">privacy@deepurl.com</a>
              </p>
              <p>
                Physical Mail: 16192 Coastal Highway, Lewes, Delaware 19958, United States.
              </p>
            </div>
      </>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <LegalLayout
      highlights={highlights}
      title="Privacy Policy"
      description="How DeepUrl collects, uses and protects data across our website, SDKs and links, written in plain language."
      updated="January 12, 2026"
      currentHref="/privacy"
      sections={sections}
    />
  )
}
