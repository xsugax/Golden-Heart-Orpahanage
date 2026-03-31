import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function WhySupport() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-6">
              A stable childhood changes everything
            </h2>
            <div className="w-12 h-1 bg-teal-500 mx-auto mb-8 rounded-full" />
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Without stability, a child cannot focus on learning or growth.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              With the right environment, support, and guidance, a child can
              rebuild their path and create a meaningful future.
            </p>
            <p className="text-xl font-medium text-navy-900 mb-10">
              Your support makes that transition possible.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Button href="/donate" size="lg">
              Support a Child
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
