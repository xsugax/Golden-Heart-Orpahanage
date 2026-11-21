import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Checkout starts on the donate page.", redirect: "/donate" },
    { status: 400 }
  );
}
