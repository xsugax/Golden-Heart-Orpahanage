import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import LiveDonationTicker from "@/components/home/LiveDonationTicker";
import ChildSpotlight from "@/components/home/ChildSpotlight";
import CostComparison from "@/components/home/CostComparison";
import WhoWeSupport from "@/components/home/WhoWeSupport";
import OurApproach from "@/components/home/OurApproach";
import EmotionalQuotes from "@/components/home/EmotionalQuotes";
import MissionCore from "@/components/home/MissionCore";
import ProgrammaticBranches from "@/components/home/ProgrammaticBranches";
import UrgencyMeter from "@/components/home/UrgencyMeter";
import TransformationStories from "@/components/home/TransformationStories";
import WhySupport from "@/components/home/WhySupport";
import Stories from "@/components/home/Stories";
import FundingStructure from "@/components/home/FundingStructure";
import ImpactBreakdown from "@/components/home/ImpactBreakdown";
import FinalCTA from "@/components/home/FinalCTA";
import StickyDonateCTA from "@/components/home/StickyDonateCTA";

export default function Home() {
  return (
    <>
      {/* Phase 1: Hope & Scale */}
      <Hero />
      <ImpactStats />
      <LiveDonationTicker />

      {/* Phase 2: Personal Connection */}
      <ChildSpotlight />
      <CostComparison />

      {/* Phase 3: Understanding */}
      <WhoWeSupport />
      <OurApproach />

      {/* Phase 4: Deep Empathy */}
      <EmotionalQuotes />

      {/* Phase 5: Organizational Depth */}
      <MissionCore />
      <ProgrammaticBranches />

      {/* Phase 6: Urgency & Proof */}
      <UrgencyMeter />
      <TransformationStories />

      {/* Phase 7: Conviction */}
      <WhySupport />
      <Stories />

      {/* Phase 8: Action */}
      <FundingStructure />
      <ImpactBreakdown />
      <FinalCTA />

      {/* Persistent CTA */}
      <StickyDonateCTA />
    </>
  );
}
