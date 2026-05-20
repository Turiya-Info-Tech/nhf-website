import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Trophy, Medal, Sparkles } from "lucide-react";
import { useContent } from "@/lib/content";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";

const AwardsSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const { awards, loading } = useContent();

  // Rotate through icons
  const icons = [Trophy, Award, Medal, Star];
  const getIcon = (index: number) => icons[index % icons.length];

  return (
    <section id="awards" ref={ref} className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-yellow-200/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Recognition
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
            Awards & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our work has been recognized by leading organizations for its impact on 
            child development and healthcare advancement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => {
            const IconComponent = getIcon(index);
            return (
            <Card 
              key={award.id}
              className={`group bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 overflow-hidden hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={getStaggerDelay(index + 2, 100)}
            >
              <CardContent className="p-0">
                <div className="flex">
                  {/* Icon Section */}
                  <div className="w-24 md:w-32 bg-gradient-to-br from-blue-500 via-pink-500 to-rose-500 flex items-center justify-center shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    <IconComponent className="w-10 h-10 text-white relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 flex-1 relative">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-blue-600 bg-gradient-to-r from-blue-100 to-pink-100 px-3 py-1 rounded-full border border-blue-200">
                        {award.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-sm text-blue-500 font-semibold mb-2">
                      {award.organization}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
