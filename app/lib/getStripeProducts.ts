import { stripe } from "./stripe";
import type { Product } from "../../types/product-data"

/** simple cents -> dollars helper (assumes 2-decimal currency like USD) */
function centsToMajor(cents: number | null | undefined) {
  if (cents == null) return 0;
  return cents / 100;
}

/**
 * Fetch Stripe products and map to your app Product interface.
 * - Expands default_price when present
 * - Falls back to querying the first active price for a product if default_price absent
 */
export async function getStripeProducts(): Promise<Product[]> {
  const stripeProducts = await stripe.products.list({
    active: true,
    expand: ["data.default_price"],
    limit: 100,
  });

  const out: Product[] = [];

  for (const p of stripeProducts.data) {
    // default_price may be an object or a string — guard for object
    const defaultPrice =
      p.default_price && typeof p.default_price !== "string"
        ? p.default_price
        : null;

    let cents = defaultPrice?.unit_amount ?? null;

    // fallback: if no default_price amount, try to fetch a price for product (simple, 1 result)
    if (cents == null) {
      const prices = await stripe.prices.list({ product: p.id, active: true, limit: 1 });
      cents = prices.data[0]?.unit_amount ?? null;
    }

    out.push({
      id: p.id,
      imageUrl: p.images && p.images.length > 0 ? p.images[0] : "/placeholder.png",
      name: p.name ?? "Unnamed product",
      description: p.description ?? "",
      price: centsToMajor(cents),
    });
  }

  return out;
}