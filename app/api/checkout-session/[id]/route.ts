import { NextResponse } from "next/server"
import { getStripe } from "@/app/lib/stripe"

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  if (!id || !id.startsWith("cs_")) {
    return NextResponse.json(
      { error: "Invalid session ID" },
      { status: 400 }
    )
  }

  try {
    const session = await getStripe().checkout.sessions.retrieve(id, {
      expand: ["line_items.data.price.product"],
    })

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Payment not completed" },
        { status: 402 }
      )
    }

    return NextResponse.json({
      id: session.id,
      payment_status: session.payment_status,
      status: session.status,
      created: session.created,
      customer_email: session.customer_details?.email ?? null,
      amount_total: session.amount_total,
      currency: session.currency,
      line_items: (session.line_items?.data ?? []).map((item) => ({
        description: item.description,
        quantity: item.quantity,
        amount_total: item.amount_total,
        currency: item.currency,
        image:
          typeof item.price?.product === "object" &&
          item.price.product !== null &&
          "images" in item.price.product
            ? (item.price.product as { images: string[] }).images?.[0] ?? null
            : null,
      })),
    })
  } catch (err: any) {
    const status = err.statusCode || 500
    return NextResponse.json(
      { error: err.message ?? "Failed to retrieve session" },
      { status }
    )
  }
}
