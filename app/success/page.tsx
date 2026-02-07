'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState, Suspense } from 'react'
import Image from 'next/image'
import { PanelCard } from '@/app/components/ui/PanelCard'
import { Button } from '@/app/components/ui/Button'
import { useCartStore } from '@/app/store/cart-store-provider'
import { CheckCircle, AlertTriangle, Package, Mail, Music } from 'lucide-react'

type SessionLineItem = {
  description: string
  quantity: number | null
  amount_total: number
  currency: string
  image: string | null
}

type SessionData = {
  id: string
  payment_status: string
  status: string
  customer_email: string | null
  amount_total: number | null
  currency: string | null
  line_items: SessionLineItem[]
}

function formatCurrency(cents: number, currency: string = 'usd'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(cents / 100)
}

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  const items = useCartStore((s) => s.items)
  const removeItem = useCartStore((s) => s.removeItem)

  const [session, setSession] = useState<SessionData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const cartCleared = useRef(false)

  // Clear cart once on mount
  useEffect(() => {
    if (!cartCleared.current && items.length > 0) {
      items.forEach((item) => removeItem(item.id))
      cartCleared.current = true
    }
  }, [items, removeItem])

  // Fetch session data
  useEffect(() => {
    if (!sessionId) {
      setError('No order information found.')
      setLoading(false)
      return
    }

    let cancelled = false

    async function fetchSession() {
      try {
        const res = await fetch(`/api/checkout-session/${sessionId}`)
        if (!res.ok) {
          const body = await res.json().catch(() => ({}))
          throw new Error(body.error || `Request failed (${res.status})`)
        }
        const data: SessionData = await res.json()
        if (!cancelled) setSession(data)
      } catch (err: any) {
        if (!cancelled) setError(err.message ?? 'Something went wrong.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchSession()
    return () => { cancelled = true }
  }, [sessionId])

  // --- LOADING ---
  if (loading) {
    return (
      <PanelCard title="Processing Your Order...">
        <div className="p-8 md:p-12 space-y-6 animate-pulse">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-brutal-red/20" />
          </div>
          <div className="h-6 bg-white/5 rounded w-3/4 mx-auto" />
          <div className="h-4 bg-white/5 rounded w-1/2 mx-auto" />
          <div className="space-y-3 mt-8">
            <div className="h-16 bg-white/5 rounded" />
            <div className="h-16 bg-white/5 rounded" />
          </div>
        </div>
      </PanelCard>
    )
  }

  // --- ERROR / MISSING SESSION ---
  if (error || !session) {
    return (
      <PanelCard title="Order Status Unavailable">
        <div className="p-8 md:p-12 text-center">
          <AlertTriangle className="mx-auto h-16 w-16 text-brutal-red mb-6" />
          <h3 className="text-2xl text-foreground uppercase tracking-wider mb-4">
            We Could Not Load Your Order
          </h3>
          <p className="text-muted-foreground mb-2 max-w-md mx-auto">
            {error || 'The order details could not be retrieved.'}
          </p>
          <p className="text-muted-foreground/70 text-sm mb-8 max-w-md mx-auto">
            If you completed a purchase, your confirmation email from Stripe
            will have all the details. Feel free to reach out if you need help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/products" label="Back to Store" variant="primary" />
            <Button href="/contact" label="Contact Us" variant="outline" />
          </div>
        </div>
      </PanelCard>
    )
  }

  // --- SUCCESS ---
  return (
    <>
      <PanelCard title="Order Confirmed">
        <div className="p-4 md:p-0">
          {/* Success icon + headline */}
          <div className="text-center mb-8 md:mb-10">
            <CheckCircle className="mx-auto h-16 w-16 md:h-20 md:w-20 text-green-500 mb-6" />
            <h3 className="text-2xl md:text-3xl text-foreground uppercase tracking-wider mb-3">
              Thank You For Your Support
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Your order has been received and is being processed.
              Every purchase directly helps Long Autumn keep making music.
            </p>
            {session.customer_email && (
              <p className="text-muted-foreground/70 text-sm mt-3 flex items-center justify-center gap-2">
                <Mail size={14} />
                A receipt has been sent to{' '}
                <span className="text-foreground">{session.customer_email}</span>
              </p>
            )}
          </div>

          {/* Order summary */}
          <div className="border-t-2 border-brutal-red/20 pt-6">
            <h4 className="text-lg text-foreground uppercase tracking-wider mb-4">
              Order Summary
            </h4>
            <div className="divide-y divide-brutal-red/10">
              {session.line_items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                >
                  {item.image && (
                    <div className="shrink-0 w-16 h-16 bg-black rounded-sm border border-brutal-red/20 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.description}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground uppercase tracking-wide truncate">
                      {item.description}
                    </p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">
                      Qty: {item.quantity ?? 1}
                    </p>
                  </div>
                  <span className="text-foreground uppercase tracking-wider shrink-0">
                    {formatCurrency(item.amount_total, item.currency)}
                  </span>
                </div>
              ))}
            </div>

            {session.amount_total != null && (
              <div className="border-t-2 border-brutal-red/30 mt-4 pt-4 flex justify-between items-center">
                <span className="text-xl text-foreground uppercase tracking-wider">
                  Total
                </span>
                <span className="text-xl text-brutal-red uppercase tracking-wider">
                  {formatCurrency(session.amount_total, session.currency ?? 'usd')}
                </span>
              </div>
            )}
          </div>
        </div>
      </PanelCard>

      {/* What happens next */}
      <div className="mt-8">
        <PanelCard title="What Happens Next">
          <div className="p-4 md:p-0">
            <div className="grid md:grid-cols-3 gap-6">
              {([
                {
                  icon: Mail,
                  step: '01',
                  title: 'Confirmation Email',
                  body: 'You will receive an email receipt from Stripe with your full order details.',
                },
                {
                  icon: Package,
                  step: '02',
                  title: 'Order Fulfillment',
                  body: 'We will pack your order with care. Most orders ship within 3-5 business days.',
                },
                {
                  icon: Music,
                  step: '03',
                  title: 'Rock On',
                  body: 'Rep Long Autumn at the next show. Tag us on Instagram -- we love seeing our gear in the wild.',
                },
              ] as const).map(({ icon: Icon, step, title, body }) => (
                <div
                  key={step}
                  className="text-center p-6 bg-muted/20 rounded-sm border border-border"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brutal-red/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brutal-red" />
                  </div>
                  <span className="text-xs text-brutal-red uppercase tracking-widest">
                    Step {step}
                  </span>
                  <h3 className="text-lg text-foreground mt-2 mb-2 uppercase tracking-wide">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </PanelCard>
      </div>

      {/* CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Button href="/products" label="Back to Store" variant="primary" />
        <Button href="/shows" label="View Upcoming Shows" variant="outline" />
      </div>
    </>
  )
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen">
      <section className="py-24 md:py-40 pb-20 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Suspense
            fallback={
              <PanelCard title="Loading...">
                <div className="p-12 text-center animate-pulse">
                  <div className="w-16 h-16 rounded-full bg-brutal-red/20 mx-auto mb-6" />
                  <div className="h-6 bg-white/5 rounded w-48 mx-auto" />
                </div>
              </PanelCard>
            }
          >
            <SuccessContent />
          </Suspense>
        </div>
      </section>
    </div>
  )
}
