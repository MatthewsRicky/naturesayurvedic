import Image from "next/image";
import Link from "next/link";
import type { Brand } from "@/data/brands";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <Link href={`/brands/${brand.slug}`} className="group block">
      <article className="h-full">
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[2rem] border border-line bg-white p-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-leaf group-hover:shadow-lg">
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-8 grayscale transition duration-500 group-hover:grayscale-0"
          />
        </div>

        <div className="pt-5">
          <h2 className="font-display text-2xl">{brand.name}</h2>

          <p className="mt-2 text-sm leading-6 text-muted">
            {brand.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
