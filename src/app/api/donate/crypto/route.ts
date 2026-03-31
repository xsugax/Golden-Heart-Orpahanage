import { NextRequest, NextResponse } from "next/server";

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

    // In production, integrate with Coinbase Commerce, NOWPayments,
    // or another crypto payment processor here.
    // For now, redirect to a confirmation page with donation details.
    const params = new URLSearchParams({
      amount: String(amount),
      frequency,
      tier: tier || "custom",
      method: "crypto",
    });

    return NextResponse.json({
      url: `/donate/crypto-confirm?${params.toString()}`,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process crypto donation" },
      { status: 500 }
    );
  }
}
