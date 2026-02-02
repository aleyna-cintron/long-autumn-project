import { PanelCard } from '../ui/PanelCard'
import { Button } from '../ui/Button'

interface CTAItem {
  icon: React.ReactNode
  title: string
  description: string
  buttonLabel: string
  buttonHref: string
  external?: boolean
}

interface ConnectSectionProps {
  title?: string
  items?: CTAItem[]
}

const defaultItems: CTAItem[] = [
  {
    icon: (
      <svg className="w-6 h-6 text-brutal-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: 'Live Shows',
    description: 'All merch is available at our live shows. Come say hi and grab a tee!',
    buttonLabel: 'View Show Dates',
    buttonHref: '/shows',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brutal-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Questions?',
    description: 'Have questions about sizing, shipping, or want to book us for your venue?',
    buttonLabel: 'Get in Touch',
    buttonHref: '/contact',
  },
]

export default function ConnectSection({ title = 'Connect With Us', items = defaultItems }: ConnectSectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PanelCard title={title}>
          <div className={`grid gap-8 ${items.length === 2 ? 'md:grid-cols-2' : items.length >= 3 ? 'md:grid-cols-3' : ''}`}>
            {items.map((item, index) => (
              <div key={index} className="text-center p-6 bg-muted/20 rounded-sm border border-border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brutal-red/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl text-foreground mb-3 uppercase tracking-wide">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <Button
                  href={item.buttonHref}
                  label={item.buttonLabel}
                  variant="outline"
                  external={item.external}
                />
              </div>
            ))}
          </div>
        </PanelCard>
      </div>
    </section>
  )
}
