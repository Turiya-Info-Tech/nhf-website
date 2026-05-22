import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/lib/language";
import heroMedicalCare from "@/assets/hero-medical-care.webp";
import heroCommunity from "@/assets/hero-community.webp";
import heroChildrenGroup from "@/assets/hero-children-group.jpeg";

const HeroSection = () => {
  const { t, language } = useLanguage();
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const slides = useMemo(() => ([
    {
      title: t('hero.slide1'),
      description: t('hero.slide1Desc'),
      image: heroMedicalCare,
    },
    {
      title: t('hero.slide2'),
      description: t('hero.slide2Desc'),
      image: heroCommunity,
    },
    {
      title: t('hero.slide3'),
      description: t('hero.slide3Desc'),
      image: heroChildrenGroup,
    },
  ]), [t]);

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

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const contentParallax = Math.min(scrollY * 0.08, 36);
  const mediaParallax = Math.min(scrollY * 0.12, 54);
  const heroFade = Math.max(1 - scrollY / 900, 0.7);

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#FFF9EF] via-white to-[#FFF6E8]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(75,192,219,0.1),transparent_45%)]" />
      <div className="absolute -top-12 right-0 h-72 w-72 rounded-full bg-[#4BC0DB]/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#A9C63B]/20 blur-3xl" />

      <div className="container relative z-10 px-4 sm:px-6 pt-40 pb-20 lg:pt-56 lg:pb-28 min-h-[92vh]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className="max-w-3xl transition-transform duration-300"
            style={{ transform: `translateY(${contentParallax}px)`, opacity: heroFade }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4BC0DB] bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-[#4BC0DB]" />
              {t('hero.badge')}
            </div>

            <h1 className={`mt-6 text-4xl font-serif font-bold text-slate-900 sm:text-5xl lg:text-7xl ${language === "hi" ? "leading-[1.35] sm:leading-[1.34] lg:leading-[1.3]" : "leading-tight"}`}>
              <span className="block">{t('hero.title1')}</span>
              <span className={`block bg-gradient-to-r from-[#EC6F7B] via-[#4BC0DB] to-[#F4C94A] bg-clip-text text-transparent ${language === "hi" ? "mt-2 pb-3" : "pb-2"}`}>
                {t('hero.title2')}
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-slate-700 sm:text-xl">
              {t('hero.subtitle')}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {t('hero.description')}
            </p>

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-700 sm:text-lg">
              {t('hero.tagline')}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-[#4BC0DB] via-[#EC6F7B] to-[#F4C94A] text-white shadow-lg shadow-[#4BC0DB]/25 transition-all duration-300 hover:from-[#4BC0DB] hover:via-[#EC6F7B] hover:to-[#A9C63B]"
                onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.partner')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-[#F4C94A] text-[#A9C63B] transition-all duration-300 hover:bg-[#A9C63B] hover:text-white"
                onClick={() => document.getElementById('focus-areas')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.explore')}
              </Button>
            </div>
        </div>

          <div
            className="relative mx-auto w-full max-w-lg overflow-hidden lg:max-w-none transition-transform duration-300"
            style={{ transform: `translateY(${mediaParallax}px)`, opacity: heroFade }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Carousel
              className="relative w-full overflow-hidden"
              opts={{ loop: true, align: "start" }}
              setApi={setCarouselApi}
            >
              <CarouselContent className="-ml-0">
                {slides.map((slide, index) => (
                  <CarouselItem key={slide.title} className="pl-0">
                    <div className="relative mx-2 overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-2xl">
                      <div
                        className="flex h-[320px] w-full flex-col justify-end p-6 sm:h-[420px] sm:p-8"
                        style={{
                          backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.05) 0%, rgba(15,23,42,0.68) 100%), url(${slide.image})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="space-y-3">
                          <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EC6F7B]" />
                            {t('hero.badge')}
                          </span>
                          <h3 className="text-2xl font-serif font-bold leading-tight text-white sm:text-3xl">
                            {slide.title}
                          </h3>
                          <p className="max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex items-center justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeSlide === index ? "w-8 bg-gradient-to-r from-[#4BC0DB] via-[#EC6F7B] to-[#F4C94A]" : "w-2.5 bg-[#4BC0DB]/25 hover:bg-[#4BC0DB]/40"
                  }`}
                />
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-slate-400">{t('hero.carouselHint')}</p>
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            type="button"
            aria-label="Scroll to About section"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-2 rounded-full border border-[#A9C63B]/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#A9C63B] shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#A9C63B] hover:bg-white"
          >
            <span>{language === "hi" ? "नीचे स्क्रॉल करें" : "Scroll Down"}</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
