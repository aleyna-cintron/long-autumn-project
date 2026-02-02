import { NextResponse } from "next/server";
import { headers } from 'next/headers'
import { getStripe } from "@/app/lib/stripe";

type CheckoutItem = {
  priceId: string
  quantity: number
}

export async function POST(req: Request) {
  const headersList = await headers()
  const origin = headersList.get('origin')

  try {
    const items: CheckoutItem[] = await req.json()

    const line_items = items.map((item) => ({
      price: item.priceId,
      quantity: item.quantity,
    }));

    const session = await getStripe().checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}