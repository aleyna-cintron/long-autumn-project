import NotFound from "@/app/not-found";
import Image from "next/image";
import AddToCartButton from "../../components/cart/AddToCartButton";
import { getStripeProducts } from "../../lib/getStripeProducts";
import DecrementItemButton from "@/app/components/ui/DecrementItemButton";

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const products = await getStripeProducts();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-lg shadow-lg space-y-6">
      {/* Product Name */}
      <h1 className="text-3xl font-bold text-gray-900 text-center">{product.name}</h1>

      {/* Product Image */}
      <div className="flex justify-center">
        <Image
          alt={product.name}
          src={product.imageUrl}
          width={300}
          height={300}
          className="rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Price */}
      <p className="text-2xl font-semibold text-gray-900 text-center">
        ${product.price.toFixed(2)}
      </p>

      {/* Description */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-800">Description</h3>
        <p className="text-gray-700">{product.description || "No description available."}</p>
      </div>

      {/* Quantity & Cart Controls */}
      <div className="flex items-center gap-4 justify-between mt-4">
        <p className="text-gray-800">
          Quantity: <span className="font-semibold">0</span>
        </p>
        <div className="flex gap-2">
          <AddToCartButton
            item={{
              id: product.id,
              name: product.name,
              quantity: 1,
              price: product.price,
            }}
          />
          <DecrementItemButton id={id} />
        </div>
      </div>
    </div>
  );
}
