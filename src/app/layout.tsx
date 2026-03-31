import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Golden Heart Orphanage — Supporting Vulnerable Children",
    template: "%s | Golden Heart Orphanage",
  },
  description:
    "Golden Heart Orphanage supports orphaned and vulnerable children through structured education, care, and development—helping them build a future beyond their circumstances.",
  keywords: [
    "orphanage",
    "donate",
    "children",
    "charity",
    "NGO",
    "humanitarian",
    "education",
    "support",
  ],
  openGraph: {
    title: "Golden Heart Orphanage — Supporting Vulnerable Children",
    description:
      "Support orphaned and vulnerable children through structured education, care, and development.",
    url: "https://goldenheartorphanage.org",
    siteName: "Golden Heart Orphanage",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Heart Orphanage",
    description:
      "Support orphaned and vulnerable children through structured education, care, and development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
