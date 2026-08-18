import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hasValidAdminSession, unauthorizedAdminResponse } from "@/lib/adminSession";

export async function GET(req: NextRequest) {
  try {
    if (!hasValidAdminSession(req)) {
      return unauthorizedAdminResponse();
    }

    if (!prisma) return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    const donations = await prisma.donation.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: true },
      take: 100,
    });
    return NextResponse.json(donations);
  } catch (error) {
    console.error("Admin donations fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch donations" },
      { status: 500 }
    );
  }
}
