import { NextRequest } from "next/server";
import { products } from "@/app/product-data";

type ShoppingCart = Record<string, string[]>;

const carts: ShoppingCart = {
  "1": ["1", "1"],
  "2": ["1"]
};

type Params = {
    id: string;
}

export async function GET(request: NextRequest, { params}: {params : Params}) {
    const userID = params.id
    const productIds = carts[userID];

    if (!productIds === undefined) {
        return new Response(JSON.stringify([]), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const cartProducts = productIds.map(id => products.find(p => p.id === id))

    
    return new Response(JSON.stringify(cartProducts), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

type CartBody = {
    productId: string;
}

// export async function POST(request: NextRequest, { params }: { params: Params }) {
//     const userID = params.id;
//     const body: CartBody = request.json();
// }
