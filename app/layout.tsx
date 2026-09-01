import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Nature's Ayurvedic Remedies | Health & Wellness",
  description:
    "Nature's Ayurvedic Remedies — health, wellness, Ayurvedic, pharmaceutical, nutrition and personal-care products in Diani, Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink antialiased">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
