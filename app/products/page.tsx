import { getStripeProducts } from "../lib/getStripeProducts";
import ProductsList from "../components/product/ProductsList";

export default async function ProductsPage() {
  const products = await getStripeProducts(); // runs on server only

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Our Products
      </h1>

      {/* Products List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductsList products={products} />
      </div>
    </div>
  );
}
