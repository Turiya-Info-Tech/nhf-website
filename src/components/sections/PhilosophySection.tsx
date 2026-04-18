import { Heart, Shield, Target, Sparkles, Microscope, HandHeart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PhilosophySection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="philosophy" ref={ref} className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-violet-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-orange-100/30 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        {/* Aim & Purpose */}
        <div className={`text-center max-w-4xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-violet-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Our Aim & Purpose
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight text-gray-800">
            Closing the Gap Between{" "}
            <span className="text-gradient md:whitespace-nowrap">Insight & Action</span>
          </h2>
        </div>

        {/* Our Aim - Left aligned with image on right */}
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 items-center transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-4 text-violet-600 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              Our Aim
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3 group">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                <span>Bridge clinical insight, research, and systems-level action for child neurodevelopment in South Asian contexts</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                <span>Build institutional credibility through accountability and measurable outcomes</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                <span>Attract strategic partnerships for research-driven capacity building</span>
              </li>
            </ul>
          </div>
          
          {/* Image for Aim section - Research & Systems */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-violet-500/20">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop" 
                alt="Medical research and clinical systems" 
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg cursor-pointer hover:bg-orange-50 transition-colors" onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}>
                <Microscope className="w-5 h-5 text-violet-600" />
                <span className="text-sm font-semibold text-slate-700">Evidence-Based Research</span>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-violet-400 to-purple-600 rounded-2xl -z-10 opacity-60" />
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-600 rounded-xl -z-10 opacity-60" />
          </div>
        </div>

        {/* Our Purpose - Right aligned with image on left */}
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20 items-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          {/* Image for Purpose section - Community & Families */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=450&fit=crop" 
                alt="Community collaboration and family empowerment" 
                className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                <HandHeart className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-semibold text-slate-700">Community Empowerment</span>
              </div>
            </div>
            <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-600 rounded-2xl -z-10 opacity-60" />
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-600 rounded-xl -z-10 opacity-60" />
          </div>

          {/* Purpose content - Right side on desktop */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:-translate-y-1 transition-transform duration-300 order-1 lg:order-2">
            <h3 className="text-xl font-bold mb-4 text-orange-600 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              Our Purpose
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                <span>Strengthen public systems for child health, wellbeing, and safety</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                <span>Build awareness and collective action for neurodevelopment and disability inclusion</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                <span>Influence policy and practice through evidence-informed advocacy</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                <span>Sustain mission-critical programs through strategic funding</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                <span>Empower families as primary agents of change for their children</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                <span>Build workforce capacity to address public-health challenges</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Core Principle */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Core Principle
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-6 text-gray-800">
              The Child is a <span className="text-gradient">Whole</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              When children understand their abilities, challenges, and emotions — and receive 
              consistent human connection — they develop across all areas more naturally.
            </p>
            <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-6 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,146,60,0.1),transparent_50%)]" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-pink-500" />
              <div className="relative flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg text-white">Trust & Autonomy</h3>
              </div>
              <p className="text-white/70 leading-relaxed relative">
                Safe trust formation helps children develop independence, self-regulation, 
                and decision-making. Strong caregivers become the foundation for overcoming challenges.
              </p>
            </div>
          </div>

          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative bg-gradient-to-br from-orange-500 via-pink-500 to-rose-500 rounded-3xl p-8 lg:p-10 text-white overflow-hidden shadow-2xl group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent_50%)]" />
              <h3 className="relative text-2xl font-serif font-bold mb-4">Child-First Approach</h3>
              <p className="relative text-lg opacity-90 mb-6 leading-relaxed">
                Children thrive when systems respond to their developmental needs with 
                understanding, structure, and respect.
              </p>
              <div className="relative flex items-center gap-2 text-sm opacity-80">
                <Heart className="w-4 h-4 fill-current animate-pulse" />
                <span>Every child deserves to be understood</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-teal-400/30 to-cyan-400/30 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Stages of Child Development - Moved to Blog */}
        {/* Content available as blog post: "Stages of Child Development" */}
      </div>
    </section>
  );
};

export default PhilosophySection;
