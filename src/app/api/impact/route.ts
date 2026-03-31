import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const defaultMetrics = {
  childrenSupported: 247,
  programsActive: 12,
  mealsServed: 8500,
  communitiesReached: 15,
};

export async function GET() {
  try {
    const metrics = await prisma.impactMetrics.findFirst({
      orderBy: { lastUpdated: "desc" },
    });

    return NextResponse.json(metrics || defaultMetrics);
  } catch {
    // Return default metrics when database is unavailable
    return NextResponse.json(defaultMetrics);
  }
}
