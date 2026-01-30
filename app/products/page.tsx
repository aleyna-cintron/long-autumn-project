import { getStripeProducts } from "../lib/getStripeProducts";
import ProductsList from "../components/product/ProductsList";

export default async function ProductsPage() {
  const products = await getStripeProducts();

  return (
    <div className="w-full min-h-screen bg-black text-white pt-36 md:pt-40 lg:pt-44 pb-20">
      {/* Hero Section */}
      <div className="relative h-40 mb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Merch</h1>
          <p className="text-gray-400 max-w-2xl">
            Support the band and grab some exclusive Long Autumn gear
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Available Items</h2>
          <div className="w-16 h-1 bg-brutal-red"></div>
        </div>

        {products.length === 0 ? (
          <div className="bg-gray-900/30 border border-gray-800 p-12 text-center">
            <p className="text-4xl font-bold text-gray-500 mb-2">Coming Soon</p>
            <p className="text-gray-400">No merch available at this time. Check back soon!</p>
          </div>
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </div>
  );
}