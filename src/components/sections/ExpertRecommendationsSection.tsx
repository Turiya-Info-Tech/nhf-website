import { Card, CardContent } from "@/components/ui/card";
import { 
  Quote,
  Play,
  Sparkles,
  Star
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/language";

const ExpertRecommendationsSection = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="expert-recommendations" ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-[#EC6F7B]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-[#EC6F7B] font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            {language === "hi" ? "प्रशंसापत्र" : "Testimonials"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
            {language === "hi" ? "विशेषज्ञ एनएचएफ की सिफारिश क्यों करते हैं" : "Why Experts Recommend NHF"}
          </h2>
          <p className="text-gray-600 text-lg">
            {language === "hi" ? "बाल विकास और सार्वजनिक स्वास्थ्य प्रणालियों में एनएचएफ के कार्य के प्रभाव के बारे में प्रमुख पेशेवरों से सुनें।" : "Hear from leading professionals about the impact of NHF's work in child development and public health systems."}
          </p>
        </div>

        {/* Video Testimonial Placeholder */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="overflow-hidden border-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 shadow-2xl">
            <CardContent className="p-0">
              <div className="relative aspect-video flex items-center justify-center bg-gradient-to-br from-[#EC6F7B]/60 to-slate-900">
                {/* Video placeholder pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]" />
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }} />
                
                {/* Play button */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-[#EC6F7B] to-[#4BC0DB] flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-300 group">
                    <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-white/80 text-lg font-medium">{language === "hi" ? "वीडियो प्रशंसापत्र" : "Video Testimonial"}</p>
                  <p className="text-white/50 text-sm mt-1">{language === "hi" ? "जल्द आ रहा है" : "Coming Soon"}</p>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#EC6F7B]/30" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#EC6F7B]/30" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#EC6F7B]/30" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#EC6F7B]/30" />
              </div>
            </CardContent>
          </Card>

          {/* Quote placeholder */}
          <div className={`mt-8 bg-white rounded-2xl p-8 border border-gray-100 shadow-lg relative transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Quote className="absolute top-6 left-6 w-10 h-10 text-[#EC6F7B]/20" />
            <div className="pl-8">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#F4C94A] fill-[#F4C94A]" />
                ))}
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed mb-4">
                {language === "hi" ? "विशेषज्ञ का प्रशंसापत्र यहाँ जोड़ा जाएगा। यह स्थान उन पेशेवर अनुशंसाओं के लिए सुरक्षित है जो भारत भर में बाल विकास प्रणालियों पर एनएचएफ के साक्ष्य-आधारित दृष्टिकोण और प्रभाव को उजागर करेंगी।" : "Expert testimonial quote will be added here. This space is reserved for professional recommendations highlighting NHF's evidence-based approach and impact on child development systems across India."}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EC6F7B] to-[#4BC0DB] flex items-center justify-center text-white font-bold">
                  ?
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{language === "hi" ? "विशेषज्ञ का नाम" : "Expert Name"}</p>
                  <p className="text-sm text-gray-500">{language === "hi" ? "पदनाम और संस्थान" : "Designation & Institution"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertRecommendationsSection;
