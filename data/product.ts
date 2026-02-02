import { Product } from "@/types/product-data";

export const products: Product[] = [    
    {
        id: 'tee',
        name: 'Long Autumn Tee Shirt',
        description: 'Tee shirt featuring the Long Autumn design on a black shirt, made from 100% cotton for comfort and durability.',
        images: [{ src: '/merch/long-autumn-shirt-front.jpg', alt: 'Long Autumn Tee' }, { src: '/merch/long-autumn-shirt-back.jpg', alt: 'Long Autumn Tee Back' }
        ],
        sizes: [
            { size: 'S', priceId: 'price_1SwFzf3yo9wO0LWOEtowhuf4' },
            { size: 'M', priceId: 'price_1SwFzf3yo9wO0LWOIHNhO1Qv' },
            { size: 'L', priceId: 'price_1SwG0U3yo9wO0LWOwreL1o2Y'},
            { size: 'XL', priceId: 'price_1SwG0O3yo9wO0LWOuFbDIyji' },
        ],
        price: 25.00
    },
]
