import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ - Holiday Home Furnishing Questions Answered",
  description:
    "Frequently asked questions about Amé Studio's holiday home furnishing service in Dubai. Fixed-price guarantees, 14-day delivery, remote management, and more.",
  keywords: [
    "holiday home furnishing FAQ",
    "Dubai interior design questions",
    "furniture package FAQ",
    "fixed price interior design",
    "turn-key furnishing questions",
  ],
  openGraph: {
    title: "FAQ | Amé Studio",
    description:
      "Get answers to common questions about our holiday home furnishing service in Dubai.",
    type: "website",
    url: "https://ame-studio.com/faq",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amé Studio - FAQ",
      },
    ],
  },
  alternates: {
    canonical: "/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to furnish a holiday home in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our standard turnaround is 7 to 14 days from concept approval. For turn-key packages, most properties are guest-ready within two weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a turn-key furniture package?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Everything from furniture and lighting to linens, kitchenware, and styling. You receive a fully furnished, photo-ready property with nothing left to buy.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer fixed-price guarantees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Once the design is locked, you receive a 100% fixed-price guarantee. The quote is the final invoice — no hidden fees, no surprises.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle bespoke design for residences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our Design for Living service offers fully bespoke residential design tailored to your lifestyle, from concept to completion.",
      },
    },
    {
      "@type": "Question",
      name: "How does design increase my ROI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High-end, algorithm-optimized design commands higher nightly rates and better occupancy on platforms like Airbnb. Professional photography and staging are included.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be in Dubai during installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We provide a completely hands-off experience. Many of our clients live abroad and never visit during the setup. We handle everything remotely.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <main className="min-h-screen pt-24 md:pt-32">
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
