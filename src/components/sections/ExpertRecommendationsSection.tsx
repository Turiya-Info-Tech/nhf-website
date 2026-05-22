import { Card, CardContent } from "@/components/ui/card";
import { 
  Quote,
  Sparkles
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/language";
import zobiaAlamVideo from "@/assets/Ms. Zobia Alam.mp4";

const ExpertRecommendationsSection = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const testimonialDescription = "As a research intern at the New Horizons Child Development Centre, I contributed to various tasks such as analysing case reports, conducting literature reviews, and designing studies to evaluate the program's effectiveness. Working across these projects gave me an integrated understanding of how culture, family structures, and community environments shape developmental outcomes in the Indian context, while also allowing me to contribute meaningfully to the community I ultimately hope to serve. What particularly made this experience meaningful was the mentorship I received throughout the internship! The team fostered a space for constant learning, critical thinking and collaboration which has significantly shaped my understanding of research and clinical rigour in the field.";

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

        {/* Video Testimonial */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="overflow-hidden border-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 shadow-2xl">
            <CardContent className="p-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
              <video
                src={zobiaAlamVideo}
                controls
                preload="metadata"
                className="aspect-video w-full"
              >
                {language === "hi" ? "आपका ब्राउज़र वीडियो टैग को सपोर्ट नहीं करता।" : "Your browser does not support the video tag."}
              </video>
            </CardContent>
          </Card>

          {/* Description */}
          <div className={`mt-8 bg-white rounded-2xl p-8 border border-gray-100 shadow-lg relative transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Quote className="absolute top-6 left-6 w-10 h-10 text-[#EC6F7B]/20" />
            <div className="pl-8">
              <div className="mb-4 border-b border-gray-100 pb-4">
                <p className="text-base font-semibold text-slate-900">Ms Zobia Alam</p>
                <p className="text-sm font-medium text-[#EC6F7B]">{language === "hi" ? "अनुसंधान इंटर्न" : "Research Intern"}</p>
                <p className="text-sm text-gray-600 mt-1">University of British Columbia</p>
                <p className="text-sm text-gray-500">Bachelor of Arts in Psychology</p>
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed mb-4">
                {testimonialDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertRecommendationsSection;
