import { Card, CardContent } from "@/components/ui/card";
import { 
  Microscope, 
  FileText, 
  Lightbulb, 
  Target,
  CheckCircle2,
  XCircle,
  TrendingUp,
  BookOpen,
  Sparkles
} from "lucide-react";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/language";

const ResearchPhilosophySection = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const researchDomains = [
    ...(language === "hi" ? ["व्यवहार", "संचार", "सामाजिक", "सहभागिता", "कार्यात्मकता"] : ["Behaviour", "Communication", "Social", "Participation", "Functionality"])
  ];

  const outcomes = [
    { icon: Target, label: language === "hi" ? "दृश्यमान परिवर्तन" : "Observable change" },
    { icon: TrendingUp, label: language === "hi" ? "मापनीय प्रगति" : "Measurable progress" },
    { icon: Lightbulb, label: language === "hi" ? "सार्थक परिणाम" : "Meaningful outcomes" }
  ];

  const currentResearch = [
    {
      title: language === "hi" ? "रैंडमाइज़्ड कंट्रोल्ड ट्रायल्स" : "Randomized Controlled Trials",
      description: language === "hi" ? "डिज़ाइनिंग, व्यवहार्यता स्कोपिंग और नैतिक विचार" : "Designing and Feasibility Scoping, along with Ethical Considerations"
    },
    {
      title: language === "hi" ? "नैदानिक प्रोफाइलिंग और परिणाम ट्रैकिंग" : "Clinical Profiling & Outcome Tracking",
      description: language === "hi" ? "समग्र विकासात्मक आकलन" : "Comprehensive developmental assessments"
    },
    {
      title: language === "hi" ? "कार्यान्वयन अनुसंधान" : "Implementation Research",
      description: language === "hi" ? "सरकारी प्रणालियों और DEICs के भीतर" : "Within government systems and DEICs"
    },
    {
      title: language === "hi" ? "साक्ष्य निर्माण" : "Evidence Generation",
      description: language === "hi" ? "नीति और कार्यक्रम डिज़ाइन को सूचित करने के लिए" : "To inform policy and program design"
    }
  ];

  const iterativeLearning = [
    { icon: CheckCircle2, text: language === "hi" ? "प्रभावी हस्तक्षेपों की पहचान" : "Identify effective interventions", color: "from-green-400 to-emerald-500" },
    { icon: TrendingUp, text: language === "hi" ? "आंशिक प्रभाव दिखाने वाले दृष्टिकोणों को परिष्कृत करना" : "Refine approaches that show partial impact", color: "from-amber-400 to-orange-500" },
    { icon: XCircle, text: language === "hi" ? "ऐसी प्रथाएँ बंद करना जो बच्चों को सार्थक लाभ नहीं देतीं" : "Discontinue practices that do not meaningfully benefit children", color: "from-red-400 to-rose-500" }
  ];

  return (
    <section ref={ref} id="research-philosophy" className="py-20 lg:py-28 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-sm uppercase tracking-wider">
              {language === "hi" ? "अनुसंधान और प्रकाशन" : "Research & Publications"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
            {language === "hi" ? "सही प्रश्न पूछना: \"क्या काम करता है?\"" : "Asking the Right Question: \"What Works?\""}
          </h2>
          <p className="text-muted-foreground text-lg">
            {language === "hi" ? "एनएचएफ में अनुसंधान देखभाल-आधारित जिज्ञासा से शुरू होता है। सभी पहलों में हमारा केंद्रीय प्रश्न सरल लेकिन शक्तिशाली है: वास्तविक परिस्थितियों और वास्तविक परिवारों के साथ बच्चों के लिए क्या काम करता है?" : "At NHF, research begins with curiosity grounded in care. The central question we ask across all initiatives is simple but powerful: What works for children, in real settings, with real families?"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Research Domains */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                <Microscope className="w-5 h-5 text-white" />
              </div>
              {language === "hi" ? "अनुसंधान क्षेत्र" : "Research Domains"}
            </h3>
            <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_50%)]" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500" />
              
              <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {researchDomains.map((domain, index) => (
                  <div 
                    key={index}
                    style={getStaggerDelay(index, 80)}
                    className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10 shadow-lg hover:border-purple-400/50 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  >
                    <span className="font-medium text-white">{domain}</span>
                  </div>
                ))}
              </div>
              
              <div className="relative flex items-center justify-center gap-2 mb-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="text-sm text-white/60">{language === "hi" ? "इससे आगे बढ़ता है" : "This leads to"}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>

              <div className="relative grid sm:grid-cols-3 gap-4">
                {outcomes.map((outcome, index) => (
                  <div 
                    key={index}
                    style={getStaggerDelay(index + 5, 80)}
                    className={`flex items-center gap-2 justify-center p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-400/30 hover:border-purple-400/60 hover:scale-105 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  >
                    <outcome.icon className="w-5 h-5 text-purple-300" />
                    <span className="text-sm font-medium text-white">{outcome.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Current Research */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              {language === "hi" ? "वर्तमान और जारी कार्य" : "Current & Ongoing Work"}
            </h3>
            <div className="space-y-4">
              {currentResearch.map((research, index) => (
                <Card 
                  key={index}
                  style={getStaggerDelay(index, 100)}
                  className={`group border-border/50 hover:border-pink-400/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  <CardContent className="p-5 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-rose-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                    <h4 className="font-semibold mb-1 group-hover:text-pink-600 transition-colors">{research.title}</h4>
                    <p className="text-sm text-muted-foreground">{research.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className={`text-sm text-muted-foreground mt-4 italic transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {language === "hi" ? "अनुसंधान परिणामों में रिपोर्ट, टूलकिट और प्रकाशन शामिल हैं जो डेटा को क्रियाशील अंतर्दृष्टि में बदलते हैं।" : "Research outputs include reports, toolkits, and publications that translate data into actionable insights."}
            </p>
          </div>
        </div>

        {/* Iterative Learning */}
        <div className={`relative bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 rounded-3xl p-8 lg:p-12 overflow-hidden transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.2),transparent_70%)]" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500" />
          
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                {language === "hi" ? "जिज्ञासा और जवाबदेही की संस्कृति" : "A Culture of Inquiry & Accountability"}
              </h3>
              <p className="text-white/70">
                {language === "hi" ? "आवृत्त सीख और चिंतनशील अभ्यास को बढ़ावा देकर, एनएचएफ क्लिनिशियनों, शोधकर्ताओं और प्रणालियों को परिणामों का ईमानदारी से आकलन करने में सक्षम बनाता है।" : "By encouraging iterative learning and reflective practice, NHF enables clinicians, researchers, and systems to examine outcomes honestly."}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {iterativeLearning.map((item, index) => (
                <div 
                  key={index}
                  style={getStaggerDelay(index, 100)}
                  className={`group flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-400/50 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-white/90 text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            <p className={`text-center text-white/60 mt-8 text-sm transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {language === "hi" ? "यह जिज्ञासु संस्कृति जवाबदेही, सीख और सतत सुधार का समर्थन करती है।" : "This culture of inquiry supports accountability, learning, and continuous improvement."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPhilosophySection;
