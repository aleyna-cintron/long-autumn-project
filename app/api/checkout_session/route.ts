import { createCheckoutSession } from '../../lib/createStrpeSession'

export async function POST(req: Request) {
  try {
      const payload = await req.json() // expect cart items
      console.log('Received payload:', payload.items);
    const url = await createCheckoutSession(payload.items || payload)
    return new Response(JSON.stringify({ url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'failed';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}