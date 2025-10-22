import { getStripeProducts } from "../lib/getStripeProducts";
import ProductsList from "../components/product/ProductsList";

export default async function ProductsPage() {
  const products = await getStripeProducts(); // runs on server only
  return (
    <div>
      <h1>Products</h1>
      <ProductsList products={products} />
    </div>
  );
}