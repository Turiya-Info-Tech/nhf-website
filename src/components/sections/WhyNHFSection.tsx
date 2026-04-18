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

const WhyNHFSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  const reasons = [
    {
      icon: Calendar,
      title: "Established in 2012",
      description: "Sustained clinical and research credibility over 12+ years",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Outcome-Focused Workflows",
      description: "Renewed, outcome-focused workflows aligned with real-world settings",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Building2,
      title: "Active Clinical Integration",
      description: "Embedded within an active pediatric neurodevelopment centre (NHCDC)",
      gradient: "from-orange-500 to-pink-600"
    },
    {
      icon: CheckCircle2,
      title: "Reflective Practice Culture",
      description: "Strong culture of reflective practice and inquiry among team members",
      gradient: "from-teal-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: "Ethical, Child-First Approach",
      description: "Ethical, child-first approach to research and data handling",
      gradient: "from-rose-500 to-red-600"
    },
    {
      icon: Heart,
      title: "Measurable Impact Focus",
      description: "Clear focus on measurable impact, even in complex environments",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  const capabilities = [
    "Grounded in clinical evidence and field realities",
    "Proven ability to engage with government systems",
    "Clear pathways from data to implementation",
    "Strong ethical framework for child-focused research",
    "Backed by New Horizons Child Development Centre (NHCDC)"
  ];

  return (
    <section id="why-nhf" ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-violet-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-violet-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Why Partner With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight text-gray-800">
            Why <span className="text-gradient">NHF</span>?
          </h2>
          <p className="text-gray-600 text-lg">
            NHF is seeking long-term CSR partnerships, donor support, and institutional grants 
            aligned with national child health and development priorities.
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
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-violet-600 transition-colors">{reason.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.description.includes("NHCDC") ? (
                    <>
                      Embedded within an active pediatric neurodevelopment centre (<a href="https://www.newhorizonscdc.in/" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold hover:underline whitespace-nowrap">NHCDC</a>)
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
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500" />
          <h3 className="text-xl font-bold text-center mb-8 text-white relative">Our Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                </div>
                {capability.includes("NHCDC") ? (
                  <span className="text-sm text-white/80 leading-relaxed">
                    Backed by{" "}
                    <a href="https://www.newhorizonscdc.in/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline whitespace-nowrap">New Horizons Child Development Centre (<span className="whitespace-nowrap">NHCDC</span>)</a>
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
