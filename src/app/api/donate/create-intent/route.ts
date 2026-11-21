import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      error: "Card checkout is not available. Use PayPal on the donate page.",
      redirect: "/donate",
    },
    { status: 410 }
  );
}
