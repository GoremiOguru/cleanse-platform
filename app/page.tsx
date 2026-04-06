import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { RehabLocator } from "@/components/RehabLocator";
import { AddictionsSection } from "@/components/AddictionsSection";
import { Resources } from "@/components/Resources";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <Features />
      <AddictionsSection />
      <RehabLocator />
      <Resources />
      <CTA />
      <Footer />
    </main>
  );
}
