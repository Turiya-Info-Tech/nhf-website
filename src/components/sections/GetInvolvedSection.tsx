import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Briefcase, Building, GraduationCap, Quote, Sparkles, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import anushkaSamantImg from "@/assets/Ms Anushka Samant.jpeg";
import manshiThakkarImg from "@/assets/Ms Manshi Thakkar.jpeg";
import zobiaAlamImg from "@/assets/Ms Zobia Alam.jpeg";
import zobiaAlamVideo from "@/assets/Ms. Zobia Alam.mp4";
import devikaMohananImg from "@/assets/Ms Devika Mohanan.jpeg";
import hrishitaKambliImg from "@/assets/Ms Hrishita Kambli.jpeg";

const GetInvolvedSection = () => {
  const { t, language } = useLanguage();
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

  const partnerOptions = [
    {
      icon: Building,
      title: t('getinvolved.partner'),
      gradient: "from-[#4BC0DB] to-[#EC6F7B]",
    },
    {
      icon: Briefcase,
      title: t('getinvolved.work'),
      gradient: "from-[#A9C63B] to-[#4BC0DB]",
    },
    {
      icon: Heart,
      title: t('getinvolved.donate'),
      gradient: "from-[#EC6F7B] to-[#E88967]",
    }
  ];

  const researchInternTestimonials = [
    {
      name: "Ms Zobia Alam",
      role: language === "hi" ? "अनुसंधान इंटर्न" : "Research Intern",
      institution: "University of British Columbia",
      degree: "Bachelor of Arts in Psychology",
      image: zobiaAlamImg,
      video: zobiaAlamVideo,
      quote:
        "As a research intern at the New Horizons Child Development Centre, I contributed to various tasks such as analysing case reports, conducting literature reviews, and designing studies to evaluate the program's effectiveness. Working across these projects gave me an integrated understanding of how culture, family structures, and community environments shape developmental outcomes in the Indian context, while also allowing me to contribute meaningfully to the community I ultimately hope to serve. What particularly made this experience meaningful was the mentorship I received throughout the internship! The team fostered a space for constant learning, critical thinking and collaboration which has significantly shaped my understanding of research and clinical rigour in the field.",
    },
    {
      name: "Ms Manshi Thakkar",
      role: language === "hi" ? "अनुसंधान इंटर्न" : "Research Intern",
      institution: "Mithibai College of Arts, Chauhan Institute of Science & Amrutben Jivanlal College of Commerce and Economics, Mumbai",
      degree: "Third Year B. Sc. (Psychology)",
      image: manshiThakkarImg,
      quote:
        "Working at NHF as a Research Intern, I had the opportunity to explore my interest in child development and mental health. I was guided through each stage of the research process, beginning from the basics. The learning environment was supportive and non-judgmental, which allowed me to ask questions and grow with confidence. The guidance from the research team and doctors helped me understand how evidence-based practices can bring meaningful improvement in children with Autism and ADHD. I am deeply grateful for the constant encouragement and would highly recommend this internship to students who wish to explore, learn, grow, and contribute to the field of mental health.",
    },
    {
      name: "Ms Anushka Samant",
      role: language === "hi" ? "अनुसंधान इंटर्न" : "Research Intern",
      institution: "KC College, HSNC University",
      degree: "MA Psychology (Clinical)",
      image: anushkaSamantImg,
      quote:
        "My journey at NHF is truly enriching and deeply meaningful. I began as a part-time intern and gradually grew into a full-time intern - a journey marked by constant learning and growth. The environment here encourages multidimensional collaboration, rich exposure and invaluable professional development. What truly sets NHF apart is its warm, supportive, and encouraging work culture. The people here are passionate about what they do, driven by purpose, and committed to making a real difference. I am grateful to be part of a space that nurtures both professional and personal growth.",
    },
    {
      name: "Ms Devika Mohanan",
      role: language === "hi" ? "अनुसंधान इंटर्न" : "Research Intern",
      institution: "KC College",
      degree: "MA Psychology (Clinical) / Master of Arts (Clinical Psychology)",
      image: devikaMohananImg,
      quote:
        "I joined New Horizons CDC as a research intern in November. I was just a bachelors degree graduate at that time and was only slightly aware of the backhand work that goes into research publication. Throughout my internship, I learnt about the stages of data collection, synthesis and analysis. There were countless discussions and brainstorming sessions where ideas were exchanged and a thorough understanding of our data analysis process was initiated. Along with research, I was also exposed to the different treatment processes for children with developmental concerns. The care & consideration with which the whole process is designed is commendable. Anyone who is interested in research and wants to know what is the process and the work that goes into it should definitely work at NHCDC. You will get to learn more about the work that goes into developing better plans and advocating for children's healthcare.",
    },
    {
      name: "Ms Hrishita Kambli",
      role: language === "hi" ? "अनुसंधान इंटर्न" : "Research Intern",
      institution: "K.C. College",
      degree: "BA Psychology",
      image: hrishitaKambliImg,
      quote:
        "During my time with the organization, I developed a strong foundation in the research process-from understanding the steps involved in conducting studies to writing comprehensive literature reviews and learned how to optimize academic search strategies to locate relevant papers efficiently. The internship fostered a collaborative environment that strengthened my teamwork skills, and I truly appreciated the emphasis placed on learning. My mentor was exceptional, providing consistent guidance throughout the internship. Overall, this experience significantly enhanced my research capabilities, and I would highly recommend this internship to anyone looking to build practical skills in research within a supportive and well-structured learning environment.",
    },
  ];

  return (
    <section id="get-involved" ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#4BC0DB]/10 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#F4C94A]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-[#A9C63B]/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-20 lg:mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center gap-2 text-[#4BC0DB] font-semibold text-sm uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              {t('getinvolved.badge')}
            </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight text-slate-900">
            {t('getinvolved.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('getinvolved.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {partnerOptions.map((option, index) => (
            <Card 
              key={option.title}
              className={`group cursor-pointer bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden hover:-translate-y-2 rounded-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.gradient} flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{option.title}</h3>
                
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${option.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`mb-20 lg:mb-24 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-[#A9C63B] font-semibold text-sm uppercase tracking-wider mb-4">
              <GraduationCap className="w-4 h-4" />
              {t('getinvolved.internship')}
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-6 text-slate-900">{t('getinvolved.experienceTitle')}</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('getinvolved.experienceDesc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {researchInternTestimonials.map((testimonial, index) => (
              <Card
                key={`${testimonial.name}-${index}`}
                className={`bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 rounded-xl overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 90}ms` }}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex flex-col items-center text-center mb-5">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-[#4BC0DB]/20 mb-3"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4BC0DB] to-[#A9C63B] flex items-center justify-center shadow-md mb-3">
                        <Quote className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <p className="text-base font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-[#EC6F7B] font-medium">{testimonial.role}</p>
                  </div>
                  {testimonial.video ? (
                    <div className="mb-5 overflow-hidden rounded-2xl border border-[#4BC0DB]/20 bg-slate-950 shadow-sm">
                      <video
                        src={testimonial.video}
                        controls
                        preload="metadata"
                        className="aspect-video w-full"
                      >
                        {language === "hi" ? "आपका ब्राउज़र वीडियो टैग को सपोर्ट नहीं करता।" : "Your browser does not support the video tag."}
                      </video>
                    </div>
                  ) : null}
                  <p className="text-sm text-gray-700 italic mb-5 flex-1 line-clamp-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="text-xs text-gray-600 space-y-2 pt-4 border-t border-gray-100">
                    <p className="line-clamp-2"><span className="font-medium text-gray-800">{language === "hi" ? "संस्थान:" : "Institution:"}</span> {testimonial.institution}</p>
                    <p><span className="font-medium text-gray-800">{language === "hi" ? "डिग्री:" : "Degree:"}</span> {testimonial.degree}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-[#4BC0DB] via-[#EC6F7B] to-[#F4C94A] hover:from-[#4BC0DB] hover:via-[#EC6F7B] hover:to-[#A9C63B] text-white shadow-lg shadow-[#4BC0DB]/25 hover:shadow-[#4BC0DB]/40 transition-all duration-300 hover:scale-105 text-base"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('getinvolved.cta')}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
