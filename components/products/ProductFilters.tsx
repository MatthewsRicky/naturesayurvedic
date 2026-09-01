"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { categories } from "@/data/categories";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

export default function ProductFilters() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category;

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.brand?.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const hasFilters = search.trim() !== "" || category !== "all";

  function clearFilters() {
    setSearch("");
    setCategory("all");
  }

  return (
    <div>
      {/* ─────────────────────────────────────────
          FILTER PANEL
      ───────────────────────────────────────── */}

      <div className="mb-10 rounded-[2rem] border border-line bg-cream p-5 sm:p-7">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto]">
          {/* Search */}

          <div>
            <label
              htmlFor="product-search"
              className="text-xs font-bold uppercase tracking-[0.14em] text-leaf"
            >
              Search catalogue
            </label>

            <input
              id="product-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products, brands..."
              className="mt-3 h-13 w-full rounded-2xl border border-line bg-white px-5 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-leaf"
            />
          </div>

          {/* Contact CTA */}

          <div className="flex items-end">
            <Link
              href="/contact"
              className="flex h-13 w-full items-center justify-center rounded-2xl bg-ink px-6 text-sm font-bold text-white transition-colors hover:bg-leaf lg:w-auto"
            >
              Need help finding something?
            </Link>
          </div>
        </div>

        {/* Categories */}

        <div className="mt-6 flex flex-wrap gap-2">
          {/* All */}

          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`rounded-full border px-4 py-2 text-xs font-bold transition-all ${
              category === "all"
                ? "border-ink bg-ink text-white"
                : "border-line bg-white text-ink hover:border-leaf"
            }`}
          >
            All products
          </button>

          {/* Category buttons */}

          {categories.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setCategory(item.slug)}
              className={`rounded-full border px-4 py-2 text-xs font-bold transition-all ${
                category === item.slug
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-ink hover:border-leaf"
              }`}
            >
              {item.shortTitle}
            </button>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────
          RESULTS HEADER
      ───────────────────────────────────────── */}

      <div className="mb-7 flex items-center justify-between gap-4">
        <p className="text-sm text-muted">
          Showing{" "}
          <span className="font-bold text-ink">{filteredProducts.length}</span>{" "}
          {filteredProducts.length === 1 ? "product" : "products"}
        </p>

        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-sm font-bold text-leaf transition-opacity hover:opacity-70"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* ─────────────────────────────────────────
          PRODUCTS
      ───────────────────────────────────────── */}

      {filteredProducts.length === 0 ? (
        <div className="rounded-[2rem] bg-cream p-16 text-center">
          <h3 className="font-display text-3xl">Nothing matched your search</h3>

          <p className="mt-3 text-sm text-muted">
            Try a different product name, brand or category.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-leaf"
          >
            View all products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
