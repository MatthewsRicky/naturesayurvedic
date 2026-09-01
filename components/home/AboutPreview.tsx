import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutPreview() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-12 lg:w-[calc(100%-3rem)] lg:grid-cols-2 lg:gap-20">
        <AnimatedSection>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-sage">
            <div className="absolute inset-7 rounded-[2rem] border border-leaf/15" />

            <div
              className="absolute inset-0 flex items-center justify-center p-12 text-center"
              style={{
                backgroundImage: 'url("/images/location/location.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-white/50 p-8 backdrop-blur-sm sm:p-12 rounded-2xl">
                <div className="font-display text-5xl leading-none text-paper sm:text-6xl">
                  Natural
                  <br />
                  care.
                </div>

                <div className="mx-auto mt-6 h-px w-16 bg-leaf/30" />

                <p className="mt-6 text-sm uppercase tracking-[0.18em] text-black">
                  Rooted in tradition
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="flex items-center">
          <div className="max-w-xl">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-leaf">
              About us
            </div>

            <h2 className="mt-4 font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl">
              A local approach to everyday wellbeing.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-muted sm:text-lg">
              <p>
                Nature&apos;s Ayurvedic Remedies brings together traditional
                wellness, pharmacy, nutrition, beauty and personal-care products
                in one convenient destination.
              </p>

              <p>
                Based in the Diani area, we aim to make trusted products and
                everyday health essentials easier to discover and access.
              </p>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-leaf"
            >
              Discover our story →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
