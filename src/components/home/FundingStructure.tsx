 import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Sparkles, Car, Trophy, Star, Gift } from "lucide-react";

const dailyTiers = [
  {
    amount: 5,
    label: "$5 / day",
    description: "Nutritious meals for a child all day.",
  },
  {
    amount: 10,
    label: "$10 / day",
    description: "Meals + essentials + school supplies.",
    featured: true,
  },
  {
    amount: 25,
    label: "$25 / day",
    description: "Full daily care, education & mentorship.",
  },
  {
    amount: 50,
    label: "$50 / day",
    description: "Comprehensive support for multiple children.",
  },
];

const weeklyTiers = [
  {
    amount: 25,
    label: "$25 / week",
    description: "Supports meals and basic care.",
  },
  {
    amount: 50,
    label: "$50 / week",
    description: "Supports care and education access.",
  },
  {
    amount: 100,
    label: "$100 / week",
    description: "Supports full development programs.",
  },
  {
    amount: 250,
    label: "$250 / week",
    description: "Full weekly child sponsorship.",
  },
];

const monthlyTiers = [
  {
    amount: 100,
    label: "$100 / month",
    name: "Monthly Starter",
    description: "Essential supplies and basic care.",
  },
  {
    amount: 250,
    label: "$250 / month",
    name: "Care Support",
    description: "Education, meals and school materials.",
  },
  {
    amount: 500,
    label: "$500 / month",
    name: "Education Sponsor",
    description: "Full schooling and development programs.",
    featured: true,
  },
  {
    amount: 1000,
    label: "$1,000 / month",
    name: "Full Child Support",
    description: "Complete care, education and development.",
  },
  {
    amount: 2500,
    label: "$2,500 / month",
    name: "Program Supporter",
    description: "Multiple children + facility growth.",
  },
  {
    amount: 5000,
    label: "$5,000+ / month",
    name: "Legacy Partner",
    description: "Transform an entire program.",
  },
];

const prizes = [
  { icon: Car, text: "Win a $75K+ Brand-New Car", sub: "Monthly draws" },
  { icon: Trophy, text: "Win a $55K Pickup Truck", sub: "Quarterly draws" },
  { icon: Star, text: "Meet Celebrity Supporters", sub: "Exclusive VIP access" },
  { icon: Gift, text: "$10K+ VIP Experiences", sub: "Surprise monthly rewards" },
];

export default function FundingStructure() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Your support creates real impact"
          subtitle="Choose a contribution level that works for you. Every amount makes a difference."
        />

        {/* Daily Contributions — NEW */}
        <div className="mt-16">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl font-semibold text-navy-800">
                Daily Contributions
              </h3>
              <span className="bg-teal-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                New
              </span>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {dailyTiers.map((tier, index) => (
              <AnimatedSection key={tier.amount} delay={index * 0.1}>
                <Card
                  hover
                  className={`text-center ${
                    tier.featured
                      ? "border-amber-400 ring-2 ring-amber-200 relative"
                      : ""
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <p className="text-2xl font-bold text-navy-900 mb-2">
                    {tier.label}
                  </p>
                  <p className="text-slate-600">{tier.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Weekly Contributions */}
        <div className="mt-16">
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-navy-800 text-center mb-8">
              Weekly Contributions
            </h3>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {weeklyTiers.map((tier, index) => (
              <AnimatedSection key={tier.amount} delay={index * 0.1}>
                <Card hover className="text-center">
                  <p className="text-2xl font-bold text-navy-900 mb-2">
                    {tier.label}
                  </p>
                  <p className="text-slate-600">{tier.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Monthly Contributions */}
        <div className="mt-16">
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-navy-800 text-center mb-8">
              Monthly Contributions
            </h3>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyTiers.map((tier, index) => (
              <AnimatedSection key={tier.amount} delay={index * 0.1}>
                <Card
                  hover
                  className={`text-center ${
                    tier.featured
                      ? "border-amber-400 ring-2 ring-amber-200 relative"
                      : ""
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">
                    {tier.name}
                  </p>
                  <p className="text-2xl font-bold text-navy-900 mb-3">
                    {tier.label}
                  </p>
                  <p className="text-sm text-slate-600">{tier.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Donate & Win Teaser */}
        <AnimatedSection delay={0.2}>
          <div className="mt-16 bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 md:p-10 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">
                  Donate & Win
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                Every donation enters you for a chance to win
              </h3>
              <p className="text-navy-300 mb-6 max-w-2xl">
                Give from the heart and you could win incredible prizes.
                Recurring donors earn bonus entries every cycle.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {prizes.map((prize) => (
                  <div
                    key={prize.text}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2"
                  >
                    <prize.icon className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-white">
                        {prize.text}
                      </p>
                      <p className="text-[10px] text-navy-400">{prize.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button href="/donate" size="lg">
                Donate Now for a Chance to Win
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-10">
            <Button href="/donate" variant="outline" size="lg">
              View All Contribution Options
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
