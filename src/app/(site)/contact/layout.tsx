import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Golden Heart Orphanage — Get In Touch",
  description:
    "Contact Golden Heart Orphanage in Johannesburg, South Africa. Reach out for partnership inquiries, volunteer opportunities, or to learn how you can support orphaned children.",
  alternates: {
    canonical: "https://goldenheartorphanage.org/contact",
  },
  openGraph: {
    title: "Contact Golden Heart Orphanage — We'd Love to Hear From You",
    description:
      "Reach out to learn how you can support orphaned and vulnerable children in South Africa.",
    url: "https://goldenheartorphanage.org/contact",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Golden Heart Orphanage",
    description: "Get in touch to support orphaned children in South Africa.",
    images: ["/og-image.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
