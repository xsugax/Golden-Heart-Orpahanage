export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Golden Heart Orphanage",
    alternateName: "Golden Heart",
    url: "https://goldenheartorphanage.org",
    logo: "https://goldenheartorphanage.org/logo.svg",
    description:
      "Golden Heart Orphanage supports orphaned and vulnerable children through structured education, care, and development.",
    email: "goldenheartorphanage01@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Johannesburg",
      addressCountry: "ZA",
    },
    foundingDate: "2010",
    nonprofitStatus: "Nonprofit501c3",
    sameAs: [
      "https://facebook.com/goldenheartorphanage",
      "https://twitter.com/goldenheartorg",
      "https://instagram.com/goldenheartorphanage",
    ],
    areaServed: {
      "@type": "Place",
      name: "South Africa",
    },
    mission:
      "Supporting orphaned and vulnerable children through structured education, care, and development — building futures that last.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
