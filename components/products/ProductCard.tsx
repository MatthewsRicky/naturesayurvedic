import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const categoryLabel =
    product.category === "Fitness" ? "Fitness & Nutrition" : product.category;

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <article>
        {/* Product image */}
        <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] bg-sage">
          {/* Soft background treatment */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-leaf/10" />

          {/* Product image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
          />

          {/* Category */}
          <div className="absolute left-5 top-5 z-10">
            <span className="rounded-full bg-paper/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-leaf backdrop-blur-sm">
              {categoryLabel}
            </span>
          </div>

          {/* Arrow */}
          <div className="absolute bottom-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-all duration-300 group-hover:-rotate-45 group-hover:bg-leaf">
            →
          </div>
        </div>

        {/* Product information */}
        <div className="px-1 pt-5">
          {product.brand && (
            <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
              {product.brand}
            </div>
          )}

          <h3 className="mt-1 font-display text-2xl leading-tight">
            {product.name}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
            {product.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
