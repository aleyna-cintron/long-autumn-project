export interface SizeChartRow {
  size: string
  chest: string
  length: string
  sleeve: string
}

export const SIZE_OPTIONS = ['S', 'M', 'L', 'XL'] as const

export type SizeOption = typeof SIZE_OPTIONS[number]

export const sizeChart: SizeChartRow[] = [
  { size: 'S', chest: '34-36', length: '27', sleeve: '8' },
  { size: 'M', chest: '38-40', length: '28', sleeve: '8.5' },
  { size: 'L', chest: '42-44', length: '29', sleeve: '9' },
  { size: 'XL', chest: '46-48', length: '30', sleeve: '9.5' },
]
