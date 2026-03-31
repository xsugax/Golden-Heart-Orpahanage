import { NextRequest, NextResponse } from "next/server";
import { createPayPalOrder } from "@/lib/paypal";

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

    const validFrequencies = ["one-time", "daily", "weekly", "monthly"];
    if (!validFrequencies.includes(frequency)) {
      return NextResponse.json(
        { error: "Invalid donation frequency" },
        { status: 400 }
      );
    }

    const baseUrl = req.headers.get("origin") || "http://localhost:3000";
    const description = `Golden Heart Orphanage - ${tier || "Donation"} (${frequency})`;

    const params = new URLSearchParams({
      frequency,
      tier: tier || "custom",
      method: "paypal",
    });

    const order = await createPayPalOrder(
      amount,
      description,
      `${baseUrl}/donate/success?${params.toString()}&token=`,
      `${baseUrl}/donate`
    );

    // Find the approval URL from PayPal's HATEOAS links
    const approveLink = order.links?.find(
      (link: { rel: string; href: string }) => link.rel === "approve"
    );

    if (!approveLink?.href) {
      return NextResponse.json(
        { error: "Failed to get PayPal approval URL" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: approveLink.href });
  } catch (error) {
    console.error("PayPal donation error:", error);
    return NextResponse.json(
      { error: "Failed to create PayPal order" },
      { status: 500 }
    );
  }
}
