import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hasValidAdminSession, unauthorizedAdminResponse } from "@/lib/adminSession";

export async function GET(req: NextRequest) {
  try {
    if (!hasValidAdminSession(req)) {
      return unauthorizedAdminResponse();
    }

    if (!prisma) return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(messages);
  } catch (error) {
    console.error("Admin messages fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    if (!hasValidAdminSession(req)) {
      return unauthorizedAdminResponse();
    }

    const body = await req.json();
    const { id, read } = body;

    if (!id || typeof read !== "boolean") {
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }

    if (!prisma) return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    const message = await prisma.contactMessage.update({
      where: { id },
      data: { read },
    });

    return NextResponse.json(message);
  } catch (error) {
    console.error("Message update error:", error);
    return NextResponse.json(
      { error: "Failed to update message" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    if (!hasValidAdminSession(req)) {
      return unauthorizedAdminResponse();
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Message ID required" },
        { status: 400 }
      );
    }

    if (!prisma) return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    await prisma.contactMessage.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Message delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete message" },
      { status: 500 }
    );
  }
}
