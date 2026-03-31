import { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "See the real impact of your support — transparent reporting on how funds are used and lives changed at Golden Heart Orphanage.",
};

const impactNumbers = [
  { number: "247+", label: "Children Supported" },
  { number: "12", label: "Active Programs" },
  { number: "8,500+", label: "Meals Served Monthly" },
  { number: "15", label: "Communities Reached" },
  { number: "95%", label: "School Attendance Rate" },
  { number: "42", label: "Graduates Since 2018" },
];

const fundAllocation = [
  { category: "Child Care & Education", percentage: 60 },
  { category: "Facility & Infrastructure", percentage: 20 },
  { category: "Nutrition", percentage: 15 },
  { category: "Operations", percentage: 5 },
];

const milestones = [
  {
    year: "2015",
    title: "Foundation",
    description:
      "Golden Heart Orphanage was established with 12 children and a single volunteer team.",
  },
  {
    year: "2017",
    title: "First School Partnership",
    description:
      "Partnered with local schools to enroll all children in formal education.",
  },
  {
    year: "2019",
    title: "Expanded Facilities",
    description:
      "Opened a new wing, doubling capacity to support 100+ children.",
  },
  {
    year: "2021",
    title: "Innovation Program Launch",
    description:
      "Introduced STEM education and digital literacy programs.",
  },
  {
    year: "2023",
    title: "Community Outreach",
    description:
      "Extended support to 15 surrounding communities through mobile programs.",
  },
  {
    year: "2025",
    title: "247 Children Supported",
    description:
      "Reached our milestone of supporting over 240 children with comprehensive care.",
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-navy-950">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Our Impact
            </h1>
            <p className="text-lg text-navy-300 leading-relaxed max-w-2xl mx-auto">
              Transparency and accountability are at the core of everything we
              do. Here is exactly how your support creates change.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-amber-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {impactNumbers.map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.08}>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600">
                    {item.number}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Allocation */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How Funds Are Used"
            subtitle="Every contribution is tracked and allocated with full transparency."
          />

          <div className="mt-12 space-y-8">
            {fundAllocation.map((item, index) => (
              <AnimatedSection key={item.category} delay={index * 0.1}>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-navy-700">
                      {item.category}
                    </span>
                    <span className="text-sm font-bold text-amber-600">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-teal-500 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-100">
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong className="text-navy-800">Financial Accountability:</strong>{" "}
                Golden Heart Orphanage undergoes annual independent audits and
                publishes financial reports. We maintain a maximum 5% overhead,
                ensuring that the vast majority of every dollar goes directly
                to child welfare and development programs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Calculator */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Your Support Provides"
            subtitle="Every amount creates tangible impact in a child's life."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { amount: "$25", impact: "One week of meals for a child" },
              { amount: "$50", impact: "School supplies for one month" },
              { amount: "$100", impact: "Full education support for one child for one month" },
              { amount: "$250", impact: "Education + innovation training for one child" },
              { amount: "$500", impact: "Complete care, education, and development for one month" },
              { amount: "$1,000", impact: "Support for multiple children and facility improvements" },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <Card hover>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-amber-600 shrink-0">
                      {item.amount}
                    </span>
                    <p className="text-slate-700">{item.impact}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones in our commitment to child welfare."
          />

          <div className="mt-12 space-y-8">
            {milestones.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.1}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {item.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-teal-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Be part of the impact
            </h2>
            <p className="text-lg text-navy-300 mb-8 leading-relaxed">
              Your contribution directly translates into education, care, and
              opportunity for children who need it most.
            </p>
            <Button href="/donate" size="lg">
              Support a Child
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
