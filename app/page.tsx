import EPAndShowsShowcase from "./components/home/Epandshowsshowcase ";
import FeaturesSection from "./components/home/FeaturesSection"
import HeroSection from "./components/home/HeroSection";
import LiveVideoShowcase from "./components/home/LiveVideoShowcase";
import FanGallery from "./components/ui/FanGallery";
import SubscribeSection from "./components/ui/SubscribeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EPAndShowsShowcase></EPAndShowsShowcase>
      <LiveVideoShowcase></LiveVideoShowcase>
      <SubscribeSection />
      <FanGallery />
      <FeaturesSection />
    </>
  );
}