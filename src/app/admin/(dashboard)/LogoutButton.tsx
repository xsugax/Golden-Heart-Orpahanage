"use client";

import { LogOut } from "lucide-react";

export default function LogoutButton() {
  return (
    <button
      type="button"
      className="flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:text-red-300 transition-colors w-full text-left"
      onClick={() => {
        fetch("/api/admin/logout", { method: "POST" }).finally(() => {
          window.location.href = "/admin/login";
        });
      }}
    >
      <LogOut className="w-4 h-4" />
      Logout
    </button>
  );
}
