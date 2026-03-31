"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowRight, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/brand/Logo";
import { LogoIcon } from "@/components/brand/Logo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Work", href: "/our-work" },
  { name: "Impact", href: "/impact" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 20);
    // Hide header on scroll down, show on scroll up (after 100px)
    if (y > 100) {
      setHidden(y > lastY && y - lastY > 5);
    } else {
      setHidden(false);
    }
    setLastY(y);
  }, [lastY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-navy-100/50"
            : "bg-transparent"
        }`}
      >
        {/* Top announcement bar */}
        {!scrolled && (
          <div className="bg-navy-950 text-center py-1.5 px-4">
            <p className="text-[11px] text-navy-300 font-medium tracking-wide">
              <Heart className="w-3 h-3 inline text-amber-400 fill-amber-400 mr-1 -mt-0.5" />
              Join 2,400+ supporters — Every donation changes a child&apos;s life{" "}
              <Link href="/donate" className="text-amber-400 hover:text-amber-300 underline underline-offset-2 ml-1">
                Give Today →
              </Link>
            </p>
          </div>
        )}

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link href="/" className="relative group flex items-center" aria-label="Golden Heart Orphanage Home">
              <Logo size="md" variant="full" theme="light" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-[13px] font-medium transition-colors rounded-lg ${
                    isActive(item.href)
                      ? "text-navy-900"
                      : "text-navy-500 hover:text-navy-800 hover:bg-navy-50/60"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-amber-500 rounded-full"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/donate"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 text-white text-[13px] font-semibold rounded-xl hover:bg-navy-800 transition-all hover:shadow-lg hover:shadow-navy-900/20 active:scale-[0.98]"
              >
                Donate Now
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative p-2.5 text-navy-700 rounded-xl hover:bg-navy-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-5 border-b border-navy-100">
                  <LogoIcon size={36} />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-xl bg-navy-50 text-navy-600 hover:bg-navy-100"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Drawer Links */}
                <div className="flex-1 overflow-y-auto py-4 px-3">
                  <div className="flex flex-col gap-1">
                    {navigation.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium transition-colors ${
                            isActive(item.href)
                              ? "bg-navy-50 text-navy-900 border-l-2 border-amber-500"
                              : "text-navy-600 hover:bg-navy-50 hover:text-navy-900"
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.name}
                          {isActive(item.href) && (
                            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-500" />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Drawer Footer */}
                <div className="p-5 border-t border-navy-100 space-y-3">
                  <Link
                    href="/donate"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Heart className="w-4 h-4 fill-amber-400 text-amber-400" />
                    Donate Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-[11px] text-navy-400 text-center">
                    100% transparent — 95% goes directly to children
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
