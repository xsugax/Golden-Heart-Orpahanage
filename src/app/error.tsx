"use client";

import Link from "next/link";
import { LogoIcon } from "@/components/brand/Logo";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream-50">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="mb-6">
          <LogoIcon size={72} />
        </div>
        <h1 className="text-2xl font-bold text-navy-900 mb-3 tracking-tight">
          We&apos;ll be right back
        </h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Something didn&apos;t load correctly. This is usually temporary — please try again.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center px-6 py-3 bg-amber-500 text-navy-950 font-semibold rounded-xl hover:bg-amber-400 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-navy-900 text-white font-medium rounded-xl hover:bg-navy-800 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
