import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutPhilosophy from "@/components/AboutPhilosophy";

export const metadata: Metadata = {
  title: "About Us - Our Design Philosophy",
  description:
    "Meet Amé Studio - Dubai's boutique interior design studio. We create warm, modern, neutral spaces that feel calm, curated, and timeless. Learn about our design philosophy and approach.",
  keywords: [
    "about Amé Studio",
    "interior designer Dubai",
    "design philosophy",
    "boutique design studio",
    "luxury interior design team",
    "Dubai interior designers",
  ],
  openGraph: {
    title: "About Amé Studio | Our Design Philosophy",
    description:
      "Creating interiors that move you. We translate emotion into form, shaping spaces that are calm, timeless, and deeply personal.",
    type: "website",
    url: "https://ame-interiors.com/about",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amé Studio - About Our Interior Design Philosophy",
      },
    ],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <AboutHero />
        <AboutPhilosophy />
        <Footer />
      </main>
    </>
  );
}
