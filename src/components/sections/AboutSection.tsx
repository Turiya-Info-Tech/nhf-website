import { FlaskConical, GraduationCap, HandHeart, Megaphone, Sparkles, Target, Users, Building2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";

const AboutSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const fundamentals = [
    {
      title: t('about.research'),
      icon: FlaskConical,
      gradient: "from-[#4BC0DB] to-[#F4C94A]",
      description: t('about.researchDesc'),
    },
    {
      title: t('about.train'),
      icon: GraduationCap,
      gradient: "from-[#A9C63B] to-[#4BC0DB]",
      description: t('about.trainDesc'),
    },
    {
      title: t('about.reach'),
      icon: HandHeart,
      gradient: "from-[#4BC0DB] to-[#EC6F7B]",
      description: t('about.reachDesc'),
    },
    {
      title: t('about.advocate'),
      icon: Megaphone,
      gradient: "from-[#EC6F7B] to-[#E88967]",
      description: t('about.advocateDesc'),
    }
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
    <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decorations - subtle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#F4C94A]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#A9C63B]/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="inline-flex items-center gap-2 text-[#4BC0DB] font-semibold text-sm uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              {t('about.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold mt-3 mb-6 leading-loose text-slate-900">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.intro')}
            </p>
          </div>

          {/* About Us, Our Role, Our Approach - 3 Cards */}
          <div className="grid lg:grid-cols-3 gap-6 mb-20">
            <div className="bg-gradient-to-br from-white to-[#4BC0DB]/10 rounded-2xl p-8 shadow-md border border-[#4BC0DB]/20 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4BC0DB] to-[#F4C94A] flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-slate-900">{t('about.card1Title')}</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {t('about.card1Desc')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-[#A9C63B]/10 rounded-2xl p-8 shadow-md border border-[#A9C63B]/20 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#A9C63B] to-[#4BC0DB] flex items-center justify-center mb-6 shadow-lg">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-slate-900">{t('about.card2Title')}</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {t('about.card2Desc')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-[#EC6F7B]/10 rounded-2xl p-8 shadow-md border border-[#EC6F7B]/20 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EC6F7B] to-[#E88967] flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-slate-900">{t('about.card3Title')}</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {t('about.card3Desc')}
              </p>
            </div>
          </div>

          {/* The Gap We Address */}
          <div className="bg-slate-900 rounded-2xl p-10 lg:p-14 mb-20 text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.1),transparent_50%)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="relative max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-white">{t('about.gapTitle')}</h3>
                <p className="text-base md:text-lg leading-relaxed text-white/90 mb-4">
                  {t('about.gapP1')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-white/90 mb-4">
                  {t('about.gapP2')}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-white/75">
                  {t('about.gapP3')}
                </p>
            </div>
          </div>

          {/* Research. Train. Reach. */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-5 text-slate-900">{t('about.researchTrainReach')}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.researchTrainReachDesc')}
            </p>
          </div>

          {/* 4 Fundamentals Circles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fundamentals.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`bg-white rounded-xl p-8 shadow-md border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg text-center group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${200 + index * 120}ms` }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-5 shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-serif font-bold mb-3 text-slate-900">{pillar.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
