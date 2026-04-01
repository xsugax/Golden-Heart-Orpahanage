import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (email.length > 320) {
      return NextResponse.json(
        { error: "Email exceeds maximum length" },
        { status: 400 }
      );
    }

    try {
      if (!prisma) throw new Error("No database");
      await prisma.newsletterSubscriber.create({
        data: { email: email.trim().toLowerCase() },
      });
    } catch (dbError: unknown) {
      // Handle duplicate email gracefully
      if (
        dbError instanceof Error &&
        "code" in dbError &&
        (dbError as { code: string }).code === "P2002"
      ) {
        return NextResponse.json({ success: true });
      }
      console.warn("Database unavailable, newsletter signup not persisted");
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
