'use server'
import {stripe} from '../lib/stripe'
import { CartItem } from '../store/cart-store'

// Creates a Stripe Checkout session and returns the session URL
export async function createCheckoutSession(cartItems: CartItem[]) {
  // cartItems shape: [{ id, name, price, quantity }, ...]
  console.log('Creating checkout session with items:', cartItems);
  const line_items = cartItems.map((item) => ({
    price_data: {
      currency: 'usd',
      product_data: { name: item.name },
      unit_amount: Math.round(item.price * 100), // in cents
    },
    quantity: item.quantity,
  }))
  console.log('Line items for Stripe:', line_items);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    });
    console.log('Created Stripe session:', session);
    console.log('Checkout URL:', session.url);
    return session.url;
  } catch (err) {
    console.error('Stripe session creation failed:', err);
    throw err; // or handle it gracefully
  }
}