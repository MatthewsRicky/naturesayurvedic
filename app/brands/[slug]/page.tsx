import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { brands } from "@/data/brands";
import { getProductsByBrand } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

interface BrandPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;

  const brand = brands.find((item) => item.slug === slug);

  return {
    title: brand
      ? `${brand.name} | Nature's Ayurvedic Remedies`
      : "Brand not found",
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;

  const brand = brands.find((item) => item.slug === slug);

  if (!brand) {
    notFound();
  }

  const brandProducts = getProductsByBrand(brand.name);

  return (
    <main>
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl lg:w-[calc(100%-3rem)]">
          <Link href="/brands" className="text-sm font-bold text-leaf">
            ← All brands
          </Link>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-leaf">
                Featured brand
              </div>

              <h1 className="mt-4 font-display text-6xl leading-[0.9] tracking-tight sm:text-7xl">
                {brand.name}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
                {brand.description}
              </p>
            </div>

            <div className="flex aspect-[16/9] items-center justify-center rounded-[2.5rem] border border-line bg-white p-12">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-32 max-w-[75%] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {brandProducts.length > 0 && (
        <section className="bg-paper py-20 sm:py-28">
          <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl lg:w-[calc(100%-3rem)]">
            <div className="mb-10">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-leaf">
                Catalogue
              </div>

              <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                Products from {brand.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {brandProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
