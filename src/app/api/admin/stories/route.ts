import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hasValidAdminSession, unauthorizedAdminResponse } from "@/lib/adminSession";

export async function GET(req: NextRequest) {
  try {
    if (!hasValidAdminSession(req)) {
      return unauthorizedAdminResponse();
    }

    if (!prisma) return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    const stories = await prisma.story.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(stories);
  } catch (error) {
    console.error("Admin stories fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch stories" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!hasValidAdminSession(req)) {
      return unauthorizedAdminResponse();
    }

    const body = await req.json();
    const { title, content, imageUrl } = body;

    if (!title || !content || !imageUrl) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (title.length > 500 || content.length > 10000 || imageUrl.length > 2000) {
      return NextResponse.json(
        { error: "Input exceeds maximum length" },
        { status: 400 }
      );
    }

    if (!prisma) return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    const story = await prisma.story.create({
      data: {
        title: title.trim(),
        content: content.trim(),
        imageUrl: imageUrl.trim(),
      },
    });

    return NextResponse.json(story, { status: 201 });
  } catch (error) {
    console.error("Admin story create error:", error);
    return NextResponse.json(
      { error: "Failed to create story" },
      { status: 500 }
    );
  }
}
