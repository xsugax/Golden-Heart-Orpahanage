import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <AnimatedSection className={centered ? "text-center" : ""}>
      <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`w-12 h-1 bg-teal-500 mt-6 rounded-full ${centered ? "mx-auto" : ""}`}
      />
    </AnimatedSection>
  );
}
