export default function Loading() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero skeleton */}
      <div className="h-[60vh] bg-navy-100/30 animate-pulse" />
      
      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="h-8 w-64 bg-navy-100/40 rounded-lg animate-pulse" />
          <div className="h-4 w-96 bg-navy-100/30 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 bg-navy-100/20 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
