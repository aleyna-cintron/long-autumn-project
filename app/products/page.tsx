import { getStripeProducts } from "../lib/getStripeProducts";
import { PanelCard } from "../components/ui/PanelCard";
import ProductDetails from "../components/product/ProductDetails";
import MerchHero from "../components/product/MerchHero";
import FanGallery from "../components/product/FanGallery";
import ConnectSection from "../components/product/ConnectSection";

export default async function ProductsPage() {
  const products = await getStripeProducts();
  const product = products[0];

  return (
    <div className="w-full min-h-screen text-white md:pt-20 lg:pt-24 pb-20">
      <div className="absolute inset-0 bg-black/50" />
      <MerchHero />

      {/* Featured Item Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
