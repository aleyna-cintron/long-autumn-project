'use client'

import { useState, ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

interface CollapsibleProps {
  trigger: ReactNode
  children: ReactNode
  defaultOpen?: boolean
  className?: string
}

export default function Collapsible({
  trigger,
  children,
  defaultOpen = false,
  className = '',
}: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={`border-2 border-border rounded-sm overflow-hidden ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`text-brutal-red transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}
