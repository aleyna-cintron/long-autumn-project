import SubscribeForm from './SubscribeForm'
import { Mail } from 'lucide-react'

export default function SubscribeSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center bg-background/80 backdrop-blur-md border-2 border-brutal-red/20 rounded-xl p-8 md:p-12">
        <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-brutal-red/20 flex items-center justify-center">
          <Mail className="w-6 h-6 text-brutal-red" />
        </div>
        <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-bold text-foreground uppercase tracking-wider mb-3">
          Stay In The Loop
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Be the first to know about new music, merch drops, and upcoming shows.
        </p>
        <SubscribeForm />
      </div>
    </section>
  )
}
