import { Card, CardContent } from "@/components/ui/card";
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

  const teamSpecialties = [
    { icon: Stethoscope, title: language === "hi" ? "विकासात्मक बाल रोग विशेषज्ञ" : "Developmental Pediatricians", gradient: "from-[#4BC0DB] to-[#F4C94A]" },
    { icon: Users, title: language === "hi" ? "फिजियोथेरेपिस्ट" : "Physiotherapists", gradient: "from-[#A9C63B] to-[#4BC0DB]" },
    { icon: Brain, title: language === "hi" ? "ऑक्यूपेशनल थेरेपिस्ट" : "Occupational Therapists", gradient: "from-[#EC6F7B] to-[#E88967]" },
    { icon: Heart, title: language === "hi" ? "मनोवैज्ञानिक" : "Psychologists", gradient: "from-[#EC6F7B] to-[#4BC0DB]" },
    { icon: GraduationCap, title: language === "hi" ? "विशेष शिक्षाविद" : "Remedial Educators", gradient: "from-[#4BC0DB] to-[#A9C63B]" },
  ];

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
          
          <div className="relative">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#4BC0DB] to-[#EC6F7B] flex items-center justify-center shadow-2xl">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            
            <div className="text-6xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-[#4BC0DB] via-[#EC6F7B] to-[#F4C94A] bg-clip-text text-transparent">
              120+
            </div>
            <p className="text-xl text-white/80 mb-8">{language === "hi" ? "बहु-विषयी टीम सदस्य" : "Interdisciplinary Team Members"}</p>
            
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              {language === "hi" ? "NHCDC, NHF की शोध और प्रशिक्षण गतिविधियों के लिए नैदानिक आधार के रूप में कार्य करता है, और वास्तविक दुनिया की अंतर्दृष्टि प्रदान करता है जो साक्ष्य-आधारित व्यवहार और विस्तार योग्य हस्तक्षेपों को दिशा देती है।" : "NHCDC serves as the clinical foundation for NHF's research and training activities, providing real-world insights that inform evidence-based practices and scalable interventions."}
            </p>
          </div>
        </div>

        {/* Team Specialties */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {teamSpecialties.map((specialty, index) => (
            <Card 
              key={index}
              className={`group bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={getStaggerDelay(index + 3, 80)}
            >
              <CardContent className="p-5 text-center relative">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${specialty.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${specialty.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <specialty.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#4BC0DB] transition-colors leading-tight">
                  {specialty.title}
                </h3>
              </CardContent>
            </Card>
          ))}
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
    </section>
  );
};

export default NHCDCSection;
