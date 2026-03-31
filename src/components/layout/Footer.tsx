import Link from "next/link";
import { Heart, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const footerLinks = {
  organization: [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/our-work" },
    { name: "Impact", href: "/impact" },
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

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      {/* Top CTA Strip */}
      <div className="border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Every child deserves a chance.
              </h3>
              <p className="text-sm text-navy-400">
                Join thousands of supporters making a real difference.
              </p>
            </div>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-navy-950 text-sm font-semibold rounded-xl hover:bg-amber-400 transition-all hover:shadow-lg hover:shadow-amber-500/20"
            >
              Start Giving Today
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <p className="text-lg font-bold text-white tracking-tight">
                  Golden Heart
                </p>
                <p className="text-[10px] text-navy-500 uppercase tracking-[0.2em] font-medium">
                  Orphanage
                </p>
              </div>
            </div>
            <p className="text-sm text-navy-400 leading-relaxed mb-6 max-w-sm">
              Supporting orphaned and vulnerable children through structured
              education, care, and development — building futures that last.
            </p>
            <div className="space-y-2.5 text-sm text-navy-400">
              <a
                href="mailto:goldenheartorphanage01@gmail.com"
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-navy-500" />
                goldenheartorphanage01@gmail.com
              </a>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-navy-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-navy-500" />
                <span>Johannesburg, South Africa</span>
              </div>
            </div>
          </div>

          {/* Organization */}
          <div>
            <h3 className="text-xs font-semibold text-navy-300 uppercase tracking-wider mb-4">
              Organization
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-semibold text-navy-300 uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold text-navy-300 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-navy-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-navy-500">
            &copy; {new Date().getFullYear()} Golden Heart Orphanage. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-navy-500">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            Registered Non-Profit Organization
          </div>
        </div>
      </div>
    </footer>
  );
}
