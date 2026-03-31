import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Users, AlertTriangle, Home } from "lucide-react";

const groups = [
  {
    icon: Users,
    title: "Orphaned Children",
    description:
      "Children who have lost one or both parents and need consistent care, shelter, and emotional support.",
  },
  {
    icon: AlertTriangle,
    title: "Children Affected by Conflict & Disasters",
    description:
      "Young lives disrupted by natural disasters, conflict, and systemic inequality, needing stability to recover.",
  },
  {
    icon: Home,
    title: "Children in Extreme Poverty",
    description:
      "Children living in environments where basic needs—food, shelter, education—are not consistently met.",
  },
];

export default function WhoWeSupport() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Children in need of stability and opportunity"
          subtitle="We support children who have been left without consistent care or access to education."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <AnimatedSection key={group.title} delay={index * 0.15}>
              <div className="text-center p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 mb-5 group-hover:bg-teal-100 transition-colors">
                  <group.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {group.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {group.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
