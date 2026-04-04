"use client";

import Link from "next/link";
import { Mail, MapPin, MessageCircle, ArrowUpRight, ArrowRight, Shield, Heart, Globe } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/brand/Logo";

const footerLinks = {
  organization: [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/our-work" },
    { name: "Impact & Reports", href: "/impact" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Donate", href: "/donate" },
    { name: "Become a Contributor", href: "/donate" },
    { name: "Volunteer", href: "/contact" },
    { name: "Partner With Us", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Financial Reports", href: "/impact" },
  ],
};

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <p className="text-xs text-navy-400 mb-2.5">
        Stay updated on our impact and stories.
      </p>
      {status === "success" ? (
        <div className="flex items-center gap-2 text-teal-400 text-sm py-2">
          <Heart className="w-4 h-4 fill-teal-400" />
          Thank you for subscribing!
        </div>
      ) : status === "error" ? (
        <div className="flex items-center gap-2 text-amber-400 text-sm py-2">
          <ArrowRight className="w-4 h-4" />
          Couldn&apos;t subscribe right now. Please try again.
        </div>
      ) : (
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-3.5 py-2.5 bg-navy-800/60 border border-navy-700/50 rounded-lg text-sm text-white placeholder-navy-500 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 outline-none transition-all"
          />
          <button
            type="submit"
            className="px-4 py-2.5 bg-amber-500 text-navy-950 rounded-lg text-sm font-semibold hover:bg-amber-400 transition-colors shrink-0"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </form>
  );
}


export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      {/* Top CTA Strip */}
      <div className="border-b border-navy-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Every child deserves a chance.
              </h3>
              <p className="text-sm text-navy-400 max-w-md">
                Join thousands of supporters making a real, measurable difference
                in children&apos;s lives across 15 communities.
              </p>
            </div>
            <Link
              href="/donate"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-amber-500 text-navy-950 text-sm font-bold rounded-xl hover:bg-amber-400 transition-all hover:shadow-lg hover:shadow-amber-500/20 active:scale-[0.98]"
            >
              Start Giving Today
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <Logo size="md" variant="full" theme="dark" />
            </div>
            <p className="text-sm text-navy-400 leading-relaxed mb-5 max-w-xs">
              Supporting orphaned and vulnerable children through structured
              education, care, and development — building futures that last.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5 text-sm text-navy-400 mb-6">
              <a
                href="mailto:goldenheartorphanage01@gmail.com"
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-navy-500 shrink-0" />
                goldenheartorphanage01@gmail.com
              </a>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-navy-500 shrink-0" />
                <span>Contact us via chat or email</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-navy-500 shrink-0" />
                <span>Johannesburg, South Africa</span>
              </div>
            </div>


          </div>

          {/* Organization */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
              Organization
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
              Get Involved
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Legal */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
              Newsletter
            </h3>
            <NewsletterForm />

            <div className="mt-8 pt-6 border-t border-navy-800/40">
              <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">
                Legal
              </h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-navy-500 hover:text-navy-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-navy-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-navy-500">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-teal-500" />
              SSL Secured
            </div>
            <div className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              95% to Children
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-teal-500" />
              15 Communities
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
              Registered Non-Profit
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-navy-600">
            &copy; {new Date().getFullYear()} Golden Heart Orphanage. All rights reserved.
          </p>
          <p className="text-[11px] text-navy-600">
            Made with <Heart className="w-3 h-3 inline text-amber-500 fill-amber-500 -mt-0.5" /> for every child who deserves more.
          </p>
        </div>
      </div>
    </footer>
  );
}
