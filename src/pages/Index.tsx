import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import ImpactSection from "@/components/sections/ImpactSection";
import CollaborationsSection from "@/components/sections/CollaborationsSection";
import TeamSection from "@/components/sections/TeamSection";
import FundingSection from "@/components/sections/FundingSection";
import GetInvolvedSection from "@/components/sections/GetInvolvedSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ProgramsSection />
        <ImpactSection />
        <CollaborationsSection />
        <TeamSection />
        <FundingSection />
        <GetInvolvedSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
