"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const donors = [
  { name: "Sarah M.", location: "New York", amount: 50 },
  { name: "James K.", location: "London", amount: 100 },
  { name: "Anonymous", location: "Cape Town", amount: 25 },
  { name: "Emily R.", location: "Toronto", amount: 250 },
  { name: "Thandi N.", location: "Johannesburg", amount: 10 },
  { name: "Michael B.", location: "Sydney", amount: 500 },
  { name: "Priya S.", location: "Mumbai", amount: 15 },
  { name: "Carlos D.", location: "São Paulo", amount: 75 },
  { name: "Aisha O.", location: "Lagos", amount: 50 },
  { name: "David W.", location: "Berlin", amount: 200 },
  { name: "Anonymous", location: "Tokyo", amount: 1000 },
  { name: "Grace L.", location: "Nairobi", amount: 30 },
  { name: "Sophie T.", location: "Paris", amount: 100 },
  { name: "Anonymous", location: "Dubai", amount: 500 },
  { name: "Maria G.", location: "Mexico City", amount: 20 },
];

const timeAgo = [
  "just now",
  "2 min ago",
  "5 min ago",
  "8 min ago",
  "12 min ago",
  "15 min ago",
  "23 min ago",
  "31 min ago",
  "45 min ago",
  "1 hr ago",
];

export default function LiveDonationTicker() {
  const [current, setCurrent] = useState(0);
  const [totalToday, setTotalToday] = useState(12847);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % donors.length);
    setTotalToday((prev) => prev + Math.floor(Math.random() * 30) + 5);
  }, []);

  useEffect(() => {
    const interval = setInterval(advance, 4000);
    return () => clearInterval(interval);
  }, [advance]);

  const donor = donors[current];
  const time = timeAgo[current % timeAgo.length];

  return (
    <section className="py-4 bg-navy-950 border-y border-navy-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Live donation notification */}
          <div className="flex items-center gap-3 min-w-0">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 text-sm"
              >
                <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                <span className="text-white font-semibold">{donor.name}</span>
                <span className="text-navy-400">from {donor.location}</span>
                <span className="text-amber-400 font-bold">
                  donated ${donor.amount}
                </span>
                <span className="text-navy-500 text-xs">{time}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Running total */}
          <div className="flex items-center gap-2 text-xs text-navy-400 shrink-0">
            <span>Raised today:</span>
            <motion.span
              key={totalToday}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              className="text-amber-400 font-bold text-sm"
            >
              ${totalToday.toLocaleString()}
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}
