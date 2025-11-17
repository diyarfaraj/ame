import Navigation from "@/components/Navigation";
import PackagesHero from "@/components/PackagesHero";
import PackagesGrid from "@/components/PackagesGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Packages - Ame Interior Design",
  description: "Furniture & Interior Packages for Every Home. Turnkey furnishing solutions designed for effortless living.",
};

export default function PackagesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <PackagesHero />
        <PackagesGrid />
        <Footer />
      </main>
    </>
  );
}
