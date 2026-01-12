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

const ResearchPhilosophySection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const researchDomains = [
    "Behaviour",
    "Communication", 
    "Social",
    "Participation",
    "Functionality"
  ];

  const outcomes = [
    { icon: Target, label: "Observable change" },
    { icon: TrendingUp, label: "Measurable progress" },
    { icon: Lightbulb, label: "Meaningful outcomes" }
  ];

  const currentResearch = [
    {
      title: "Randomized Controlled Trials",
      description: "E.g., L-Carnosine in Autism Spectrum Disorder"
    },
    {
      title: "Clinical Profiling & Outcome Tracking",
      description: "Comprehensive developmental assessments"
    },
    {
      title: "Implementation Research",
      description: "Within government systems and DEICs"
    },
    {
      title: "Evidence Generation",
      description: "To inform policy and program design"
    }
  ];

  const iterativeLearning = [
    { icon: CheckCircle2, text: "Identify effective interventions", color: "from-green-400 to-emerald-500" },
    { icon: TrendingUp, text: "Refine approaches that show partial impact", color: "from-amber-400 to-orange-500" },
    { icon: XCircle, text: "Discontinue practices that do not meaningfully benefit children", color: "from-red-400 to-rose-500" }
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
              Research & Publications
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
            Asking the Right Question:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">"What Works?"</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            At NHF, research begins with curiosity grounded in care. The central question 
            we ask across all initiatives is simple but powerful: What works for children, 
            in real settings, with real families?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Research Domains */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                <Microscope className="w-5 h-5 text-white" />
              </div>
              Research Domains
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
                <span className="text-sm text-white/60">This leads to</span>
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
              Current & Ongoing Work
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
              Research outputs include reports, toolkits, and publications that translate 
              data into actionable insights.
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
                A Culture of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Inquiry & Accountability</span>
              </h3>
              <p className="text-white/70">
                By encouraging iterative learning and reflective practice, NHF enables 
                clinicians, researchers, and systems to examine outcomes honestly.
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
              This culture of inquiry supports accountability, learning, and continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPhilosophySection;
