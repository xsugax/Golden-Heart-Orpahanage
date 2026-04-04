import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate to Golden Heart Orphanage — Support Orphaned Children",
  description:
    "Donate to Golden Heart Orphanage via Bitcoin, Ethereum, USDT, or Solana. Every contribution directly supports orphaned children's education, nutrition, and care in South Africa. 95% goes directly to children.",
  alternates: {
    canonical: "https://goldenheartorphanage.org/donate",
  },
  openGraph: {
    title: "Donate to Golden Heart Orphanage — Change a Child's Life Today",
    description:
      "Every contribution directly supports a child's education, care, and development. 95% of funds go directly to children. Accept crypto donations.",
    url: "https://goldenheartorphanage.org/donate",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate to Golden Heart Orphanage",
    description: "Support 2,400+ orphaned children through education and care in South Africa.",
    images: ["/og-image.png"],
  },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
