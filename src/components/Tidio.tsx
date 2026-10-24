"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Tidio() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    if (document.getElementById("tidio-chat-script")) return;

    const script = document.createElement("script");
    script.id = "tidio-chat-script";
    script.src = "//code.tidio.co/rxcqwsqmfvbw1ht8ef1ye6f6rbzjzhqa.js";
    script.async = true;
    document.body.appendChild(script);
  }, [pathname]);

  return null;
}
