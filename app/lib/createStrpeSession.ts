'use server'
import {getStripe} from './stripe'
import { CartItem } from '../store/cart-store'

// Creates a Stripe Checkout session and returns the session URL
export async function createCheckoutSession(cartItems: CartItem[]) {
  const line_items = cartItems.map((item) => ({
    price_data: {
      currency: 'usd',
      product_data: { name: item.name },
      unit_amount: Math.round(item.price * 100), // in cents
    },
    quantity: item.quantity,
  }))
  try {
    const session = await getStripe().checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    });
    return session.url;
  } catch (err) {
    console.error('Stripe session creation failed:', err);
    throw err; // or handle it gracefully
  }
}