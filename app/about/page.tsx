import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutPhilosophy from "@/components/AboutPhilosophy";
import AboutDesigner from "@/components/AboutDesigner";

export const metadata = {
  title: "About - Amé Studio",
  description: "Creating interiors that move you. We translate emotion into form, shaping spaces that are calm, timeless, and deeply personal.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <AboutHero />
        <AboutPhilosophy />
        <AboutDesigner />
        <Footer />
      </main>
    </>
  );
}
