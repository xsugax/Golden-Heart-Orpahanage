import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { LogoIcon } from "@/components/brand/Logo";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/[0.04] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/[0.04] rounded-full translate-y-1/2 -translate-x-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-800/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="flex justify-center mb-8">
            <LogoIcon size={64} />
          </div>
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Make a Difference Today
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            This is not just support.
            <br />
            <span className="text-navy-300 font-bold">It&apos;s a future.</span>
          </h2>
          <p className="text-lg md:text-xl text-navy-300 leading-relaxed mb-12 max-w-xl mx-auto">
            When you give to Golden Heart, you give a child stability, care, education,
            and the opportunity to grow into their full potential.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/donate" size="lg">
              Support a Child
            </Button>
            <Button
              href="/about"
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Learn Our Story
            </Button>
          </div>
          <p className="mt-6 text-sm text-navy-500">
            100% transparent — 95% of every donation goes directly to children
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
