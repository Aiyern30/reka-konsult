import DirectorSection from "@/components/pages/Main/DirectorSection";
import FeaturesSection from "@/components/pages/Main/FeaturesSection";
import HeroSection from "@/components/pages/Main/HeroSection";
import ServicesSection from "@/components/pages/Main/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <DirectorSection />
    </>
  );
}
