import { PanelCard } from "../components/ui/PanelCard";
import ProductDetails from "../components/product/ProductDetails";
import MerchHero from "../components/product/MerchHero";
import FanGallery from "../components/product/FanGallery";
import ConnectSection from "../components/product/ConnectSection";
import { products } from "@/data/product";
const product = products[0];

export default async function ProductsPage() {
  return (
    <div className="w-full min-h-screen text-white md:pt-20 lg:pt-24 pb-20">
      <div className="absolute inset-0" />
      <MerchHero />
      {/* Featured Item Section */}
      <section className="py-20">
        <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-350 4xl:max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
          {!product ? (
            <PanelCard title="Featured Item">
              <div className="p-12 text-center">
                <p className="text-4xl font-bold text-gray-500 mb-2">Coming Soon</p>
                <p className="text-gray-400">No merch available at this time. Check back soon!</p>
              </div>
            </PanelCard>
          ) : (
            <PanelCard title="Featured Item">
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
