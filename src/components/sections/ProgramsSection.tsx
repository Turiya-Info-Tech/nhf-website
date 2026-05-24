import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";
import {
  ArrowRight,
  Baby,
  Building2,
  HeartPulse,
  MonitorSmartphone,
  School,
  Soup,
  Sparkles,
  Users,
} from "lucide-react";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";
import classroomImage from "@/assets/hero-children.jpg";
import communityImage from "@/assets/hero-community.webp";
import clinicalImage from "@/assets/hero-medical-care.webp";

const ProgramsSection = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [activeProgram, setActiveProgram] = useState(0);
  const sectionHeadingClass = language === "hi"
    ? "text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-[1.3] tracking-normal text-slate-900"
    : "text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-[1.12] tracking-[-0.02em] text-slate-900";

  const programs = [
    {
      icon: School,
      tab: language === "hi" ? "स्कूल स्वास्थ्य" : "School Health",
      pillar: language === "hi" ? "स्कूल स्वास्थ्य" : "School Health",
      title: language === "hi" ? "कक्षा से आगे तक" : "From the classroom outward",
      description:
        language === "hi"
          ? "स्कूल-आधारित कार्य जो शिक्षकों और देखभालकर्ताओं को चिंताओं की जल्दी पहचान करने, दैनिक सहयोग रणनीतियों को मजबूत करने और बच्चों को समय पर विकासात्मक सहायता से जोड़ने में मदद करता है।"
          : "School-based work that helps educators and caregivers identify concerns early, strengthen daily support strategies, and connect children to timely developmental care.",
      image: classroomImage,
      gradient: "from-[#F4C94A] to-[#4BC0DB]",
      highlights:
        language === "hi"
          ? ["शिक्षक क्षमता निर्माण", "प्रारंभिक पहचान", "दैनिक स्कूल परिवेश में सहयोग"]
          : ["Teacher capacity building", "Early identification", "Support inside everyday school settings"],
    },
    {
      icon: Baby,
      tab: language === "hi" ? "प्रारंभिक बचपन" : "Early Childhood",
      pillar: language === "hi" ? "बाल विकास" : "Child Development",
      title: language === "hi" ? "प्रारंभिक बचपन की नींव" : "Early childhood foundations",
      description:
        language === "hi"
          ? "आंगनवाड़ियों, क्लीनिकों और समुदायों में किया गया कार्य, जो विकासात्मक निगरानी, देखभालकर्ता मार्गदर्शन और जीवन के सबसे प्रारंभिक और प्रभावशाली वर्षों में सहयोग पर केंद्रित है।"
          : "Work in anganwadis, clinics, and communities focused on developmental surveillance, caregiver guidance, and support during the earliest and most influential years of life.",
      image: communityImage,
      gradient: "from-[#4BC0DB] to-[#A9C63B]",
      highlights:
        language === "hi"
          ? ["आंगनवाड़ी सहभागिता", "देखभालकर्ता मार्गदर्शन", "प्रारंभिक विकासात्मक सहयोग"]
          : ["Anganwadi engagement", "Caregiver guidance", "Early developmental support"],
    },
    {
      icon: HeartPulse,
      tab: language === "hi" ? "विकासात्मक विकार" : "Developmental Disorders",
      pillar: language === "hi" ? "स्वास्थ्य" : "Health",
      title: language === "hi" ? "साक्ष्य-आधारित विकासात्मक देखभाल" : "Evidence-led developmental care",
      description:
        language === "hi"
          ? "विकासात्मक देरी, सीखने की कठिनाइयों और न्यूरोडेवलपमेंटल स्थितियों वाले बच्चों के लिए नैदानिक और क्षेत्र-आधारित कार्य, ताकि सहायता व्यावहारिक, समय पर और साक्ष्य-आधारित हो।"
          : "Clinical and field-informed work for children with developmental delays, learning difficulties, and neurodevelopmental conditions so support is practical, timely, and evidence-based.",
      image: clinicalImage,
      gradient: "from-[#EC6F7B] to-[#E88967]",
      highlights:
        language === "hi"
          ? ["विकासात्मक आकलन", "देखभाल मार्ग", "बहु-विषयी हस्तक्षेप मॉडल"]
          : ["Developmental assessments", "Care pathways", "Interdisciplinary intervention models"],
    },
    {
      icon: MonitorSmartphone,
      tab: language === "hi" ? "डिजिटल स्वच्छता" : "Digital Hygiene",
      pillar: language === "hi" ? "मानसिक स्वास्थ्य" : "Mental Health",
      title: language === "hi" ? "स्वस्थ डिजिटल परिवेश" : "Healthier digital environments",
      description:
        language === "hi"
          ? "ऐसे कार्यक्रम जो जागरूकता, रोकथाम और बेहतर दिनचर्या के माध्यम से तकनीक के उपयोग, डिजिटल बोझ और बच्चों व किशोरों के कल्याण पर काम करते हैं।"
          : "Programmes that address technology use, digital overload, and the wellbeing of children and adolescents through awareness, prevention, and healthier routines.",
      image: classroomImage,
      gradient: "from-[#EC6F7B] to-[#4BC0DB]",
      highlights:
        language === "hi"
          ? ["स्क्रीन उपयोग जागरूकता", "माता-पिता और स्कूल मार्गदर्शन", "व्यवहार-केंद्रित रोकथाम"]
          : ["Screen-use awareness", "Parent and school guidance", "Behaviour-focused prevention"],
    },
    {
      icon: Soup,
      tab: language === "hi" ? "किशोर स्वास्थ्य" : "Adolescent Health",
      pillar: language === "hi" ? "पोषण" : "Nutrition",
      title: language === "hi" ? "गरिमा और लचीलापन के साथ बढ़ना" : "Growing with dignity and resilience",
      description:
        language === "hi"
          ? "ऐसा कार्य जो किशोरों को स्वास्थ्य, पोषण और मनोसामाजिक हस्तक्षेपों के माध्यम से सहयोग देता है, जो जीवन के इस चरण और इसके आसपास की प्रणालियों की जटिलता को समझता है।"
          : "Work that supports adolescents through health, nutrition, and psychosocial interventions that recognise the complexity of this life stage and the systems around it.",
      image: communityImage,
      gradient: "from-[#A9C63B] to-[#4BC0DB]",
      highlights:
        language === "hi"
          ? ["पोषण-संबद्ध सहयोग", "मनोसामाजिक कल्याण", "आयु-उपयुक्त स्वास्थ्य शिक्षा"]
          : ["Nutrition-linked support", "Psychosocial wellbeing", "Age-appropriate health education"],
    },
    {
      icon: Building2,
      tab: language === "hi" ? "समुदाय और आउटरीच" : "Community & Outreach",
      pillar: language === "hi" ? "सार्वजनिक प्रणालियाँ" : "Public Systems",
      title: language === "hi" ? "ऐसी प्रणालियाँ जो और आगे पहुँचें" : "Systems that reach further",
      description:
        language === "hi"
          ? "अस्पतालों, सरकारी संस्थानों और सामुदायिक मंचों के साथ कार्यान्वयन भागीदारी, जो देखभाल की डिलीवरी, पहुँच और दीर्घकालिक स्थिरता को बेहतर बनाती है।"
          : "Implementation partnerships with hospitals, government institutions, and community platforms that improve how care is delivered, accessed, and sustained at scale.",
      image: clinicalImage,
      gradient: "from-slate-700 to-slate-900",
      highlights:
        language === "hi"
          ? ["सरकारी भागीदारी", "सामुदायिक आउटरीच", "प्रणाली सुदृढ़ीकरण और विस्तार"]
          : ["Government partnerships", "Community outreach", "System-strengthening and scale"],
    },
  ];

  const selectedProgram = programs[activeProgram];

  return (
    <section id="programs" ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#4BC0DB]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#A9C63B]/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`max-w-3xl mx-auto text-center mb-16 lg:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              {t('programs.badge')}
            </span>
            <h2 className={`${sectionHeadingClass} max-w-4xl`}>
              {t('programs.title')}
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              {t('programs.subtitle')} {t('programs.description')}
            </p>
            <Button 
              className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 text-base"
              onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('programs.partner')}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
        </div>

        <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {programs.map((program, index) => {
              const isActive = activeProgram === index;
              return (
                <button
                  key={program.tab}
                  type="button"
                  onClick={() => setActiveProgram(index)}
                  className={`rounded-xl border px-4 py-4 text-left transition-all duration-300 group ${
                    isActive
                      ? 'border-transparent bg-slate-900 text-white shadow-lg hover:shadow-xl'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-blue-200 hover:-translate-y-0.5 hover:shadow-md'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={getStaggerDelay(index, 80)}
                >
                  <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${program.gradient} shadow-md group-hover:scale-105 transition-transform`}>
                    <program.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm font-semibold leading-snug">{program.tab}</p>
                </button>
              );
            })}
          </div>

          <div className={`grid lg:grid-cols-[1.2fr_0.8fr] gap-8 rounded-2xl bg-slate-900 p-8 lg:p-10 xl:p-12 text-white shadow-xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${selectedProgram.gradient} px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-md`}>
                  <selectedProgram.icon className="h-4 w-4" />
                  {selectedProgram.pillar}
                </span>
                <span className="rounded-lg border border-white/20 px-4 py-2 text-xs uppercase tracking-wider text-white/70 bg-white/5">
                  {language === "hi" ? "कार्यक्रम क्षेत्र" : "Programme Area"}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6 text-white">
                {selectedProgram.title}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {selectedProgram.description}
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {selectedProgram.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-lg border border-white/15 bg-white/8 px-4 py-4 text-sm font-medium text-white/90 backdrop-blur-sm hover:bg-white/12 transition-colors"
                  >
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-3 text-sm text-white/75 bg-white/5 rounded-lg p-4">
                <Users className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {language === "hi"
                    ? "बाल-केंद्रित प्रणालियों में साक्ष्य को दैनिक व्यवहार में लाने के लिए तैयार किया गया।"
                    : "Designed to move evidence into everyday practice across child-serving systems."}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.tab}
                className="h-full min-h-[380px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-2">
                  {language === "hi" ? "एनएचएफ कार्यक्रम" : "NHF Programme"}
                </p>
                <h4 className="text-2xl font-serif font-bold mb-3 text-white">{selectedProgram.tab}</h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  {language === "hi"
                    ? "स्वास्थ्य और सार्वजनिक प्रणालियों में अनुसंधान, कार्यान्वयन और भागीदारी पर आधारित।"
                    : "Grounded in research, implementation, and partnerships across health and public systems."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
