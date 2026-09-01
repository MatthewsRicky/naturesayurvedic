import ProductCard from "@/components/products/ProductCard";
import type { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-[2rem] border border-line bg-cream p-12 text-center">
        <h3 className="font-display text-3xl">No products found</h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted">
          Try another search or choose a different category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
