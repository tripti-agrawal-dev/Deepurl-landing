import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "DeepUrl Privacy Policy: Data Security & Compliance",
  description: "Understand DeepUrl's data framework. We explain our telemetry, API security, and storage protocols clearly. No legal jargon—just transparent privacy.",
}

export default function PrivacyPage() {
  return (
    <main className="bg-white text-foreground">
      <Header />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            <strong>Last Updated:</strong> January 12, 2026<br />
            <strong>Effective Date:</strong> January 12, 2026
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Welcome to DeepUrl. We are the infrastructure that powers seamless connections between websites and mobile apps. 
              When you use our deep linking technology, APIs, SDKs, or visit our website (collectively, the "Services"), you are trusting us with your data. 
              We see ourselves as the guardians of that information, not just processors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We have written this Privacy Policy to explain exactly how DeepUrl Inc. ("we," "us," or "our") handles your personal and technical information. 
              Our goal is transparency: we want you to understand what we collect, why we need it to route your links effectively, and how we protect your digital footprint.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We know legal documents can be overwhelming, so we have drafted this policy in plain, accessible language. 
              This document applies to everyone interacting with our ecosystem—whether you are an Enterprise Client integrating our tools, a Developer using our documentation, or an End-User clicking a DeepUrl link.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">2. Data We Process</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To ensure your links function correctly across different devices and operating systems, we need to process specific data points. We categorize this data into three buckets:
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-3">A. Account & Administrative Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                This is information you consciously provide to set up your DeepUrl workspace:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Credentials:</strong> Your work email, GitHub/SSO login tokens, and developer dashboard passwords.</li>
                <li><strong>Billing Profiles:</strong> Invoicing addresses and payment tokens (Note: Raw credit card numbers are handled exclusively by our PCI-compliant payment partners like Stripe).</li>
                <li><strong>Support Queries:</strong> Debugging logs or screenshots you upload when opening a ticket with our engineering team.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-3">B. System-Generated Telemetry</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                When a user clicks a DeepUrl link, our servers perform a "handshake" to determine where to route them. During this millisecond process, we capture:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Digital Fingerprints:</strong> User-Agent strings, OS versions (iOS vs. Android), and browser engines.</li>
                <li><strong>Network Signals:</strong> IP addresses (used for geographic routing and fraud prevention) and carrier information.</li>
                <li><strong>Interaction Metrics:</strong> Timestamps of clicks, app-open success rates, and redirect latencies.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-3">C. Integration Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                If you link DeepUrl with external platforms, data flows between systems:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Attribution Partners:</strong> Data confirming if a link click resulted in an app install.</li>
                <li><strong>Analytics Suites:</strong> If you connect tools like Mixpanel or Google Analytics, we receive aggregated cohort data to visualize campaign performance.</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">3. Why We Need This Data</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not hoard data. Every byte we collect has a specific engineering or business function:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Intelligent Routing:</strong> We use device data to decide if a user should go to the App Store, Play Store, or a specific page inside your app.</li>
              <li><strong>Fraud Guard:</strong> Analyzing IP patterns helps us block bot farms from inflating your click analytics.</li>
              <li><strong>Platform Stability:</strong> Error logs help our DevOps team spot latency spikes or API failures in real-time.</li>
              <li><strong>Compliance & Updates:</strong> Sending you critical alerts regarding SDK deprecations or Terms of Service changes.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">4. Data Sharing & Third-Party Processors</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not run a marketplace for your data. DeepUrl does not sell personal user lists to data brokers. However, to keep our platform running, we work with the following types of infrastructure partners:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Cloud Infrastructure:</strong> Data is hosted on secure servers (e.g., AWS/GCP) that provide encryption and physical security.</li>
              <li><strong>Transaction Processors:</strong> For handling SaaS subscription billing.</li>
              <li><strong>Communication Relays:</strong> Services used to deliver transactional emails (like password resets).</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Legal Exception:</strong> We reserve the right to disclose data if compelled by a valid court order or to stop an active cyber-attack on our infrastructure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">5. User Sovereignty (Your Rights)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Regardless of where you are located, DeepUrl empowers you with control over your digital footprint:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
              <li><strong>The Right to Audit:</strong> You may request a complete export of the data logged under your account identifiers.</li>
              <li><strong>The Right to be Forgotten:</strong> You can request the permanent deletion of your account and associated logs from our active databases.</li>
              <li><strong>The Right to Limit:</strong> You can instruct us not to use your data for any non-essential purpose (like newsletter marketing).</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>For California Residents (CCPA/CPRA Statement):</strong> DeepUrl acknowledges that transferring data to analytics vendors can technically be classified as "sharing" under California law. We respect your right to opt-out. We do not discriminate against users who exercise their privacy rights.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Action Item:</strong> To exercise any of these rights, drop a request to our compliance team at{" "}
              <a href="mailto:privacy@deepurl.com" className="text-accent hover:underline">privacy@deepurl.com</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">6. Data Retention Protocols</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We adhere to a "Storage Limitation" principle.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Active Accounts:</strong> Data is kept as long as your subscription is active to provide historical analytics.</li>
              <li><strong>Deleted Accounts:</strong> Upon cancellation, data is moved to a "deletion queue" and purged within 30 days, retaining only what is strictly necessary for tax and legal records.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">7. Security Architecture</h2>
            <p className="text-muted-foreground leading-relaxed">
              We employ TLS 1.3 encryption for all data in transit (when links are clicked) and AES-256 encryption for data at rest (stored in our databases). Our engineering team performs quarterly vulnerability scans to patch potential exploits.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">8. Policy Updates</h2>
            <p className="text-muted-foreground leading-relaxed">
              Technology evolves fast. If we introduce new features (like AI-based predictive routing) that change how we handle data, we will update this document and notify you via the dashboard or email.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p><strong>DeepUrl Privacy Office</strong></p>
              <p>
                Email: <a href="mailto:privacy@deepurl.com" className="text-accent hover:underline">privacy@deepurl.com</a>
              </p>
              <p>
                Physical Mail: 16192 Coastal Highway, Lewes, Delaware 19958, United States.
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/" className="text-accent hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
