import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Target, 
  Calendar, 
  Heart,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";

const ParentSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  const parentGains = [
    {
      icon: Lightbulb,
      title: "Practical Strategies",
      description: "Practical strategies to support development in daily routines",
      gradient: "from-[#F4C94A] to-[#4BC0DB]"
    },
    {
      icon: Target,
      title: "Clear Action Plans",
      description: "Clear action plans tailored to their child's developmental profile",
      gradient: "from-[#A9C63B] to-[#4BC0DB]"
    },
    {
      icon: TrendingUp,
      title: "Ongoing Coaching",
      description: "Ongoing coaching to strengthen confidence and consistency",
      gradient: "from-[#4BC0DB] to-[#F4C94A]"
    },
    {
      icon: Calendar,
      title: "Predictability & Structure",
      description: "Predictability and structure, enabling children to feel safe and regulated",
      gradient: "from-[#EC6F7B] to-[#E88967]"
    }
  ];

  const ultimateGoals = [
    "Be aware of and responsive to their environment",
    "Regulate themselves with increasing independence",
    "Communicate their needs effectively",
    "Make informed decisions that support their physical, emotional, and social well-being"
  ];

  return (
    <section id="parents" ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-br from-[#A9C63B]/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Role of Parents */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Role of Parents
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-6 text-gray-800">
              Parents as Partners in the{" "}
              <span className="text-gradient">Developmental Journey</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Parents play a central role in enabling healthy development. Families approach 
              the New Horizons (NH) program seeking clarity, guidance, and deeper understanding 
              of their child's needs, strengths, and challenges.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At NH, parents are supported to move beyond uncertainty and into confident, 
              purposeful engagement with their child. The focus is not only on addressing 
              developmental concerns, but on strengthening everyday interactions that promote 
              growth, safety, and emotional connection.
            </p>

            <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-6 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,146,60,0.1),transparent_50%)]" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500" />
              <h3 className="relative font-bold mb-4 flex items-center gap-2 text-white">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-pink-500 flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                Through structured guidance, parents are empowered to help their children:
              </h3>
              <ul className="space-y-3 text-white/70 relative">
                <li className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Engage meaningfully with their environment</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Develop independence and self-awareness</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Make sound decisions related to their health and well-being</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Build skills that support long-term participation in family, school, and community life</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What Parents Gain */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="inline-flex items-center gap-2 text-[#A9C63B] font-semibold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              What Parents Gain
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-6 text-gray-800">
              From the <span className="text-gradient">NH Program</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Through the NH program, parents receive comprehensive support that transforms 
              their approach from reactive responses to intentional support, fostering 
              development that is both measurable and meaningful.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {parentGains.map((gain, index) => (
                <Card 
                  key={index}
                  className={`group bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={getStaggerDelay(index + 3, 100)}
                >
                  <CardContent className="p-5 relative">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gain.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gain.gradient} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <gain.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold mb-1 text-sm text-gray-800 group-hover:text-[#A9C63B] transition-colors">{gain.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{gain.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Ultimate Goal */}
        <div className={`relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 overflow-hidden transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.15),transparent_50%)]" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4BC0DB] via-[#A9C63B] to-[#F4C94A]" />
          
          <div className="max-w-4xl mx-auto relative">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 text-[#4BC0DB] font-semibold text-sm uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                The Ultimate Goal
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-4 text-white">
                For Children to <span className="text-gradient-animated">Thrive</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                By strengthening parents as partners and grounding intervention in human connection, 
                development becomes a lived process, not a checklist.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {ultimateGoals.map((goal, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4BC0DB] to-[#A9C63B] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-white/80 leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#4BC0DB]/20 to-[#A9C63B]/20 border border-[#4BC0DB]/30 text-[#4BC0DB] shadow-lg">
                <Heart className="w-5 h-5 fill-current animate-pulse" />
                <span className="font-semibold">Development through Connection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentSection;
