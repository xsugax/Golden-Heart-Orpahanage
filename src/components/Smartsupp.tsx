"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Smartsupp() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;

    if (typeof window === "undefined") return;

    type SmartsuppWindow = Window & {
      _smartsupp?: { key?: string };
      smartsupp?: { _: unknown[] };
    };
    const win = window as SmartsuppWindow;

    if (win.smartsupp) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://www.smartsuppchat.com/loader.js?";
    script.charset = "utf-8";

    win._smartsupp = win._smartsupp || {};
    win._smartsupp.key = "f12cab583210e0d1fc0834f9f53f193da2a47587";

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [pathname]);

  return null;
}
