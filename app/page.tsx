import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import KitchenSection from "@/components/KitchenSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PhilosophySection />
      <AboutSection />
      <ProcessSection />
      <KitchenSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
