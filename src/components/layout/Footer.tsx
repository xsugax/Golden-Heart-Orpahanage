"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight, ArrowRight, Shield, Heart, Globe } from "lucide-react";
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
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
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

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-lg bg-navy-800/50 text-navy-400 hover:bg-amber-500 hover:text-navy-950 transition-all duration-200"
    >
      {children}
    </a>
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
                <Phone className="w-4 h-4 text-navy-500 shrink-0" />
                <span>+27 (0) 11 123 4567</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-navy-500 shrink-0" />
                <span>Johannesburg, South Africa</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              <SocialIcon href="https://facebook.com" label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </SocialIcon>
              <SocialIcon href="https://twitter.com" label="Twitter / X">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </SocialIcon>
              <SocialIcon href="https://instagram.com" label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </SocialIcon>
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
