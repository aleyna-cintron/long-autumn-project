import Image from "next/image";
import { PanelCard } from "../components/ui/PanelCard";
import ProductDetails from "../components/product/ProductDetails";
import PageHero from "../components/ui/PageHeader";
import ConnectSection from "../components/product/ConnectSection";
import SubscribeSection from "../components/ui/SubscribeSection";
import { products } from "@/data/product";
import { soldOutItems } from "@/data/soldOutItems";
import RotatingFlipCard from "../components/ui/RotatingFlipCard";

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
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 2xl:px-50 4xl:px-100 mt-20 md:mt-24 lg:mt-32 mb-10 md:mb-20">
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

      {/* Sold Out Items Section */}
      {soldOutItems.length > 0 && (
        <section className="py-10 md:py-20 px-4 sm:px-6 md:px-12 lg:px-2 xl:px-2 2xl:px-10">
          <h2 className="text-3xl md:text-3xl font-bold text-text-primary uppercase tracking-wide mb-8 text-center">
            Previously Available
          </h2>
          <div className={`grid grid-cols-1 gap-8 lg:gap-12 3xl:gap-16 ${
            soldOutItems.length === 1 ? "lg:grid-cols-1 justify-items-center" :
            soldOutItems.length === 2 ? "lg:grid-cols-2 justify-items-center max-w-3xl mx-auto" :
            "lg:grid-cols-3"
          }`}>
            {soldOutItems.map((item, index) => (
              <div
                key={index}
                className={
                  soldOutItems.length % 3 === 1 && index === soldOutItems.length - 1
                    ? "lg:col-span-3 flex justify-center"
                    : ""}>
                <PanelCard background className="w-full max-w-md">
                  <div className="flex flex-col items-center gap-4 p-6">
                    <span className="bg-brutal-red/80 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Sold Out
                    </span>
                    <RotatingFlipCard
                      front={<Image src={item.frontImage} alt={`${item.name} front`} fill className="object-cover rounded-lg" />}
                      back={<Image src={item.backImage} alt={`${item.name} back`} fill className="object-cover rounded-lg" />}
                    />
                    <PanelCard className="w-full">
                      <div className="flex flex-col items-center gap-2 p-2">
                        <h3 className="text-lg font-bold text-text-primary text-center">{item.name}</h3>
                        <div className="flex flex-col items-center gap-1 text-sm text-gray-400">
                          <p>Printed: {item.totalPrints}</p>
                          <p>Remaining: {item.remaining}</p>
                        </div>
                        <span className="text-brutal-red font-bold uppercase tracking-wide">Sold Out</span>
                      </div>
                    </PanelCard>
                  </div>
                </PanelCard>
              </div>
            ))}
          </div>
        </section>
      )}
      <SubscribeSection />
      <ConnectSection />
    </div>
  );
}
