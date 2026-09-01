import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types";
import { products } from "@/data/products";

interface RelatedProductsProps {
  product: Product;
}

export default function RelatedProducts({ product }: RelatedProductsProps) {
  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category && item.slug !== product.slug,
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl lg:w-[calc(100%-3rem)]">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-leaf">
              Keep exploring
            </div>

            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              You may also like
            </h2>
          </div>

          <Link
            href="/products"
            className="hidden text-sm font-bold text-leaf sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-sage">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="px-1 pt-5">
                {item.brand && (
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    {item.brand}
                  </div>
                )}

                <h3 className="mt-2 font-display text-2xl leading-tight">
                  {item.name}
                </h3>

                <span className="mt-3 inline-block text-sm font-bold text-leaf">
                  View product →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
