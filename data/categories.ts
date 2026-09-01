import type { ProductCategory } from "@/data/products";

export interface ProductCategoryOption {
  slug: ProductCategory;
  title: string;
  shortTitle: string;
}

export const categories: ProductCategoryOption[] = [
  {
    slug: "Beauty",
    title: "Beauty & Cosmetics",
    shortTitle: "Beauty",
  },
  {
    slug: "Nails",
    title: "Nails & Nail Care",
    shortTitle: "Nails",
  },
  {
    slug: "Fitness",
    title: "Fitness & Nutrition",
    shortTitle: "Fitness",
  },
  {
    slug: "Pets",
    title: "Pets",
    shortTitle: "Pets",
  },
];
