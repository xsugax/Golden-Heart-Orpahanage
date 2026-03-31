"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/75 to-navy-950/50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-amber-400/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 text-sm text-teal-300 mb-8"
          >
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            Empowering children since 2010
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Every child deserves
            <br />
            a safe place to{" "}
            <span className="text-amber-400">grow</span>,{" "}
            <span className="text-teal-400">learn</span>,
            <br />
            and dream.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="text-lg md:text-xl text-navy-200 leading-relaxed mb-10 max-w-lg"
          >
            Supporting orphaned and vulnerable children through structured
            education, care, and development — building futures that last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 text-navy-950 font-semibold rounded-xl hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
            >
              Support a Child
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/15 backdrop-blur-sm transition-all"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 bg-navy-950/80 backdrop-blur-md border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-white">247+</p>
              <p className="text-xs text-navy-400 mt-0.5">Children Supported</p>
            </div>
            <div className="border-x border-white/10">
              <p className="text-2xl font-bold text-white">15</p>
              <p className="text-xs text-navy-400 mt-0.5">Communities Reached</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">95%</p>
              <p className="text-xs text-navy-400 mt-0.5">Funds to Children</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
