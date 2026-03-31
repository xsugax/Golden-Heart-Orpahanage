import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, frequency, tier } = body;

    // Validate input
    if (!amount || amount < 1 || amount > 100000) {
      return NextResponse.json(
        { error: "Invalid donation amount" },
        { status: 400 }
      );
    }

    if (!["one-time", "daily", "weekly", "monthly"].includes(frequency)) {
      return NextResponse.json(
        { error: "Invalid frequency" },
        { status: 400 }
      );
    }

    const baseUrl = req.headers.get("origin") || "http://localhost:3000";

    if (frequency === "one-time") {
      // One-time payment via Checkout Session
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: `Golden Heart Orphanage - ${tier || "Donation"}`,
                description: `One-time donation to support children's care and education.`,
              },
              unit_amount: Math.round(amount * 100),
            },
            quantity: 1,
          },
        ],
        success_url: `${baseUrl}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/donate`,
        metadata: {
          frequency,
          tier: tier || "custom",
        },
      });

      return NextResponse.json({ url: session.url });
    } else {
      // Recurring subscription via Checkout Session
      const intervalMap: Record<string, "day" | "week" | "month"> = {
        daily: "day",
        weekly: "week",
        monthly: "month",
      };

      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: `Golden Heart Orphanage - ${tier || "Recurring Donation"}`,
                description: `${frequency.charAt(0).toUpperCase() + frequency.slice(1)} donation to support children's care and education.`,
              },
              unit_amount: Math.round(amount * 100),
              recurring: {
                interval: intervalMap[frequency],
              },
            },
            quantity: 1,
          },
        ],
        success_url: `${baseUrl}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/donate`,
        metadata: {
          frequency,
          tier: tier || "custom",
        },
      });

      return NextResponse.json({ url: session.url });
    }
  } catch (error) {
    console.error("Donation error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
