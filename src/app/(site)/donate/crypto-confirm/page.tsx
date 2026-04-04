"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Check, Heart, ArrowLeft, Copy, Shield } from "lucide-react";
import { useState } from "react";

const wallets = [
  {
    name: "Bitcoin (BTC)",
    symbol: "BTC",
    address: "bc1qdpqyxrv428qp4vdlq0hpudmrpmgs5x9qcyhfa5",
    network: "Bitcoin Network",
    color: "bg-orange-500",
    icon: "₿",
  },
  {
    name: "Ethereum (ETH)",
    symbol: "ETH",
    address: "0x14BeaCB76970C7aD354f35aB1ca21F0e2f826cff",
    network: "ERC-20 Network",
    color: "bg-indigo-500",
    icon: "Ξ",
  },
  {
    name: "USDT (Tether)",
    symbol: "USDT",
    address: "2FbNJXqoyxfXwpe1ycT4FG5bu3RP1vckT7qSWV4zVpMD",
    network: "Solana Network",
    color: "bg-emerald-500",
    icon: "₮",
  },
  {
    name: "Solana (SOL)",
    symbol: "SOL",
    address: "2FbNJXqoyxfXwpe1ycT4FG5bu3RP1vckT7qSWV4zVpMD",
    network: "Solana Network",
    color: "bg-purple-500",
    icon: "◎",
  },
];

function CryptoConfirmContent() {
  const params = useSearchParams();
  const amount = params.get("amount") || "0";
  const frequency = params.get("frequency") || "one-time";
  const tier = params.get("tier") || "custom";
  const [copied, setCopied] = useState("");

  function copyToClipboard(text: string, label: string) {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-teal-600 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Donate
            </Link>

            <Card className="overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-navy-900 to-navy-800 p-6 text-center text-white">
                <div className="w-14 h-14 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Heart className="w-7 h-7 fill-white" />
                </div>
                <h1 className="text-2xl font-bold mb-1">
                  Crypto Donation Confirmation
                </h1>
                <p className="text-navy-200 text-sm">
                  Thank you for choosing to donate with cryptocurrency
                </p>
              </div>

              {/* Donation Summary */}
              <div className="p-6 border-b border-slate-100 bg-amber-50/50">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Amount</p>
                    <p className="text-lg font-bold text-navy-900">
                      ${Number(amount).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Frequency</p>
                    <p className="text-lg font-bold text-navy-900 capitalize">
                      {frequency}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Tier</p>
                    <p className="text-lg font-bold text-navy-900 capitalize">
                      {tier}
                    </p>
                  </div>
                </div>
              </div>

              {/* Wallet Addresses */}
              <div className="p-6">
                <h2 className="text-lg font-semibold text-navy-900 mb-4">
                  Send to any of these wallets:
                </h2>

                <div className="space-y-3">
                  {wallets.map((wallet) => (
                    <div
                      key={wallet.symbol}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-8 h-8 ${wallet.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}
                          >
                            {wallet.icon}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-navy-900">
                              {wallet.name}
                            </p>
                            <p className="text-[10px] text-slate-500">
                              {wallet.network}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(wallet.address, wallet.symbol)
                          }
                          className="flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-teal-50 hover:border-teal-300 transition-all"
                        >
                          {copied === wallet.symbol ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-500" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-xs font-mono text-slate-600 break-all bg-white rounded-lg px-3 py-2 border border-slate-100">
                        {wallet.address}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Warning */}
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800">
                    <strong>Important:</strong> Only send the listed
                    cryptocurrency to these addresses on the correct network.
                    Sending the wrong token or using the wrong network may result
                    in permanent loss of funds.
                  </p>
                </div>

                {/* Trust */}
                <div className="mt-6 flex justify-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3" /> Verified Wallets
                  </span>
                  <span>•</span>
                  <span>Tax Deductible</span>
                  <span>•</span>
                  <span>501(c)(3) Registered</span>
                </div>

                {/* CTA */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Link href="/donate">
                    <Button variant="outline" className="w-full">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Donate Again
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button className="w-full">
                      <Heart className="w-4 h-4 mr-2 fill-white" />
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

export default function CryptoConfirmPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center">
          <p className="text-slate-500">Loading confirmation...</p>
        </main>
      }
    >
      <CryptoConfirmContent />
    </Suspense>
  );
}
