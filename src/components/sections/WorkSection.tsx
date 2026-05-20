import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, FileText, Apple, Users, Sparkles } from "lucide-react";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/language";

const WorkSection = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const headingClass = language === "hi"
    ? "mt-4 mb-6 text-3xl md:text-5xl font-serif font-bold leading-[1.3] tracking-normal text-slate-900"
    : "mt-4 mb-6 text-3xl md:text-5xl font-serif font-bold leading-[1.12] tracking-[-0.02em] text-slate-900";

  const focusAreas = [
    {
      icon: Heart,
      title: language === "hi" ? "बाल अधिकार और न्यूरोविकासीय समावेशन" : "Child Rights & Neurodevelopmental Inclusion",
      description: language === "hi" ? "गरिमा, समावेशन और नैतिक सहभागिता पर केंद्रित बाल-केंद्रित, अधिकार-आधारित विकासात्मक देखभाल को बढ़ावा देना।" : "Promoting child-centred, rights-based approaches to developmental care, with a focus on dignity, inclusion, and ethical participation.",
      gradient: "from-[#EC6F7B] to-[#E88967]"
    },
    {
      icon: Brain,
      title: language === "hi" ? "प्रारंभिक हस्तक्षेप और दिव्यांगता जागरूकता" : "Early Intervention & Disability Awareness",
      description: language === "hi" ? "प्रशिक्षण और सार्वजनिक स्वास्थ्य प्रणालियों के साथ एकीकरण के माध्यम से प्रारंभिक पहचान और हस्तक्षेप मार्गों को मजबूत करना।" : "Strengthening early identification and intervention pathways through training and integration with public health systems.",
      gradient: "from-[#4BC0DB] to-[#F4C94A]"
    },
    {
      icon: FileText,
      title: language === "hi" ? "साक्ष्य-आधारित नीतिगत संलग्नता" : "Evidence-Driven Policy Engagement",
      description: language === "hi" ? "अनुसंधान को ऐसी क्रियाशील नीतियों में बदलना जो बाल विकास प्रणालियों और संसाधन आवंटन को प्रभावित करें।" : "Translating research into actionable policies that impact child development systems and resource allocation.",
      gradient: "from-[#4BC0DB] to-[#A9C63B]"
    },
    {
      icon: Apple,
      title: language === "hi" ? "पोषण और सार्वजनिक स्वास्थ्य" : "Nutrition and Public Health",
      description: language === "hi" ? "कमजोर समुदायों में बच्चों के समुचित विकास की आधारशिला के रूप में पोषण संबंधी जरूरतों का समाधान करना।" : "Addressing nutritional needs as a foundation for optimal child development in vulnerable populations.",
      gradient: "from-[#A9C63B] to-[#4BC0DB]"
    },
    {
      icon: Users,
      title: language === "hi" ? "सरकारी प्रणालियों के लिए क्षमता निर्माण" : "Capacity Building for Government Systems",
      description: language === "hi" ? "प्रशिक्षण, निगरानी ढाँचे और सहयोग के माध्यम से DEIC और सार्वजनिक स्वास्थ्य अवसंरचना को मजबूत करना।" : "Strengthening DEIC and public health infrastructure through training, monitoring frameworks, and support.",
      gradient: "from-[#4BC0DB] to-[#F4C94A]"
    }
  ];

  return (
    <section id="focus-areas" ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#A9C63B]/20 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            {language === "hi" ? "मुख्य कार्यक्षेत्र" : "Focus Areas"}
          </span>
          <h2 className={`${headingClass} max-w-4xl mx-auto`}>
            {language === "hi" ? "अनुसंधान और कार्रवाई के माध्यम से स्थायी प्रभाव" : "Creating Lasting Impact Through Research & Action"}
          </h2>
          <p className="text-gray-600 text-lg">
            {language === "hi" ? "हम समग्र बाल विकास सुनिश्चित करने के लिए कई क्षेत्रों में काम करते हैं, नैतिक अनुसंधान से लेकर नीति कार्यान्वयन तक।" : "We work across multiple domains to ensure holistic child development, from ethical research to policy implementation."}
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
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{area.title}</h3>
                <p className="text-gray-500 leading-relaxed">{area.description}</p>

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
