import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream-50">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-navy-900 rounded-2xl flex items-center justify-center">
          <span className="text-3xl font-bold text-white">404</span>
        </div>
        <h1 className="text-3xl font-bold text-navy-900 mb-3 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
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
