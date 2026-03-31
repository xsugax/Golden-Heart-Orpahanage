import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Webhook not configured" },
    { status: 503 }
  );
}
