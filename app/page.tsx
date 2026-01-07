import EPAndShowsShowcase from "./components/home/Epandshowsshowcase ";
import FeaturesSection from "./components/home/FeaturesSection"
import HeroSection from "./components/home/HeroSection";
import LiveVideoShowcase from "./components/home/LiveVideoShowcase";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EPAndShowsShowcase></EPAndShowsShowcase>
      <LiveVideoShowcase></LiveVideoShowcase>
      <FeaturesSection />
    </>
  );
}