import { Quote, Heart, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/language";

const FounderMessageSection = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const content = language === "hi"
    ? {
        badge: "संस्थापक की ओर से",
        titlePrefix: "डॉ. समीर एच. दलवाई का",
        role: "संस्थापक एवं निदेशक",
        specialty: "विकासात्मक बाल रोग विशेषज्ञ",
        paragraphs: [
          "विकासात्मक बाल रोग के क्षेत्र में मेरे काम के केंद्र में एक मूल विश्वास है: जब हम किसी बच्चे की अधूरी जरूरतों का जवाब समझ, निरंतर सहभागिता और सम्मान के साथ देते हैं, तो हर बच्चे में बढ़ने, संवाद करने और जुड़ने की क्षमता होती है।",
          "विकासात्मक देरी और व्यवहारगत भिन्नताएँ ऐसे मुद्दे नहीं हैं जिन्हें बस ‘ठीक’ करना है। वे संकेत हैं। ऐसे संकेत जो बताते हैं कि बच्चे के वातावरण, अनुभवों या संबंधों में समायोजन, सहयोग और मानवीय जुड़ाव की आवश्यकता है।",
          "आधुनिक चिकित्सा ने हमें निदान के शक्तिशाली साधन दिए हैं, लेकिन प्रगति केवल लेबल से नहीं आती। वास्तविक विकास तब शुरू होता है जब हम अपना ध्यान लक्षणों से सहभागिता की ओर, माइलस्टोन से संबंधों की ओर, और अलग-थलग हस्तक्षेपों से रोज़मर्रा की मानवीय सहभागिता की ओर मोड़ते हैं।",
          "इस यात्रा में माता-पिता केंद्रीय भूमिका निभाते हैं। जब देखभालकर्ताओं को ज्ञान, स्पष्टता और आत्मविश्वास मिलता है, तो विकास केवल क्लिनिक तक सीमित नहीं रहता बल्कि दैनिक जीवन का हिस्सा बन जाता है। यही दर्शन परिवारों से आगे बढ़कर पेशेवरों, संस्थानों और प्रणालियों तक जाता है।",
          "न्यू होराइजन्स हेल्थ एंड रिसर्च फाउंडेशन के माध्यम से हमारा उद्देश्य इस मानवीय, साक्ष्य-आधारित दृष्टिकोण को अनुसंधान पद्धतियों, सरकारी कार्यक्रमों और नीतिगत ढाँचों में स्थापित करना है। हमारा लक्ष्य यह सुनिश्चित करना है कि विकासात्मक देखभाल नैतिक, सुलभ और गरिमा पर आधारित हो।",
        ],
        quote: "जब विज्ञान और मानवता साथ काम करते हैं, तो विकास रुका नहीं रहता। वह बस फिर से शुरू होता है।",
      }
    : {
        badge: "From the Founder's Desk",
        titlePrefix: "A Message from",
        role: "Founder & Director",
        specialty: "Developmental Pediatrician",
        paragraphs: [
          "At the heart of my work in developmental pediatrics lies a fundamental conviction: every child has the capacity to grow, communicate, and connect when we respond to their unmet needs with understanding and consistent engagement.",
          "Developmental delays and behavioural differences are not problems to be \"fixed.\" They are signals. Signals that a child's environment, experiences, or relationships require adjustment, support, and human connection.",
          "Modern medicine has given us powerful tools for diagnosis, but progress cannot come from labels alone. True development begins when we shift our focus from symptoms to engagement, from milestones to relationships, and from isolated interventions to everyday human interaction.",
          "Parents are central to this journey. When caregivers are empowered with knowledge, clarity, and confidence, development becomes part of daily life, not just a clinic-based activity. This philosophy extends beyond families to professionals, institutions, and systems.",
          "Through the New Horizons Health and Research Foundation, we aim to embed this human-centred, evidence-based approach within research practices, government programs, and policy frameworks. Our goal is to ensure that developmental care is ethical, accessible, and grounded in dignity.",
        ],
        quote: "When science and humanity work together, development does not remain delayed. It simply begins anew.",
      };
  
  return (
    <section id="founders-message" ref={ref} className="py-20 lg:py-28 bg-gradient-to-br from-orange-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-pink-100/30 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            {content.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold mt-4 mb-4 leading-tight">
            {content.titlePrefix}{" "}
            <span className="text-gradient whitespace-nowrap">Dr.&nbsp;Samir&nbsp;H.&nbsp;Dalwai</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Photo and Title */}
          <div className={`lg:col-span-1 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="sticky top-28">
              <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-6 text-center overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.15),transparent_50%)]" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500" />
                <img 
                  src="/image.png" 
                  alt="Dr. Samir H. Dalwai - Founder & Director of NHF"
                  className="relative w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-xl mx-auto mb-4 group-hover:scale-105 transition-transform duration-500"
                />
                <h3 className="text-xl font-serif font-bold mb-1 text-white">Dr. Samir H. Dalwai</h3>
                <p className="text-sm text-white/60 mb-4">{content.role}</p>
                <div className="flex items-center justify-center gap-2 text-orange-400 text-sm">
                  <Heart className="w-4 h-4 fill-current animate-pulse" />
                  <span>{content.specialty}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-100 shadow-xl relative overflow-hidden">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-orange-500/10" />
              
              <div className="space-y-6 text-gray-600 relative z-10">
                {content.paragraphs.map((paragraph, index) => (
                  <p key={index} className={index === 0 ? "text-lg leading-relaxed" : "leading-relaxed"}>
                    {paragraph}
                  </p>
                ))}

                <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-6 mt-8 overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 via-pink-500 to-rose-500" />
                  <p className="text-lg font-serif italic text-white/90 relative z-10">
                    &quot;{content.quote}&quot;
                  </p>
                  <p className="text-sm text-orange-400 font-medium mt-3 relative z-10">
                    — Dr. Samir H. Dalwai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessageSection;
