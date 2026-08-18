import { NextRequest, NextResponse } from "next/server";

export function hasValidAdminSession(req: NextRequest): boolean {
  const token = req.cookies.get("admin_session")?.value;
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  return Boolean(sessionSecret && token && token === sessionSecret);
}

export function unauthorizedAdminResponse() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
