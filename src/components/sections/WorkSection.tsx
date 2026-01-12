import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Heart, 
  FileText, 
  Apple, 
  Users,
  Sparkles
} from "lucide-react";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";

const WorkSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const focusAreas = [
    {
      icon: Heart,
      title: "Child Rights & Neurodevelopmental Inclusion",
      description: "Promoting child-centred, rights-based approaches to developmental care, with a focus on dignity, inclusion, and ethical participation.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Brain,
      title: "Early Intervention & Disability Awareness",
      description: "Strengthening early identification and intervention pathways through training and integration with public health systems.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: FileText,
      title: "Evidence-Driven Policy Engagement",
      description: "Translating research into actionable policies that impact child development systems and resource allocation.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Apple,
      title: "Nutrition and Public Health",
      description: "Addressing nutritional needs as a foundation for optimal child development in vulnerable populations.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Capacity Building for Government Systems",
      description: "Strengthening DEIC and public health infrastructure through training, monitoring frameworks, and support.",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <section id="focus-areas" ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100/40 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Focus Areas
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
            Creating Lasting Impact Through{" "}
            <span className="text-gradient">Research & Action</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We work across multiple domains to ensure holistic child development, 
            from ethical research to policy implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <Card 
              key={index}
              className={`group bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 overflow-hidden hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={getStaggerDelay(index, 100)}
            >
              <CardContent className="p-6 relative">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">{area.title}</h3>
                <p className="text-gray-500 leading-relaxed">{area.description}</p>
                
                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${area.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
