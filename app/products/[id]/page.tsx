import NotFound from "@/app/not-found";
import { products } from "@/app/product-data";
import Image from "next/image";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <NotFound/>
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <Image alt={"tee-shirt"} src={"/"+product.imageUrl} width={150} height={150}></Image>
      <p>${product.price}</p>
      <h3>Description</h3>
      <p>{product.description}</p>
      {/* <button onClick={}>Checkout</button> */}
    </div>
  );
}
