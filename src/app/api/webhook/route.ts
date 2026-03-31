import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        if (!prisma) break;
        const session = event.data.object;
        const customerEmail =
          session.customer_details?.email || "anonymous@donor.com";
        const customerName =
          session.customer_details?.name || "Anonymous Donor";
        const amount = (session.amount_total || 0) / 100;
        const frequency = (session.metadata?.frequency as string) || "one-time";
        const tier = (session.metadata?.tier as string) || "custom";

        // Upsert user
        const user = await prisma.user.upsert({
          where: { email: customerEmail },
          update: { name: customerName },
          create: { name: customerName, email: customerEmail },
        });

        // Create donation record
        await prisma.donation.create({
          data: {
            userId: user.id,
            amount,
            frequency,
            tier,
            stripeSessionId: session.id,
            stripeSubscriptionId: session.subscription as string | null,
            status: "completed",
          },
        });

        break;
      }

      case "invoice.payment_succeeded": {
        if (!prisma) break;
        const invoice = event.data.object;
        const subscriptionId = (invoice as unknown as Record<string, unknown>).subscription as string;
        const customerEmail =
          invoice.customer_email || "anonymous@donor.com";
        const amount = (invoice.amount_paid || 0) / 100;

        const user = await prisma.user.findUnique({
          where: { email: customerEmail },
        });

        if (user) {
          // Find original donation to get frequency/tier
          const originalDonation = await prisma.donation.findFirst({
            where: { stripeSubscriptionId: subscriptionId },
            orderBy: { createdAt: "asc" },
          });

          await prisma.donation.create({
            data: {
              userId: user.id,
              amount,
              frequency: originalDonation?.frequency || "monthly",
              tier: originalDonation?.tier || "recurring",
              stripeSubscriptionId: subscriptionId,
              status: "completed",
            },
          });
        }
        break;
      }

      default:
        // Unhandled event type
        break;
    }
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true });
}
