import AboutSection from "./components/home/AboutSection";
import FeaturedTrackSection from "./components/home/FeaturedTrackSection";
import FeaturesSection from "./components/home/FeaturesSection"
import HeroSection from "./components/home/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <FeaturedTrackSection />
    </>
  );
}