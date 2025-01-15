import GridSection from "@/components/homepage/GridSection";
import { HeroSection } from "@/components/homepage/hero-section";
import Services from "@/components/homepage/main-services";
import Projects from "@/components/homepage/projects";
// import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main>
      <HeroSection />
      <div className="auto-container">
        <Services />
        <Projects />
      </div>
      <GridSection />
    </main>
  );
}
