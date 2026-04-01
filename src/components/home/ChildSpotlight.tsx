"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

const children = [
  {
    name: "Naledi",
    age: 9,
    dream: "To teach other girls to read",
    story:
      "Naledi arrived at Golden Heart with her younger brother after a neighbour found them alone. In six months she taught herself to read — and now she refuses to let any new girl struggle alone. She sits beside them every evening, pointing at each word with the patience of someone twice her age. 'No one should ever feel like they can't learn,' she says. 'They just need someone who won't give up on them.'",
    image:
      "https://images.unsplash.com/photo-1544476671-c862c8b476e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    need: "$10/day keeps her safe, fed, and in school",
    progress: 55,
  },
  {
    name: "Mila",
    age: 7,
    dream: "To paint pictures that make people happy",
    story:
      "Mila was placed in care after her single mother could no longer provide for her. She arrived quiet, clutching a box of crayons — the only thing she brought. Within weeks, she'd covered every surface she could find with colour. Her drawings line the hallway now. She draws families — always families — with big smiles and bright suns. 'Colours fix things,' she whispers. 'Even the sad parts.'",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    need: "$10/day covers her full care and education",
    progress: 31,
  },
  {
    name: "Kofi",
    age: 10,
    dream: "To become an engineer",
    story:
      "Kofi lost his father to illness and his mother couldn't afford to feed four children. He arrived at Golden Heart clutching a toy car he'd built from wire and bottle caps. Within a year, he was building circuits from donated electronics. His teacher says he takes apart everything — just to understand how it works. He wants to build bridges one day, 'so no village is ever cut off again.'",
    image:
      "https://images.unsplash.com/photo-1472673630503-c6bfba62adbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    need: "$10/day gives him safety, school, and meals",
    progress: 38,
  },
  {
    name: "Arjun",
    age: 8,
    dream: "To become a pilot",
    story:
      "Arjun arrived at Golden Heart after being displaced by floods that destroyed his community. He didn't speak for the first month — just watched the sky. Then one afternoon he folded a paper aeroplane and launched it off the balcony. He stood there, watching it glide, and smiled for the first time. Now he builds a new one every day, each more detailed than the last. 'One day,' he says, 'I'll fly for real — and bring supplies to people like us.'",
    image:
      "https://images.unsplash.com/photo-1545696563-a20e29b1a24a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    need: "$10/day gives him shelter, meals, and school",
    progress: 19,
  },
  {
    name: "Amahle",
    age: 6,
    dream: "To be a nurse like mama was",
    story:
      "Amahle was brought to Golden Heart by a neighbor after both parents passed within weeks of each other. She arrived barefoot, holding a photograph she couldn't explain. For months she carried it everywhere. Now she bandages stuffed animals, lines them up in rows, and 'checks their heartbeat' with a plastic stethoscope. She says her mama is watching from the sky — and she wants to make her proud.",
    image:
      "https://images.unsplash.com/photo-1649263537861-c947d1fbebdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    need: "$10/day covers her full care and education",
    progress: 24,
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
              Over 300 more children just like them — still waiting.
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
