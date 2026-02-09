import { useEffect, useState, useRef } from "react";
import { TrendingUp, Users, GraduationCap, Building2, Sparkles } from "lucide-react";

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 12, suffix: "+", label: "Years of Impact", icon: TrendingUp },
    { value: 5000, suffix: "+", label: "Children Supported", icon: Users },
    { value: 200, suffix: "+", label: "Professionals Trained", icon: GraduationCap },
    { value: 15, suffix: "+", label: "Government Partnerships", icon: Building2 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="impact" 
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white text-slate-800 relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-100/40 to-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-100/30 to-blue-100/20 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Our Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight text-slate-800">
            From Care to Evidence.{" "}
            <span className="text-gradient">From Evidence to Impact.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our work creates measurable change in the lives of children, families, 
            and the systems that serve them.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className={`text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-lg hover:-translate-y-1 transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent">
                  {isVisible ? (
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Impact on Families",
              content: "Our evidence-based approach builds hope through observable change. Families report significant improvements in their children's functional abilities and quality of life."
            },
            {
              title: "Districts & Institutions",
              content: "Active partnerships with government and institutional stakeholders:",
              list: ["Pune (UNICEF DEIC Collaboration)", "Aundh General Hospital"]
            },
            {
              title: "Systems Implemented",
              list: ["Digital data collection system", "Research facilitation system", "Implementation, monitoring & evaluation", "Ethics committee for research with vulnerable populations"]
            }
          ].map((card, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-lg hover:-translate-y-1 group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-800 group-hover:text-orange-600 transition-colors">{card.title}</h3>
              {card.content && <p className="text-gray-600 mb-3">{card.content}</p>}
              {card.list && (
                <ul className="text-gray-600 text-sm space-y-2">
                  {card.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-teal-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple count-up animation component
const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = end / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

export default ImpactSection;
