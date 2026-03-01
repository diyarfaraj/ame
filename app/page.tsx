import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProblemBlock from "@/components/ProblemBlock";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import FAQSection from "@/components/FAQSection";
import HomeAboutSection from "@/components/HomeAboutSection";
import GlobalClosingSection from "@/components/GlobalClosingSection";
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
        <HomeAboutSection />
        <FAQSection />
        <GlobalClosingSection />
        <Footer />
      </main>
    </>
  );
}
