"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Shield, Users, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with parallax-like offset */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/30" />
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[15%] w-96 h-96 bg-amber-400 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-[10%] w-72 h-72 bg-teal-400 rounded-full blur-[100px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-sm mb-8"
          >
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
              </span>
              <span className="text-teal-300 font-medium">Since 2010</span>
            </span>
            <span className="w-px h-3.5 bg-white/20" />
            <span className="text-navy-300">247+ lives transformed</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          >
            Every child deserves
            <br />
            a safe place to{" "}
            <span className="relative">
              <span className="text-amber-400">grow</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-amber-400/40 rounded-full origin-left"
              />
            </span>
            ,{" "}
            <span className="text-teal-400">learn</span>,
            <br />
            and{" "}
            <span className="relative inline-block">
              dream
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-white/20 rounded-full origin-left"
              />
            </span>
            .
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="text-lg md:text-xl text-navy-200/90 leading-relaxed mb-10 max-w-lg"
          >
            Supporting orphaned and vulnerable children through structured
            education, care, and development — building futures that last.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link
              href="/donate"
              className="group inline-flex items-center gap-2.5 px-7 py-4 bg-amber-500 text-navy-950 font-bold rounded-xl hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/35 active:scale-[0.98] text-[15px]"
            >
              <Heart className="w-4.5 h-4.5 fill-navy-950" />
              Support a Child
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-white/8 text-white font-semibold rounded-xl border border-white/15 hover:bg-white/12 backdrop-blur-sm transition-all text-[15px]"
            >
              Learn Our Story
              <ArrowRight className="w-4 h-4 opacity-60 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Trust indicators row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-navy-300"
          >
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-teal-400" />
              <span>Verified Non-Profit</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>95% to children</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-teal-400" />
              <span>2,400+ supporters</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 bg-navy-950/70 backdrop-blur-xl border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">247+</p>
              <p className="text-[11px] md:text-xs text-navy-400 mt-0.5 font-medium">Children Supported</p>
            </div>
            <div className="border-x border-white/[0.06]">
              <p className="text-2xl md:text-3xl font-bold text-white">15</p>
              <p className="text-[11px] md:text-xs text-navy-400 mt-0.5 font-medium">Communities Reached</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">95%</p>
              <p className="text-[11px] md:text-xs text-navy-400 mt-0.5 font-medium">Funds to Children</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
