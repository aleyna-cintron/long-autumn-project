import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../types/product-data";

export default function ProductsList({ products }: { products: Product[] }) {
    return (
        <div className="space-y-4">
            {products.map(product => (
                <Link
                    href={"/products/" + product.id}
                    key={product.id}
                    className="group relative block bg-black border-2 border-gray-800 hover:border-brutal-red p-6 transition-all duration-300 overflow-hidden"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                    }}
                >
                    <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                            <div className="border-2 border-gray-800 group-hover:border-brutal-red/50 transition-colors duration-300 overflow-hidden">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    width={120}
                                    height={120}
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1">
                            <h3 className="text-2xl font-normal text-white mb-2 tracking-wide group-hover:text-brutal-red transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-gray-400 text-sm line-clamp-2">
                                {product.description || "Official Long Autumn merchandise"}
                            </p>
                        </div>

                        {/* Price & Action */}
                        <div className="flex-shrink-0 flex flex-col items-end gap-3">
                            <p className="text-3xl font-bold text-brutal-red">
                                ${product.price.toFixed(2)}
                            </p>
                            <span className="inline-flex items-center gap-2 bg-transparent border-2 border-brutal-red text-brutal-red group-hover:bg-brutal-red group-hover:text-white font-normal py-2 px-4 transition-all duration-300 text-sm">
                                View Details
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}