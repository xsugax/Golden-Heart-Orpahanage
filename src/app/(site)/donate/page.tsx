"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import {
  Heart,
  Check,
  Gift,
  Star,
  Trophy,
  Car,
  Sparkles,
  Users,
  Shield,
  CreditCard,
  Zap,
  Wallet,
  Bitcoin,
  Copy,
  ExternalLink,
} from "lucide-react";
import EmbeddedCardForm from "@/components/donate/EmbeddedCardForm";

type PaymentMethod = "card" | "paypal" | "crypto";

type Frequency = "one-time" | "daily" | "weekly" | "monthly";

interface Tier {
  amount: number;
  label: string;
  name: string;
  description: string;
  popular?: boolean;
}

const tiers: Record<Frequency, Tier[]> = {
  "one-time": [
    { amount: 50, label: "$50", name: "Starter", description: "A week of meals & supplies for one child" },
    { amount: 100, label: "$100", name: "Basic Support", description: "School supplies, uniform & materials" },
    { amount: 250, label: "$250", name: "Care Support", description: "Full education for 1 child (1 month)", popular: true },
    { amount: 500, label: "$500", name: "Education Sponsor", description: "Education + innovation + mentorship" },
    { amount: 1000, label: "$1,000", name: "Full Support", description: "Complete care for 1 child (3 months)" },
    { amount: 2500, label: "$2,500", name: "Champion", description: "Support multiple children & facility upgrades" },
    { amount: 5000, label: "$5,000", name: "Legacy Donor", description: "Fund an entire program for a quarter" },
    { amount: 10000, label: "$10,000", name: "Founding Partner", description: "Transform lives at scale — named recognition" },
  ],
  daily: [
    { amount: 5, label: "$5/day", name: "Daily Meal", description: "Nutritious meals for a child all day" },
    { amount: 10, label: "$10/day", name: "Daily Care", description: "Meals + essentials + school supplies", popular: true },
    { amount: 25, label: "$25/day", name: "Daily Impact", description: "Full daily care, education & mentorship" },
    { amount: 50, label: "$50/day", name: "Daily Champion", description: "Comprehensive support for multiple children" },
    { amount: 100, label: "$100/day", name: "Daily Hero", description: "Fund an entire day of operations" },
  ],
  weekly: [
    { amount: 25, label: "$25/wk", name: "Meals & Care", description: "Supports meals and basic care" },
    { amount: 50, label: "$50/wk", name: "Care & Education", description: "Supports care and education access", popular: true },
    { amount: 100, label: "$100/wk", name: "Full Development", description: "Supports full development programs" },
    { amount: 250, label: "$250/wk", name: "Complete Sponsor", description: "Full weekly sponsorship of a child" },
    { amount: 500, label: "$500/wk", name: "Program Funder", description: "Fund an entire weekly program" },
  ],
  monthly: [
    { amount: 100, label: "$100/mo", name: "Monthly Starter", description: "Essential supplies & basic care" },
    { amount: 250, label: "$250/mo", name: "Care Support", description: "Education, meals & school materials" },
    { amount: 500, label: "$500/mo", name: "Education Sponsor", description: "Full schooling and development programs", popular: true },
    { amount: 1000, label: "$1,000/mo", name: "Full Child Support", description: "Complete care, education & development" },
    { amount: 2500, label: "$2,500/mo", name: "Program Supporter", description: "Multiple children + facility growth" },
    { amount: 5000, label: "$5,000/mo", name: "Legacy Partner", description: "Transform an entire program" },
    { amount: 10000, label: "$10,000/mo", name: "Founding Circle", description: "Named partnership — maximum impact" },
  ],
};

const frequencyLabels: Record<Frequency, { label: string; shortLabel: string; icon: string }> = {
  "one-time": { label: "One-Time Gift", shortLabel: "One-Time", icon: "💝" },
  daily: { label: "Daily Giving", shortLabel: "Daily", icon: "☀️" },
  weekly: { label: "Weekly Support", shortLabel: "Weekly", icon: "📅" },
  monthly: { label: "Monthly Partner", shortLabel: "Monthly", icon: "🤝" },
};

const impactMessages: Record<number, string> = {
  5: "provides nutritious meals for a child for an entire day",
  10: "supports a full day of care, meals, and education",
  25: "covers a full week of meals and school supplies",
  50: "provides school supplies, meals, and materials for a month",
  100: "supports education for 1 child for one full month",
  250: "funds education, mentorship, and innovation training for 1 child",
  500: "covers complete care, education, and development for 1 child",
  1000: "supports multiple children and facility growth for a month",
  2500: "transforms an entire program — feeding, teaching, and housing children",
  5000: "funds an entire program for a quarter — changing dozens of lives",
  10000: "creates transformational, lasting impact across the entire orphanage",
};

function getImpactMessage(amount: number): string {
  const keys = Object.keys(impactMessages)
    .map(Number)
    .sort((a, b) => a - b);
  for (let i = keys.length - 1; i >= 0; i--) {
    if (amount >= keys[i]) return impactMessages[keys[i]];
  }
  return "helps support our mission";
}

const prizes = [
  {
    icon: Car,
    title: "Win a $75,000+ Brand-New Car",
    description: "Every $100+ donation enters you for a chance to win a luxury vehicle worth over $75,000. Monthly draws for recurring donors — more entries every cycle.",
    badge: "$75K+ Grand Prize",
    badgeColor: "bg-amber-500",
  },
  {
    icon: Trophy,
    title: "Win a $55,000 Pickup Truck",
    description: "Quarterly mega-draw for all active recurring donors. Daily & weekly supporters earn the most entries. A brand-new truck could be yours.",
    badge: "$55K Quarterly Draw",
    badgeColor: "bg-blue-500",
  },
  {
    icon: Star,
    title: "Meet a Celebrity Supporter",
    description: "Exclusive VIP invitation to meet our celebrity ambassadors — athletes, musicians, and influencers who champion Golden Heart.",
    badge: "Exclusive Access",
    badgeColor: "bg-purple-500",
  },
  {
    icon: Gift,
    title: "$10,000 in VIP Experiences",
    description: "Front-row concert tickets, luxury resort getaways, latest tech bundles, and surprise rewards every month for dedicated supporters.",
    badge: "$10K+ Monthly Rewards",
    badgeColor: "bg-emerald-500",
  },
];

function getEntries(amount: number, frequency: Frequency): number {
  const base = Math.floor(amount / 10) || 1;
  const multiplier: Record<Frequency, number> = {
    "one-time": 1,
    daily: 5,
    weekly: 3,
    monthly: 2,
  };
  return base * multiplier[frequency];
}

export default function DonatePage() {
  const [frequency, setFrequency] = useState<Frequency>("daily");
  const [selectedAmount, setSelectedAmount] = useState<number>(10);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState("");

  const currentTiers = tiers[frequency];
  const activeAmount = isCustom ? Number(customAmount) || 0 : selectedAmount;
  const entries = getEntries(activeAmount, frequency);

  const cryptoWallets = [
    {
      name: "Bitcoin (BTC)",
      symbol: "BTC",
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      network: "Bitcoin Network",
      color: "bg-orange-500",
      icon: "₿",
    },
    {
      name: "Ethereum (ETH)",
      symbol: "ETH",
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      network: "ERC-20 Network",
      color: "bg-indigo-500",
      icon: "Ξ",
    },
    {
      name: "USDT (Tether)",
      symbol: "USDT",
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      network: "ERC-20 / TRC-20",
      color: "bg-emerald-500",
      icon: "₮",
    },
    {
      name: "USDC",
      symbol: "USDC",
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      network: "ERC-20 / Solana",
      color: "bg-blue-500",
      icon: "$",
    },
  ];

  function copyToClipboard(text: string, label: string) {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  }

  async function handleDonate() {
    if (activeAmount < 1) return;
    // Card payments are handled inline by EmbeddedCardForm — this only handles PayPal and Crypto
    if (paymentMethod === "card") return;
    setLoading(true);
    setError("");

    try {
      const endpoint =
        paymentMethod === "crypto"
          ? "/api/donate/crypto"
          : "/api/donate/paypal";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: activeAmount,
          frequency,
          tier: isCustom
            ? "custom"
            : currentTiers.find((t) => t.amount === selectedAmount)?.name ||
              "custom",
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Unable to start checkout. Please try again.");
      }
    } catch {
      setError("Connection error. Please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  }

  const frequencyUnit =
    frequency === "one-time"
      ? ""
      : frequency === "daily"
        ? " / day"
        : frequency === "weekly"
          ? " / week"
          : " / month";

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-navy-950 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 to-navy-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500/20 mb-6">
              <Heart className="w-10 h-10 text-amber-400 fill-amber-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Support a Child, Change a Life
            </h1>
            <p className="text-lg md:text-xl text-navy-300 leading-relaxed max-w-2xl mx-auto mb-6">
              Your contribution provides education, care, and opportunity to
              children who need it most. Every amount creates a real, measurable
              difference.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-navy-400">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-teal-400" /> Secure Payments
              </span>
              <span className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-teal-400" /> Apple Pay &
                Google Pay
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-teal-400" /> Tax Deductible
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Donate for a Chance Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Donate & Win
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                Give from the Heart. Win Something Incredible.
              </h2>
              <p className="text-navy-400 max-w-2xl mx-auto">
                Every donation automatically enters you for a chance to win
                amazing prizes. Recurring donors get bonus entries every cycle.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {prizes.map((prize, index) => (
              <AnimatedSection key={prize.title} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group relative overflow-hidden">
                  <div
                    className={`absolute top-3 right-3 ${prize.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider`}
                  >
                    {prize.badge}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <prize.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {prize.title}
                  </h3>
                  <p className="text-sm text-navy-400 leading-relaxed">
                    {prize.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <p className="text-center text-xs text-slate-500 mt-6">
              No purchase necessary where prohibited. See{" "}
              <a href="/terms" className="text-amber-400 underline">
                Terms & Conditions
              </a>{" "}
              for official rules. All prizes are funded separately from
              charitable donations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden">
              {/* Step 1: Frequency */}
              <div className="p-6 md:p-8 border-b border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <h2 className="text-xl font-semibold text-navy-900">
                    How Often Would You Like to Give?
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {(
                    ["daily", "weekly", "monthly", "one-time"] as Frequency[]
                  ).map((freq) => (
                    <button
                      key={freq}
                      onClick={() => {
                        setFrequency(freq);
                        setIsCustom(false);
                        const defaultTier =
                          tiers[freq].find((t) => t.popular) || tiers[freq][0];
                        setSelectedAmount(defaultTier.amount);
                      }}
                      className={`relative px-4 py-4 rounded-xl text-center transition-all border-2 ${
                        frequency === freq
                          ? "bg-amber-50 border-amber-500 ring-2 ring-amber-200 shadow-sm"
                          : "bg-white border-slate-200 hover:border-amber-300"
                      }`}
                    >
                      <span className="text-lg mb-1 block">
                        {frequencyLabels[freq].icon}
                      </span>
                      <span
                        className={`text-sm font-semibold block ${
                          frequency === freq
                            ? "text-amber-700"
                            : "text-navy-800"
                        }`}
                      >
                        {frequencyLabels[freq].shortLabel}
                      </span>
                      {freq === "daily" && (
                        <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                          NEW
                        </span>
                      )}
                      {freq === "monthly" && (
                        <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                          BEST
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {frequency === "daily" && (
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-xl">
                    <p className="text-sm text-amber-800 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>
                        <strong>Daily donors earn 5× prize entries</strong> — the
                        most entries per dollar of any frequency!
                      </span>
                    </p>
                  </div>
                )}
              </div>

              {/* Step 2: Amount */}
              <div className="p-6 md:p-8 border-b border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <h2 className="text-xl font-semibold text-navy-900">
                    Select Your Amount
                  </h2>
                </div>

                <div
                  className={`grid gap-4 mb-6 ${
                    currentTiers.length <= 4
                      ? "grid-cols-2 md:grid-cols-4"
                      : "grid-cols-2 md:grid-cols-3"
                  }`}
                >
                  {currentTiers.map((tier) => (
                    <button
                      key={tier.amount}
                      onClick={() => {
                        setSelectedAmount(tier.amount);
                        setIsCustom(false);
                      }}
                      className={`relative p-4 rounded-xl border-2 text-left transition-all ${
                        !isCustom && selectedAmount === tier.amount
                          ? "border-amber-500 bg-amber-50 ring-2 ring-amber-200"
                          : "border-slate-200 hover:border-amber-300 hover:shadow-sm"
                      }`}
                    >
                      {tier.popular && (
                        <span className="absolute -top-2.5 left-3 bg-amber-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                          Most Popular
                        </span>
                      )}
                      <p className="text-xl font-bold text-navy-900">
                        {tier.label}
                      </p>
                      <p className="text-xs text-amber-600 font-medium mt-0.5">
                        {tier.name}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {tier.description}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div
                  className={`p-4 rounded-xl border-2 transition-all ${
                    isCustom
                      ? "border-amber-500 bg-amber-50 ring-2 ring-amber-200"
                      : "border-slate-200"
                  }`}
                >
                  <label className="text-sm font-medium text-navy-700 mb-2 block">
                    Custom Amount
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-navy-900">$</span>
                    <input
                      type="number"
                      min="1"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setIsCustom(true);
                      }}
                      onFocus={() => setIsCustom(true)}
                      className="flex-1 px-3 py-2 rounded-lg border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-200 outline-none text-navy-900"
                      placeholder="Enter any amount"
                    />
                  </div>
                </div>
              </div>

              {/* Impact + Prize Entries */}
              {activeAmount > 0 && (
                <div className="p-5 bg-gradient-to-r from-amber-50 to-cream-100 border-b border-amber-100">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <Check className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                      <p className="text-navy-800">
                        <span className="font-bold text-amber-700">
                          ${activeAmount.toLocaleString()}
                          {frequencyUnit}
                        </span>{" "}
                        {getImpactMessage(activeAmount)}.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/80 border border-amber-200 rounded-lg px-4 py-2 shrink-0">
                      <Trophy className="w-4 h-4 text-amber-500" />
                      <span className="text-sm font-bold text-navy-800">
                        {entries} {entries === 1 ? "entry" : "entries"}
                      </span>
                      <span className="text-xs text-slate-500">
                        per {frequency === "one-time" ? "donation" : "cycle"}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Payment Method */}
              <div className="p-6 md:p-8 border-b border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <h2 className="text-xl font-semibold text-navy-900">
                    Choose Payment Method
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Card Option */}
                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`relative p-5 rounded-xl border-2 text-left transition-all ${
                      paymentMethod === "card"
                        ? "border-amber-500 bg-amber-50 ring-2 ring-amber-200"
                        : "border-slate-200 hover:border-amber-300"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy-900">Credit / Debit Card</p>
                        <p className="text-xs text-slate-500">Visa, Mastercard, Amex</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Shield className="w-3 h-3" />
                      <span>Stripe • Apple Pay • Google Pay</span>
                    </div>
                    {paymentMethod === "card" && (
                      <div className="absolute top-3 right-3 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </button>

                  {/* PayPal Option */}
                  <button
                    onClick={() => setPaymentMethod("paypal")}
                    className={`relative p-5 rounded-xl border-2 text-left transition-all ${
                      paymentMethod === "paypal"
                        ? "border-amber-500 bg-amber-50 ring-2 ring-amber-200"
                        : "border-slate-200 hover:border-amber-300"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center">
                        <Wallet className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy-900">PayPal</p>
                        <p className="text-xs text-slate-500">PayPal Balance or Bank</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Shield className="w-3 h-3" />
                      <span>200+ countries • Buyer protection</span>
                    </div>
                    {paymentMethod === "paypal" && (
                      <div className="absolute top-3 right-3 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </button>

                  {/* Crypto Option */}
                  <button
                    onClick={() => setPaymentMethod("crypto")}
                    className={`relative p-5 rounded-xl border-2 text-left transition-all ${
                      paymentMethod === "crypto"
                        ? "border-amber-500 bg-amber-50 ring-2 ring-amber-200"
                        : "border-slate-200 hover:border-amber-300"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                        <Bitcoin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy-900">Cryptocurrency</p>
                        <p className="text-xs text-slate-500">BTC, ETH, USDT, USDC</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Zap className="w-3 h-3" />
                      <span>Decentralized • Fast • Low fees</span>
                    </div>
                    {paymentMethod === "crypto" && (
                      <div className="absolute top-3 right-3 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </button>
                </div>
              </div>

              {/* Step 4: Checkout */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <h2 className="text-xl font-semibold text-navy-900">
                    Complete Your Donation
                  </h2>
                </div>

                {paymentMethod === "card" ? (
                  <EmbeddedCardForm
                    amount={activeAmount}
                    frequency={frequency}
                    tier={
                      isCustom
                        ? "custom"
                        : currentTiers.find((t) => t.amount === selectedAmount)
                            ?.name || "custom"
                    }
                    frequencyUnit={frequencyUnit}
                  />
                ) : paymentMethod === "paypal" ? (
                  <>
                    <p className="text-sm text-slate-600 mb-6">
                      You will be redirected to PayPal to complete your{" "}
                      <strong className="text-navy-800">
                        {frequency === "one-time" ? "one-time" : frequency}
                      </strong>{" "}
                      donation of{" "}
                      <strong className="text-navy-900">
                        ${activeAmount.toLocaleString()}
                        {frequencyUnit}
                      </strong>
                      . Pay with your PayPal balance, bank account, or linked card.
                    </p>

                    {error && (
                      <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                        {error}
                      </div>
                    )}

                    <Button
                      onClick={handleDonate}
                      disabled={loading || activeAmount < 1}
                      size="lg"
                      className="w-full text-lg py-4 bg-[#0070ba] hover:bg-[#003087]"
                    >
                      {loading ? (
                        "Redirecting to PayPal..."
                      ) : (
                        <>
                          <Wallet className="w-5 h-5 mr-2" />
                          Pay ${activeAmount.toLocaleString()}
                          {frequencyUnit} with PayPal
                        </>
                      )}
                    </Button>

                    <div className="flex items-center justify-center gap-4 mt-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Shield className="w-3 h-3" /> Buyer Protection
                      </span>
                      <span>•</span>
                      <span>200+ Countries</span>
                      <span>•</span>
                      <span>Tax Deductible</span>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-slate-600 mb-6">
                      Send{" "}
                      <strong className="text-navy-900">
                        ${activeAmount.toLocaleString()}
                      </strong>{" "}
                      equivalent in crypto to one of the wallet addresses below.
                      After sending, your donation will be confirmed automatically.
                    </p>

                    {error && (
                      <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                        {error}
                      </div>
                    )}

                    <div className="space-y-3 mb-6">
                      {cryptoWallets.map((wallet) => (
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
                              className="flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-navy-700 hover:bg-amber-50 hover:border-amber-300 transition-all"
                            >
                              {copied === wallet.symbol ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-500" />
                                  Copied!
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  Copy Address
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

                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-4">
                      <p className="text-sm text-amber-800">
                        <strong>Important:</strong> Only send the listed
                        cryptocurrency to these addresses on the correct
                        network. Sending the wrong token or using the wrong
                        network may result in permanent loss of funds.
                      </p>
                    </div>

                    <Button
                      onClick={handleDonate}
                      disabled={loading || activeAmount < 1}
                      size="lg"
                      className="w-full text-lg py-4"
                    >
                      {loading ? (
                        "Processing..."
                      ) : (
                        <>
                          <ExternalLink className="w-5 h-5 mr-2" />
                          I&apos;ve Sent My Crypto Donation
                        </>
                      )}
                    </Button>

                    <div className="flex items-center justify-center gap-4 mt-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Shield className="w-3 h-3" /> Verified Wallets
                      </span>
                      <span>•</span>
                      <span>BTC • ETH • USDT • USDC</span>
                      <span>•</span>
                      <span>Tax Deductible</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Trust Indicators */}
          <AnimatedSection delay={0.2}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center py-5">
                <Shield className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-navy-800">100% Secure</p>
                <p className="text-xs text-slate-500">Stripe Protected</p>
              </Card>
              <Card className="text-center py-5">
                <Heart className="w-6 h-6 text-teal-500 mx-auto mb-2 fill-teal-200" />
                <p className="text-sm font-semibold text-navy-800">95% Direct</p>
                <p className="text-xs text-slate-500">Goes to Children</p>
              </Card>
              <Card className="text-center py-5">
                <Users className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-navy-800">2,400+</p>
                <p className="text-xs text-slate-500">Active Supporters</p>
              </Card>
              <Card className="text-center py-5">
                <Trophy className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-navy-800">Win Prizes</p>
                <p className="text-xs text-slate-500">Every Donation Enters</p>
              </Card>
            </div>
          </AnimatedSection>

          {/* How Prize Entries Work */}
          <AnimatedSection delay={0.3}>
            <div className="mt-8 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
              <h3 className="text-lg font-bold text-navy-900 mb-4 flex items-center gap-2">
                <Gift className="w-5 h-5 text-amber-500" />
                How Prize Entries Work
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0">
                    1×
                  </div>
                  <div>
                    <p className="font-medium text-navy-800">One-Time Donations</p>
                    <p className="text-slate-500">1 entry per $10 donated</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0">
                    2×
                  </div>
                  <div>
                    <p className="font-medium text-navy-800">Monthly Donors</p>
                    <p className="text-slate-500">2× entries every billing cycle</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                    3×
                  </div>
                  <div>
                    <p className="font-medium text-navy-800">Weekly Donors</p>
                    <p className="text-slate-500">3× entries every week</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0">
                    5×
                  </div>
                  <div>
                    <p className="font-medium text-navy-800">Daily Donors</p>
                    <p className="text-slate-500">5× entries — most entries per dollar!</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
