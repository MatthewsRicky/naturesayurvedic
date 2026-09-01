import type { Metadata } from "next";
import Link from "next/link";

import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/contact/ContactForm";
import { aboutContent } from "@/data/about";

export const metadata: Metadata = {
  title: "Contact | Nature's Ayurvedic Remedies",
  description: "Contact Nature's Ayurvedic Remedies in Diani, Kenya.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl lg:w-[calc(100%-3rem)]">
          <AnimatedSection>
            <div className="max-w-4xl">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-leaf">
                Get in touch
              </div>

              <h1 className="mt-4 font-display text-6xl leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                Let&apos;s talk
                <br />
                <span className="text-leaf">wellbeing.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
                Ask about a product, availability, pricing or anything else
                you&apos;d like to know.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-12 lg:w-[calc(100%-3rem)] lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <AnimatedSection>
            <div>
              <div className="space-y-8">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-leaf">
                    Phone
                  </div>

                  <a
                    href={`tel:${aboutContent.phone}`}
                    className="mt-2 block font-display text-2xl hover:text-leaf"
                  >
                    {aboutContent.phone}
                  </a>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-leaf">
                    Email
                  </div>

                  <a
                    href={`mailto:${aboutContent.email}`}
                    className="mt-2 block break-all font-display text-xl hover:text-leaf"
                  >
                    {aboutContent.email}
                  </a>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-leaf">
                    Location
                  </div>

                  <p className="mt-2 font-display text-2xl leading-tight">
                    {aboutContent.location}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-leaf">
                    Opening hours
                  </div>

                  <p className="mt-2 font-display text-2xl">9am – 5pm</p>
                </div>
              </div>

              <Link
                href={`tel:${aboutContent.phone}`}
                className="mt-10 inline-flex rounded-full bg-leaf px-6 py-3.5 text-sm font-bold text-white"
              >
                Call us →
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
