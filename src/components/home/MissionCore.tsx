"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Heart,
  Handshake,
  Globe2,
  Wallet,
  Home,
  ShieldCheck,
  Leaf,
  Coins,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const fundingChannels = [
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "We build lasting partnerships with organizations, governments, and communities around the world — because no child should be helped alone.",
    accent: "bg-teal-50 text-teal-600",
  },
  {
    icon: Globe2,
    title: "Digital Donation Portals",
    description:
      "Verified, transparent platforms where anyone — anywhere in the world — can contribute directly to a child's future through micro or major donations.",
    accent: "bg-amber-50 text-amber-600",
  },
  {
    icon: Users,
    title: "Foster Care Support",
    description:
      "Direct funding for foster parent programs, equipping loving families with the resources they need to open their homes and hearts to children in need.",
    accent: "bg-rose-50 text-rose-600",
  },
  {
    icon: Home,
    title: "Holistic Orphanage Care",
    description:
      "Full-spectrum provision of shelter, nutritious meals, clothing, healthcare, and emotional support — so every child feels safe, seen, and valued.",
    accent: "bg-sky-50 text-sky-600",
  },
  {
    icon: ShieldCheck,
    title: "Financial Stewardship",
    description:
      "Every dollar is tracked, reported, and audited. We maintain radical transparency because the children we serve — and the people who fund their futures — deserve nothing less.",
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Coins,
    title: "Asset Digitization",
    description:
      "Converting physical property and legacy assets into digital endowments — creating high-liquidity aid that can reach children faster when they need it most.",
    accent: "bg-violet-50 text-violet-600",
  },
  {
    icon: Leaf,
    title: "Sustainability Management",
    description:
      "Building long-term wealth growth strategies to ensure our programs don't just survive — they thrive for generations of children yet to come.",
    accent: "bg-lime-50 text-lime-600",
  },
  {
    icon: Wallet,
    title: "Community Micro-Funding",
    description:
      "Grassroots donation drives and community campaigns that prove small acts of kindness, multiplied, can shelter and educate hundreds of children.",
    accent: "bg-orange-50 text-orange-600",
  },
];

export default function MissionCore() {
  return (
    <section className="py-20 md:py-28 bg-cream-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/[0.03] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/[0.03] rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <AnimatedSection>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-navy-900 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Our Core Mission
            </div>
          </div>
        </AnimatedSection>

        <SectionHeading
          title="Dedicated non-profit operations & social impact"
          subtitle="Every part of Golden Heart exists to serve one purpose — giving children the safety, care, and opportunity they deserve. Here's how we structure our work to make that happen."
        />

        {/* Funding & Acquisition Channels */}
        <div className="mt-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-navy-200" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-navy-400">
                Funding &amp; Acquisition Channels
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-navy-200" />
            </div>
            <p className="text-center text-slate-500 text-sm mb-10 max-w-xl mx-auto">
              How we gather, manage, and protect the resources that change children&apos;s lives.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fundingChannels.map((channel, index) => (
              <AnimatedSection key={channel.title} delay={index * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group bg-white rounded-2xl border border-slate-100 p-6 h-full shadow-sm hover:shadow-lg hover:border-slate-200 transition-all"
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${channel.accent} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}
                  >
                    <channel.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-[15px] font-bold text-navy-900 mb-2 leading-snug">
                    {channel.title}
                  </h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    {channel.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Transparency callout */}
        <AnimatedSection delay={0.3}>
          <div className="mt-14 bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-navy-900 mb-1">
                Radical Transparency, Always
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                95% of every contribution goes directly to the children and communities we serve. 
                Our books are open, our audits are independent, and our reports are public — 
                because trust isn&apos;t given, it&apos;s earned. Every dollar you give, you can trace.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
