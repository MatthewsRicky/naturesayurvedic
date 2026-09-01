import Image from "next/image";
import Link from "next/link";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream/80">
      {/* Soft background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero.jpg"
          alt="hero background"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority
          className="object-cover"
        />

        {/* Keeps the typography readable */}
        <div className="absolute inset-0 bg-cream lg:bg-cream/65" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] w-[calc(100%-2rem)] max-w-7xl items-center gap-12 py-16 lg:w-[calc(100%-3rem)] lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* LEFT — HERO COPY */}
        <AnimatedSection>
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-leaf">
              <span className="h-px w-10 bg-leaf" />
              Natural wellness · Diani
            </div>

            <h1 className="font-display text-6xl leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Wellness,
              <br />
              <span className="text-leaf">rooted in nature.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              Discover a considered collection of Ayurvedic, pharmaceutical,
              nutrition, beauty and personal-care products for everyday
              wellbeing.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-full bg-ink px-6 py-3.5 text-sm font-bold !text-white transition-all hover:-translate-y-0.5 hover:bg-leaf"
              >
                Explore products →
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-line bg-white px-6 py-3.5 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-leaf"
              >
                Our story
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* RIGHT — HERO IMAGE */}
        <AnimatedSection className="lg:justify-self-end">
          <div className="relative mx-auto aspect-[5/6] w-full max-w-[520px] lg:ml-auto">
            <div className="absolute inset-0 rounded-[3rem] bg-sage" />

            <div className="absolute inset-4 overflow-hidden rounded-[2.5rem] sm:inset-6">
              <Image
                src="/images/hero/hero.jpg"
                alt="Nature's Ayurvedic Remedies"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-white/10" />
            </div>

            <div className="absolute bottom-8 left-8 right-8 rounded-[1.75rem] border border-white/40 bg-paper/90 p-6 backdrop-blur-md sm:p-7">
              <div className="font-display text-4xl leading-none text-leaf sm:text-5xl">
                Nature&apos;s
              </div>

              <div className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-muted">
                Ayurvedic Remedies
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Diani Beach
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink !text-white">
                  →
                </span>
              </div>
            </div>

            <div className="absolute -right-4 top-10 hidden h-24 w-24 rounded-full border border-leaf/20 lg:block" />

            <div className="absolute -left-5 bottom-20 hidden h-16 w-16 rounded-full bg-cream/80 lg:block" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
