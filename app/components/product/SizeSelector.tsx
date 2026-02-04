'use client'

import { useState } from 'react'
import { ChevronDown, Ruler } from 'lucide-react'
import { sizeChart, SIZE_OPTIONS, SizeOption } from '@/data/size-chart'

interface SizeSelectorProps {
  selectedSize: string
  onSizeChange: (size: string) => void
}

export default function SizeSelector({ selectedSize, onSizeChange }: SizeSelectorProps) {
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false)

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-3">
        <label className="text-foreground uppercase tracking-wide text-sm">Select Size</label>
        <button
          onClick={() => setSizeGuideOpen(!sizeGuideOpen)}
          className="flex items-center gap-1 text-sm text-brutal-red hover:text-brutal-red/80 transition-colors"
        >
          <Ruler size={14} />
          Size Guide
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${sizeGuideOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {SIZE_OPTIONS.map((size: SizeOption) => (
          <button
            key={size}
            onClick={() => onSizeChange(size)}
            className={`w-12 h-9 sm:w-14 sm:h-10 rounded-sm transition-all duration-200 border-2 uppercase tracking-wide text-xs sm:text-sm ${
              selectedSize === size
                ? 'bg-brutal-red border-brutal-red text-black'
                : 'bg-background border-border text-foreground hover:border-brutal-red hover:bg-brutal-red/10'
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Size Guide - Absolute overlay */}
      {sizeGuideOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 z-20 bg-background border border-border rounded-sm p-4 shadow-lg">
          <p className="text-muted-foreground text-sm mb-3">Measurements in inches</p>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 text-left text-foreground">Size</th>
                <th className="py-2 text-left text-foreground">Chest</th>
                <th className="py-2 text-left text-foreground">Length</th>
                <th className="py-2 text-left text-foreground">Sleeve</th>
              </tr>
            </thead>
            <tbody>
              {sizeChart.map((row) => (
                <tr
                  key={row.size}
                  className={`border-b border-border/50 ${
                    selectedSize === row.size ? 'bg-brutal-red/10' : ''
                  }`}
                >
                  <td className="py-2 text-foreground font-medium">{row.size}</td>
                  <td className="py-2 text-muted-foreground">{row.chest}</td>
                  <td className="py-2 text-muted-foreground">{row.length}</td>
                  <td className="py-2 text-muted-foreground">{row.sleeve}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-muted-foreground text-sm mt-3">
            <strong className="text-brutal-red">Tip:</strong> True to size. Size up for an oversized look.
          </p>
        </div>
      )}
    </div>
  )
}
