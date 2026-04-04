"use client";

export default function AdminError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-earth-100 flex items-center justify-center">
          <span className="text-2xl">⚙️</span>
        </div>
        <h1 className="text-xl font-bold text-earth-900 mb-3">
          Page couldn&apos;t load
        </h1>
        <p className="text-earth-500 mb-6 text-sm">
          This is usually temporary. Try refreshing the page.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 bg-earth-900 text-white font-medium rounded-lg hover:bg-earth-800 transition-colors text-sm"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
