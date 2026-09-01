export type ProductCategory =
  | "Beauty"
  | "Nails"
  | "Fitness"
  | "Pets"
  | "Personal Care";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  brand?: string;
  description: string;
  image: string;
  featured?: boolean;
};

const description =
  "Explore this product from Nature's Ayurvedic Remedies. Contact us for current pricing, availability and product details.";

export const products: Product[] = [
  // ─────────────────────────────────────────────
  // BEAUTY
  // ─────────────────────────────────────────────

  {
    slug: "all-glossed",
    name: "All Glossed",
    category: "Beauty",
    brand: "Rimmel London",
    description,
    image: "/images/products/allglossed.jpg",
  },

  {
    slug: "calvin-klein-lip",
    name: "Calvin Klein Lip",
    category: "Beauty",
    brand: "Calvin Klein",
    description,
    image: "/images/products/calvinkleinlip.jpg",
    featured: true,
  },

  {
    slug: "city-slicker",
    name: "City Slicker",
    category: "Beauty",
    description,
    image: "/images/products/cityslicker.jpg",
  },

  {
    slug: "ck-lip-balm",
    name: "CK Lip Balm",
    category: "Beauty",
    brand: "Calvin Klein",
    description,
    image: "/images/products/cklipbalm.jpg",
  },

  {
    slug: "french-tip",
    name: "French Tip",
    category: "Beauty",
    description,
    image: "/images/products/frenchtip.jpg",
  },

  {
    slug: "glam-bronze",
    name: "Glam Bronze",
    category: "Beauty",
    description,
    image: "/images/products/glambronze.jpg",
  },

  {
    slug: "glitter-kiss",
    name: "Glitter Kiss",
    category: "Beauty",
    description,
    image: "/images/products/glitterkiss.jpg",
    featured: true,
  },

  {
    slug: "lash-accelerator",
    name: "Lash Accelerator",
    category: "Beauty",
    description,
    image: "/images/products/lashaccelerator.jpg",
  },

  {
    slug: "lash-art",
    name: "Lash Art",
    category: "Beauty",
    description,
    image: "/images/products/lashart.jpg",
  },

  {
    slug: "liquid-lasher",
    name: "Liquid Lasher",
    category: "Beauty",
    description,
    image: "/images/products/liquidlasher.jpg",
    featured: true,
  },

  {
    slug: "loreal-lipstick",
    name: "L'Oréal Lipstick",
    category: "Beauty",
    brand: "L'Oréal",
    description,
    image: "/images/products/lorealipstick.jpg",
  },

  {
    slug: "loreal-paris",
    name: "L'Oréal Paris",
    category: "Beauty",
    brand: "L'Oréal",
    description,
    image: "/images/products/lorealparis.jpg",
  },

  {
    slug: "manhattan",
    name: "Manhattan",
    category: "Beauty",
    description,
    image: "/images/products/manhattan.jpg",
  },

  {
    slug: "revlon-nail-art",
    name: "Revlon Nail Art",
    category: "Beauty",
    brand: "Revlon",
    description,
    image: "/images/products/revlonnailart.jpg",
  },

  {
    slug: "rimmel-london",
    name: "Rimmel London",
    category: "Beauty",
    brand: "Rimmel London",
    description,
    image: "/images/products/rimmellondon.jpg",
  },

  {
    slug: "studio-secrets",
    name: "Studio Secrets",
    category: "Beauty",
    brand: "L'Oréal",
    description,
    image: "/images/products/studiosecrets.jpg",
  },

  {
    slug: "the-falsies",
    name: "The Falsies",
    category: "Beauty",
    brand: "Maybelline",
    description,
    image: "/images/products/thefalsies.jpg",
    featured: true,
  },

  {
    slug: "total-wipeout",
    name: "Total Wipeout",
    category: "Beauty",
    description,
    image: "/images/products/totalwipeout.jpg",
  },

  {
    slug: "true-match",
    name: "True Match",
    category: "Beauty",
    brand: "L'Oréal",
    description,
    image: "/images/products/truematch.jpg",
  },

  {
    slug: "urban-rebel",
    name: "Urban Rebel",
    category: "Beauty",
    description,
    image: "/images/products/urbanrebel.jpg",
  },

  {
    slug: "vita-surge-strength",
    name: "Vita Surge Strength",
    category: "Beauty",
    description,
    image: "/images/products/vitasurgestrength.jpg",
  },

  {
    slug: "water-shine",
    name: "Water Shine",
    category: "Beauty",
    description,
    image: "/images/products/watershine.jpg",
  },

  // ─────────────────────────────────────────────
  // NAILS
  // ─────────────────────────────────────────────

  {
    slug: "callus-remover",
    name: "Callus Remover",
    category: "Nails",
    description,
    image: "/images/products/callusremover.jpg",
  },

  {
    slug: "cuticle-massage",
    name: "Cuticle Massage",
    category: "Nails",
    description,
    image: "/images/products/cuticlemmassage.jpg",
  },

  {
    slug: "cuticle-remover",
    name: "Cuticle Remover",
    category: "Nails",
    description,
    image: "/images/products/cuticleremover.jpg",
  },

  {
    slug: "double-sided",
    name: "Double Sided",
    category: "Nails",
    description,
    image: "/images/products/doublesided.jpg",
  },

  {
    slug: "instant-nails",
    name: "Instant Nails",
    category: "Nails",
    description,
    image: "/images/products/instantnails.jpg",
    featured: true,
  },

  {
    slug: "metallic-nails",
    name: "Metallic Nails",
    category: "Nails",
    description,
    image: "/images/products/metallicnails.jpg",
  },

  {
    slug: "nail-and-cuticle-care",
    name: "Nail & Cuticle Care",
    category: "Nails",
    description,
    image: "/images/products/nailandcuticlecare.jpg",
  },

  {
    slug: "nail-art-pen",
    name: "Nail Art Pen",
    category: "Nails",
    description,
    image: "/images/products/nailartpen.jpg",
  },

  {
    slug: "nailene-french-to-go",
    name: "Nailene French To Go",
    category: "Nails",
    description,
    image: "/images/products/nailenefrenchtogo.jpg",
  },

  {
    slug: "nail-growth",
    name: "Nail Growth",
    category: "Nails",
    description,
    image: "/images/products/nailgrowth.jpg",
  },

  {
    slug: "nail-remover",
    name: "Nail Remover",
    category: "Nails",
    description,
    image: "/images/products/nailremover.jpg",
  },

  {
    slug: "nails-inc",
    name: "Nails Inc",
    category: "Nails",
    brand: "Nails Inc",
    description,
    image: "/images/products/nailsinc.jpg",
  },

  {
    slug: "pre-glued",
    name: "Pre-Glued",
    category: "Nails",
    description,
    image: "/images/products/preglued.jpg",
  },

  {
    slug: "protective-nail-glue",
    name: "Protective Nail Glue",
    category: "Nails",
    description,
    image: "/images/products/protectivenailglue.jpg",
  },

  {
    slug: "tag",
    name: "Tag",
    category: "Nails",
    description,
    image: "/images/products/tag.jpg",
  },

  {
    slug: "the-trilogy",
    name: "The Trilogy",
    category: "Nails",
    description,
    image: "/images/products/thetrilogy.jpg",
  },

  {
    slug: "wax-strip",
    name: "Wax Strip",
    category: "Nails",
    description,
    image: "/images/products/waxstrip.jpg",
  },

  // ─────────────────────────────────────────────
  // FITNESS
  // ─────────────────────────────────────────────

  {
    slug: "amino-acids",
    name: "Amino Acids",
    category: "Fitness",
    description,
    image: "/images/products/aminoacids.jpg",
    featured: true,
  },

  {
    slug: "combat-powder",
    name: "Combat Powder",
    category: "Fitness",
    description,
    image: "/images/products/combatpowder.jpg",
  },

  {
    slug: "hydroxycut",
    name: "Hydroxycut",
    category: "Fitness",
    description,
    image: "/images/products/hydroxycut.jpg",
  },

  {
    slug: "hyper-matrix",
    name: "Hyper Matrix",
    category: "Fitness",
    description,
    image: "/images/products/hypermatrix.jpg",
    featured: true,
  },

  {
    slug: "mass-tech",
    name: "Mass Tech",
    category: "Fitness",
    description,
    image: "/images/products/masstech.jpg",
    featured: true,
  },

  {
    slug: "syntha-6",
    name: "Syntha-6",
    category: "Fitness",
    description,
    image: "/images/products/syntha6.jpg",
    featured: true,
  },

  // ─────────────────────────────────────────────
  // PETS
  // ─────────────────────────────────────────────

  {
    slug: "pet-accessories",
    name: "Pet Accessories",
    category: "Pets",
    description,
    image: "/images/products/petaccessories.jpg",
  },

  {
    slug: "pet-food",
    name: "Pet Food",
    category: "Pets",
    description,
    image: "/images/products/petfood.jpg",
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

function createSlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getProductsByBrand(brand: string): Product[] {
  const brandSlug = createSlug(brand);

  return products.filter(
    (product) => product.brand && createSlug(product.brand) === brandSlug,
  );
}