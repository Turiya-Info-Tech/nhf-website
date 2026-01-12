import { CheckCircle2, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const highlights = [
    "Clinical grounding with 12+ years of experience",
    "Ethics-first approach to all research",
    "Outcome-oriented methodology",
    "Government engagement capability"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-b from-background to-gray-50/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-100/50 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4" />
              About NHF
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6 leading-tight">
              Bridging Science, Service & Policy for{" "}
              <span className="text-gradient">Child Development</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              As the research and advocacy arm of New Horizons Child Development 
              Centre (NHCDC), NHF works at the confluence of science, service 
              delivery, and policy action. We are uniquely positioned to influence 
              systems change by leveraging evidence, capacity building, and partnerships.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We believe in asking "What Works?" — focusing on observable, 
              functional improvements rather than labels. Our child-first, 
              whole-child approach ensures that every intervention is designed 
              with respect, dignity, and the protection of vulnerable populations 
              at its core.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover-lift cursor-default transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Card */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-8 lg:p-10 text-white overflow-hidden group">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative lines */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-teal-500" />
              
              <h3 className="relative text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-400 animate-pulse-glow" />
                Our Philosophy
              </h3>
              <blockquote className="relative text-lg italic mb-6 text-white/90 leading-relaxed">
                "We focus on outcomes over labels — what truly matters is the 
                observable change in a child's life and their family's hope."
              </blockquote>
              <p className="relative text-sm text-white/60 font-medium">
                — Dr. Samir Dalwai, Founder
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-pink-400/30 rounded-full blur-2xl animate-pulse-glow" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse-glow animate-delay-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
