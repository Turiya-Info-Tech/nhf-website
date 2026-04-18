import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Database, Building2, Sparkles, Heart, Star } from "lucide-react";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";
import heroImage from "@/assets/hero-children.jpg";

const ProgramsSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const keyInitiatives = [
    {
      icon: Building2,
      title: "Capacity Building and System Strengthening with Government of Maharashtra",
      description: "Designing and implementing training and monitoring systems for District Early Intervention Centres (DEICs), beginning with Aundh General Hospital, Pune – in collaboration with UNICEF. Community and clinic-based modules that educate caregivers on goal-setting, home strategies, and system navigation.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Clinical and Implementation Research",
      description: "Clinical and behavioural profiling, intervention impact assessments, and implementation research within government systems and DEICs to inform personalized intervention models and scalable programs.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Ethical Pediatric Research Frameworks with Data Protection Initiatives",
      description: "Establishing ethical review and guidance mechanisms for responsible research involving children, developing practical guidelines and SOPs for ethical decision-making, and supporting ethical data collection, storage, and analysis practices with secure tools.",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="programs" ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-transparent rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-3xl -translate-x-1/2" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className={`lg:sticky lg:top-28 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Key Initiatives
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
              Delivering Meaningful{" "}
              <span className="text-gradient">Outcomes</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our programs span from ethical research frameworks to on-ground 
              implementation, creating a comprehensive ecosystem for child development.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Each initiative is designed with measurable outcomes, ensuring 
              accountability and real-world impact for children and families.
            </p>
            <Button 
              className="group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
              onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Partner With Us
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Button>

            {/* Featured Image */}
            <div className={`mt-10 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 group">
                <img 
                  src={heroImage} 
                  alt="Children learning and growing together" 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Floating stats badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                    <Heart className="w-5 h-5 text-rose-500 animate-pulse" />
                    <span className="text-sm font-semibold text-slate-700">5000+ Children Supported</span>
                  </div>
                  <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl px-3 py-2 shadow-lg">
                    <Star className="w-4 h-4 text-white fill-white" />
                    <span className="text-sm font-bold text-white">12+ Years</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl -z-10 opacity-60" />
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl -z-10 opacity-60" />
            </div>
          </div>

          <div className="space-y-4">
            {keyInitiatives.map((program, index) => (
              <div 
                key={index}
                className={`group p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={getStaggerDelay(index, 100)}
              >
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${program.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-orange-600 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
                {/* Hover indicator */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b ${program.gradient} rounded-r-full group-hover:h-1/2 transition-all duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
