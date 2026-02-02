import { getStripe } from "@/app/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const items = await req.json(); // Make sure req.json() is valid
    const line_items = items.map((item: { quantity: number }) => ({
      currency: 'usd',
      price: 'price_123',
      quantity: item.quantity,
}));
const session = await getStripe().checkout.sessions.create({
  payment_method_types: ['card'],
  line_items,
  mode: 'payment',
  success_url: 'http://localhost:3000/success',
  cancel_url: 'http://localhost:3000/cart',
});

return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error(err); // You want to log the real error
    return new Response("Internal Server Error", { status: 500 });
  }
}