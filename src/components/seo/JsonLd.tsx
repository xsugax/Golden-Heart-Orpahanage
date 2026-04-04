export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": "https://goldenheartorphanage.org/#organization",
    name: "Golden Heart Orphanage",
    alternateName: ["Golden Heart", "GHO", "Golden Heart Orphanage South Africa"],
    url: "https://goldenheartorphanage.org",
    logo: {
      "@type": "ImageObject",
      url: "https://goldenheartorphanage.org/logo.svg",
      width: 120,
      height: 120,
    },
    image: "https://goldenheartorphanage.org/og-image.png",
    description:
      "Golden Heart Orphanage is a registered non-profit organization supporting 2,400+ orphaned and vulnerable children in South Africa since 2010 through education, nutrition, shelter, and holistic development programs.",
    email: "goldenheartorphanage01@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Johannesburg",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    foundingDate: "2010",
    foundingLocation: {
      "@type": "Place",
      name: "Johannesburg, South Africa",
    },
    nonprofitStatus: "Nonprofit501c3",
    areaServed: [
      { "@type": "Country", name: "South Africa" },
      { "@type": "AdministrativeArea", name: "Sub-Saharan Africa" },
    ],
    mission:
      "Supporting orphaned and vulnerable children through structured education, care, and development — building futures that last.",
    knowsAbout: [
      "Orphan care",
      "Child education",
      "Child welfare",
      "Non-profit management",
      "Humanitarian aid",
      "Community development",
      "Youth mentorship",
    ],
    slogan: "Every child deserves a chance",
    contactPoint: {
      "@type": "ContactPoint",
      email: "goldenheartorphanage01@gmail.com",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://goldenheartorphanage.org/#website",
    name: "Golden Heart Orphanage",
    alternateName: "Golden Heart",
    url: "https://goldenheartorphanage.org",
    description:
      "Official website of Golden Heart Orphanage — supporting 2,400+ orphaned and vulnerable children in South Africa since 2010.",
    publisher: { "@id": "https://goldenheartorphanage.org/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://goldenheartorphanage.org/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://goldenheartorphanage.org/#webpage",
    url: "https://goldenheartorphanage.org",
    name: "Golden Heart Orphanage | Donate & Support Vulnerable Children in South Africa",
    description:
      "Golden Heart Orphanage is a registered non-profit supporting 2,400+ orphaned and vulnerable children in South Africa since 2010 through education, care, nutrition, and development programs.",
    isPartOf: { "@id": "https://goldenheartorphanage.org/#website" },
    about: { "@id": "https://goldenheartorphanage.org/#organization" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://goldenheartorphanage.org/og-image.png",
    },
    inLanguage: "en-US",
  };

  const donateAction = {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    name: "Donate to Golden Heart Orphanage",
    description:
      "Support orphaned children through education, care, and development programs in South Africa.",
    recipient: { "@id": "https://goldenheartorphanage.org/#organization" },
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://goldenheartorphanage.org/donate",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://goldenheartorphanage.org",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://goldenheartorphanage.org/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Our Work",
        item: "https://goldenheartorphanage.org/our-work",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Impact",
        item: "https://goldenheartorphanage.org/impact",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Donate",
        item: "https://goldenheartorphanage.org/donate",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Contact",
        item: "https://goldenheartorphanage.org/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donateAction) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
