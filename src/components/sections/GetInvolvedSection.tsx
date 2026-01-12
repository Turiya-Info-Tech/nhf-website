import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HandHeart, Building, GraduationCap, Users, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const GetInvolvedSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const ways = [
    {
      icon: GraduationCap,
      title: "Research & Training Collaboration",
      description: "Collaborate with us on research, training initiatives, and systems strengthening.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building,
      title: "CSR Partnership & Sponsorship",
      description: "Support our work through partnerships, sponsorships, or donor funding aligned with national priorities.",
      gradient: "from-orange-500 to-pink-500"
    },
    {
      icon: HandHeart,
      title: "Policy Engagement",
      description: "Join our policy engagement initiatives to influence systems change for children.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Advisory & Ethics Initiatives",
      description: "Join our advisory or ethics-focused initiatives and contribute your expertise.",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="get-involved" ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Get Involved
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
            Join Us in Creating{" "}
            <span className="text-gradient">Change</span>
          </h2>
          <p className="text-gray-600 text-lg">
            There are many ways to support our mission of improving outcomes 
            for children and strengthening systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ways.map((way, index) => (
            <Card 
              key={index}
              className={`group cursor-pointer bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center relative">
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${way.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${way.gradient} flex items-center justify-center mb-5 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <way.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-orange-600 transition-colors">{way.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{way.description}</p>
                
                {/* Bottom border on hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${way.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            size="lg" 
            className="relative group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us to Get Started
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
