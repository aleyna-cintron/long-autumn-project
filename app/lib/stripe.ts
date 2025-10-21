import 'server-only'

import Stripe from 'stripe'

console.log('STRIPE_SECRET_KEY:', process.env.STRIPE_SECRET_KEY)
console.log('Type:', typeof process.env.STRIPE_SECRET_KEY)
console.log('Length:', process.env.STRIPE_SECRET_KEY?.length)

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)