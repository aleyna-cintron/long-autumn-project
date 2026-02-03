import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryHero from "../components/gallery/GalleryHero";
import Quote from "../components/gallery/Quote";
import Socials from "../components/gallery/Socials";

export default function Gallery() {
  return (
    <div className="w-full min-h-screen text-text-primary md:pt-20 lg:pt-24 pb-20">
      <div className="absolute inset-0" />
      <GalleryHero></GalleryHero>
      {/* Gallery */}
      <GalleryGrid></GalleryGrid>
      <Quote></Quote>
      <Socials></Socials>
    </div>
  );
}