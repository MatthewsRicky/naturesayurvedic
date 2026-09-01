// ─────────────────────────────────────────────
// Product Types
// ─────────────────────────────────────────────

export type ProductCategory =
  | "Beauty"
  | "Nails"
  | "Fitness"
  | "Pets"
  | "Personal Care";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  brand?: string;
  description: string;
  image: string;
  featured?: boolean;
}

// ─────────────────────────────────────────────
// Brand Types
// ─────────────────────────────────────────────

export interface Brand {
  slug: string;
  name: string;
  logo: string;
  description: string;
}

// ─────────────────────────────────────────────
// Navigation Types
// ─────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

// ─────────────────────────────────────────────
// Component Types
// ─────────────────────────────────────────────

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}

export interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
}

// ─────────────────────────────────────────────
// Button Types
// ─────────────────────────────────────────────

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}
