import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PhoneMock from "@/components/phone-mock"
import { DEMO_URL } from "@/lib/site-nav"

export default function FooterCTA() {
  return (
    <section className="px-4 pb-16 pt-4 sm:px-6 md:pb-20 lg:px-8">
      <div className="panel-aurora relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] px-6 py-14 sm:px-10 md:py-20 lg:grid-cols-12 lg:px-16">
        <div className="lg:col-span-7">
          <h2 className="max-w-2xl text-balance text-4xl leading-[1.05] md:text-6xl">
            Ready to turn your clicks <span className="text-gradient italic">into growth?</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Join the teams using DeepURL to deliver seamless experiences and drive revenue.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={DEMO_URL} className="btn-primary inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium text-primary-foreground">
              Request a demo
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/link-tester" className="btn-ghost inline-flex h-12 items-center justify-center rounded-full border border-foreground/15 bg-card px-7 text-sm font-medium">
              Try the link tester
            </Link>
          </div>
        </div>
        <div className="relative hidden h-72 lg:col-span-5 lg:block">
          <PhoneMock className="float-b absolute left-1/2 top-4 -translate-x-1/2 -rotate-6 scale-90" />
        </div>
      </div>
    </section>
  )
}
