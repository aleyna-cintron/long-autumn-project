import NotFound from "@/app/not-found";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../../components/cart/AddToCartButton";
import { getStripeProducts } from "../../lib/getStripeProducts";
import DecrementItemButton from "@/app/components/ui/DecrementItemButton";
import { Button } from "../../components/ui/Button";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const products = await getStripeProducts();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="w-full min-h-screen bg-black text-white pt-36 md:pt-40 lg:pt-44 pb-20">
      {/* Hero Section */}
      <div className="relative h-40 mb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-400 max-w-2xl">
            Official Long Autumn merchandise
          </p>
        </div>
      </div>

      {/* Back Link & Product Section */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-brutal-red transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Merch
          </Link>
        </div>

      {/* Product Detail Card */}
        <div
          className="bg-black border-2 border-gray-800 overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Product Image */}
            <div className="relative border-b-2 lg:border-b-0 lg:border-r-2 border-gray-800">
              <Image
                alt={product.name}
                src={product.imageUrl}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-8 flex flex-col">
              {/* Price */}
              <p className="text-4xl font-bold text-brutal-red mb-6">
                ${product.price.toFixed(2)}
              </p>

              {/* Description */}
              <div className="mb-8 flex-1">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                  Description
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {product.description || "Official Long Autumn merchandise. High-quality materials for fans who want to represent."}
                </p>
              </div>

              {/* Cart Controls */}
              <div className="pt-6 border-t border-gray-800 space-y-4">
                <div className="flex gap-4">
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
                <Button href="/cart" label="View Cart" variant="dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}