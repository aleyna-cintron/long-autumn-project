import AboutSection from "./components/home/AboutSection";
import EPAndShowsShowcase from "./components/home/Epandshowsshowcase ";
import FeaturedTrackSection from "./components/home/FeaturedTrackSection";
import FeaturesSection from "./components/home/FeaturesSection"
import HeroSection from "./components/home/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EPAndShowsShowcase></EPAndShowsShowcase>
      <AboutSection />
      <FeaturesSection />
      <FeaturedTrackSection />
    </>
  );
}