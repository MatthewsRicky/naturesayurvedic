import Image from "next/image";
import Link from "next/link";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories } from "@/data/categories";

const categoryImages: Record<string, string> = {
  Beauty: "/images/products/glitterkiss.jpg",
  Nails: "/images/products/instantnails.jpg",
  Fitness: "/images/products/syntha6.jpg",
  Pets: "/images/products/petfood.jpg",
};

const categoryDescriptions: Record<string, string> = {
  Beauty:
    "Explore beauty and cosmetic products selected for everyday care, confidence and self-expression.",

  Nails:
    "Discover nail care, treatments and essentials for polished, healthy-looking results.",

  Fitness:
    "Explore nutrition and fitness products designed to support an active and healthy lifestyle.",

  Pets: "Browse everyday products selected for the care, comfort and wellbeing of your pets.",
};

export default function CategoryGrid() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl lg:w-[calc(100%-3rem)]">
        {/* Section heading */}
        <AnimatedSection>
          <SectionHeading
            eyebrow="Explore"
            title="Something for every part of your wellbeing."
            copy="Browse our collection by category and discover products selected for health, beauty, nutrition and everyday care."
          />
        </AnimatedSection>

        {/* Category grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const image = categoryImages[category.slug];
            const description =
              categoryDescriptions[category.slug] ??
              "Explore products from Nature's Ayurvedic Remedies.";

            return (
              <AnimatedSection
                key={category.slug}
                className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <Link
                  href={`/products?category=${category.slug}`}
                  className="group relative block min-h-[360px] overflow-hidden rounded-[2rem] bg-sage"
                >
                  {/* Image */}
                  <Image
                    src={image}
                    alt={category.title}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />

                  {/* Top category label */}
                  <div className="absolute left-6 top-6">
                    <span className="rounded-full bg-paper/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-leaf backdrop-blur-sm">
                      {category.shortTitle}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-paper text-lg text-ink transition-all duration-300 group-hover:-rotate-45 group-hover:bg-leaf group-hover:!text-white">
                    →
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8">
                    <h3 className="font-display text-3xl leading-tight !text-white sm:text-4xl">
                      {category.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 !text-white/80">
                      {description}
                    </p>

                    <div className="mt-5 text-sm font-bold !text-white">
                      Discover the collection →
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
