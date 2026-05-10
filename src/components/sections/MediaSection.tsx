import { Card, CardContent } from "@/components/ui/card";
import { 
  Camera, 
  Video, 
  Megaphone, 
  FileImage,
  Shield,
  Sparkles
} from "lucide-react";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/language";

const MediaSection = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  const mediaTypes = [
    {
      icon: Camera,
      title: language === "hi" ? "प्रशिक्षण और कार्यशाला दस्तावेज़ीकरण" : "Training & Workshop Documentation",
      description: language === "hi" ? "क्षमता निर्माण सत्रों, DEIC प्रशिक्षण कार्यक्रमों और सहयोगी कार्यशालाओं की तस्वीरें।" : "Photographs from capacity building sessions, DEIC training programs, and collaborative workshops.",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Video,
      title: language === "hi" ? "शैक्षणिक सामग्री और रिकॉर्डिंग" : "Educational Content & Recordings",
      description: language === "hi" ? "विकासात्मक बाल रोग और नैतिक अनुसंधान पर रिकॉर्डेड सत्र, वेबिनार और शैक्षणिक वीडियो।" : "Recorded sessions, webinars, and educational videos on developmental pediatrics and ethical research.",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      icon: Megaphone,
      title: language === "hi" ? "जन-जागरूकता और वकालत" : "Public Awareness & Advocacy",
      description: language === "hi" ? "बाल न्यूरोविकास के लिए जागरूकता अभियान, सार्वजनिक वार्ताएँ और वकालत पहलें।" : "Awareness campaigns, public talks, and advocacy initiatives for child neurodevelopment.",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: FileImage,
      title: language === "hi" ? "अनुसंधान प्रसार" : "Research Dissemination",
      description: language === "hi" ? "अनुसंधान निष्कर्षों और कार्यक्रम परिणामों के इन्फोग्राफिक्स, प्रस्तुतीकरण और दृश्य सार।" : "Infographics, presentations, and visual summaries of research findings and program outcomes.",
      gradient: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section id="media" ref={ref} className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-purple-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-gradient-to-br from-pink-100/30 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            {language === "hi" ? "मीडिया और आउटरीच" : "Media & Outreach"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
            {language === "hi" ? "ज्ञान साझा करना, जागरूकता बनाना" : "Sharing Knowledge, Building Awareness"}
          </h2>
          <p className="text-gray-600 text-lg">
            {language === "hi" ? "एनएचएफ आउटरीच गतिविधियों और ज्ञान-साझाकरण मंचों के माध्यम से पेशेवरों, समुदायों और संस्थानों के साथ जुड़ता है।" : "NHF engages with professionals, communities, and institutions through outreach activities and knowledge-sharing platforms."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mediaTypes.map((media, index) => (
            <Card 
              key={index}
              className={`group bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={getStaggerDelay(index + 2, 100)}
            >
              <CardContent className="p-6 text-center relative">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${media.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${media.gradient} flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  <media.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">{media.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{media.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ethical Note */}
        <div className={`relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(168,85,247,0.15),transparent_50%)]" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500" />
          <div className="relative flex flex-col md:flex-row items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center shrink-0 shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white mb-2">{language === "hi" ? "नैतिक मीडिया अभ्यास" : "Ethical Media Practices"}</h3>
              <p className="text-white/70 leading-relaxed">
                {language === "hi" ? "सभी मीडिया सामग्री नैतिक दिशानिर्देशों और उचित अनुमतियों के अनुसार साझा की जाती है। हम आउटरीच और जागरूकता पहलों के माध्यम से शोध और प्रैक्टिशनर समुदाय के साथ सक्रिय रूप से जुड़ते हैं, यह सुनिश्चित करते हुए कि बच्चों से जुड़ी सामग्री में गरिमा, गोपनीयता और उचित सहमति प्रोटोकॉल बनाए रखें।" : "All media is shared in accordance with ethical guidelines and appropriate permissions. We actively engage with the research and practitioner community through outreach and awareness initiatives, ensuring that content involving children maintains dignity, privacy, and proper consent protocols."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
