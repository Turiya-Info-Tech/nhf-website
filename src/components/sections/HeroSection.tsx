import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Heart, Sparkles, Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import heroChildren from "@/assets/hero-children.jpg";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [likes, setLikes] = useState(284);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = useMemo(() => ([
    {
      title: "Human Engagement Powers Learning",
      description: "A people-first approach that transforms everyday interactions into developmental opportunities.",
      image: null,
    },
    {
      title: "Child Development: Explained through the Ecological Model",
      description: "Development emerges through consistent engagement across all layers, not through isolated interventions.",
      image: null,
    },
    {
      title: "More stories of impact coming soon",
      description: "Placeholder for upcoming work, partnerships, and program highlights.",
      image: null,
    },
  ]), []);

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

  useEffect(() => {
    if (!carouselApi) return;

    const updateActive = () => setActiveSlide(carouselApi.selectedScrollSnap());
    updateActive();
    carouselApi.on("select", updateActive);
    carouselApi.on("reInit", updateActive);

    return () => {
      carouselApi.off("select", updateActive);
      carouselApi.off("reInit", updateActive);
    };
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi || isPaused) return;

    const autoSlide = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 6000);

    return () => window.clearInterval(autoSlide);
  }, [carouselApi, isPaused]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-teal-50/20">
      {/* Warm Top Gradient Overlay - Refined */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/30 via-orange-50/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-teal-100/20 via-transparent to-transparent" />
      
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(249,115,22,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />

      {/* Floating Decorative Shapes - Refined */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-amber-100/10 rounded-full blur-3xl animate-morph" />
        <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-teal-200/15 to-cyan-100/10 rounded-full blur-3xl animate-morph animate-delay-400" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-orange-100/15 to-rose-100/5 rounded-full blur-2xl animate-pulse-glow" />
        
        {/* Floating Icons */}
        <Star className="absolute top-32 right-1/4 w-6 h-6 text-orange-400/50 animate-float" />
        <Sparkles className="absolute bottom-40 left-1/4 w-8 h-8 text-teal-500/50 animate-float animate-delay-200" />
        <Heart className="absolute top-1/2 right-20 w-5 h-5 text-orange-500/40 animate-float animate-delay-400" />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 py-20 lg:py-32">
        {/* Centralized Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-800 mb-6" style={{ lineHeight: '1.15' }}>
            <span className="block opacity-0 animate-slide-up">
              Human Engagement
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-teal-600 opacity-0 animate-slide-up animate-delay-200 pb-2">
              Powers Learning
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-serif text-slate-700 opacity-0 animate-blur-in animate-delay-400">
            The Ultimate Goal: For All Children to Thrive
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div className="max-w-3xl">
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

            <p className="text-lg text-slate-600 mb-4 opacity-0 animate-blur-in animate-delay-500">
              For children to be able to:
            </p>

            <div className="space-y-3 mb-6 opacity-0 animate-fade-in animate-delay-600">
              {[
                "Be aware of and responsive to their environment",
                "Regulate themselves with increasing independence",
                "Communicate their needs effectively",
                "Make informed decisions that support their physical, emotional, and social well-being",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-orange-500 to-teal-500" />
                  <p className="text-slate-600 text-base md:text-lg">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-700 font-medium mb-8 opacity-0 animate-fade-in animate-delay-700 max-w-xl leading-relaxed">
              By strengthening parents as partners and grounding intervention in human connection, development becomes a lived process — not a checklist.
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
              <Button
                size="lg"
                variant="ghost"
                className="border border-orange-200 text-orange-700 hover:bg-orange-50 transition-all duration-300"
              >
                <Heart className="mr-2 w-4 h-4 text-orange-500 fill-orange-500" />
                Development through connection
              </Button>
            </div>
          </div>

          {/* Carousel */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Carousel
              className="relative w-full"
              opts={{ loop: true, align: "center" }}
              setApi={setCarouselApi}
            >
              <CarouselContent className="-ml-0">
                {slides.map((slide, index) => (
                  <CarouselItem key={slide.title} className="pl-0">
                    <div className="relative rounded-3xl overflow-hidden border border-white/60 shadow-2xl bg-white/70 backdrop-blur-xl mx-2">
                      <div
                        className="h-[340px] md:h-[400px] w-full flex flex-col justify-end p-6 md:p-8"
                        style={slide.image ? { 
                          backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(15,23,42,0.5) 100%), url(${slide.image})`, 
                          backgroundSize: "cover", 
                          backgroundPosition: "center" 
                        } : {
                          background: "linear-gradient(135deg, rgba(251,146,60,0.15) 0%, rgba(255,255,255,0.9) 50%, rgba(45,212,191,0.15) 100%)"
                        }}
                      >
                        <div className="space-y-3">
                          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500 bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            Slide {index + 1} of {slides.length}
                          </span>
                          <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-800 leading-tight">
                            {slide.title}
                          </h3>
                          <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 bg-white/90 border-orange-200 hover:bg-orange-50 hover:border-orange-300" />
              <CarouselNext className="hidden md:flex -right-4 bg-white/90 border-orange-200 hover:bg-orange-50 hover:border-orange-300" />
            </Carousel>

            <div className="flex items-center justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeSlide === index ? "w-8 bg-gradient-to-r from-orange-500 to-teal-500" : "w-2.5 bg-orange-200 hover:bg-orange-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-center text-xs text-slate-400 mt-3">Auto-slides every 6 seconds. Hover to pause.</p>
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
