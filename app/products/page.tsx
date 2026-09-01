import type { Metadata } from "next";

import ProductFilters from "@/components/products/ProductFilters";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Products | Nature's Ayurvedic Remedies",
  description: "Explore the Nature's Ayurvedic Remedies product catalogue.",
};

export default function ProductsPage() {
  return (
    <main>
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl lg:w-[calc(100%-3rem)]">
          <SectionHeading
            eyebrow="Our catalogue"
            title="Products worth discovering."
            copy="Explore our range of beauty, nail care, fitness and pet products."
          />

          <div className="mt-14">
            <ProductFilters />
          </div>
        </div>
      </section>
    </main>
  );
}
