import { Heart, Eye, Users, TrendingUp, Sparkles } from "lucide-react";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";

const EvidenceHopeSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  const benefits = [
    {
      icon: Users,
      title: "Parents & Caregivers",
      description: "Clarity and reassurance through documented developmental progress",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Clinicians",
      description: "Direction and professional confidence in intervention approaches",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Systems",
      description: "Evidence for informed decision-making and resource allocation",
      gradient: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section id="evidence-hope" ref={ref} className="py-20 lg:py-28 bg-gradient-to-br from-teal-50 via-white to-violet-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-violet-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-teal-100/30 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Impact on Families & Caregivers
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight text-gray-800">
              Evidence That Builds{" "}
              <span className="text-gradient">Hope</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              An outcome-oriented approach does more than inform systems—it restores confidence. 
              By documenting meaningful developmental progress, even when standardized tools are 
              unavailable, NHF provides something deeply valuable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={getStaggerDelay(index + 2, 100)}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Main Message */}
          <div className={`relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-center overflow-hidden transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.15),transparent_50%)]" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400" />
            <div className="relative flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
            </div>
            <h3 className="relative text-2xl lg:text-3xl font-serif font-bold mb-4 text-white">
              Credible Hope Rooted in Observable Change
            </h3>
            <p className="relative text-white/70 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
              This evidence-driven yet human-centred approach offers families something deeply 
              valuable: <span className="text-teal-400 font-semibold">credible hope</span> rooted 
              in observable change.
            </p>
            <div className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-400/30 text-teal-300">
              <Heart className="w-5 h-5 fill-current animate-pulse" />
              <span className="font-semibold">Hope Through Evidence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceHopeSection;
