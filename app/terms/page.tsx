import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Security | DeepUrl: User Agreement & Legal",
  description: "Read the official DeepUrl Terms of Security. Understand your rights, usage limits, and account responsibilities when using our deep linking platform.",
}

export default function TermsPage() {
  return (
    <main className="bg-white text-foreground">
      <Header />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Security</h1>
          <p className="text-muted-foreground mb-8">
            <strong>Last Updated:</strong> January 12, 2026<br />
            <strong>Effective Date:</strong> January 12, 2026
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">1. Introduction & Acceptance</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Welcome to DeepUrl. These Terms of Security ("Terms") constitute a legally binding agreement between DeepUrl Inc. ("DeepUrl," "we," "us," or "our") and you ("User," "you," or "Client").
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Please read these Terms carefully. They govern your access to and use of our website, API, SDKs, deep linking tools, and related services (collectively, the "Platform").
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By accessing our Platform, integrating our SDK, or clicking "I Agree," you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must immediately stop using our Services. We reserve the right to update these Terms at our sole discretion. Continued use after an update constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">2. Rules of Engagement (Usage Restrictions)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To maintain the integrity of our routing infrastructure, you agree to use the Platform responsibly. You must not use the Platform for any illegal purpose or in violation of any local, state, or international laws.
            </p>
            <div className="mb-4">
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong>Prohibited Activities:</strong> You agree that you will not (and will not allow any third party to):
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Compromise Infrastructure:</strong> Use any automated system (robots, spiders, scrapers) to access the Platform or burden our servers with excessive requests (DDoS).</li>
                <li><strong>Reverse Engineer:</strong> Attempt to decompile, disassemble, or derive the source code of our SDKs or deep linking algorithms.</li>
                <li><strong>Malicious Use:</strong> Upload or transmit viruses, worms, malware, or any code intended to damage or hijack hardware or software.</li>
                <li><strong>Unauthorized Access:</strong> Attempt to gain access to accounts, computer systems, or networks connected to DeepUrl through hacking or password mining.</li>
                <li><strong>Framing:</strong> Mirror or frame any part of the Site or Service without our prior written authorization.</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">3. Account Security & Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To access advanced features (like Link Analytics or API keys), you must register for an account.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Accuracy:</strong> You agree to provide true, accurate, and current information during registration.</li>
              <li><strong>Confidentiality:</strong> You are responsible for safeguarding your login credentials and API tokens. You must not share your account details with unauthorized parties.</li>
              <li><strong>Liability:</strong> You are solely responsible for all activities that occur under your account. If you suspect a breach, notify <a href="mailto:security@deepurl.com" className="text-accent hover:underline">security@deepurl.com</a> immediately.</li>
              <li><strong>Suspension:</strong> DeepUrl reserves the right to suspend or terminate accounts that violate these Terms or pose a security risk.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">4. Intellectual Property Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The DeepUrl Platform—including our source code, logos, visual interfaces, graphics, design, compilation, information, and all other elements—is the proprietary property of DeepUrl and its licensors.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Trademarks:</strong> The "DeepUrl" name and logo are trademarks of DeepUrl Inc. You may not use them without our express written permission.</li>
              <li><strong>No License:</strong> Nothing in these Terms grants you a license to use any of DeepUrl's intellectual property, except for the limited right to use the Service as expressly permitted.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">5. External Links & Third-Party Resources</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our Service primarily functions to route users to external destinations (apps, websites, or stores).
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>No Endorsement:</strong> DeepUrl does not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party websites or services you link to.</li>
              <li><strong>User Risk:</strong> You acknowledge that your access to and use of any third-party sites is at your own risk.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">6. Copyright Infringement</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We respect the intellectual property of others. If you believe that content routed through or hosted on DeepUrl infringes your copyright, please submit a notice pursuant to the Digital Millennium Copyright Act (DMCA).
            </p>
            <div className="bg-muted/30 border border-border rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Contact our Copyright Agent:</strong>
              </p>
              <ul className="list-none space-y-1 text-muted-foreground">
                <li>Email: <a href="mailto:legal@deepurl.com" className="text-accent hover:underline">legal@deepurl.com</a></li>
                <li>Subject: DMCA Takedown Request</li>
                <li>Address: DeepUrl Legal Dept, 16192 Coastal Highway, Lewes, Delaware 19958, United States</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3 text-sm">
                Please include sufficient details (URL, description of work) to allow us to locate the allegedly infringing material.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">7. Disclaimers</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>READ THIS CAREFULLY:</strong> THE DEEPURL PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, DEEPURL DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT ANY DEFECTS WILL BE CORRECTED.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL DEEPURL, ITS AFFILIATES, OFFICERS, OR EMPLOYEES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL) ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE OR SERVICES.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              THIS LIMITATION APPLIES WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF DEEPURL HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">9. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree to defend, indemnify, and hold harmless DeepUrl and its affiliates from and against any claims, damages, obligations, losses, liabilities, costs, and expenses (including attorney's fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Your use of and access to the Service.</li>
              <li>Your violation of any term of these Terms.</li>
              <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">10. Feedback & Suggestions</h2>
            <p className="text-muted-foreground leading-relaxed">
              We love hearing from our developer community. If you choose to submit comments, ideas, or feedback ("Feedback"), you agree that we are free to use them without any restriction or compensation to you. You grant us a perpetual, irrevocable, royalty-free license to use such Feedback to improve our Platform.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">11. General Provisions</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Governing Law:</strong> These Terms shall be governed by the laws of the State of Delaware, without respect to its conflict of laws principles.</li>
              <li><strong>Force Majeure:</strong> We are not liable for any failure to perform due to causes beyond our reasonable control, including acts of God, war, strikes, or internet service provider failures.</li>
              <li><strong>Assignment:</strong> You may not assign these Terms without our written consent. We may assign our rights freely.</li>
              <li><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">12. Contact Us</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>If you have questions regarding these Terms or the Platform, please contact our legal team:</p>
              <p>
                Email: <a href="mailto:legal@deepurl.com" className="text-accent hover:underline">legal@deepurl.com</a>
              </p>
              <p>
                Address: 16192 Coastal Highway, Lewes, Delaware 19958, United States.
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
