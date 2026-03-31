import { ReactNode } from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  BarChart3,
  MessageSquare,
  DollarSign,
  Settings,
  Heart,
} from "lucide-react";
import LogoutButton from "./LogoutButton";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

const navItems = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Donations", href: "/admin/donations", icon: DollarSign },
  { name: "Donors", href: "/admin/donors", icon: Users },
  { name: "Messages", href: "/admin/messages", icon: MessageSquare },
  { name: "Stories", href: "/admin/stories", icon: BookOpen },
  { name: "Metrics", href: "/admin/metrics", icon: BarChart3 },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-earth-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-earth-900 min-h-screen p-6 hidden md:flex flex-col">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-1">
              <Heart className="w-6 h-6 text-gold-500 fill-gold-400" />
              <h2 className="text-lg font-bold text-white">Admin Panel</h2>
            </div>
            <p className="text-xs text-earth-400 mt-1">
              Golden Heart Orphanage
            </p>
          </div>

          <nav className="space-y-1 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-earth-300 hover:text-white hover:bg-earth-800 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="border-t border-earth-700 pt-4 space-y-2">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-2 text-sm text-earth-500 hover:text-earth-300 transition-colors"
            >
              ← View Live Site
            </Link>
            <form action="/api/admin/logout" method="POST">
              <LogoutButton />
            </form>
          </div>
        </aside>

        {/* Mobile Nav */}
        <div className="md:hidden bg-earth-900 w-full p-4 fixed top-0 z-50">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-gold-500 fill-gold-400" />
              <h2 className="text-base font-bold text-white">Admin</h2>
            </div>
            <div className="flex gap-3">
              <Link href="/" className="text-xs text-earth-400">
                ← Site
              </Link>
            </div>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-earth-300 hover:text-white hover:bg-earth-800 whitespace-nowrap"
              >
                <item.icon className="w-3.5 h-3.5" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8 md:pt-8 pt-28">{children}</main>
      </div>
    </div>
  );
}
