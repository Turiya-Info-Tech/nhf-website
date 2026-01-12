import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Users, 
  GraduationCap,
  CheckCircle2,
  Building2,
  Sparkles
} from "lucide-react";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";

const WorkshopsSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  const workshopTopics = [
    "Ethics in paediatric and behavioural research",
    "Child-centred informed consent and assent",
    "Responsible data collection and management",
    "Translating clinical insight into public systems",
    "Navigating ethical dilemmas in field research",
    "Child safeguarding and data protection"
  ];

  const notableEngagements = [
    {
      title: "DEIC Capacity Building Workshops",
      partner: "In collaboration with UNICEF",
      description: "Training and monitoring systems for District Early Intervention Centres",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Clinical and Research Training Sessions",
      partner: "Multidisciplinary Teams",
      description: "Evidence-based training for healthcare professionals and researchers",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Teacher Capacity Building Program",
      partner: "Educational Institutions",
      description: "Training teachers to identify and refer children with learning difficulties to child development centres for further assessment and certification required for school concessions",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="workshops" ref={ref} className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-indigo-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-br from-emerald-100/30 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Workshops & Seminars
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight text-gray-800">
            Building Capacity Through{" "}
            <span className="text-gradient">Training</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            NHF conducts workshops and seminars for healthcare professionals, researchers, 
            and government teams, focusing on ethical practice, developmental frameworks, 
            and real-world implementation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Key Themes */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Key Training Themes</h3>
            </div>
            <div className="space-y-3">
              {workshopTopics.map((topic, index) => (
                <div 
                  key={index}
                  className={`group flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={getStaggerDelay(index + 2, 80)}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notable Engagements */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Notable Engagements</h3>
            </div>
            <div className="space-y-4">
              {notableEngagements.map((engagement, index) => (
                <Card 
                  key={index}
                  className={`group bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={getStaggerDelay(index + 3, 100)}
                >
                  <CardContent className="p-5 relative">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${engagement.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                    <h4 className="font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors">{engagement.title}</h4>
                    <p className="text-sm text-indigo-500 font-semibold mb-2">{engagement.partner}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{engagement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-8 text-center overflow-hidden transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_50%)]" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          <div className="relative flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shadow-lg">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-bold text-indigo-300 uppercase tracking-wider">
              Upcoming Events
            </span>
          </div>
          <p className="relative text-white/70 mb-6">
            Interested in attending or hosting a workshop? Get in touch with us.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-semibold"
          >
            <Users className="w-4 h-4" />
            Contact for Training
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
