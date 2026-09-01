import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink py-16 text-white">
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-12 lg:w-[calc(100%-3rem)] md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="font-display text-2xl">Nature&apos;s Ayurvedic</div>

          <p className="mt-4 max-w-md text-sm leading-7 text-sage/80">
            Health, wellness, beauty and personal-care products serving the
            Diani community.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-sm font-bold">Explore</h3>

          <div className="mt-5 grid gap-3 text-sm text-sage/80">
            <Link href="/about" className="transition-colors hover:text-white">
              About
            </Link>

            <Link
              href="/products"
              className="transition-colors hover:text-white"
            >
              Products
            </Link>

            <Link href="/brands" className="transition-colors hover:text-white">
              Brands
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-sans text-sm font-bold">Contact</h3>

          <div className="mt-5 grid gap-3 text-sm leading-6 text-sage/80">
            <span>
              Diani Beach Road,
              <br />
              Baharini, Kenya
            </span>

            <span>0736 154 683</span>

            <span className="break-all">
              naturesayurvedicremedies@gmail.com
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 w-[calc(100%-2rem)] max-w-7xl border-t border-white/10 pt-6 text-xs text-sage/60 lg:w-[calc(100%-3rem)]">
        © {new Date().getFullYear()} Nature&apos;s Ayurvedic Remedies.
      </div>
    </footer>
  );
}
