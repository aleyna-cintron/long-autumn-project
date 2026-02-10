import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your Long Autumn merch order and checkout securely via Stripe.",
  robots: { index: false, follow: false },
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
