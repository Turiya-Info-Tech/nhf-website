import { Heart, Shield, Target, Sparkles, Microscope, HandHeart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/language";

const PhilosophySection = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const aimItems = language === "hi"
    ? [
        "दक्षिण एशियाई संदर्भों में बाल न्यूरोविकास हेतु नैदानिक अंतर्दृष्टि, अनुसंधान और प्रणाली-स्तरीय कार्रवाई के बीच पुल बनाना",
        "जवाबदेही और मापनीय परिणामों के माध्यम से संस्थागत विश्वसनीयता विकसित करना",
        "अनुसंधान-प्रेरित क्षमता निर्माण के लिए रणनीतिक भागीदारी आकर्षित करना",
      ]
    : [
        "Bridge clinical insight, research, and systems-level action for child neurodevelopment in South Asian contexts",
        "Build institutional credibility through accountability and measurable outcomes",
        "Attract strategic partnerships for research-driven capacity building",
      ];

  const purposeItems = language === "hi"
    ? [
        "बाल स्वास्थ्य, कल्याण और सुरक्षा के लिए सार्वजनिक प्रणालियों को मजबूत करना",
        "न्यूरोविकास और दिव्यांगता समावेशन के लिए जागरूकता और सामूहिक कार्रवाई बढ़ाना",
        "साक्ष्य-आधारित वकालत के माध्यम से नीति और व्यवहार को प्रभावित करना",
        "रणनीतिक वित्तपोषण से मिशन-आवश्यक कार्यक्रमों को टिकाऊ बनाना",
        "परिवारों को अपने बच्चों के लिए परिवर्तन का प्राथमिक माध्यम बनाना",
        "सार्वजनिक स्वास्थ्य चुनौतियों का समाधान करने हेतु कार्यबल क्षमता बढ़ाना",
      ]
    : [
        "Strengthen public systems for child health, wellbeing, and safety",
        "Build awareness and collective action for neurodevelopment and disability inclusion",
        "Influence policy and practice through evidence-informed advocacy",
        "Sustain mission-critical programs through strategic funding",
        "Empower families as primary agents of change for their children",
        "Build workforce capacity to address public-health challenges",
      ];

  return (
    <section id="philosophy" ref={ref} className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#EC6F7B]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-[#4BC0DB]/20 to-transparent rounded-full blur-3xl" />

      <div className="container relative">
        <div className={`text-center max-w-4xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-[#EC6F7B] font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            {language === "hi" ? "हमारा उद्देश्य और प्रयोजन" : "Our Aim & Purpose"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight text-gray-800">
            {language === "hi" ? "अंतर्दृष्टि और कार्रवाई के बीच की दूरी कम करना" : "Closing the Gap Between Insight & Action"}
          </h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 items-center transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#EC6F7B] flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#EC6F7B] to-[#E88967] flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              {language === "hi" ? "हमारा उद्देश्य" : "Our Aim"}
            </h3>
            <ul className="space-y-3 text-gray-600">
              {aimItems.map((item) => (
                <li key={item} className="flex items-start gap-3 group">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#EC6F7B] to-[#E88967] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#EC6F7B]/20">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
                alt="Medical research and clinical systems"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#EC6F7B]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg cursor-pointer hover:bg-blue-50 transition-colors" onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}>
                <Microscope className="w-5 h-5 text-[#EC6F7B]" />
                <span className="text-sm font-semibold text-slate-700">{language === "hi" ? "साक्ष्य-आधारित अनुसंधान" : "Evidence-Based Research"}</span>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-[#4BC0DB] to-[#EC6F7B] rounded-2xl -z-10 opacity-60" />
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-[#F4C94A] to-[#4BC0DB] rounded-xl -z-10 opacity-60" />
          </div>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20 items-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative group order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=450&fit=crop"
                alt="Community collaboration and family empowerment"
                className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                <HandHeart className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-slate-700">{language === "hi" ? "समुदाय सशक्तिकरण" : "Community Empowerment"}</span>
              </div>
            </div>
            <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-br from-blue-400 to-pink-600 rounded-2xl -z-10 opacity-60" />
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-pink-400 to-blue-600 rounded-xl -z-10 opacity-60" />
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:-translate-y-1 transition-transform duration-300 order-1 lg:order-2">
            <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-pink-600 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              {language === "hi" ? "हमारा प्रयोजन" : "Our Purpose"}
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              {purposeItems.map((item) => (
                <li key={item} className="flex items-start gap-3 group">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-500 to-pink-600 mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              {language === "hi" ? "मुख्य सिद्धांत" : "Core Principle"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-6 text-gray-800">
              {language === "hi" ? "बच्चा एक सम्पूर्ण इकाई है" : "The Child is a Whole"}
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {language === "hi"
                ? "जब बच्चों को अपनी क्षमताओं, चुनौतियों और भावनाओं को समझने में सहायता मिलती है और उन्हें निरंतर मानवीय जुड़ाव मिलता है, तो उनका विकास अधिक स्वाभाविक रूप से सभी क्षेत्रों में आगे बढ़ता है।"
                : "When children understand their abilities, challenges, and emotions - and receive consistent human connection - they develop across all areas more naturally."}
            </p>
            <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-6 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,146,60,0.1),transparent_50%)]" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500" />
              <div className="relative flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-pink-500 flex items-center justify-center shadow-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg text-white">{language === "hi" ? "विश्वास और स्वायत्तता" : "Trust & Autonomy"}</h3>
              </div>
              <p className="text-white/70 leading-relaxed relative">
                {language === "hi"
                  ? "सुरक्षित विश्वास-निर्माण बच्चों को स्वतंत्रता, आत्म-नियमन और निर्णय लेने की क्षमता विकसित करने में मदद करता है। मजबूत देखभालकर्ता चुनौतियों से उबरने की नींव बनते हैं।"
                  : "Safe trust formation helps children develop independence, self-regulation, and decision-making. Strong caregivers become the foundation for overcoming challenges."}
              </p>
            </div>
          </div>

          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative bg-gradient-to-br from-[#4BC0DB] via-[#EC6F7B] to-[#F4C94A] rounded-3xl p-8 lg:p-10 text-white overflow-hidden shadow-2xl group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent_50%)]" />
              <h3 className="relative text-2xl font-serif font-bold mb-4">{language === "hi" ? "बच्चा-प्रथम दृष्टिकोण" : "Child-First Approach"}</h3>
              <p className="relative text-lg opacity-90 mb-6 leading-relaxed">
                {language === "hi"
                  ? "जब प्रणालियाँ बच्चों की विकासात्मक जरूरतों का जवाब समझ, संरचना और सम्मान के साथ देती हैं, तब बच्चे बेहतर विकसित होते हैं।"
                  : "Children thrive when systems respond to their developmental needs with understanding, structure, and respect."}
              </p>
              <div className="relative flex items-center gap-2 text-sm opacity-80">
                <Heart className="w-4 h-4 fill-current animate-pulse" />
                <span>{language === "hi" ? "हर बच्चा समझे जाने का हकदार है" : "Every child deserves to be understood"}</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#A9C63B]/30 to-[#4BC0DB]/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
