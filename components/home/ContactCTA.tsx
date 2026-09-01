import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ContactCTA() {
  return (
    <section className="bg-leaf py-24 text-white sm:py-32">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl lg:w-[calc(100%-3rem)]">
        <AnimatedSection>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-sage">
                Need a little help?
              </div>

              <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Let&apos;s find the right product for you.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-sage/80 sm:text-lg">
                Get in touch with our team about product availability, pricing
                or general enquiries.
              </p>
            </div>

            <Link
              href="/contact"
              className="w-fit rounded-full bg-white px-7 py-4 text-sm font-bold text-ink transition-transform hover:-translate-y-1"
            >
              Contact us →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
