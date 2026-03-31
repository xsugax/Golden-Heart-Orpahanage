import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Card payments are not yet configured. Please use PayPal or Crypto." },
    { status: 503 }
  );
}
