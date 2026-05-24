import { Card, CardContent } from "@/components/ui/card";
import { Handshake, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/language";

const CollaborationsSection = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  const collaborations = [
    { name: "UNICEF India", type: language === "hi" ? "अंतरराष्ट्रीय संगठन" : "International Organization", highlight: true },
    { name: language === "hi" ? "सरकारी स्वास्थ्य प्रणालियाँ" : "Government Health Systems", type: language === "hi" ? "सार्वजनिक स्वास्थ्य" : "Public Health" },
    { name: language === "hi" ? "जिला प्रारंभिक हस्तक्षेप केंद्र" : "District Early Intervention Centres", type: language === "hi" ? "सार्वजनिक स्वास्थ्य" : "Public Health" },
    { name: language === "hi" ? "शैक्षणिक और अनुसंधान संस्थान" : "Academic & Research Institutions", type: language === "hi" ? "अनुसंधान साझेदार" : "Research Partners" },
    { name: language === "hi" ? "नैदानिक और प्रशिक्षण नेटवर्क" : "Clinical & Training Networks", type: language === "hi" ? "स्वास्थ्य साझेदार" : "Healthcare Partners" },
    { name: language === "hi" ? "नागरिक समाज संगठन" : "Civil Society Organizations", type: language === "hi" ? "NGO साझेदार" : "NGO Partners" }
  ];
  const scrollingCollaborations = [...collaborations, ...collaborations];

  const deicColumns = language === "hi"
    ? ["पैरामेडिकल स्टाफ का प्रशिक्षण", "DEIC अवसंरचना को मजबूत करना", "राष्ट्रीय स्तर पर दोहराने योग्य मॉडल"]
    : ["Training of paramedical staff at DEICs", "Strengthening DEIC infrastructure", "Model for national replication"];

  const partnershipValues = language === "hi"
    ? ["साक्ष्य-आधारित दृष्टिकोण", "नैतिक मानक", "दीर्घकालिक प्रणालीगत प्रभाव", "पारदर्शिता और जवाबदेही"]
    : ["Evidence-based approach", "Ethical standards", "Long-term systems impact", "Transparency & accountability"];

  return (
    <section id="collaborations" ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-teal-50/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-teal-50/40 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        {/* From Our Work Section */}
        <div className={`text-center max-w-3xl mx-auto mb-20 lg:mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            {language === "hi" ? "हमारे कार्य से" : "From Our Work"}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight text-slate-900">
            {language === "hi" ? "परिवर्तन कैसा दिखता है" : "What Change Looks Like"}
          </h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            {language === "hi" ? "प्रणाली के भीतर काम करके उसे मजबूत करना" : "Working within the System to strengthen it"}
          </p>
        </div>

        {/* Government of Maharashtra X UNICEF Section */}
        <div className={`relative bg-slate-900 rounded-2xl p-10 lg:p-12 mb-16 text-white overflow-hidden transition-all duration-700 delay-200 shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.12),transparent_50%)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
          
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-teal-300 font-bold">{language === "hi" ? "मुख्य साझेदारी" : "Key Partnership"}</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold">{language === "hi" ? "महाराष्ट्र सरकार × यूनिसेफ" : "Government of Maharashtra × UNICEF"}</h3>
              </div>
            </div>
            
            <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-4xl">
              {language === "hi"
                ? "एनएचएफ जिला प्रारंभिक हस्तक्षेप केंद्रों (DEICs) में पैरामेडिकल स्टाफ के प्रशिक्षण का एक प्रमुख कार्यान्वयन साझेदार है, जो न्यूरोविकासीय जरूरतों वाले बच्चों के लिए भारत की सार्वजनिक स्वास्थ्य संरचना को मजबूत कर रहा है। पुणे के जिला अस्पताल औंध स्थित DEIC में हमारा संयुक्त कार्यक्रम देशभर में दोहराए जाने के लिए तैयार एक मॉडल है।"
                : "NHF is a key implementing partner in training multidisciplinary developmental care professionals at District Early Intervention Centres (DEICs), strengthening India's public health infrastructure for children with neurodevelopmental needs."}
            </p>

            {/* 3 Columns for Strengthening DEICs */}
            <div className="grid md:grid-cols-3 gap-4">
              {deicColumns.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-white/8 border border-white/15">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/95 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnerships Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            {language === "hi" ? "विश्वसनीय साझेदारियाँ" : "Trusted Partnerships"}
          </h3>
          <p className="text-gray-600">
            {language === "hi"
              ? "हम प्रणालीगत परिवर्तन लाने के लिए सरकारी निकायों, अंतरराष्ट्रीय संगठनों और नागरिक समाज के साथ मिलकर काम करते हैं।"
              : "We work alongside government bodies, international organizations, and civil society organizations to strengthen systems and drive sustainable change."}
          </p>
        </div>

        <div className="mb-12 overflow-hidden">
          <div className="flex gap-6 min-w-max partnership-marquee-track">
          {scrollingCollaborations.map((collab, index) => (
            <Card 
              key={`${collab.name}-${index}`}
              className={`w-[260px] sm:w-[280px] flex-shrink-0 bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center group overflow-hidden ${
                collab.highlight ? 'bg-gradient-to-br from-teal-50 to-cyan-50' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <CardContent className="p-6 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <h3 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-teal-600 transition-colors">
                  {collab.name}
                </h3>
                <p className="text-sm text-gray-500">{collab.type}</p>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>

        {/* Partnership Values */}
        <div className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-bold text-center mb-8 text-gray-800">{language === "hi" ? "हम ऐसी साझेदारियाँ चाहते हैं जो इन मूल्यों को महत्व दें" : "We Seek Partnerships That Value"}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnershipValues.map((value, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .partnership-marquee-track {
          animation: partnershipMarquee 32s linear infinite;
        }

        .partnership-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes partnershipMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default CollaborationsSection;
