import Image from "next/image";
import Link from "next/link";
import { Product } from "./product-data";

export default function ProductsList({ products }: { products: Product[] }) {
    return (
        <div>
            {products.map(product => (
                <Link href={"/products/" +product.id} key={product.id} >
                    <Image src={"/" + product.imageUrl} alt="Long Autumn Tee-Shirt" width={150} height={150}></Image>   
                    <h2>{product.name}</h2>
                    <p>${product.price}</p>
                </Link>
            ))}
       </div>
   ) 
}