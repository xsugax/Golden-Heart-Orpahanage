"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

/* ── Large donor pool: first names, cities, amounts ── */
const firstNames = [
  "Sarah","James","Emily","Michael","Priya","Carlos","Aisha","David","Grace",
  "Sophie","Maria","Chen","Fatima","Robert","Nadia","Oliver","Amara","Patrick",
  "Yuki","Hassan","Elena","Marcus","Zara","Benjamin","Ingrid","Kwame","Chiara",
  "Mohammad","Anya","Lucas","Nkechi","Erik","Lakshmi","Thomas","Aiko","Samuel",
  "Isabella","Dmitri","Lindiwe","François","Adaeze","Raj","Catalina","Henrik",
  "Aaliyah","George","Mei","Abdul","Valentina","Oscar","Thandiwe","Pierre",
  "Suki","Anderson","Folake","Johan","Rania","Diego","Yara","Kevin","Astrid",
  "Kofi","Margot","Tariq","Simone","Brendan","Amina","Victor","Leila","Stefan",
  "Chiamaka","Hugh","Sakura","Emeka","Celine","Rafael","Noor","Malcolm","Petra",
];

const lastInits = [
  "M.","K.","R.","B.","S.","D.","O.","W.","L.","T.","G.","C.","H.","N.",
  "P.","A.","F.","V.","J.","Z.","E.","I.","Q.","Y.","U.","X.",
];

const cities = [
  "New York","London","Cape Town","Toronto","Johannesburg","Sydney","Mumbai",
  "São Paulo","Lagos","Berlin","Tokyo","Nairobi","Paris","Dubai","Mexico City",
  "Stockholm","Seoul","Singapore","Amsterdam","Zurich","Los Angeles","Chicago",
  "Oslo","Milan","Accra","Riyadh","Auckland","Lisbon","Vienna","Brussels",
  "Doha","Geneva","Boston","Seattle","San Francisco","Hong Kong","Taipei",
  "Manila","Kuala Lumpur","Istanbul","Bangkok","Jakarta","Cairo","Bogotá",
  "Lima","Buenos Aires","Abuja","Kigali","Addis Ababa","Dar es Salaam",
  "Denver","Dallas","Atlanta","Miami","Edinburgh","Glasgow","Dublin",
  "Copenhagen","Helsinki","Reykjavik","Prague","Warsaw","Budapest",
  "Casablanca","Tunis","Maputo","Lusaka","Windhoek","Gaborone",
];

/* Weighted amount tiers — heavily skewed toward bigger gifts */
const amountTiers = [
  { min: 100, max: 250, weight: 20 },
  { min: 250, max: 500, weight: 25 },
  { min: 500, max: 1000, weight: 20 },
  { min: 1000, max: 2500, weight: 15 },
  { min: 2500, max: 5000, weight: 10 },
  { min: 5000, max: 10000, weight: 5 },
  { min: 10000, max: 25000, weight: 3 },
  { min: 25000, max: 50000, weight: 1 },
  { min: 50000, max: 100000, weight: 1 },
];

const timeLabels = [
  "just now","1 min ago","2 min ago","3 min ago","5 min ago",
  "7 min ago","10 min ago","14 min ago","18 min ago","22 min ago",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickAmount(): number {
  const totalWeight = amountTiers.reduce((s, t) => s + t.weight, 0);
  let r = Math.random() * totalWeight;
  for (const tier of amountTiers) {
    r -= tier.weight;
    if (r <= 0) {
      const raw = tier.min + Math.random() * (tier.max - tier.min);
      return Math.round(raw / 5) * 5; // round to nearest 5
    }
  }
  return 250;
}

interface Donation {
  id: number;
  name: string;
  city: string;
  amount: number;
  time: string;
}

function generateDonation(id: number, timeIdx: number): Donation {
  const isAnon = Math.random() < 0.12;
  return {
    id,
    name: isAnon ? "Anonymous" : `${pickRandom(firstNames)} ${pickRandom(lastInits)}`,
    city: pickRandom(cities),
    amount: pickAmount(),
    time: timeLabels[Math.min(timeIdx, timeLabels.length - 1)],
  };
}

export default function LiveDonationTicker() {
  const idRef = useRef(2);
  const [donation, setDonation] = useState<Donation>(() =>
    generateDonation(1, 0)
  );

  const advance = useCallback(() => {
    const timeIdx = Math.floor(Math.random() * 4); // mostly recent
    setDonation(generateDonation(idRef.current++, timeIdx));
  }, []);

  useEffect(() => {
    const interval = setInterval(advance, 4000);
    return () => clearInterval(interval);
  }, [advance]);

  return (
    <section className="py-4 bg-navy-950 border-y border-navy-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={donation.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 text-sm"
            >
              <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
              <span className="text-white font-semibold">{donation.name}</span>
              <span className="text-navy-400">from {donation.city}</span>
              <span className="text-amber-400 font-bold">
                donated ${donation.amount.toLocaleString()}
              </span>
              <span className="text-navy-500 text-xs hidden sm:inline">
                — {donation.time}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
