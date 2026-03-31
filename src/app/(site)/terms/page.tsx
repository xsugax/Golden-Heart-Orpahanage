import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing the use of Golden Heart Orphanage website and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 bg-navy-950">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-lg text-navy-300 leading-relaxed max-w-2xl mx-auto">
              Please read these terms carefully before using our platform.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="space-y-10 text-slate-700 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Acceptance of Terms</h2>
                <p>
                  By accessing and using the Golden Heart Orphanage website and services,
                  you agree to be bound by these Terms of Service. If you do not agree with
                  any part of these terms, please do not use our platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Donations</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All donations are voluntary and non-refundable unless required by law.</li>
                  <li>Recurring donations may be cancelled at any time by contacting us.</li>
                  <li>Donation amounts are processed in US Dollars (USD).</li>
                  <li>We provide donation receipts for tax purposes where applicable.</li>
                  <li>Funds are allocated as described on our Impact page.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Use of Website</h2>
                <p>
                  You agree to use this website for lawful purposes only. You must not use
                  this site in any way that could damage, disable, or impair the website or
                  interfere with other users&apos; access.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Content & Intellectual Property</h2>
                <p>
                  All content on this website, including text, images, and design, is the
                  property of Golden Heart Orphanage unless otherwise stated. You may share
                  our content for non-commercial purposes with proper attribution.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Limitation of Liability</h2>
                <p>
                  Golden Heart Orphanage provides this website on an &quot;as-is&quot; basis.
                  We make no warranties about the completeness, reliability, or accuracy of
                  information on this site. We are not liable for any losses arising from your
                  use of this website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Changes to Terms</h2>
                <p>
                  We reserve the right to update these terms at any time. Continued use of
                  the website after changes constitutes acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact</h2>
                <p>
                  For questions about these terms, contact us at{" "}
                  <a href="mailto:goldenheartorphanage01@gmail.com" className="text-teal-600 hover:text-teal-700 underline">
                    goldenheartorphanage01@gmail.com
                  </a>.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500">
                  Last updated: January 2026.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
