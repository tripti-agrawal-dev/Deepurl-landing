import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, Settings, Link2, Smartphone, Code, BarChart3 } from "lucide-react"
import { canonical } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Deep Link Integration Documentation | DeepURL",
  description:
    "End-to-end guide to integrate smart deep links across Web, Android, and iOS.",
  alternates: { canonical: canonical("/docs") },
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="rounded-lg border border-border bg-muted/50 p-4 text-sm font-mono overflow-x-auto my-4">
      <code>{children}</code>
    </pre>
  )
}

export default function DocsPage() {
  return (
    <main className="bg-white text-foreground">
      <Header />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Deep Link Integration Documentation
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          End-to-end guide to integrate smart deep links across Web, Android, and iOS.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="size-6 text-primary" />
            Overview
          </h2>
          <h3 className="text-lg font-semibold mb-2">What this system provides</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This deep link platform lets you generate a single smart link that automatically routes users to the correct destination based on their platform — Web, Android, or iOS.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            It also provides click analytics, referrer tracking, link activation control, user-created campaigns, UTM tracking, and SDK-based link generation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Settings className="size-6 text-primary" />
            Getting Started
          </h2>
          <h3 className="text-lg font-semibold mb-4">Initial setup required before using deep links</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="shrink-0 flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                1
              </span>
              <div>
                <p className="font-medium mb-1">Create an app from the dashboard with:</p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-2">
                  <li>App Name</li>
                  <li>Domain (or subdomain)</li>
                  <li>Web Fallback URL</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="shrink-0 flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                2
              </span>
              <div>
                <p className="font-medium mb-1">Point your domain to our deep link resolver.</p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-2">
                  <li>Use <strong>A record</strong> (217.160.164.246) or <strong>CNAME</strong> (links.deepurls.com)</li>
                  <li>Target the provided resolver endpoint</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="shrink-0 flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                3
              </span>
              <div>
                <p className="font-medium mb-1">Once DNS is configured, your domain is ready to serve deep links.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Link2 className="size-6 text-primary" />
            How Deep Links Work
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
            <li>User clicks a deep link</li>
            <li>Platform is detected automatically</li>
            <li>App opens if installed</li>
            <li>Otherwise fallback URL is used</li>
            <li>Click analytics and conversion tracking are recorded</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Deep Link Format</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            All links use the <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">/u/*</code> path. This allows your app to handle any dynamic route or query parameters:
          </p>
          <CodeBlock>
            {`https://yourdomain.com/u/mycampaign?utm_source=newsletter&utm_medium=email&appid=XYZ&_lid=abc123`}
          </CodeBlock>
          <p className="text-sm text-muted-foreground">
            <strong>slug / route</strong> · <strong>params / UTM</strong> · <strong>preview metadata</strong> · short or long link
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="size-6 text-primary" />
            SDK Usage
          </h2>
          <h3 className="text-lg font-semibold mb-2">Generating links programmatically</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Use the SDK to generate short or long links using:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
            <li>Route (like mycampaign)</li>
            <li>Custom parameters or UTM codes</li>
            <li>Preview metadata (title, description, image)</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            SDK configuration is provided in the dashboard and must be used during initialization.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Smartphone className="size-6 text-primary" />
            Android Integration
          </h2>
          <h3 className="text-lg font-semibold mb-2">Required Android App Links configuration</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Android requires an intent-filter with HTTPS and your domain. <strong>Important:</strong> You must explicitly add your domain and the app path(s) to handle.
          </p>
          <CodeBlock>
            {`<intent-filter android:autoVerify="true">
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
  <data
    android:scheme="https"
    android:host="yourdomain.com"
    android:pathPrefix="path" />
</intent-filter>`}
          </CodeBlock>
          <p className="text-muted-foreground leading-relaxed">
            Add every domain/path combination your app should handle. This ensures Android correctly routes users to your app instead of fallback URLs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Smartphone className="size-6 text-primary" />
            iOS Integration
          </h2>
          <h3 className="text-lg font-semibold mb-2">Universal Links (App)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Enabling Associated Domains in Xcode (app-side).
          </p>
          <h4 className="font-semibold mb-2">Associated Domains Capability in Xcode</h4>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In Xcode, go to <strong>Target → Signing &amp; Capabilities → + Capability → Associated Domains</strong> and add your domain(s):
          </p>
          <CodeBlock>
            applinks:your-domain.com
          </CodeBlock>
          <p className="text-muted-foreground leading-relaxed">
            Include all domains your app should handle. Without adding them, Universal Links will not work.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="size-6 text-primary" />
            Analytics, Campaigns &amp; Link Control
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Each link automatically tracks:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
            <li>Clicks and platform (Web/Android/iOS)</li>
            <li>Referrer &amp; UTM parameters</li>
            <li>Timestamp</li>
            <li>Conversion status</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Users can create their own campaigns, add custom query parameters, preview metadata, and generate short or long links.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Links can be activated, deactivated, or deleted at any time via the dashboard or API.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-muted/30 p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Ready to create your first deep link?</h2>
          <p className="text-muted-foreground mb-6">
            Start by creating your app and configuring the domain.
          </p>
          <Button asChild size="lg">
            <a href="https://dashboard.deepurls.com" target="_blank" rel="noopener noreferrer">
              Create App
            </a>
          </Button>
        </section>
      </article>
      <Footer />
    </main>
  )
}
