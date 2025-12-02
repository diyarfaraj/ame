import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Contact Amé Studio for interior design inquiries in Dubai. Email us at Briar@Ame-studio.com to discuss your project. Free initial consultation available.",
  keywords: [
    "contact interior designer Dubai",
    "interior design inquiry UAE",
    "design consultation booking",
    "Amé Studio contact",
    "Dubai interior design email",
  ],
  openGraph: {
    title: "Contact Amé Studio | Start Your Design Journey",
    description:
      "Get in touch with Amé Studio to transform your space. Email us for a free initial consultation about your interior design project in Dubai.",
    type: "website",
    url: "https://ame-studio.com/contact",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amé Studio - Contact Us for Interior Design",
      },
    ],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection backgroundImage="/images/contact-hero.png" />
        <ContactFormSection />
        <Footer />
      </main>
    </>
  );
}
