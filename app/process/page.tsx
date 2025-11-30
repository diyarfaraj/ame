import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProcessIntroSection from "@/components/ProcessIntroSection";
import ProcessDetailSection from "@/components/ProcessDetailSection";
import TestimonialSection from "@/components/TestimonialSection";

export const metadata = {
  title: "Process - Ame Interior Design",
  description: "Discover our design process - from brief to completion, we bring your vision to life.",
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
