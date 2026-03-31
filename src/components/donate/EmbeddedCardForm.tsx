"use client";

import { useState, useEffect, useTransition } from "react";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Shield, Lock, CheckCircle, CreditCard, RefreshCw } from "lucide-react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

interface CardFormProps {
  amount: number;
  frequency: string;
  tier: string;
  frequencyUnit: string;
}

function CheckoutForm({
  amount,
  frequency,
  frequencyUnit,
}: {
  amount: number;
  frequency: string;
  frequencyUnit: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState<
    "idle" | "processing" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!stripe || !elements) return;

    setStatus("processing");
    setErrorMsg("");

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/donate/success?method=card`,
      },
    });

    if (error) {
      setStatus("error");
      setErrorMsg(
        error.message || "Payment failed. Please check your details and try again."
      );
    }
    // If no error, the user was redirected to success page
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">
          Payment Successful!
        </h3>
        <p className="text-slate-600">
          Redirecting to confirmation...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Amount Display */}
      <div className="bg-gradient-to-r from-amber-50 to-cream-50 rounded-xl p-4 border border-amber-200">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-slate-600">Donation Amount</span>
            {frequency !== "one-time" && (
              <div className="flex items-center gap-1 mt-0.5">
                <RefreshCw className="w-3 h-3 text-teal-600" />
                <span className="text-xs text-teal-700 font-medium">
                  Auto-debits {frequency} — cancel anytime
                </span>
              </div>
            )}
          </div>
          <span className="text-2xl font-bold text-navy-900">
            ${amount.toLocaleString()}
            <span className="text-sm font-normal text-slate-500">
              {frequencyUnit}
            </span>
          </span>
        </div>
      </div>

      {/* Stripe Payment Element - handles card, Apple Pay, Google Pay */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <PaymentElement
          options={{
            layout: "tabs",
            defaultValues: {
              billingDetails: {
                name: "",
              },
            },
          }}
        />
      </div>

      {/* Error */}
      {errorMsg && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={!stripe || !elements || status === "processing"}
        className="w-full py-4 px-6 bg-navy-900 hover:bg-navy-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-lg font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-navy-900/20"
      >
        {status === "processing" ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Processing Payment...
          </>
        ) : frequency !== "one-time" ? (
          <>
            <RefreshCw className="w-5 h-5" />
            Subscribe ${amount.toLocaleString()}
            {frequencyUnit}
          </>
        ) : (
          <>
            <Lock className="w-5 h-5" />
            Pay ${amount.toLocaleString()}
            {frequencyUnit}
          </>
        )}
      </button>

      {/* Security Badges */}
      <div className="flex items-center justify-center gap-6 text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <Shield className="w-3 h-3" /> 256-bit SSL
        </span>
        <span className="flex items-center gap-1">
          <Lock className="w-3 h-3" /> PCI Compliant
        </span>
        <span className="flex items-center gap-1">
          <CreditCard className="w-3 h-3" /> Powered by Stripe
        </span>
      </div>
    </form>
  );
}

export default function EmbeddedCardForm({
  amount,
  frequency,
  tier,
  frequencyUnit,
}: CardFormProps) {
  const [clientSecret, setClientSecret] = useState("");
  const [loadError, setLoadError] = useState("");
  const [initializing, setInitializing] = useState(true);
  const [, startTransition] = useTransition();

  useEffect(() => {
    if (amount < 1) {
      startTransition(() => setInitializing(false));
      return;
    }

    startTransition(() => {
      setInitializing(true);
      setLoadError("");
    });

    const controller = new AbortController();

    fetch("/api/donate/create-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, frequency, tier }),
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setLoadError(data.error || "Failed to initialize payment");
        }
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setLoadError("Connection error. Please try again.");
        }
      })
      .finally(() => setInitializing(false));

    return () => controller.abort();
  }, [amount, frequency, tier]);

  if (amount < 1) {
    return (
      <div className="text-center py-8 text-slate-500">
        Select a donation amount to continue
      </div>
    );
  }

  if (initializing) {
    return (
      <div className="text-center py-10">
        <div className="w-8 h-8 mx-auto mb-3 border-3 border-amber-200 border-t-amber-500 rounded-full animate-spin" />
        <p className="text-sm text-slate-500">
          Initializing secure payment...
        </p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="text-center py-8">
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm mb-4">
          {loadError}
        </div>
        <button
          onClick={() => {
            setInitializing(true);
            setLoadError("");
            fetch("/api/donate/create-intent", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ amount, frequency, tier }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.clientSecret) setClientSecret(data.clientSecret);
                else setLoadError(data.error || "Failed to initialize");
              })
              .catch(() => setLoadError("Connection error"))
              .finally(() => setInitializing(false));
          }}
          className="text-sm text-teal-600 hover:text-teal-700 font-medium"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!clientSecret) return null;

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: "stripe",
          variables: {
            colorPrimary: "#d4a843",
            colorBackground: "#ffffff",
            colorText: "#3d3929",
            colorDanger: "#dc2626",
            fontFamily: "inherit",
            borderRadius: "12px",
            spacingUnit: "4px",
          },
          rules: {
            ".Input": {
              border: "1px solid #d5d0c4",
              boxShadow: "none",
              padding: "12px",
            },
            ".Input:focus": {
              border: "2px solid #d4a843",
              boxShadow: "0 0 0 3px rgba(212, 168, 67, 0.15)",
            },
            ".Label": {
              fontWeight: "500",
              color: "#5c5645",
            },
          },
        },
      }}
    >
      <CheckoutForm amount={amount} frequency={frequency} frequencyUnit={frequencyUnit} />
    </Elements>
  );
}
