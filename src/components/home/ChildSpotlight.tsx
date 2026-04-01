"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

const children = [
  {
    name: "Amara",
    age: 7,
    dream: "To become a doctor",
    story:
      "Amara lost both parents before she could form memories of them. When she arrived at Golden Heart, she wouldn't speak for three weeks. Today, she reads aloud to the younger children every night before bed — and tells everyone she'll be a doctor so no one else has to lose their mom and dad.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    need: "$10/day covers her full care and education",
    progress: 68,
  },
  {
    name: "Thabo",
    age: 11,
    dream: "To build houses for his community",
    story:
      "After floods destroyed his village, Thabo walked for two days to find help. He arrived barefoot and hungry. Three years later, he's the top student in his class and spends weekends drawing blueprints of houses he says 'can't be washed away.' He hasn't forgotten where he came from.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    need: "$10/day gives him safety, school, and meals",
    progress: 42,
  },
  {
    name: "Naledi",
    age: 9,
    dream: "To teach other girls to read",
    story:
      "Naledi was found living in an abandoned building with her younger brother. She had been feeding him from scraps for months. At Golden Heart, she learned to read within six months — and now she insists on teaching every new girl who arrives. 'No one should feel stupid,' she says. 'They just need someone to show them.'",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    need: "$10/day keeps her safe, fed, and in school",
    progress: 55,
  },
];

export default function ChildSpotlight() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-600">
              These are real children
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center tracking-tight mb-3">
            They have names. They have dreams.
          </h2>
          <p className="text-lg text-slate-500 text-center max-w-2xl mx-auto mb-4">
            Not statistics. Not numbers. Children — waiting for someone to believe 
            in their future.
          </p>
          <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full" />
        </AnimatedSection>

        <div className="mt-16 space-y-20">
          {children.map((child, index) => (
            <AnimatedSection key={child.name} delay={0.1}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center`}
              >
                {/* Photo */}
                <div className="md:w-5/12 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={child.image}
                      alt={child.name}
                      className="w-full h-72 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2">
                        <span className="bg-white/90 backdrop-blur-sm text-navy-900 text-xs font-bold px-3 py-1.5 rounded-full">
                          {child.name}, age {child.age}
                        </span>
                        <span className="bg-amber-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          Dreams: {child.dream}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story */}
                <div className="md:w-7/12">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-400 via-teal-400 to-transparent rounded-full hidden md:block" />

                    <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-2">
                      Meet {child.name}
                    </h3>
                    <p className="text-sm text-amber-600 font-semibold mb-4">
                      {child.age} years old · Dreams of becoming{" "}
                      {child.dream.toLowerCase().replace("to ", "").replace("to be ", "")}
                    </p>

                    <p className="text-slate-600 leading-relaxed mb-6 text-[15px]">
                      &ldquo;{child.story}&rdquo;
                    </p>

                    {/* Sponsorship progress */}
                    <div className="bg-cream-50 border border-slate-100 rounded-xl p-5 mb-5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-navy-800">
                          Sponsorship Progress
                        </span>
                        <span className="text-sm font-bold text-amber-600">
                          {child.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${child.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                          className="bg-gradient-to-r from-amber-400 to-amber-500 h-full rounded-full"
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-2">
                        {child.need}
                      </p>
                    </div>

                    <Link
                      href="/donate"
                      className="group inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-amber-600 transition-colors"
                    >
                      <Heart className="w-4 h-4 fill-amber-400 text-amber-400" />
                      Sponsor {child.name}&apos;s future
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-16 text-center">
            <p className="text-slate-400 text-sm mb-4">
              There are 244 more children just like them — waiting.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white font-bold rounded-xl hover:bg-navy-800 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] text-[15px]"
            >
              <Heart className="w-4 h-4 fill-amber-400 text-amber-400" />
              Sponsor a Child Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
