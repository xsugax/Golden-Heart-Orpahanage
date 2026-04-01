"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Users, BookOpen, Utensils, Home, ArrowRight, Clock } from "lucide-react";

const needs = [
  {
    icon: Users,
    label: "Children waiting for sponsors",
    count: 47,
    color: "bg-amber-500",
  },
  {
    icon: BookOpen,
    label: "Need school enrollment support",
    count: 23,
    color: "bg-teal-500",
  },
  {
    icon: Utensils,
    label: "Unfunded daily meals",
    count: 89,
    color: "bg-rose-500",
  },
  {
    icon: Home,
    label: "Awaiting shelter placement",
    count: 12,
    color: "bg-violet-500",
  },
];

export default function UrgencyMeter() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-amber-50 to-white border-y border-amber-100/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-amber-600" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-600">
              Right Now
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 text-center tracking-tight mb-3">
            Children who need help <span className="text-amber-600">today</span>
          </h2>
          <p className="text-sm text-slate-500 text-center max-w-lg mx-auto mb-12">
            These numbers update as needs are met. Every donation moves them closer to zero.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {needs.map((need, index) => (
            <AnimatedSection key={need.label} delay={index * 0.1}>
              <div className="bg-white rounded-2xl border border-slate-100 p-5 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${need.color}/10 flex items-center justify-center`}
                  >
                    <need.icon className={`w-5 h-5 ${need.color.replace("bg-", "text-")}`} />
                  </div>
                </div>
                <motion.p
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: index * 0.1 + 0.2 }}
                  className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-1"
                >
                  {need.count}
                </motion.p>
                <p className="text-xs text-slate-500 leading-snug">
                  {need.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-10 text-center">
            <p className="text-sm text-slate-600 mb-5">
              You&apos;re looking at this right now. So is a child who needs you.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 text-navy-950 font-bold rounded-xl hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98] text-sm"
            >
              Help a Child Right Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
