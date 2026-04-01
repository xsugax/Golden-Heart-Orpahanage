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
    apple: "/icon.svg",
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
        {/* Premium Splash Screen — renders instantly from server HTML */}
        <div
          id="splash"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(160deg, #0a1929 0%, #0d2137 40%, #0a1929 100%)",
            transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1), visibility 0.6s",
          }}
          aria-hidden="true"
        >
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @keyframes sp-pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.12);opacity:.85}}
                @keyframes sp-glow{0%,100%{box-shadow:0 0 20px rgba(245,158,11,.15),0 0 60px rgba(245,158,11,.08)}50%{box-shadow:0 0 35px rgba(245,158,11,.3),0 0 90px rgba(245,158,11,.15)}}
                @keyframes sp-bar{0%{width:0}60%{width:70%}100%{width:100%}}
                @keyframes sp-fadein{0%{opacity:0;transform:translateY(12px)}100%{opacity:1;transform:translateY(0)}}
                @keyframes sp-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
                @keyframes sp-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
                @keyframes sp-dot{0%,80%,100%{opacity:.3}40%{opacity:1}}
                #splash.sp-hide{opacity:0!important;visibility:hidden!important;pointer-events:none!important}
                #sp-logo-wrap{animation:sp-pulse 2.4s ease-in-out infinite,sp-glow 3s ease-in-out infinite;border-radius:50%;padding:4px}
                #sp-brand{animation:sp-fadein .8s ease-out .3s both}
                #sp-sub{animation:sp-fadein .8s ease-out .5s both}
                #sp-bar-inner{animation:sp-bar 3.5s cubic-bezier(.4,0,.2,1) forwards}
                #sp-bar-wrap{animation:sp-fadein .6s ease-out .7s both}
                #sp-ring{animation:sp-ring 2s linear infinite}
                .sp-dot{animation:sp-dot 1.4s ease-in-out infinite}
                .sp-dot:nth-child(2){animation-delay:.2s}
                .sp-dot:nth-child(3){animation-delay:.4s}
              `,
            }}
          />

          {/* Ambient Background Particles */}
          <div style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"}}>
            <div style={{position:"absolute",top:"15%",left:"20%",width:6,height:6,borderRadius:"50%",background:"rgba(245,158,11,0.15)",animation:"sp-pulse 3s ease-in-out infinite"}} />
            <div style={{position:"absolute",top:"70%",right:"25%",width:4,height:4,borderRadius:"50%",background:"rgba(45,212,191,0.12)",animation:"sp-pulse 4s ease-in-out infinite 1s"}} />
            <div style={{position:"absolute",top:"40%",right:"15%",width:5,height:5,borderRadius:"50%",background:"rgba(245,158,11,0.1)",animation:"sp-pulse 3.5s ease-in-out infinite .5s"}} />
            <div style={{position:"absolute",bottom:"25%",left:"30%",width:3,height:3,borderRadius:"50%",background:"rgba(45,212,191,0.08)",animation:"sp-pulse 4.5s ease-in-out infinite 1.5s"}} />
          </div>

          {/* Logo Ring + Heart */}
          <div style={{position:"relative",marginBottom:28}}>
            {/* Spinning ring */}
            <svg id="sp-ring" width="110" height="110" viewBox="0 0 110 110" fill="none" style={{position:"absolute",top:-7,left:-7}}>
              <circle cx="55" cy="55" r="52" stroke="rgba(245,158,11,0.08)" strokeWidth="1.5"/>
              <path d="M55 3 A52 52 0 0 1 107 55" stroke="rgba(245,158,11,0.4)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {/* Logo container */}
            <div
              id="sp-logo-wrap"
              style={{
                width: 96,
                height: 96,
                background: "linear-gradient(135deg, #f59e0b, #d97706, #b45309)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <svg width="56" height="56" viewBox="0 0 120 120" fill="none">
                <path d="M60 95 C60 95 22 68 22 45 C22 33 31 23 42 23 C49 23 55 27 60 33 C65 27 71 23 78 23 C89 23 98 33 98 45 C98 68 60 95 60 95Z" fill="white" fillOpacity="0.95"/>
                <circle cx="60" cy="46" r="7.5" fill="#d97706"/>
                <path d="M60 53 L60 72 M60 58 L50 49 M60 58 L70 49 M60 72 L52 84 M60 72 L68 84" stroke="#d97706" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
          </div>

          {/* Brand Name */}
          <h1
            id="sp-brand"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: 26,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.02em",
              margin: 0,
              textAlign: "center",
            }}
          >
            Golden Heart
            <span style={{ color: "#f59e0b" }}> Orphanage</span>
          </h1>

          {/* Tagline */}
          <p
            id="sp-sub"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: 13,
              color: "rgba(148,163,184,0.7)",
              margin: "10px 0 0",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Every child deserves a chance
          </p>

          {/* Progress Bar */}
          <div
            id="sp-bar-wrap"
            style={{
              marginTop: 36,
              width: 220,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: "100%",
                height: 3,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <div
                id="sp-bar-inner"
                style={{
                  height: "100%",
                  borderRadius: 4,
                  background: "linear-gradient(90deg, #f59e0b, #d97706, #f59e0b)",
                  backgroundSize: "200% 100%",
                  animation: "sp-bar 3.5s cubic-bezier(.4,0,.2,1) forwards, sp-shimmer 1.5s linear infinite",
                }}
              />
            </div>
            {/* Loading dots */}
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <div className="sp-dot" style={{width:5,height:5,borderRadius:"50%",background:"#f59e0b"}} />
              <div className="sp-dot" style={{width:5,height:5,borderRadius:"50%",background:"#f59e0b"}} />
              <div className="sp-dot" style={{width:5,height:5,borderRadius:"50%",background:"#f59e0b"}} />
            </div>
          </div>
        </div>

        {/* Splash auto-dismiss script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var s=document.getElementById('splash');
                if(!s)return;
                function hide(){s.classList.add('sp-hide');setTimeout(function(){s.remove()},700)}
                if(document.readyState==='complete'){setTimeout(hide,400)}
                else{window.addEventListener('load',function(){setTimeout(hide,400)})}
                setTimeout(hide,6000);
              })();
            `,
          }}
        />

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
