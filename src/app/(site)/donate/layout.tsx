import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Make a donation to Golden Heart Orphanage. Support orphaned and vulnerable children through daily, weekly, monthly, or one-time contributions.",
  openGraph: {
    title: "Donate — Golden Heart Orphanage",
    description:
      "Every contribution directly supports a child's education, care, and development. 95% of funds go directly to children.",
  },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
