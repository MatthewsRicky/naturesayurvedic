import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BrandGrid from "@/components/brands/BrandGrid";

export const metadata: Metadata = {
  title: "Our Brands | Nature's Ayurvedic Remedies",
  description: "Explore brands represented by Nature's Ayurvedic Remedies.",
};

export default function BrandsPage() {
  return (
    <main>
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl lg:w-[calc(100%-3rem)]">
          <AnimatedSection>
            <div className="max-w-4xl">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-leaf">
                Our brands
              </div>

              <h1 className="mt-4 font-display text-6xl leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                Familiar names.
                <br />
                <span className="text-leaf">Carefully curated.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
                Explore some of the brands represented across the Nature&apos;s
                Ayurvedic Remedies catalogue.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl lg:w-[calc(100%-3rem)]">
          <BrandGrid />
        </div>
      </section>
    </main>
  );
}
