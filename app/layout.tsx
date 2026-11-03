import type React from "react"
import type { Metadata } from "next"
import { Geist, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SITE_URL, canonical } from "@/lib/site-url"
import RedirectInvalidRoute from "@/components/redirect-invalid-route"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" })
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: canonical("/") },
  title: "Mobile Attribution & Deep Linking Platform | DeepURL",
  description: "Drive app growth with DeepURL's precise mobile attribution and seamless deep linking. Track every click, maximize ROI, and unify cross-platform journeys.",
  generator: "DeepURL Platform",
  icons: {
    icon: [
      {
        url: "/deepUrlIcon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/deepUrlIcon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/deepUrlIcon.png",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NZ2CKP9F');
            `,
          }}
        />
      </head>
      <body className={`${geist.variable} ${fraunces.variable} ${geist.className} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NZ2CKP9F"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        <RedirectInvalidRoute />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
