"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Heart, ArrowRight } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Work", href: "/our-work" },
  { name: "Impact", href: "/impact" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-navy-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-teal-400 rounded-full border-2 border-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-navy-900 leading-tight tracking-tight">
                Golden Heart
              </span>
              <span className="text-[10px] text-navy-400 leading-tight tracking-[0.2em] uppercase font-medium">
                Orphanage
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors rounded-lg hover:bg-navy-50"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/donate"
              className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 text-white text-sm font-medium rounded-xl hover:bg-navy-800 transition-all hover:shadow-lg hover:shadow-navy-900/20"
            >
              Donate
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-navy-700 rounded-lg hover:bg-navy-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden pb-6 pt-2 animate-in slide-in-from-top">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-navy-700 hover:text-navy-900 px-4 py-3 rounded-xl hover:bg-navy-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-3 px-2">
                <Link
                  href="/donate"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-navy-900 text-white font-medium rounded-xl hover:bg-navy-800 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Donate Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
