import Link from "next/link";
import { LogoIcon } from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream-50">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="mb-6">
          <LogoIcon size={72} />
        </div>
        <div className="text-6xl font-extrabold text-navy-200 mb-2">404</div>
        <h1 className="text-2xl font-bold text-navy-900 mb-3 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-navy-900 text-white font-medium rounded-xl hover:bg-navy-800 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/donate"
            className="inline-flex items-center px-6 py-3 border border-navy-200 text-navy-900 font-medium rounded-xl hover:bg-navy-50 transition-colors"
          >
            Donate
          </Link>
        </div>
      </div>
    </main>
  );
}
