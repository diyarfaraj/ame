import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PackagesGrid from "@/components/PackagesGrid";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Design for Investment - Turn-key Holiday Home Furnishing Dubai",
  description:
    "Turn-key furniture packages for Dubai holiday homes and investment properties. Fixed-price guarantee, guest-ready in 14 days. Packages from AED 71,600.",
  keywords: [
    "holiday home furnishing Dubai",
    "investment property furniture",
    "Airbnb furniture packages Dubai",
    "short-term rental furnishing",
    "turn-key property setup",
    "fixed-price furnishing Dubai",
  ],
  openGraph: {
    title: "Design for Investment | Amé Studio",
    description:
      "Turn-key furniture packages for Dubai investment properties. Guest-ready in 14 days with a 100% fixed-price guarantee.",
    type: "website",
    url: "https://ame-studio.com/design-for-investment",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amé Studio - Investment Property Furnishing",
      },
    ],
  },
  alternates: {
    canonical: "/design-for-investment",
  },
};

export default function DesignForInvestmentPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection
          backgroundImage="/images/hero.png"
          title="Turn-key furnishing for investment properties."
          subtitle="Fixed-price packages designed to maximize your rental yield. Guest-ready in 14 days."
          showButtons={false}
        />
        <PackagesGrid />
        <TestimonialsGrid />
        <Footer />
      </main>
    </>
  );
}
