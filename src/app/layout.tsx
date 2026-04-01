import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
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
  metadataBase: new URL("https://goldenheartorphanage.org"),
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
    "non-profit",
    "South Africa",
    "golden heart",
    "vulnerable children",
  ],
  openGraph: {
    title: "Golden Heart Orphanage — Supporting Vulnerable Children",
    description:
      "Support orphaned and vulnerable children through structured education, care, and development.",
    url: "https://goldenheartorphanage.org",
    siteName: "Golden Heart Orphanage",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Golden Heart Orphanage — Every child deserves a chance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Heart Orphanage",
    description:
      "Support orphaned and vulnerable children through structured education, care, and development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#0a1929",
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
        <JsonLd />
        {children}
        {/* Smartsupp Live Chat */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _smartsupp = _smartsupp || {};
              _smartsupp.key = 'f12cab583210e0d1fc0834f9f53f193da2a47587';
              window.smartsupp||(function(d) {
                var s,c,o=smartsupp=function(){ o._.push(arguments)}; o._=[];
                s=d.getElementsByTagName('script')[0]; c=d.createElement('script');
                c.type='text/javascript'; c.charset='utf-8'; c.async=true;
                c.src='https://www.smartsuppchat.com/loader.js?'; s.parentNode.insertBefore(c,s);
              })(document);
            `,
          }}
        />
      </body>
    </html>
  );
}
