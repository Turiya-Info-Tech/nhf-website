import { useEffect, useState, useRef } from "react";
import { TrendingUp, BookOpen, Calendar, Layers, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language";

const ImpactSection = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 50, suffix: "+", label: t('impact.stat1'), icon: BookOpen },
    { value: 23, suffix: "+", label: t('impact.stat2'), icon: Calendar },
    { value: 4, suffix: "", label: t('impact.stat3'), icon: Layers }
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-blue-50/60 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-50/40 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              {t('impact.badge')}
            </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight text-slate-900">
            {t('impact.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('impact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-20 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className={`text-center p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {isVisible ? (
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <p className="text-gray-700 text-base font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              title: t('impact.familiesTitle'),
              content: t('impact.familiesDesc')
            },
            {
              title: t('impact.districtsTitle'),
              content: t('impact.districtsDesc'),
                list: language === "hi"
                  ? ["पुणे (यूनिसेफ DEIC सहयोग)", "औंध जनरल हॉस्पिटल"]
                  : ["Pune (UNICEF DEIC Collaboration)", "Aundh General Hospital"]
            },
            {
              title: t('impact.systemsTitle'),
                list: language === "hi"
                  ? [
                      "डिजिटल डेटा संग्रह प्रणाली",
                      "अनुसंधान सुविधा प्रणाली",
                      "कार्यान्वयन, निगरानी और मूल्यांकन",
                      "अनुसंधान हेतु नैतिकता समिति"
                    ]
                  : [
                      "Digital data collection system",
                      "Research facilitation system",
                      "Implementation, monitoring & evaluation",
                      "Ethics committee for research"
                    ]
            }
          ].map((card, index) => (
            <div 
              key={index}
              className={`p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-1 group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              <h3 className="text-xl font-serif font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">{card.title}</h3>
              {card.content && <p className="text-gray-700 mb-3 text-base leading-relaxed">{card.content}</p>}
              {card.list && (
                <ul className="text-gray-700 text-sm space-y-3">
                  {card.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
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
