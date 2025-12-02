import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects - Interior Design Portfolio",
  description:
    "Explore Amé Studio's portfolio of stunning interior design projects in Dubai. See our work in modern minimalist homes, Japandi-inspired spaces, and luxury residential interiors across the UAE.",
  keywords: [
    "interior design portfolio Dubai",
    "home design projects UAE",
    "residential interior projects",
    "modern home interiors",
    "luxury apartment design",
    "Dubai home makeover",
  ],
  openGraph: {
    title: "Our Projects | Amé Studio Portfolio",
    description:
      "Browse our collection of beautifully crafted interior design projects. From modern apartments to luxury villas in Dubai.",
    type: "website",
    url: "https://ame-interiors.com/projects",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amé Studio - Interior Design Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection backgroundImage="/images/kitchen.png" />
       
        <Footer />
      </main>
    </>
  );
}
