"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Heart, ArrowRight, X } from "lucide-react";

export default function StickyDonateCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after user scrolls past hero (600px)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2"
        >
          {/* Dismiss */}
          <button
            onClick={() => setDismissed(true)}
            className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors shadow-sm"
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* CTA Button */}
          <Link
            href="/donate"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 bg-navy-900 text-white font-bold rounded-2xl hover:bg-navy-800 transition-all shadow-2xl shadow-navy-900/30 active:scale-[0.97] text-sm"
          >
            {/* Pulse ring */}
            <span className="absolute -inset-1 rounded-2xl bg-amber-500/20 animate-pulse" />
            <span className="relative flex items-center gap-2.5">
              <Heart className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>
                Donate Now
              </span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
