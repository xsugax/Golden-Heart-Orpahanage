import { ReactNode } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, Users, BookOpen, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

const navItems = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Donors", href: "/admin/donors", icon: Users },
  { name: "Stories", href: "/admin/stories", icon: BookOpen },
  { name: "Metrics", href: "/admin/metrics", icon: BarChart3 },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-earth-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-earth-900 min-h-screen p-6 hidden md:block">
          <div className="mb-8">
            <h2 className="text-lg font-bold text-white">Admin Dashboard</h2>
            <p className="text-xs text-earth-400 mt-1">Golden Heart Orphanage</p>
          </div>
          <nav className="space-y-2">
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

          <div className="absolute bottom-6 left-6">
            <Link
              href="/"
              className="text-sm text-earth-500 hover:text-earth-300 transition-colors"
            >
              ← Back to Site
            </Link>
          </div>
        </aside>

        {/* Mobile Nav */}
        <div className="md:hidden bg-earth-900 w-full p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white">Admin</h2>
            <Link href="/" className="text-sm text-earth-400">
              ← Back
            </Link>
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-earth-300 hover:text-white hover:bg-earth-800 whitespace-nowrap"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
