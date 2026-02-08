import { NextRequest, NextResponse } from 'next/server'

const KIT_API_KEY = process.env.KIT_API_KEY!
const KIT_FORM_ID = process.env.KIT_FORM_ID!
const KIT_BASE = 'https://api.kit.com/v4'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Step 1: Create (or upsert) the subscriber
    const subscriberRes = await fetch(`${KIT_BASE}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Kit-Api-Key': KIT_API_KEY,
      },
      body: JSON.stringify({ email_address: email }),
    })

    if (!subscriberRes.ok) {
      const body = await subscriberRes.json().catch(() => ({}))
      return NextResponse.json(
        { error: body.message || 'Failed to create subscriber' },
        { status: subscriberRes.status }
      )
    }

    // Step 2: Add subscriber to the form
    const formRes = await fetch(`${KIT_BASE}/forms/${KIT_FORM_ID}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Kit-Api-Key': KIT_API_KEY,
      },
      body: JSON.stringify({ email_address: email }),
    })

    if (!formRes.ok) {
      const body = await formRes.json().catch(() => ({}))
      return NextResponse.json(
        { error: body.message || 'Failed to add to form' },
        { status: formRes.status }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
