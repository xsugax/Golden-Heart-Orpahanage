import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hasValidAdminSession, unauthorizedAdminResponse } from "@/lib/adminSession";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!hasValidAdminSession(req)) {
      return unauthorizedAdminResponse();
    }

    const { id } = await params;
    const body = await req.json();

    if (!prisma) return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    const story = await prisma.story.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(story);
  } catch (error) {
    console.error("Story update error:", error);
    return NextResponse.json(
      { error: "Failed to update story" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!hasValidAdminSession(_req)) {
      return unauthorizedAdminResponse();
    }

    const { id } = await params;

    if (!prisma) return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    await prisma.story.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Story delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete story" },
      { status: 500 }
    );
  }
}
