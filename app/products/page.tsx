import { PanelCard } from "../components/ui/PanelCard";
import ProductDetails from "../components/product/ProductDetails";
import PageHero from "../components/ui/PageHeader";
import FanGallery from "../components/product/FanGallery";
import ConnectSection from "../components/product/ConnectSection";
import { products } from "@/data/product";
const product = products[0];

export default async function ProductsPage() {
  return (
    <div className="w-full min-h-screen text-white md:pt-20 lg:pt-24 pb-20">
      <div className="absolute inset-0" />
      <PageHero
        title="Official Gear"
        subtitle="Support the band and rep Long Autumn"
      />
      {/* Featured Item Section */}
      <section className="py-10 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 2xl:px-60">
        <div className="w-full">
          {!product ? (
            <PanelCard title="Featured Item">
              <div className="p-12 text-center">
                <p className="text-4xl font-bold text-gray-500 mb-2">Coming Soon</p>
                <p className="text-gray-400">No merch available at this time. Check back soon!</p>
              </div>
            </PanelCard>
          ) : (
            <PanelCard title="Featured Item" className="lg:min-h-200">
              <ProductDetails product={product} />
            </PanelCard>   
          )}
        </div>
      </section>
      <FanGallery />
      <ConnectSection />
    </div>
  );
}
