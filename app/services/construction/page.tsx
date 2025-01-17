import { ContactSection } from "@/components/sections/Construction/ContactSection";
import { ConstructionDetailsComponent } from "@/components/sections/Construction/Details";
import { ConstructionHeroSection } from "@/components/sections/Construction/Hero";

const ConstructionPage: React.FC = () => {
  return (
    <section>
      <ConstructionHeroSection />
      <ConstructionDetailsComponent />
      <ContactSection />
    </section>
  );
};

export default ConstructionPage;
