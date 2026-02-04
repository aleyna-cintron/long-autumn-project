interface ProductInfoProps {
  name: string
  description?: string
  stockCount?: number
  dropContext?: string
}

const DEFAULT_DESCRIPTION = "Our signature t-shirt featuring the Long Autumn logo on a premium quality black tee. Designed with a vintage-inspired aesthetic that matches our moody alt-rock vibe. Perfect for shows or everyday wear."

export default function ProductInfo({
  name,
  description,
  stockCount = 74,
  dropContext = "Limited Edition Drop — Official Band Merch",
}: ProductInfoProps) {
  return (
    <>
      <h3 className="text-2xl md:text-3xl text-foreground uppercase tracking-wide">
        {name}
      </h3>

      <p className="text-brutal-red uppercase tracking-wider text-xs sm:text-sm font-medium">
        {dropContext}
      </p>

      <p className="text-muted-foreground text-sm sm:text-base">
        <span className="text-foreground font-semibold">{stockCount}</span> left in stock — selling fast
      </p>

      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
        {description || DEFAULT_DESCRIPTION}
      </p>
    </>
  )
}
