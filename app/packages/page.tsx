import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PackagesFlow from "@/components/PackagesFlow";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Design Packages - Furniture & Interior Solutions",
  description:
    "Explore Amé Studio's interior design packages in Dubai. From starter consultations to full turnkey solutions. Furniture packages starting from AED 15,000. Find your perfect design solution.",
  keywords: [
    "interior design packages Dubai",
    "furniture packages UAE",
    "turnkey interior solutions",
    "home furnishing packages",
    "interior design pricing Dubai",
    "affordable interior design",
  ],
  openGraph: {
    title: "Design Packages | Amé Studio",
    description:
      "Furniture & Interior Packages for Every Home. Turnkey furnishing solutions designed for effortless living, starting from AED 15,000.",
    type: "website",
    url: "https://ame-interiors.com/packages",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amé Studio - Interior Design Packages",
      },
    ],
  },
  alternates: {
    canonical: "/packages",
  },
};

export default function PackagesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <PackagesFlow />
        <Footer />
      </main>
    </>
  );
}
