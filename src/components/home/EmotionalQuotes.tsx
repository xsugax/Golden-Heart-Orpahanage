"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "I used to think nobody wanted me. Now I know that's not true. I have a whole family here.",
    name: "Lindiwe, 10",
    context: "After 2 years at Golden Heart",
  },
  {
    text: "The first night I slept in a real bed, I cried. Not because I was sad. Because I was safe.",
    name: "Sipho, 8",
    context: "Arrived after losing his home in floods",
  },
  {
    text: "My teacher said I could be anything. I want to be a teacher too, so I can tell other kids the same thing.",
    name: "Zanele, 12",
    context: "Now tutoring younger children",
  },
  {
    text: "Before I came here, I ate once a day. Sometimes not even that. Now I never go to bed hungry.",
    name: "Bongani, 9",
    context: "Rescued from extreme poverty",
  },
  {
    text: "Someone donated for me. I don't know who they are, but I think about them every day. I want to make them proud.",
    name: "Nkemba, 13",
    context: "Sponsored child since 2022",
  },
];

export default function EmotionalQuotes() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-navy-950 relative overflow-hidden">
      {/* Soft ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-400">
              In Their Own Words
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center tracking-tight mb-16">
            Listen to the children
          </h2>
        </AnimatedSection>

        {/* Quote carousel */}
        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="w-10 h-10 text-amber-500/30 mx-auto mb-6 rotate-180" />
              <blockquote className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-6 max-w-3xl mx-auto">
                {quotes[active].text}
              </blockquote>
              <div className="flex flex-col items-center gap-1">
                <span className="text-amber-400 font-bold text-sm">
                  — {quotes[active].name}
                </span>
                <span className="text-navy-400 text-xs">
                  {quotes[active].context}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? "w-8 h-2 bg-amber-400"
                  : "w-2 h-2 bg-navy-600 hover:bg-navy-500"
              }`}
              aria-label={`Quote ${i + 1}`}
            />
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <p className="text-center text-navy-500 text-sm mt-12 max-w-lg mx-auto">
            These are real words from real children. Names have been changed 
            to protect their privacy — but their stories are theirs.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
