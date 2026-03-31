import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ShieldCheck, BookOpen, Utensils, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Safe Shelter",
    description:
      "Providing stable living environments where children feel secure.",
  },
  {
    icon: BookOpen,
    title: "Education Access",
    description:
      "Ensuring every child has access to structured learning and educational resources.",
  },
  {
    icon: Utensils,
    title: "Daily Care",
    description:
      "Nutrition, clothing, hygiene, and essential needs met consistently every day.",
  },
  {
    icon: Lightbulb,
    title: "Development Programs",
    description:
      "Building confidence, skills, and independent thinking through structured programs.",
  },
];

export default function OurApproach() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Care, structure, and long-term development"
          subtitle="We focus on long-term growth, not temporary relief."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 0.1}>
              <div className="relative p-6 rounded-2xl border border-slate-100 hover:border-teal-200 transition-all group hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
