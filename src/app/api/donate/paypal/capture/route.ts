import { NextRequest, NextResponse } from "next/server";
import { capturePayPalOrder } from "@/lib/paypal";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId } = body;

    if (!orderId || typeof orderId !== "string") {
      return NextResponse.json(
        { error: "Missing PayPal order ID" },
        { status: 400 }
      );
    }

    const capture = await capturePayPalOrder(orderId);

    if (capture.status === "COMPLETED") {
      return NextResponse.json({
        success: true,
        orderId: capture.id,
        status: capture.status,
      });
    }

    return NextResponse.json(
      { error: "Payment was not completed", status: capture.status },
      { status: 400 }
    );
  } catch (error) {
    console.error("PayPal capture error:", error);
    return NextResponse.json(
      { error: "Failed to capture PayPal payment" },
      { status: 500 }
    );
  }
}
