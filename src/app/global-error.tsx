"use client";

import Link from "next/link";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center" style={{ background: "#fefcf9", color: "#102a43" }}>
        <div className="max-w-md mx-auto px-6 text-center">
          <div
            className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
            style={{ background: "#102a43" }}
          >
            <span className="text-3xl font-bold text-white">!</span>
          </div>
          <h1 className="text-3xl font-bold mb-3" style={{ color: "#102a43" }}>
            Something Went Wrong
          </h1>
          <p className="mb-8" style={{ color: "#475569" }}>
            We encountered an unexpected error. Please try again.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => reset()}
              className="inline-flex items-center px-6 py-3 text-white font-medium rounded-xl transition-colors"
              style={{ background: "#102a43" }}
            >
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 font-medium rounded-xl transition-colors"
              style={{ border: "1px solid #bcccdc", color: "#102a43" }}
            >
              Go Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
