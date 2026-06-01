import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";

const AboutSection = () => {
  const { t } = useLanguage();
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

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decorations - subtle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#F4C94A]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#A9C63B]/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
            <span className="inline-flex items-center gap-2 text-[#4BC0DB] font-semibold text-sm uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              {t('about.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold mt-3 mb-6 leading-tight text-slate-900">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t('about.intro')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {/* About Us */}
            <div>
              <span className="inline-block rounded-full border border-[#4BC0DB]/30 bg-[#4BC0DB]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#11627A] mb-5">
                {t('about.card1Title')}
              </span>
              <p className="text-base leading-relaxed text-slate-700">
                {t('about.card1DescPre')} <strong className="text-slate-900">{t('about.card1DescBold')}</strong>
              </p>
            </div>

            {/* Our Role */}
            <div>
              <span className="inline-block rounded-full border border-[#A9C63B]/40 bg-[#A9C63B]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#496511] mb-5">
                {t('about.card2Title')}
              </span>
              <p className="text-base leading-relaxed text-slate-700">
                {t('about.card2Desc')}
              </p>
            </div>

            {/* Our Approach */}
            <div>
              <span className="inline-block rounded-full border border-[#EC6F7B]/35 bg-[#EC6F7B]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#A73545] mb-5">
                {t('about.card3Title')}
              </span>
              <p className="font-semibold text-slate-900 mb-2">{t('about.card3DescBold')}</p>
              <p className="text-base leading-relaxed text-slate-700">{t('about.card3DescBody')}</p>
            </div>
          </div>

          {/* Research. Train. Reach. */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-5 text-slate-900">{t('about.researchTrainReach')}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.researchTrainReachDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
