"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  Stethoscope,
  Brain,
  Ribbon,
  Accessibility,
  AlertTriangle,
  Building2,
  Droplets,
  CircleDot,
  ArrowRight,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Branch 1: Community Medical Clinics                                */
/* ------------------------------------------------------------------ */

const medicalServices = [
  {
    icon: Brain,
    title: "Neurological Support",
    description:
      "Specialized, compassionate care for individuals living with amnesia and neurological conditions — helping them rebuild memory, confidence, and daily life.",
    color: "bg-violet-500",
    lightBg: "bg-violet-50",
    lightText: "text-violet-600",
  },
  {
    icon: Ribbon,
    title: "Oncology Division",
    description:
      "Holistic support services for cancer patients, including treatment coordination, emotional counseling, and family guidance — because no one should face cancer alone.",
    color: "bg-rose-500",
    lightBg: "bg-rose-50",
    lightText: "text-rose-600",
  },
  {
    icon: Accessibility,
    title: "Disability Advocacy",
    description:
      "Rehabilitation, accessibility solutions, and community advocacy for people with disabilities — championing dignity, independence, and equal opportunity.",
    color: "bg-sky-500",
    lightBg: "bg-sky-50",
    lightText: "text-sky-600",
  },
  {
    icon: AlertTriangle,
    title: "Crisis Care",
    description:
      "Emergency medical assistance for vulnerable populations in conflict zones — reaching the unreachable and treating the overlooked when it matters most.",
    color: "bg-amber-500",
    lightBg: "bg-amber-50",
    lightText: "text-amber-600",
  },
];

/* ------------------------------------------------------------------ */
/*  Branch 2: Continental Disaster Response                            */
/* ------------------------------------------------------------------ */

const disasterPrograms = [
  {
    icon: Building2,
    title: "Civic Reconstruction",
    subtitle: "Infrastructure Recovery",
    description:
      "Rebuilding roads, homes, and public facilities after disasters — restoring not just buildings, but the sense of belonging and community that every family deserves.",
    stat: "Permanent housing & roads",
  },
  {
    icon: Droplets,
    title: "Water Treatment Systems",
    subtitle: "Water Security Initiatives",
    description:
      "Implementing purification technology in communities where clean water is a luxury — because safe drinking water is the foundation of every healthy childhood.",
    stat: "Purification technology",
  },
  {
    icon: CircleDot,
    title: "Sustainable Wells",
    subtitle: "Water Security Initiatives",
    description:
      "Constructing deep-well water sources in rural areas, giving communities access to clean water for generations — not just today, but for every child yet to be born.",
    stat: "Deep-well water sources",
  },
];

export default function ProgrammaticBranches() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50/40 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              <Stethoscope className="w-3.5 h-3.5" />
              Impact Programs
            </div>
          </div>
        </AnimatedSection>

        <SectionHeading
          title="Where compassion meets action"
          subtitle="Our programmatic branches extend Golden Heart's reach far beyond the orphanage — into clinics, disaster zones, and communities that need us most."
        />

        {/* ============ BRANCH 1: COMMUNITY MEDICAL CLINICS ============ */}
        <div className="mt-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-navy-900 text-white flex items-center justify-center text-sm font-bold">
                1
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-navy-900">
                Community Medical Clinics
              </h3>
            </div>
            <p className="text-slate-500 text-sm ml-11 mb-10 max-w-2xl">
              Individual patient care across four specialized divisions — 
              serving people who are often forgotten by traditional healthcare systems.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {medicalServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative bg-white rounded-2xl border border-slate-100 p-6 md:p-7 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all h-full"
                >
                  {/* Accent top bar */}
                  <div className={`absolute top-0 left-6 right-6 h-[3px] ${service.color} rounded-b-full opacity-60 group-hover:opacity-100 transition-opacity`} />

                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${service.lightBg} ${service.lightText} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                    >
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-navy-900 mb-1.5">
                        {service.title}
                      </h4>
                      <p className="text-[13px] text-slate-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* ============ BRANCH 2: CONTINENTAL DISASTER RESPONSE ============ */}
        <div className="mt-20">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-navy-900 text-white flex items-center justify-center text-sm font-bold">
                2
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-navy-900">
                Continental Disaster Response
              </h3>
            </div>
            <p className="text-slate-500 text-sm ml-11 mb-10 max-w-2xl">
              When disaster strikes, communities lose more than buildings — they lose their sense of safety. 
              We help them rebuild both.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {disasterPrograms.map((program, index) => (
              <AnimatedSection key={program.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group bg-gradient-to-b from-white to-slate-50/50 rounded-2xl border border-slate-100 p-6 md:p-7 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                    <program.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-teal-600 uppercase tracking-[0.15em] mb-1">
                    {program.subtitle}
                  </span>
                  <h4 className="text-lg font-bold text-navy-900 mb-2">
                    {program.title}
                  </h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed flex-1">
                    {program.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <span className="text-xs font-semibold text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                      {program.stat}
                    </span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Heartwarming callout */}
        <AnimatedSection delay={0.2}>
          <div className="mt-16 bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center shrink-0">
                <Heart className="w-7 h-7 text-amber-400 fill-amber-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">
                  Every program starts with a person
                </h4>
                <p className="text-navy-300 leading-relaxed max-w-2xl text-sm md:text-base">
                  Behind every clinic visit, every rebuilt home, every clean well — 
                  there is a person whose life is about to change. Your support doesn&apos;t just fund programs. 
                  It gives mothers hope, children safety, and communities a future worth believing in.
                </p>
              </div>
              <Button
                href="/donate"
                size="lg"
                className="bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold shrink-0"
              >
                <span className="flex items-center gap-2">
                  Support Our Work
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
