'use client'

interface QuantitySelectorProps {
  quantity: number
  onQuantityChange: (quantity: number) => void
  min?: number
  max?: number
}

export default function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-foreground text-sm uppercase tracking-wide">Qty</span>
      <div className="flex items-center border-2 border-border rounded-sm">
        <button
          onClick={() => onQuantityChange(Math.max(min, quantity - 1))}
          disabled={quantity <= min}
          className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          −
        </button>
        <span className="w-10 h-10 flex items-center justify-center text-foreground border-x-2 border-border">
          {quantity}
        </span>
        <button
          onClick={() => onQuantityChange(Math.min(max, quantity + 1))}
          disabled={quantity >= max}
          className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          +
        </button>
      </div>
    </div>
  )
}
