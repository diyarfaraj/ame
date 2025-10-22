import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PhilosophySection />
      <AboutSection />
    </main>
  );
}
