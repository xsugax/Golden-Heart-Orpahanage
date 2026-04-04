"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PayPalCapture() {
  const params = useSearchParams();
  const token = params.get("token");
  const method = params.get("method");
  const [status, setStatus] = useState<"idle" | "capturing" | "done" | "error">(
    "idle"
  );

  const captured = useRef(false);

  useEffect(() => {
    if (method !== "paypal" || !token || captured.current) return;
    captured.current = true;

    // Use queueMicrotask to avoid synchronous setState in effect body
    queueMicrotask(() => setStatus("capturing"));

    fetch("/api/donate/paypal/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId: token }),
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.success ? "done" : "error");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [method, token]);

  if (method !== "paypal") return null;

  if (status === "capturing") {
    return (
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 text-sm text-center">
        Confirming your PayPal payment...
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm text-center">
        Your payment is being processed. If you don&apos;t see a confirmation within a few minutes,
        please reach out to us and we&apos;ll sort it out.
      </div>
    );
  }

  if (status === "done") {
    return (
      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm text-center">
        PayPal payment confirmed successfully!
      </div>
    );
  }

  return null;
}
