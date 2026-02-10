import { NextRequest, NextResponse } from 'next/server'

const KIT_API_KEY = process.env.KIT_API_KEY!
const KIT_FORM_ID = process.env.KIT_FORM_ID!
const KIT_BASE = 'https://api.kit.com/v4'

const kitHeaders = {
  'Content-Type': 'application/json',
  'X-Kit-Api-Key': KIT_API_KEY,
} as const

async function kitFetch(endpoint: string, body: Record<string, unknown>) {
  const res = await fetch(`${KIT_BASE}${endpoint}`, {
    method: 'POST',
    headers: kitHeaders,
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new KitError(data.message || `Kit API error at ${endpoint}`, res.status)
  }

  return res.json()
}

class KitError extends Error {
  constructor(message: string, public status: number) {
    super(message)
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const payload = { email_address: email }

    await kitFetch('/subscribers', payload)
    await kitFetch(`/forms/${KIT_FORM_ID}/subscribers`, payload)

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof KitError) {
      return NextResponse.json({ error: err.message }, { status: err.status })
    }
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}