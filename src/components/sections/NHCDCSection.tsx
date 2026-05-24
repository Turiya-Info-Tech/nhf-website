import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  Stethoscope, 
  Brain, 
  Heart,
  GraduationCap,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/language";

const NHCDCSection = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const nhcdcHeadingClass = language === "hi"
    ? "text-3xl md:text-5xl font-serif font-bold mt-4 mb-4 leading-[1.28] tracking-normal text-slate-900"
    : "text-3xl md:text-5xl font-serif font-bold mt-4 mb-4 leading-[1.12] tracking-[-0.02em] text-slate-900";

  return (
    <section id="nhcdc" ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#4BC0DB]/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#F4C94A]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-[#A9C63B]/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-[#4BC0DB] font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            {language === "hi" ? "नैदानिक साझेदार" : "Clinical Partner"}
          </span>
          <h2 className={`${nhcdcHeadingClass} max-w-4xl mx-auto`}>
            {language === "hi" ? "न्यू होराइजन्स" : "New Horizons"}{" "}
            <span className="text-gradient">
              {language === "hi" ? "चाइल्ड डेवलपमेंट सेंटर" : "Child Development Centre"}
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            {language === "hi" ? "जहाँ अनुसंधान व्यवहार से मिलता है..." : "Where research meets practice..."}
          </p>
        </div>

        {/* Main Stats Card */}
        <div className={`bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 mb-12 text-center relative overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.15),transparent_50%)]" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4BC0DB] via-[#EC6F7B] to-[#A9C63B]" />

          {/* Floating highlights */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="hidden md:flex absolute top-6 left-6 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white/85 text-sm font-semibold backdrop-blur-sm"
              style={{ animation: "nhfFloatOne 6s ease-in-out infinite" }}
            >
              <Stethoscope className="w-5 h-5 mr-2.5 text-[#4BC0DB]" />
              Developmental Pediatricians
            </div>
            <div
              className="hidden md:flex absolute top-8 right-6 px-5 py-3 rounded-full bg-teal-400/15 border border-teal-300/30 text-teal-100 text-sm font-semibold backdrop-blur-sm"
              style={{ animation: "nhfFloatTwo 7s ease-in-out infinite" }}
            >
              <Users className="w-5 h-5 mr-2.5 text-[#A9C63B]" />
              Physiotherapists
            </div>
            <div
              className="hidden lg:flex absolute bottom-8 left-8 px-5 py-3 rounded-full bg-pink-400/15 border border-pink-300/30 text-pink-100 text-sm font-semibold backdrop-blur-sm"
              style={{ animation: "nhfFloatThree 8s ease-in-out infinite" }}
            >
              <Brain className="w-5 h-5 mr-2.5 text-[#EC6F7B]" />
              Occupational Therapists
            </div>
            <div
              className="hidden lg:flex absolute bottom-10 right-8 px-5 py-3 rounded-full bg-amber-300/15 border border-amber-200/30 text-amber-100 text-sm font-semibold backdrop-blur-sm"
              style={{ animation: "nhfFloatFour 7.5s ease-in-out infinite" }}
            >
              <Heart className="w-5 h-5 mr-2.5 text-[#F4C94A]" />
              Psychologists
            </div>
            <div
              className="hidden xl:flex absolute top-1/2 right-10 -translate-y-1/2 px-5 py-3 rounded-full bg-cyan-400/15 border border-cyan-300/30 text-cyan-100 text-sm font-semibold backdrop-blur-sm"
              style={{ animation: "nhfFloatFive 8.5s ease-in-out infinite" }}
            >
              <GraduationCap className="w-5 h-5 mr-2.5 text-[#4BC0DB]" />
              Remedial Educators
            </div>
          </div>
          
          <div className="relative">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#4BC0DB] to-[#EC6F7B] flex items-center justify-center shadow-2xl">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            
            <div className="text-6xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-[#4BC0DB] via-[#EC6F7B] to-[#F4C94A] bg-clip-text text-transparent">
              120+
            </div>
            <p className="text-xl text-white/80 mb-8">{language === "hi" ? "बहु-विषयी टीम सदस्य" : "Interdisciplinary Team Members"}</p>
            
            <div className="text-white/60 max-w-2xl mx-auto leading-relaxed space-y-4">
              {language === "hi" ? (
                <p>NHCDC, NHF की शोध और प्रशिक्षण गतिविधियों के लिए नैदानिक आधार के रूप में कार्य करता है, और वास्तविक दुनिया की अंतर्दृष्टि प्रदान करता है जो साक्ष्य-आधारित व्यवहार और विस्तार योग्य हस्तक्षेपों को दिशा देती है।</p>
              ) : (
                <>
                  <p>NHCDC serves as the clinical foundation for NHF's research and training activities, ensuring that evidence-based practices and scalable interventions are informed by real-world experience.</p>
                  <p>Our multidisciplinary team works across clinical, community, and family settings to support children and strengthen developmental outcomes.</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            size="lg"
            className="group bg-gradient-to-r from-[#4BC0DB] via-[#EC6F7B] to-[#F4C94A] hover:from-[#4BC0DB] hover:via-[#EC6F7B] hover:to-[#A9C63B] text-white shadow-lg shadow-[#4BC0DB]/25 hover:shadow-[#4BC0DB]/40 transition-all duration-300"
            onClick={() => window.open('https://www.newhorizonscdc.in/', '_blank')}
          >
            {language === "hi" ? "NHCDC वेबसाइट देखें" : "Visit NHCDC Website"}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes nhfFloatOne {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -8px); }
        }
        @keyframes nhfFloatTwo {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-12px, 10px); }
        }
        @keyframes nhfFloatThree {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(12px, -10px); }
        }
        @keyframes nhfFloatFour {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, -12px); }
        }
        @keyframes nhfFloatFive {
          0%, 100% { transform: translate(0, -50%); }
          50% { transform: translate(10px, calc(-50% - 10px)); }
        }
      `}</style>
    </section>
  );
};

export default NHCDCSection;
