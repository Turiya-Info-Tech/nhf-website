import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FounderMessageSection from "@/components/sections/FounderMessageSection";
import DirectorMessageSection from "@/components/sections/DirectorMessageSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ParentSection from "@/components/sections/ParentSection";
import WorkSection from "@/components/sections/WorkSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import WorkshopsSection from "@/components/sections/WorkshopsSection";
import ResearchPhilosophySection from "@/components/sections/ResearchPhilosophySection";
import ImpactSection from "@/components/sections/ImpactSection";
import EvidenceHopeSection from "@/components/sections/EvidenceHopeSection";
import WhyNHFSection from "@/components/sections/WhyNHFSection";
import CollaborationsSection from "@/components/sections/CollaborationsSection";
import TeamSection from "@/components/sections/TeamSection";
import MediaSection from "@/components/sections/MediaSection";
import FundingSection from "@/components/sections/FundingSection";
import GetInvolvedSection from "@/components/sections/GetInvolvedSection";
import ContactSection from "@/components/sections/ContactSection";
import AwardsSection from "@/components/sections/AwardsSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AnnouncementBanner from "@/components/sections/AnnouncementBanner";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <AnnouncementBanner />
      <Header />
      <main className="w-full">
        {/* Introduction */}
        <HeroSection />
        <AboutSection />
        <FounderMessageSection />
        {/* DirectorMessageSection removed */}
        
        {/* Philosophy & Approach */}
        <PhilosophySection />
        {/* ParentSection moved to blog - "Parents as Partners in the Developmental Journey" */}
        
        {/* What We Do */}
        <WorkSection />
        <ProgramsSection />
        <WorkshopsSection />
        <ResearchPhilosophySection />
        <PublicationsSection />
        
        {/* Impact & Evidence */}
        <ImpactSection />
        <EvidenceHopeSection />
        {/* AwardsSection hidden for now - pending verified award data */}
        {/* <AwardsSection /> */}
        <WhyNHFSection />
        
        {/* Partners & Team */}
        <CollaborationsSection />
        <TeamSection />
        <MediaSection />
        
        {/* Get Involved */}
        <FundingSection />
        <GetInvolvedSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
