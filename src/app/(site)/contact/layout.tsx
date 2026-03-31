import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Golden Heart Orphanage. We welcome your questions, partnership inquiries, and volunteer interest.",
  openGraph: {
    title: "Contact Us — Golden Heart Orphanage",
    description:
      "Reach out to learn how you can support orphaned and vulnerable children.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
