import Image from "next/image";
import Link from "next/link";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredProducts } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl lg:w-[calc(100%-3rem)]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Featured"
              title="A few things worth discovering."
              copy="A selection from our wider range of health, nutrition and personal-care products."
            />
          </AnimatedSection>

          <Link
            href="/products"
            className="w-fit rounded-full border border-line bg-white px-5 py-3 text-sm font-bold transition-colors hover:border-leaf"
          >
            View all products →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <AnimatedSection key={product.slug}>
              <Link href={`/products/${product.slug}`} className="group block">
                {/* Product image */}
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-sage">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Arrow */}
                  <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg text-ink opacity-0 shadow-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </div>
                </div>

                {/* Product information */}
                <div className="px-1 pt-5">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    {product.brand || product.category}
                  </div>

                  <h3 className="mt-2 font-display text-2xl leading-tight">
                    {product.name}
                  </h3>

                  <span className="mt-3 inline-block text-sm font-bold text-leaf">
                    View product →
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
