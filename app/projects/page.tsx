import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects - Ame Interior Design",
  description: "Explore our portfolio of beautifully crafted interior design projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection backgroundImage="/images/kitchen.png" />
       
        <Footer />
      </main>
    </>
  );
}
