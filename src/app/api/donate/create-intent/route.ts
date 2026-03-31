import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, frequency, tier } = body;

    if (!amount || amount < 1 || amount > 100000) {
      return NextResponse.json(
        { error: "Donation amount must be between $1 and $100,000" },
        { status: 400 }
      );
    }

    if (!["one-time", "daily", "weekly", "monthly"].includes(frequency)) {
      return NextResponse.json(
        { error: "Invalid frequency" },
        { status: 400 }
      );
    }

    const description = `Golden Heart Orphanage - ${tier || "Donation"} (${frequency})`;

    // ─── One-time donation: simple PaymentIntent ───
    if (frequency === "one-time") {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency: "usd",
        automatic_payment_methods: { enabled: true },
        metadata: {
          frequency,
          tier: tier || "custom",
          source: "golden-heart-orphanage",
        },
        description,
      });

      return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
        type: "payment",
      });
    }

    // ─── Recurring donation: Customer + Subscription (auto-debit) ───
    const intervalMap: Record<string, "day" | "week" | "month"> = {
      daily: "day",
      weekly: "week",
      monthly: "month",
    };

    // Create a customer (Stripe will attach the payment method on confirm)
    const customer = await stripe.customers.create({
      metadata: {
        tier: tier || "custom",
        frequency,
        source: "golden-heart-orphanage",
      },
    });

    // Create a recurring price for this donation
    const price = await stripe.prices.create({
      currency: "usd",
      unit_amount: Math.round(amount * 100),
      recurring: {
        interval: intervalMap[frequency],
      },
      product_data: {
        name: description,
      },
    });

    // Create a subscription — first payment is incomplete until the
    // user confirms via PaymentElement on the frontend, then Stripe
    // automatically charges on the recurring schedule.
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: price.id }],
      payment_behavior: "default_incomplete",
      payment_settings: {
        save_default_payment_method: "on_subscription",
      },
      expand: ["latest_invoice.payment_intent"],
      metadata: {
        frequency,
        tier: tier || "custom",
        source: "golden-heart-orphanage",
      },
    });

    // Extract the client secret from the first invoice's PaymentIntent
    const invoice = subscription.latest_invoice;
    const paymentIntent =
      typeof invoice === "object" && invoice !== null && "payment_intent" in invoice
        ? invoice.payment_intent
        : null;
    const clientSecret =
      typeof paymentIntent === "object" && paymentIntent !== null && "client_secret" in paymentIntent
        ? (paymentIntent as { client_secret: string }).client_secret
        : null;

    if (!clientSecret) {
      return NextResponse.json(
        { error: "Failed to initialize recurring payment" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      clientSecret,
      type: "subscription",
      subscriptionId: subscription.id,
    });
  } catch (error) {
    console.error("Payment Intent error:", error);
    return NextResponse.json(
      { error: "Failed to initialize payment" },
      { status: 500 }
    );
  }
}
