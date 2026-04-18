import { Quote, Heart, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FounderMessageSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  return (
    <section id="founders-message" ref={ref} className="py-20 lg:py-28 bg-gradient-to-br from-orange-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-pink-100/30 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            From the Founder's Desk
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold mt-4 mb-4 leading-tight">
            A Message from{" "}
            <span className="text-gradient whitespace-nowrap">Dr.&nbsp;Samir&nbsp;H.&nbsp;Dalwai</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Photo and Title */}
          <div className={`lg:col-span-1 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="sticky top-28">
              <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-6 text-center overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.15),transparent_50%)]" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500" />
                <img 
                  src="/image.png" 
                  alt="Dr. Samir H. Dalwai - Founder & Director of NHF"
                  className="relative w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-xl mx-auto mb-4 group-hover:scale-105 transition-transform duration-500"
                />
                <h3 className="text-xl font-serif font-bold mb-1 text-white">Dr. Samir H. Dalwai</h3>
                <p className="text-sm text-white/60 mb-4">Founder & Director</p>
                <div className="flex items-center justify-center gap-2 text-orange-400 text-sm">
                  <Heart className="w-4 h-4 fill-current animate-pulse" />
                  <span>Developmental Pediatrician</span>
                </div>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-100 shadow-xl relative overflow-hidden">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-orange-500/10" />
              
              <div className="space-y-6 text-gray-600 relative z-10">
                <p className="text-lg leading-relaxed">
                  At the heart of my work in developmental pediatrics lies a fundamental conviction: every child has the capacity to grow, communicate, and connect when we respond to their unmet needs with understanding and consistent engagement.
                </p>

                <p className="leading-relaxed">
                  Developmental delays and behavioural differences are not problems to be "fixed." They are signals. Signals that a child's environment, experiences, or relationships require adjustment, support, and human connection.
                </p>

                <p className="leading-relaxed">
                  Modern medicine has given us powerful tools for diagnosis, but progress cannot come from labels alone. True development begins when we shift our focus from symptoms to engagement, from milestones to relationships, and from isolated interventions to everyday human interaction.
                </p>

                <p className="leading-relaxed">
                  Parents are central to this journey. When caregivers are empowered with knowledge, clarity, and confidence, development becomes part of daily life, not just a clinic-based activity. This philosophy extends beyond families to professionals, institutions, and systems.
                </p>

                <p className="leading-relaxed">
                  Through the New Horizons Health and Research Foundation, we aim to embed this human-centred, evidence-based approach within research practices, government programs, and policy frameworks. Our goal is to ensure that developmental care is ethical, accessible, and grounded in dignity.
                </p>

                <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-6 mt-8 overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 via-pink-500 to-rose-500" />
                  <p className="text-lg font-serif italic text-white/90 relative z-10">
                    "When science and humanity work together, development does not remain delayed. It simply begins anew."
                  </p>
                  <p className="text-sm text-orange-400 font-medium mt-3 relative z-10">
                    — Dr. Samir H. Dalwai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessageSection;
