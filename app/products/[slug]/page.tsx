import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProductBySlug, products } from "@/data/products";

import RelatedProducts from "@/components/products/RelatedProducts";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: `${product.name} | Nature's Ayurvedic Remedies`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const categoryLabel =
    product.category === "Fitness" ? "Fitness & Nutrition" : product.category;

  return (
    <main>
      {/* ─────────────────────────────────────────
          PRODUCT HERO
      ───────────────────────────────────────── */}

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl lg:w-[calc(100%-3rem)]">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-leaf transition-transform hover:-translate-x-1"
          >
            ← Back to products
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* ─────────────────────────────
                PRODUCT IMAGE
            ───────────────────────────── */}

            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-sage">
              <div className="absolute inset-8 rounded-[2rem] border border-leaf/15" />

              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-12 transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute bottom-7 left-7 rounded-full bg-paper/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-leaf backdrop-blur">
                {categoryLabel}
              </div>
            </div>

            {/* ─────────────────────────────
                PRODUCT INFORMATION
            ───────────────────────────── */}

            <div className="max-w-xl">
              {product.brand && (
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-leaf">
                  {product.brand}
                </div>
              )}

              <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                {product.name}
              </h1>

              <p className="mt-7 text-lg leading-8 text-muted">
                {product.description}
              </p>

              {/* Enquiry card */}

              <div className="mt-8 rounded-3xl border border-line bg-white p-6">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-leaf">
                  Enquire about this product
                </div>

                <p className="mt-3 text-sm leading-6 text-muted">
                  Contact Nature&apos;s Ayurvedic Remedies for current pricing,
                  availability and product information.
                </p>

                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="mt-5 inline-flex rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-leaf"
                >
                  Enquire now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          RELATED PRODUCTS
      ───────────────────────────────────────── */}

      <RelatedProducts product={product} />
    </main>
  );
}
