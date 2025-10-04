// 'use client';

// import { useState } from "react"
// import { Product, products } from "../product-data";
// import Link from "next/link";

// export interface CartItem {
//   product: Product;
//   quantity: number;
// }

// export const exampleCart: CartItem[] = [
//   {
//     product: products[0],
//     quantity: 2,
//   },
// ];

// export default function CartPage() {
//     // const [cartIds, setCartIds] = useState(['1', '1']);
//     // const cartProducts = products.filter(p => cartIds.includes(p.id) );    
//   const handleCheckout = async () => {
//     const stripe = await stripePromise;
//     const response = await fetch('/api/checkout-sessions/create', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         cartItems: products,
//         returnUrl: window.location.origin,
//       }),
//     });
//     const { sessionId } = await response.json();
//     await stripe.redirectToCheckout({ sessionId });
//   };

//   return (
//       <div>
//         <ul>
//           {exampleCart.map((item, index) => (
//             <li key={item.product.id + "-" + index}>
//               {item.product.name} - ${item.product.price} (x{item.quantity})
//             </li>
//           ))}
//         </ul>
//       <button onClick={handleCheckout}>Proceed to Checkout</button>
//       </div>
//     )
// }