export default function Loading() {
  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Animated heart logo */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center animate-pulse shadow-lg shadow-amber-500/20">
            <svg width="32" height="32" viewBox="0 0 120 120" fill="none">
              <path d="M60 95 C60 95 22 68 22 45 C22 33 31 23 42 23 C49 23 55 27 60 33 C65 27 71 23 78 23 C89 23 98 33 98 45 C98 68 60 95 60 95Z" fill="white" fillOpacity="0.95"/>
            </svg>
          </div>
        </div>
        {/* Shimmer bar */}
        <div className="w-48 h-1 bg-navy-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, #f59e0b, transparent)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s linear infinite",
            }}
          />
        </div>
        <style>{`@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}`}</style>
      </div>
    </div>
  );
}
