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
            className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}
          >
            <span className="text-3xl" style={{ color: "white" }}>♥</span>
          </div>
          <h1 className="text-3xl font-bold mb-3" style={{ color: "#102a43" }}>
            We&apos;ll be right back
          </h1>
          <p className="mb-8" style={{ color: "#475569" }}>
            The page didn&apos;t load correctly. This is usually temporary — please try again.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => reset()}
              className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-xl transition-colors"
              style={{ background: "#f59e0b" }}
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
