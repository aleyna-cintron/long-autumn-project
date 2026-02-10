'use client'

import { useRef } from 'react'
import { useSubscribe } from '@/app/hooks/useSubscribe'
import { Mail, CheckCircle } from 'lucide-react'

export default function SubscribeForm() {
  const { loading, error, success, subscribe, reset } = useSubscribe()
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    await subscribe(email)
    formRef.current?.reset()
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
        <CheckCircle size={48} className="text-green-500" />
        <h3 className="text-xl font-bold text-foreground">You're In!</h3>
        <p className="text-muted-foreground">You'll be the first to know about new music, merch, and shows.</p>
        <button
          type="button"
          onClick={reset}
          className="text-brutal-red hover:underline uppercase tracking-wide text-sm"
        >
          Subscribe Another Email
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <div className="flex-1">
        <label htmlFor="subscribe-email" className="sr-only">
          Email address
        </label>
        <input
          id="subscribe-email"
          name="email"
          type="email"
          required
          placeholder="your.email@example.com"
          disabled={loading}
          className="w-full px-4 py-3 bg-background border-2 border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:border-brutal-red focus:outline-none transition-colors disabled:opacity-50"
        />
        {error && <p className="text-brutal-red text-sm mt-1">{error}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-brutal-red hover:bg-foreground text-background border-2 border-brutal-red hover:border-foreground transition-all px-6 py-3 uppercase tracking-wide font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Mail size={16} />
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  )
}
