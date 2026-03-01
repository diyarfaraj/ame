import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GlobalClosingSection from "@/components/GlobalClosingSection";
import Footer from "@/components/Footer";
import BespokeContent from "./BespokeContent";

export const metadata: Metadata = {
  title: "Design for Living - Bespoke Residential Interior Design Dubai",
  description:
    "Bespoke residential interior design in Dubai. Custom furniture, premium materials, and a fully tailored design experience for your home. From concept to completion.",
  keywords: [
    "bespoke interior design Dubai",
    "custom residential design",
    "luxury home design UAE",
    "personalized interior design",
    "custom furniture Dubai",
    "high-end residential interiors",
  ],
  openGraph: {
    title: "Design for Living | Amé Studio",
    description:
      "Bespoke residential interior design tailored to your lifestyle. Custom furniture, premium materials, and a fully personalized experience.",
    type: "website",
    url: "https://ame-studio.com/design-for-living",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amé Studio - Bespoke Residential Design",
      },
    ],
  },
  alternates: {
    canonical: "/design-for-living",
  },
};

export default function DesignForLivingPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection
          backgroundImage="/images/staircase.png"
          title="Interiors designed around your life."
          subtitle="Bespoke residential design that balances beauty with how you actually live."
          showButtons={false}
        />
        <BespokeContent />
        <GlobalClosingSection />
        <Footer />
      </main>
    </>
  );
}
