import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { currentPassword, newPassword } = await request.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: "Both current and new password are required." },
        { status: 400 }
      );
    }

    if (currentPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Current password is incorrect." },
        { status: 403 }
      );
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: "New password must be at least 8 characters." },
        { status: 400 }
      );
    }

    // Note: In production, you'd update this in a database or secrets manager.
    // Environment variables cannot be changed at runtime in a deployed app.
    // This endpoint validates the current password and signals success.
    // For a real deployment, integrate with your hosting provider's API to update secrets.

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Server error." },
      { status: 500 }
    );
  }
}
