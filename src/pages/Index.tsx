import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FounderMessageSection from "@/components/sections/FounderMessageSection";
import WorkSection from "@/components/sections/WorkSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import ImpactSection from "@/components/sections/ImpactSection";
import CollaborationsSection from "@/components/sections/CollaborationsSection";
import TeamSection from "@/components/sections/TeamSection";
import NHCDCSection from "@/components/sections/NHCDCSection";
import GetInvolvedSection from "@/components/sections/GetInvolvedSection";
import ContactSection from "@/components/sections/ContactSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import AnnouncementBanner from "@/components/sections/AnnouncementBanner";
import ExpertRecommendationsSection from "@/components/sections/ExpertRecommendationsSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <AnnouncementBanner />
      <Header />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <FounderMessageSection />
        <WorkSection />
        <ProgramsSection />
        <PublicationsSection />
        <ImpactSection />
        <CollaborationsSection />
        <TeamSection />
        <NHCDCSection />
        <GetInvolvedSection />
        <ExpertRecommendationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
