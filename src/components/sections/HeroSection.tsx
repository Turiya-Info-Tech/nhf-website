import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles, Star } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-orange-50 via-white to-teal-50/30">
      {/* Warm Top Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-200/40 via-orange-100/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-teal-200/30 via-transparent to-transparent" />
      
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(249,115,22,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />

      {/* Floating Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-amber-200/20 rounded-full blur-3xl animate-morph" />
        <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-teal-300/25 to-cyan-200/15 rounded-full blur-3xl animate-morph animate-delay-400" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-rose-200/10 rounded-full blur-2xl animate-pulse-glow" />
        
        {/* Floating Icons */}
        <Star className="absolute top-32 right-1/4 w-6 h-6 text-orange-400/50 animate-float" />
        <Sparkles className="absolute bottom-40 left-1/4 w-8 h-8 text-teal-500/50 animate-float animate-delay-200" />
        <Heart className="absolute top-1/2 right-20 w-5 h-5 text-orange-500/40 animate-float animate-delay-400" />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-orange-200/50 shadow-lg shadow-orange-100/50 opacity-0 animate-slide-down">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-slate-700 text-sm font-medium tracking-wide">
              Research & Advocacy for Child Development
            </span>
          </div>
          
          {/* Main Heading with Gradient Text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-800 mb-8 leading-tight">
            <span className="block opacity-0 animate-slide-up">
              Empowering Children.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-teal-600 opacity-0 animate-slide-up animate-delay-200">
              Advancing Systems.
            </span>
            <span className="block opacity-0 animate-slide-up animate-delay-400">
              Influencing Policy.
            </span>
          </h1>
          
          {/* Description with blur-in effect */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed opacity-0 animate-blur-in animate-delay-500">
            New Horizons Health and Research Foundation (NHF) is a not-for-profit 
            organization committed to improving outcomes for children with 
            neurodevelopmental concerns across India. Working at the confluence 
            of science, service delivery, and policy action.
          </p>
          
          {/* CTA Buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animate-delay-700">
            <Button 
              size="lg" 
              className="relative group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center">
                Partner With Us
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-teal-500 text-teal-700 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-105 group"
              onClick={() => document.getElementById('focus-areas')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="mr-2 w-4 h-4 group-hover:animate-wiggle" />
              Explore Our Work
            </Button>
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-3 gap-8 opacity-0 animate-fade-in animate-delay-1000">
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-1">10+</div>
              <div className="text-slate-500 text-sm">Years of Impact</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-1">50K+</div>
              <div className="text-slate-500 text-sm">Children Helped</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600 mb-1">100+</div>
              <div className="text-slate-500 text-sm">Programs Launched</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with enhanced animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-1000">
        <div className="flex flex-col items-center gap-2">
          <span className="text-slate-400 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-orange-300 rounded-full flex items-start justify-center p-2 bg-white/50 backdrop-blur-sm">
            <div className="w-1.5 h-3 bg-gradient-to-b from-orange-400 to-teal-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
