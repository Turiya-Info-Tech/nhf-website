import { FlaskConical, GraduationCap, HandHeart, Megaphone, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const fundamentals = [
    {
      title: "Research",
      icon: FlaskConical,
      gradient: "from-blue-500 to-indigo-500",
      items: [
        "Publications",
        "Scientific Conferences",
        "Dissemination activities",
        "Vignettes and Archives",
      ],
    },
    {
      title: "Training",
      icon: GraduationCap,
      gradient: "from-teal-500 to-emerald-500",
      items: [
        "Institutional and IAP Fellowships in Neurodevelopmental and Behavioral Pediatrics",
        "Research Internships",
        "Systems Strengthening & Innovation",
      ],
    },
    {
      title: "Advocacy",
      icon: Megaphone,
      gradient: "from-orange-500 to-pink-500",
      items: [
        "Early Childhood Development Initiatives",
        "Nutrition Initiatives",
        "School-centric Initiatives",
        "Webinars, Workshops, School & Parent Awareness Programs",
        "Global and local outreach",
      ],
    },
    {
      title: "Rehabilitation",
      icon: HandHeart,
      gradient: "from-purple-500 to-violet-500",
      items: [
        "Free Medical Camps",
        "Capacity Building Initiatives",
        "Parent/Child Engagement Programs",
      ],
    },
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
    <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-b from-background to-gray-50/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-100/50 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4" />
              About NHF
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-4 leading-tight">
              Bridging Science, Service & Policy for{" "}
              <span className="text-gradient">Child Development</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              NHF is positioned at the intersection of science, service delivery, and policy action.
              We build evidence, strengthen systems, and advocate for child-rights-centered development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-100/60 border border-gray-100">
              <h3 className="text-xl font-serif font-bold mb-3 text-slate-800">NHF Positioning Statement</h3>
              <p className="text-gray-600 leading-relaxed">
                We advance child development by integrating scientific research, service implementation,
                and policy engagement. Our work ensures that ethical, evidence-based practice reaches the
                children and families who need it most.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-100/60 border border-gray-100">
              <h3 className="text-xl font-serif font-bold mb-3 text-slate-800">What We Do</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                NHF supports the design, evaluation, and strengthening of child development initiatives by embedding evidence-based approaches into real-world systems. Our work focuses on improving how programs are implemented, how learning is generated from practice, and how insights inform policy and scale.
              </p>
              <p className="text-orange-600 font-medium text-sm">
                Learn more about our work, our impact, and opportunities to collaborate.
              </p>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">4 Fundamentals of NHF</h3>
            <p className="text-gray-600">Each pillar is grounded in measurable outcomes and equity for every child.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fundamentals.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/60 border border-gray-100 transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${200 + index * 120}ms` }}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-slate-800">{pillar.title}</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
