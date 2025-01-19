import AboutDetails from "@/components/about/about-details";
import AboutOurServices from "@/components/about/about-our-services";
import FeaturesSection from "@/components/about/features-section";
import GallerySection from "@/components/about/gallery-section";
import { HeroSection } from "@/components/about/hero-section";
import TrustedSuppliers from "@/components/about/trusted-suppliers";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="auto-container">
        <AboutDetails />

        <AboutOurServices />
        <FeaturesSection />
      </div>
      <TrustedSuppliers />

      <div className="auto-container">
        <GallerySection />
      </div>

      {/* <GridSection /> */}
    </main>
  );
}
