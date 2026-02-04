import Cart from "../components/cart/Cart"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background pt-36 pb-20">
      <section className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="text-6xl font-bold uppercase tracking-wider mb-4">
            Cart
          </h1>
          <p className="text-muted-foreground uppercase tracking-widest">
            Review your items before checkout
          </p>
        </div>

        <Cart />
      </section>
    </div>
  )
}
