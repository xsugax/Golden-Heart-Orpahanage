"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const breakdown = [
  { label: "Child Care & Education", percentage: 60, color: "bg-teal-500" },
  { label: "Facility & Infrastructure", percentage: 20, color: "bg-navy-600" },
  { label: "Nutrition", percentage: 15, color: "bg-amber-500" },
  { label: "Operations", percentage: 5, color: "bg-slate-400" },
];

export default function ImpactBreakdown() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How funds are used"
          subtitle="Transparency in every dollar. Here's how your contribution is allocated."
        />

        <div className="mt-12 space-y-6">
          {breakdown.map((item, index) => (
            <AnimatedSection key={item.label} delay={index * 0.1}>
              <div className="flex items-center gap-4">
                <div className="w-28 md:w-36 text-sm font-medium text-navy-700 text-right">
                  {item.label}
                </div>
                <div className="flex-1 bg-slate-200 rounded-full h-8 overflow-hidden">
                  <div
                    className={`${item.color} h-full rounded-full flex items-center justify-end pr-3 transition-all duration-1000`}
                    style={{ width: `${item.percentage}%` }}
                  >
                    <span className="text-sm font-bold text-white">
                      {item.percentage}%
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
