import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProcessIntroSection from "@/components/ProcessIntroSection";
import ProcessDetailSection from "@/components/ProcessDetailSection";
import TestimonialSection from "@/components/TestimonialSection";

export const metadata: Metadata = {
  title: "Our Design Process - From Concept to Completion",
  description:
    "Discover how Amé Studio transforms your space. Our streamlined 4-step interior design process in Dubai: Consultation, Design, Sourcing, and Installation. Effortless interiors, tailored for your life.",
  keywords: [
    "interior design process Dubai",
    "how interior design works",
    "design consultation Dubai",
    "turnkey interior solutions",
    "furniture sourcing UAE",
    "interior design installation",
  ],
  openGraph: {
    title: "Our Design Process | Amé Studio",
    description:
      "From initial consultation to final installation - discover our seamless 4-step approach to creating your perfect space in Dubai.",
    type: "website",
    url: "https://ame-interiors.com/process",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amé Studio - Our Interior Design Process",
      },
    ],
  },
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection backgroundImage="/images/process-hero.png" />
        <ProcessIntroSection />
        <ProcessDetailSection />
        <TestimonialSection />
        <Footer />
      </main>
    </>
  );
}
