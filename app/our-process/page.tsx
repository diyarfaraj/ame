import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HomeProcessSection from "@/components/HomeProcessSection";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import GlobalClosingSection from "@/components/GlobalClosingSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Process - From Discovery to Handover in 14 Days",
  description:
    "Discover Amé Studio's streamlined 4-step process: Discovery Call, Concept Approval, Seamless Setup, and Handover. Your property is guest-ready in 14 days.",
  keywords: [
    "interior design process Dubai",
    "holiday home setup process",
    "turn-key furnishing steps",
    "property furnishing timeline",
    "fast interior design Dubai",
  ],
  openGraph: {
    title: "Our Process | Amé Studio",
    description:
      "From discovery call to guest-ready handover in 14 days. Our streamlined 4-step process makes property furnishing effortless.",
    type: "website",
    url: "https://ame-studio.com/our-process",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amé Studio - Our Process",
      },
    ],
  },
  alternates: {
    canonical: "/our-process",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Amé Studio Furnishes Your Investment Property",
  description:
    "Our streamlined 4-step process takes your property from empty to guest-ready in 14 days.",
  totalTime: "P14D",
  step: [
    {
      "@type": "HowToStep",
      name: "Discovery Call",
      text: "A 20-minute strategy session where we assess your property, goals, and timeline.",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Concept Approval",
      text: "Your bespoke or package design is locked in. Fixed price confirmed with no surprises.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Seamless Setup",
      text: "We source, deliver, and install everything. A completely hands-off experience.",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "Handover",
      text: "Your property is guest-ready and photo-optimized. Ready to list and start earning.",
      position: 4,
    },
  ],
};

export default function OurProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Navigation />
      <main className="min-h-screen">
        <HeroSection
          backgroundImage="/images/process-hero.png"
          title="From discovery to handover in 14 days."
          subtitle="A streamlined process built for speed, transparency, and zero stress."
          showButtons={false}
        />
        <HomeProcessSection />
        <TestimonialsGrid />
        <GlobalClosingSection />
        <Footer />
      </main>
    </>
  );
}
