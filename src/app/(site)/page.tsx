import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import WhoWeSupport from "@/components/home/WhoWeSupport";
import OurApproach from "@/components/home/OurApproach";
import MissionCore from "@/components/home/MissionCore";
import ProgrammaticBranches from "@/components/home/ProgrammaticBranches";
import WhySupport from "@/components/home/WhySupport";
import FundingStructure from "@/components/home/FundingStructure";
import ImpactBreakdown from "@/components/home/ImpactBreakdown";
import Stories from "@/components/home/Stories";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <WhoWeSupport />
      <OurApproach />
      <MissionCore />
      <ProgrammaticBranches />
      <WhySupport />
      <Stories />
      <FundingStructure />
      <ImpactBreakdown />
      <FinalCTA />
    </>
  );
}
