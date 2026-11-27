"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SMARTSUPP_SNIPPET = `
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'bea33efd11d3b58fb57e49a14325e0296fc3f426';
window.smartsupp||(function(d) {
 var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
 s=d.getElementsByTagName('script')[0];c=d.createElement('script');
 c.type='text/javascript';c.charset='utf-8';c.async=true;
 c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
`;

export default function Smartsupp() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    if (document.getElementById("smartsupp-live-chat")) return;

    const script = document.createElement("script");
    script.id = "smartsupp-live-chat";
    script.type = "text/javascript";
    script.text = SMARTSUPP_SNIPPET;
    document.body.appendChild(script);
  }, [pathname]);

  return null;
}
