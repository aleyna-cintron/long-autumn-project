"use client"
import { Button } from "./Button";
import { useCartStore } from "@/app/store/cart-store-provider";


interface Props {
  id: string;
}

export default function DecrementItemButton({id}: Props) {
    const decrementItem = useCartStore((state) => state.decrementItem)

    return (
        <Button onClick={()=>decrementItem(id)}>
            -
        </Button>
    )
}