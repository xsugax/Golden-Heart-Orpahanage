import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { childrenSupported, programsActive, mealsServed, communitiesReached } =
      body;

    // Validate numbers
    if (
      typeof childrenSupported !== "number" ||
      typeof programsActive !== "number" ||
      typeof mealsServed !== "number" ||
      typeof communitiesReached !== "number"
    ) {
      return NextResponse.json(
        { error: "All fields must be numbers" },
        { status: 400 }
      );
    }

    // Upsert: update existing or create new
    const existing = await prisma.impactMetrics.findFirst();

    let metrics;
    if (existing) {
      metrics = await prisma.impactMetrics.update({
        where: { id: existing.id },
        data: {
          childrenSupported,
          programsActive,
          mealsServed,
          communitiesReached,
        },
      });
    } else {
      metrics = await prisma.impactMetrics.create({
        data: {
          childrenSupported,
          programsActive,
          mealsServed,
          communitiesReached,
        },
      });
    }

    return NextResponse.json(metrics);
  } catch (error) {
    console.error("Metrics update error:", error);
    return NextResponse.json(
      { error: "Failed to update metrics" },
      { status: 500 }
    );
  }
}
