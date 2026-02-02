'use client'

import { useCartStore } from "../../store/cart-store-provider";
import { CartItem } from "../../store/cart-store";
import { toast } from 'sonner'
import { Plus, Minus } from 'lucide-react';

interface QuantityControlProps {
  item: CartItem;
}

export default function QuantityControl({ item }: QuantityControlProps) {
  const addItem = useCartStore((state) => state.addItem);
  const decrementItem = useCartStore((state) => state.decrementItem);
  
  const quantity = useCartStore(state => 
    state.items.find(i => i.id === item.id)?.quantity || 0
  );
  
  const handleIncrement = () => {
    addItem(item);
    toast.success(`${item.name} added to cart.`);
  };

  const handleDecrement = () => {
    decrementItem(item.id);
    if (quantity === 1) {
      toast.info(`${item.name} removed from cart.`);
    }
  };

  const total = quantity * item.price;

  return (
    <div className="space-y-6">
      {/* Quantity Display */}
      <div className="flex items-center justify-between">
        <p className="text-foreground text-lg font-semibold">Quantity</p>
        <p className="text-3xl font-bold text-accent">{quantity}</p>
      </div>
      
      {/* Increment/Decrement Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleDecrement}
          disabled={quantity === 0}
          className="flex-1 bg-black/80 border-2 border-white/10 hover:border-accent/50 hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg px-6 py-4 flex items-center justify-center gap-3"
        >
          <Minus size={20} className="text-accent" />
          <span className="text-foreground font-bold uppercase tracking-wide">Remove</span>
        </button>

        <button
          onClick={handleIncrement}
          className="flex-1 bg-black/80 border-2 border-white/10 hover:border-accent/50 hover:bg-white/5 rounded-lg px-6 py-4 flex items-center justify-center gap-3"
        >
          <Plus size={20} className="text-accent" />
          <span className="text-foreground font-bold uppercase tracking-wide">Add</span>
        </button>
      </div>

      {/* Total Price (only show if quantity > 0) */}
      {quantity > 0 && (
        <div className="flex items-center justify-between pt-4 border-t border-accent/30">
          <p className="text-foreground text-lg font-semibold">Total</p>
          <p className="text-3xl font-bold text-accent">${total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}