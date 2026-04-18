import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Briefcase, Building, GraduationCap, Quote, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import anushkaSamantImg from "@/assets/Ms Anushka Samant.jpeg";
import manshiThakkarImg from "@/assets/Ms Manshi Thakkar.jpeg";
import zobiaAlamImg from "@/assets/Ms Zobia Alam.jpeg";
import devikaMohananImg from "@/assets/Ms Devika Mohanan.jpeg";
import hrishitaKambliImg from "@/assets/Ms Hrishita Kambli.jpeg";

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

  const partnerOptions = [
    {
      icon: Building,
      title: "Partner With Us",
      description: "Section header confirmed. Detailed partnership pathways coming soon.",
      gradient: "from-orange-500 to-pink-500",
    },
    {
      icon: Briefcase,
      title: "Work With Us",
      description: "Section header confirmed. Opportunities and roles will be shared shortly.",
      gradient: "from-teal-500 to-emerald-500",
    },
  ];

  const researchInternTestimonials = [
    {
      name: "Ms Zobia Alam",
      role: "Research Intern",
      institution: "University of British Columbia",
      degree: "Bachelor of Arts in Psychology",
      image: zobiaAlamImg,
      quote:
        "As a research intern at the New Horizons Child Development Centre, I contributed to various tasks such as analysing case reports, conducting literature reviews, and designing studies to evaluate the program's effectiveness. Working across these projects gave me an integrated understanding of how culture, family structures, and community environments shape developmental outcomes in the Indian context, while also allowing me to contribute meaningfully to the community I ultimately hope to serve. What particularly made this experience meaningful was the mentorship I received throughout the internship! The team fostered a space for constant learning, critical thinking and collaboration which has significantly shaped my understanding of research and clinical rigour in the field.",
    },
    {
      name: "Ms Manshi Thakkar",
      role: "Research Intern",
      institution: "Mithibai College of Arts, Chauhan Institute of Science & Amrutben Jivanlal College of Commerce and Economics, Mumbai",
      degree: "Third Year B. Sc. (Psychology)",
      image: manshiThakkarImg,
      quote:
        "Working at NHF as a Research Intern, I had the opportunity to explore my interest in child development and mental health. I was guided through each stage of the research process, beginning from the basics. The learning environment was supportive and non-judgmental, which allowed me to ask questions and grow with confidence. The guidance from the research team and doctors helped me understand how evidence-based practices can bring meaningful improvement in children with Autism and ADHD. I am deeply grateful for the constant encouragement and would highly recommend this internship to students who wish to explore, learn, grow, and contribute to the field of mental health.",
    },
    {
      name: "Ms Anushka Samant",
      role: "Research Intern",
      institution: "KC College, HSNC University",
      degree: "MA Psychology (Clinical)",
      image: anushkaSamantImg,
      quote:
        "My journey at NHF is truly enriching and deeply meaningful. I began as a part-time intern and gradually grew into a full-time intern - a journey marked by constant learning and growth. The environment here encourages multidimensional collaboration, rich exposure and invaluable professional development. What truly sets NHF apart is its warm, supportive, and encouraging work culture. The people here are passionate about what they do, driven by purpose, and committed to making a real difference. I am grateful to be part of a space that nurtures both professional and personal growth.",
    },
    {
      name: "Ms Devika Mohanan",
      role: "Research Intern",
      institution: "KC College",
      degree: "MA Psychology (Clinical) / Master of Arts (Clinical Psychology)",
      image: devikaMohananImg,
      quote:
        "I joined New Horizons CDC as a research intern in November. I was just a bachelors degree graduate at that time and was only slightly aware of the backhand work that goes into research publication. Throughout my internship, I learnt about the stages of data collection, synthesis and analysis. There were countless discussions and brainstorming sessions where ideas were exchanged and a thorough understanding of our data analysis process was initiated. Along with research, I was also exposed to the different treatment processes for children with developmental concerns. The care & consideration with which the whole process is designed is commendable. Anyone who is interested in research and wants to know what is the process and the work that goes into it should definitely work at NHCDC. You will get to learn more about the work that goes into developing better plans and advocating for children's healthcare.",
    },
    {
      name: "Ms Hrishita Kambli",
      role: "Research Intern",
      institution: "K.C. College",
      degree: "BA Psychology",
      image: hrishitaKambliImg,
      quote:
        "During my time with the organization, I developed a strong foundation in the research process—from understanding the steps involved in conducting studies to writing comprehensive literature reviews and learned how to optimize academic search strategies to locate relevant papers efficiently. The internship fostered a collaborative environment that strengthened my teamwork skills, and I truly appreciated the emphasis placed on learning. My mentor was exceptional, providing consistent guidance throughout the internship. Overall, this experience significantly enhanced my research capabilities, and I would highly recommend this internship to anyone looking to build practical skills in research within a supportive and well-structured learning environment.",
    },
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
            Partner with NHF to build equitable, measurable outcomes for children and families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {partnerOptions.map((option, index) => (
            <Card 
              key={option.title}
              className={`group cursor-pointer bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${option.gradient} flex items-center justify-center mb-5 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <option.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-orange-600 transition-colors">{option.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{option.description}</p>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${option.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-teal-700 font-semibold text-sm uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              Research Interns
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mt-3">Research Intern Experience</h3>
            <p className="text-gray-600 mt-2">
              Hear from interns who have contributed to NHF's research and systems work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchInternTestimonials.map((testimonial, index) => (
              <Card
                key={`${testimonial.name}-${index}`}
                className={`bg-white border-0 shadow-lg shadow-gray-100/60 transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 90}ms` }}
              >
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="flex flex-col items-center text-center mb-4">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-orange-100 mb-3"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-teal-500 flex items-center justify-center shadow-lg mb-3">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <p className="text-sm font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-xs text-orange-600 font-medium">{testimonial.role}</p>
                  </div>
                  <p className="text-xs text-gray-600 italic mb-4 flex-1 line-clamp-6">"{testimonial.quote}"</p>
                  <div className="text-xs text-gray-500 space-y-1 pt-3 border-t border-gray-100">
                    <p className="line-clamp-2"><span className="font-medium text-gray-700">Institution:</span> {testimonial.institution}</p>
                    <p><span className="font-medium text-gray-700">Degree:</span> {testimonial.degree}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
