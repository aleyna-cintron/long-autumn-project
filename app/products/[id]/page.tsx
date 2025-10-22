import NotFound from "@/app/not-found";
import Image from "next/image";
import AddToCartButton from "../../components/cart/AddToCartButton"
import { getStripeProducts } from "../../lib/getStripeProducts"; // adjust path if different

// Mark the component as async so we can await Stripe data
export default async function ProductDetailPage({ params }: { params: { id: string } }) {
// Await params before using properties (Next.js requirement)
  const { id } =  params

  // Fetch products from Stripe
  const products = await getStripeProducts();

  // Find the one matching the product ID in the URL
  const product = products.find((p) => p.id === id);
  // If not found, render Next.js's NotFound page
  if (!product) {
    return <NotFound />;
  }
  // Display the product details
  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>

      <Image
        alt={product.name}
        src={product.imageUrl}
        width={300}
        height={300}
        className="rounded-lg shadow"
      />

      <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>

      <h3 className="text-lg font-medium">Description</h3>
      <p className="text-gray-700">{product.description || "No description available."}</p>

      <div className="flex items-center gap-4">
        <p>
          Quantity: <span className="font-semibold">0</span>
        </p>
        <AddToCartButton 
          item={{
            id: product.id,
            name: product.name,
            quantity: 1,
            price: product.price,
          }}
/>        <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          +
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          -
        </button>
      </div>

      <button className="w-full mt-4 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition">
        Checkout
      </button>
    </div>
  );
}
