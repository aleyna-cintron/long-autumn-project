export interface ImageAsset {
  src: string;
  alt: string;
}
export interface SizeOption {
    size: string;
    priceId: string;
}
export interface Product {
    id: string;
    name: string;
    description: string;
    images: ImageAsset[];
    sizes: SizeOption[];
    price: number;
}