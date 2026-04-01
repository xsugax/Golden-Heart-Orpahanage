"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Heart } from "lucide-react";

const transformations = [
  {
    name: "Thandi",
    age: "7 → 12",
    before: {
      title: "When she arrived",
      description:
        "Thandi arrived at Golden Heart unable to read or write. She had never attended school. She was malnourished, withdrawn, and wouldn't make eye contact with anyone for weeks.",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    after: {
      title: "Five years later",
      description:
        "Today, Thandi is top of her class in reading and mathematics. She mentors three younger children, performs in the school drama club, and dreams of becoming a teacher. She smiles every single day.",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    sponsoredBy: "Monthly donors like you",
  },
  {
    name: "Liam",
    age: "6 → 11",
    before: {
      title: "When he arrived",
      description:
        "Liam was placed in care after a house fire left him without family or belongings. He was withdrawn, wouldn't eat for days, and flinched at loud noises. He carried a burnt photograph in his pocket.",
      image:
        "https://images.unsplash.com/photo-1545696563-a20e29b1a24a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    after: {
      title: "Five years later",
      description:
        "Liam now leads the junior football team and volunteers to help new arrivals feel welcome — because he remembers what it felt like. He wants to be a firefighter. 'So I can save people like someone saved me.'",
      image:
        "https://images.unsplash.com/photo-1504159506876-f8338247a14a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    sponsoredBy: "A family from London",
  },
  {
    name: "Sibusiso",
    age: "9 → 14",
    before: {
      title: "When he arrived",
      description:
        "Sibusiso was found living alone after his grandmother passed. He survived by collecting recyclables for food money. He hadn't bathed in weeks and was severely underweight.",
      image:
        "https://images.unsplash.com/photo-1547226827-89dd8bc77ce5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    after: {
      title: "Five years later",
      description:
        "Sibusiso is now a confident young man who leads the school's STEM club. He built a working solar lamp from scraps and won a regional science fair. He wants to be an engineer — and no one doubts he will be.",
      image:
        "https://images.unsplash.com/photo-1547082667-1ad4ae57c4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    sponsoredBy: "A $25/week donor",
  },
  {
    name: "Mercy",
    age: "5 → 10",
    before: {
      title: "When she arrived",
      description:
        "Mercy was rescued from an overcrowded shelter where she shared a single blanket with four other children. She suffered from chronic malnutrition and couldn't walk properly due to untreated injuries.",
      image:
        "https://images.unsplash.com/photo-1569003376628-e8a1d9443971?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    after: {
      title: "Five years later",
      description:
        "After surgery, nutrition programs, and boundless care, Mercy now runs faster than anyone in her age group. She joined the orphanage choir, learned to swim, and recently told her counselor: 'I used to be broken. Now I'm not.'",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    sponsoredBy: "A one-time $500 donor",
  },
];

export default function TransformationStories() {
  const [active, setActive] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  const story = transformations[active];
  const current = showAfter ? story.after : story.before;

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-600">
              Proof of Impact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center tracking-tight mb-3">
            This is what your donation does
          </h2>
          <p className="text-slate-500 text-center max-w-xl mx-auto mb-4">
            Real children. Real transformations. No exaggeration needed — 
            the truth is powerful enough.
          </p>
          <div className="w-12 h-1 bg-teal-500 mx-auto rounded-full" />
        </AnimatedSection>

        <div className="mt-16">
          {/* Story selector */}
          <div className="flex justify-center gap-3 mb-10">
            {transformations.map((t, i) => (
              <button
                key={t.name}
                onClick={() => { setActive(i); setShowAfter(false); }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  i === active
                    ? "bg-navy-900 text-white shadow-md"
                    : "bg-white text-navy-600 border border-slate-200 hover:border-navy-300"
                }`}
              >
                {t.name}&apos;s story
              </button>
            ))}
          </div>

          {/* Story card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${active}-${showAfter}`}
              initial={{ opacity: 0, x: showAfter ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: showAfter ? -40 : 40 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
            >
              {/* Image */}
              <div className="md:w-5/12">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={current.image}
                    alt={`${story.name} - ${current.title}`}
                    className="w-full h-72 md:h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                        showAfter
                          ? "bg-teal-500 text-white"
                          : "bg-slate-800/80 text-white backdrop-blur-sm"
                      }`}
                    >
                      {showAfter ? "✦ After" : "Before"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="md:w-7/12">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold text-navy-900">
                    {story.name}
                  </span>
                  <span className="text-xs text-slate-400">
                    Age {story.age}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                  {current.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-[15px]">
                  {current.description}
                </p>

                {showAfter && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-teal-50 border border-teal-100 rounded-xl p-4 mb-6"
                  >
                    <p className="text-sm text-teal-800">
                      <span className="font-bold">Made possible by:</span>{" "}
                      {story.sponsoredBy}
                    </p>
                  </motion.div>
                )}

                {/* Toggle Button */}
                <button
                  onClick={() => setShowAfter(!showAfter)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all active:scale-[0.98] ${
                    showAfter
                      ? "bg-slate-100 text-navy-700 hover:bg-slate-200"
                      : "bg-teal-600 text-white hover:bg-teal-500 shadow-md shadow-teal-600/20"
                  }`}
                >
                  {showAfter ? (
                    <>
                      <ArrowLeft className="w-4 h-4" />
                      See Before
                    </>
                  ) : (
                    <>
                      See the Transformation
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-16 text-center">
            <p className="text-slate-500 text-sm mb-1">
              Every transformation started with a single donation.
            </p>
            <p className="text-navy-800 font-bold text-lg mb-6">
              The next one could start with yours.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white font-bold rounded-xl hover:bg-navy-800 transition-all shadow-lg active:scale-[0.98] text-[15px]"
            >
              <Heart className="w-4 h-4 fill-amber-400 text-amber-400" />
              Start a Transformation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
