import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata = {
  title: "Contact - Ame Interior Design",
  description: "Get in touch with Amé Studio to start your interior design journey.",
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
