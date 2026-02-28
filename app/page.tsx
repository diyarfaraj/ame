import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProblemBlock from "@/components/ProblemBlock";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import HomeProcessSection from "@/components/HomeProcessSection";
import FAQSection from "@/components/FAQSection";
import HomeAboutSection from "@/components/HomeAboutSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <TrustBar />
        <ProblemBlock />
        <TestimonialsGrid />
        <HomeProcessSection />
        <FAQSection />
        <HomeAboutSection />
        <Footer />
      </main>
    </>
  );
}
