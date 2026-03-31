import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Make a Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight">
            This is not just support.
          </h2>
          <p className="text-lg text-navy-300 leading-relaxed mb-10">
            It is giving a child stability, care, and the opportunity to grow
            into their full potential.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/donate" size="lg">
              Support a Child
            </Button>
            <Button
              href="/donate"
              variant="outline"
              size="lg"
              className="border-amber-400 text-amber-400 hover:bg-amber-400/10"
            >
              Become a Contributor
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
