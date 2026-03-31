import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Golden Heart Orphanage collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 bg-navy-950">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-navy-300 leading-relaxed max-w-2xl mx-auto">
              Your privacy matters. Here is how we handle your data.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
          <AnimatedSection>
            <div className="space-y-10 text-slate-700 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Information We Collect</h2>
                <p>
                  When you make a donation, contact us, or subscribe to updates, we may collect
                  your name, email address, and payment information. Payment details are processed
                  securely through Stripe and are never stored on our servers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process your donations and send receipts</li>
                  <li>Respond to your inquiries and messages</li>
                  <li>Send impact updates (with your consent)</li>
                  <li>Improve our website and services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Data Protection</h2>
                <p>
                  We implement industry-standard security measures to protect your personal data.
                  All donations are processed through Stripe&apos;s PCI-compliant payment infrastructure.
                  We use HTTPS encryption across our entire platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Third-Party Services</h2>
                <p>
                  We use Stripe for payment processing and Vercel for hosting. These services
                  have their own privacy policies. We do not sell or share your personal data
                  with any other third parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Your Rights</h2>
                <p>
                  You may request access to, correction of, or deletion of your personal data
                  at any time by contacting us at{" "}
                  <a href="mailto:goldenheartorphanage01@gmail.com" className="text-teal-600 hover:text-teal-700 underline">
                    goldenheartorphanage01@gmail.com
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Cookies</h2>
                <p>
                  We use essential cookies to ensure the proper functioning of our website.
                  We do not use tracking or advertising cookies.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500">
                  Last updated: January 2026. We may update this policy from time to time
                  and will notify you of significant changes.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
