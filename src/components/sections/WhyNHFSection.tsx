import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Building2, 
  TrendingUp, 
  Shield, 
  Heart,
  Calendar,
  Sparkles
} from "lucide-react";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/language";

const WhyNHFSection = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  const reasons = [
    {
      icon: Calendar,
      title: language === "hi" ? "2012 से स्थापित" : "Established in 2012",
      description: language === "hi" ? "12+ वर्षों की सतत नैदानिक और अनुसंधान विश्वसनीयता" : "Sustained clinical and research credibility over 12+ years",
      gradient: "from-[#EC6F7B] to-[#4BC0DB]"
    },
    {
      icon: TrendingUp,
      title: language === "hi" ? "परिणाम-केंद्रित कार्यप्रणालियाँ" : "Outcome-Focused Workflows",
      description: language === "hi" ? "वास्तविक परिस्थितियों के अनुरूप नवीन, परिणाम-केंद्रित कार्यप्रवाह" : "Renewed, outcome-focused workflows aligned with real-world settings",
      gradient: "from-[#4BC0DB] to-[#A9C63B]"
    },
    {
      icon: Building2,
      title: language === "hi" ? "सक्रिय नैदानिक एकीकरण" : "Active Clinical Integration",
      description: language === "hi" ? "एक सक्रिय बाल न्यूरोविकास केंद्र (NHCDC) के भीतर एकीकृत" : "Embedded within an active pediatric neurodevelopment centre (NHCDC)",
      gradient: "from-blue-500 to-pink-600"
    },
    {
      icon: CheckCircle2,
      title: language === "hi" ? "चिंतनशील कार्य-संस्कृति" : "Reflective Practice Culture",
      description: language === "hi" ? "टीम सदस्यों के बीच चिंतनशील अभ्यास और जिज्ञासा की मजबूत संस्कृति" : "Strong culture of reflective practice and inquiry among team members",
      gradient: "from-[#A9C63B] to-[#4BC0DB]"
    },
    {
      icon: Shield,
      title: language === "hi" ? "नैतिक, बच्चा-प्रथम दृष्टिकोण" : "Ethical, Child-First Approach",
      description: language === "hi" ? "अनुसंधान और डेटा प्रबंधन के लिए नैतिक, बच्चा-प्रथम दृष्टिकोण" : "Ethical, child-first approach to research and data handling",
      gradient: "from-[#EC6F7B] to-[#E88967]"
    },
    {
      icon: Heart,
      title: language === "hi" ? "मापनीय प्रभाव पर ध्यान" : "Measurable Impact Focus",
      description: language === "hi" ? "जटिल परिस्थितियों में भी मापनीय प्रभाव पर स्पष्ट फोकस" : "Clear focus on measurable impact, even in complex environments",
      gradient: "from-[#F4C94A] to-[#4BC0DB]"
    }
  ];

  const capabilities = [
    ...(language === "hi"
      ? [
          "नैदानिक साक्ष्य और मैदानी वास्तविकताओं पर आधारित",
          "सरकारी प्रणालियों के साथ कार्य करने की सिद्ध क्षमता",
          "डेटा से कार्यान्वयन तक स्पष्ट मार्ग",
          "बाल-केंद्रित अनुसंधान के लिए मजबूत नैतिक ढाँचा",
          "न्यू होराइजन्स चाइल्ड डेवलपमेंट सेंटर (NHCDC) का सहयोग",
        ]
      : [
          "Grounded in clinical evidence and field realities",
          "Proven ability to engage with government systems",
          "Clear pathways from data to implementation",
          "Strong ethical framework for child-focused research",
          "Backed by New Horizons Child Development Centre (NHCDC)",
        ])
  ];

  return (
    <section id="why-nhf" ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-[#EC6F7B]/20 to-transparent rounded-full blur-3xl" />      <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-[#EC6F7B] font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            {language === "hi" ? "हमारे साथ साझेदारी क्यों करें" : "Why Partner With Us"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight text-gray-800">
            {language === "hi" ? "एनएचएफ क्यों?" : "Why NHF?"}
          </h2>
          <p className="text-gray-600 text-lg">
            {language === "hi"
              ? "एनएचएफ राष्ट्रीय बाल स्वास्थ्य और विकास प्राथमिकताओं के अनुरूप दीर्घकालिक CSR साझेदारियाँ, दाता सहयोग और संस्थागत अनुदान तलाश रहा है।"
              : "NHF is seeking long-term CSR partnerships, donor support, and institutional grants aligned with national child health and development priorities."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className={`group bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={getStaggerDelay(index + 2, 100)}
            >
              <CardContent className="p-6 relative">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#EC6F7B] transition-colors">{reason.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.description.includes("NHCDC") ? (
                    <>
                      {language === "hi" ? "एक सक्रिय बाल न्यूरोविकास केंद्र (" : "Embedded within an active pediatric neurodevelopment centre ("}<a href="https://www.newhorizonscdc.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline whitespace-nowrap">NHCDC</a>)
                    </>
                  ) : reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities */}
        <div className={`relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-8 lg:p-10 overflow-hidden transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),transparent_50%)]" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EC6F7B] via-[#4BC0DB] to-[#F4C94A]" />
          <h3 className="text-xl font-bold text-center mb-8 text-white relative">{language === "hi" ? "हमारी क्षमताएँ" : "Our Capabilities"}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#EC6F7B] to-[#4BC0DB] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                </div>
                {capability.includes("NHCDC") ? (
                  <span className="text-sm text-white/80 leading-relaxed">
                    {language === "hi" ? "समर्थित द्वारा " : "Backed by "}
                    <a href="https://www.newhorizonscdc.in/" target="_blank" rel="noopener noreferrer" className="text-[#4BC0DB] hover:underline whitespace-nowrap">New Horizons Child Development Centre (<span className="whitespace-nowrap">NHCDC</span>)</a>
                  </span>
                ) : (
                  <span className="text-sm text-white/80 leading-relaxed">{capability}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNHFSection;
