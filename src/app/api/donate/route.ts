import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Please use our cryptocurrency donation option.", redirect: "/donate" },
    { status: 200 }
  );
}
