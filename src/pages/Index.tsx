import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FounderMessageSection from "@/components/sections/FounderMessageSection";
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
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FundingSection from "@/components/sections/FundingSection";
import GetInvolvedSection from "@/components/sections/GetInvolvedSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Introduction */}
        <HeroSection />
        <AboutSection />
        <FounderMessageSection />
        
        {/* Philosophy & Approach */}
        <PhilosophySection />
        <ParentSection />
        
        {/* What We Do */}
        <WorkSection />
        <ProgramsSection />
        <WorkshopsSection />
        <ResearchPhilosophySection />
        
        {/* Impact & Evidence */}
        <ImpactSection />
        <EvidenceHopeSection />
        <WhyNHFSection />
        
        {/* Partners & Team */}
        <CollaborationsSection />
        <TeamSection />
        <MediaSection />
        <TestimonialsSection />
        
        {/* Get Involved */}
        <FundingSection />
        <GetInvolvedSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
