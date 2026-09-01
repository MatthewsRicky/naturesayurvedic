import type { Metadata } from "next";
import Link from "next/link";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutContent } from "@/data/about";

export const metadata: Metadata = {
  title: "About Us | Nature's Ayurvedic Remedies",
  description:
    "Learn more about Nature's Ayurvedic Remedies and the services offered from Diani, Kenya.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl lg:w-[calc(100%-3rem)]">
          <AnimatedSection>
            <div className="max-w-5xl">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-leaf">
                {aboutContent.eyebrow}
              </div>

              <h1 className="mt-4 font-display text-6xl leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                {aboutContent.title}
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-8 text-muted">
                {aboutContent.intro}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-16 lg:w-[calc(100%-3rem)] lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedSection>
            <div className="sticky top-28">
              <div className="flex aspect-square items-center justify-center rounded-[2.5rem] bg-sage p-12 text-center">
                <div>
                  <div className="font-display text-5xl leading-none text-leaf sm:text-6xl">
                    Natural
                    <br />
                    care.
                  </div>

                  <div className="mx-auto mt-7 h-px w-16 bg-leaf/30" />

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-muted">
                    Diani · South Coast
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-2xl space-y-7 text-lg leading-8 text-muted">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl lg:w-[calc(100%-3rem)]">
          <SectionHeading
            eyebrow="What we offer"
            title="A broad range of everyday health and care."
            copy="The existing business serves customers across pharmacy, natural wellness, nutrition, beauty and animal care."
          />

          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aboutContent.services.map((service, index) => (
              <div
                key={service}
                className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage text-sm font-bold text-leaf">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-semibold">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-leaf py-24 text-white sm:py-32">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl lg:w-[calc(100%-3rem)]">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-sage">
              Come and see us
            </div>

            <h2 className="mt-4 font-display text-5xl leading-[0.95] sm:text-6xl">
              Find us in Diani.
            </h2>

            <p className="mt-6 text-lg leading-8 text-sage/80">
              {aboutContent.location}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink"
            >
              Contact us →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
