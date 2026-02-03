import GalleryGrid from "../components/gallery/GalleryGrid";
import Quote from "../components/gallery/Quote";
import Socials from "../components/gallery/Socials";
import PageHeader from "../components/ui/PageHeader";

export default function Gallery() {
  return (
    <div className="w-full min-h-screen text-text-primary md:pt-20 lg:pt-24 pb-20">
      <div className="absolute inset-0" />
      <PageHeader
        title="Gallery"
        subtitle="Moments from the road, the stage, and everything in between"
      />
      {/* Gallery */}
      <GalleryGrid></GalleryGrid>
      <Quote></Quote>
      <Socials></Socials>
    </div>
  );
}