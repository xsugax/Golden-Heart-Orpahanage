"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Coffee, Pizza, Tv, ShoppingBag, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const comparisons = [
  {
    icon: Coffee,
    everyday: "A morning coffee",
    cost: "$5",
    impact: "Feeds a child for an entire day",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Pizza,
    everyday: "A fast-food meal",
    cost: "$12",
    impact: "Provides school supplies for a month",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Tv,
    everyday: "A streaming subscription",
    cost: "$15",
    impact: "Covers medical checkups for one child",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: ShoppingBag,
    everyday: "An impulse purchase",
    cost: "$25",
    impact: "Provides full daily care, meals & education",
    color: "bg-sky-50 text-sky-600",
  },
];

export default function CostComparison() {
  return (
    <section className="py-20 md:py-28 bg-cream-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-50/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-600 mb-3 block">
              Perspective
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">
              What if the things you barely notice
              <br />
              <span className="text-amber-600">could change a child&apos;s entire day?</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              You don&apos;t have to be wealthy to change a life. You just have to care 
              enough to redirect what you already spend.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {comparisons.map((item, index) => (
            <AnimatedSection key={item.everyday} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center shrink-0`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-slate-400 line-through">
                        {item.everyday}
                      </span>
                      <span className="text-lg font-bold text-navy-900">
                        {item.cost}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                      <span className="text-sm font-semibold text-teal-700">
                        {item.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-14 bg-navy-900 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                You don&apos;t need to give everything.
              </p>
              <p className="text-lg text-navy-300 mb-2">
                Just give <span className="text-amber-400 font-bold">something</span>.
              </p>
              <p className="text-sm text-navy-400 mb-8 max-w-md mx-auto">
                Even $1 joins a river of kindness that feeds, clothes, shelters, and 
                educates children who have no one else.
              </p>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 text-navy-950 font-bold rounded-xl hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/25 active:scale-[0.98] text-sm"
              >
                Give What You Can
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
