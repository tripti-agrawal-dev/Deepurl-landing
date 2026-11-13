"use client"

import { Star } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const testimonials = [
  {
    quote:
      "DeepURL solved our biggest headache: broken user journeys. Their reliable deep linking technology bridged the gap between our mobile web and app seamlessly. We saw an immediate uplift in retention because users finally landed exactly where they wanted to be—without any friction.",
    name: "Sarah Jenkins",
    title: "VP of Product",
    company: "FinTech Now",
    location: "San Francisco, USA",
  },
  {
    quote:
      "The clarity DeepURL provides is unmatched. We stopped guessing which campaigns were driving value and started trusting the data. Their accurate attribution model gave us the confidence to double our ad spend and hit record growth in Q4. It's the only truth we trust.",
    name: "David Chen",
    title: "Head of Growth Marketing",
    company: "ShopSwift",
    location: "London, UK",
  },
  {
    quote:
      "DeepURL is the backbone of our omni-channel strategy. Whether it's email, social, or paid ads, the linking is flawless. We now have a single source of truth for the entire user journey, allowing us to personalize experiences from the first click to the final purchase.",
    name: "James O'Sullivan",
    title: "Chief Marketing Officer",
    company: "TravelSphere",
    location: "Sydney, Australia",
  },
  {
    quote:
      "What sets DeepURL apart isn't just the robust tech—it's the partnership. They understand the nuances of the mobile ecosystem better than anyone. Integrating their SDK was effortless, and their insights helped us identify opportunities we didn't even know existed.",
    name: "Emily Ross",
    title: "Senior Director of Engineering",
    company: "StreamLine Media",
    location: "Toronto, Canada",
  },
  {
    quote:
      "Before DeepURL, we were flying blind on mobile ROI. Now, we track every install back to its source with pinpoint accuracy. It's rare to find a platform that combines such reliable infrastructure with detailed analytics that actually move the needle for our business.",
    name: "Michael Bauer",
    title: "Lead Product Manager",
    company: "HealthPulse",
    location: "Berlin, Germany",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 section-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trusted by industry leaders"
          description="See how teams around the world use DeepURL to drive growth."
        />

        <div className="relative mt-14 px-8 md:px-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="flex h-full flex-col card-lift rounded-3xl border border-border bg-card p-7">
                    <div className="mb-4 flex gap-0.5 text-amber-500" aria-hidden="true">
                      {[0, 1, 2, 3, 4].map((n) => (
                        <Star key={n} className="size-4 fill-current" />
                      ))}
                    </div>
                    <p className="mb-6 flex-grow leading-relaxed text-foreground/80">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 border-t border-border pt-4">
                      <span className={`flex size-11 shrink-0 items-center justify-center rounded-full font-display text-lg ${["tint-peach", "tint-lavender", "tint-mint", "tint-sky"][index % 4]}`} aria-hidden="true">
                        {testimonial.name.charAt(0)}
                      </span>
                      <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}, {testimonial.company}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12" />
            <CarouselNext className="right-0 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
