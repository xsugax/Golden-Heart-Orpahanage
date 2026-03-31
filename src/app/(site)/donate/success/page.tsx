import { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { CheckCircle, Heart } from "lucide-react";
import { Suspense } from "react";
import PayPalCapture from "@/components/donate/PayPalCapture";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for your generous donation to Golden Heart Orphanage.",
};

export default function DonationSuccessPage() {
  return (
    <section className="py-20 md:py-32 bg-cream-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-8">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 tracking-tight">
            Thank You for Your Generosity
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Your donation has been received successfully. You are now helping
            to provide education, care, and opportunity to children who need
            it most.
          </p>

          <Suspense fallback={null}>
            <PayPalCapture />
          </Suspense>

          <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-8">
            <div className="flex items-center justify-center gap-2 text-teal-600 mb-3">
              <Heart className="w-5 h-5 fill-teal-400" />
              <span className="font-semibold">Your Impact</span>
            </div>
            <p className="text-slate-700">
              A confirmation email has been sent to your inbox with details of
              your contribution and how it will be used. You will also receive
              regular impact updates showing the difference your support
              makes.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/" variant="outline">
              Return Home
            </Button>
            <Button href="/impact">
              See Our Impact
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
