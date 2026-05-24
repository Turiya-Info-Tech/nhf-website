import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, Target, Lightbulb } from "lucide-react";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/language";
import ruchaPanchalImg from "@/assets/Ms. Rucha Panchal.jpeg";
import sandhyaKulkarniImg from "@/assets/Mrs. Sandhya Kulkarni.jpeg";
import sandeepBavdekarImg from "@/assets/Dr Sandeep Bavdekar.jpeg";
import anushkaSamantImg from "@/assets/Ms Anushka Samant.jpeg";
import hillaSookhadwalaImg from "@/assets/Dr Hilla S.JPG";
import anantTalaulicarImg from "@/assets/Mr. Anant J. Talaulicar​.png";

const TeamSection = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  // Static team members in the specified order
  const teamMembers = [
    {
      name: "Mrs. Sandhya Kulkarni",
      role: language === "hi" ? "निदेशक और एनएचएफ प्रभारी" : "Director and NHF In-charge",
      bio: language === "hi" ? "Topiwala National Medical College (TNMC) और BYL Nair Charitable Hospital, Mumbai में शरीरक्रिया विज्ञान की पूर्व प्रोफेसर" : "Former Professor of Physiology at Topiwala National Medical College (TNMC) and BYL Nair Charitable Hospital, Mumbai",
      image_url: sandhyaKulkarniImg
    },
    {
      name: "Mr. Anant J. Talaulicar",
      role: language === "hi" ? "मेंटर और रणनीतिक सलाहकार" : "Mentor and Strategic Advisor",
      bio: language === "hi" ? "" : "",
      image_url: anantTalaulicarImg
    },
    {
      name: "Dr Sandeep Bavdekar",
      role: language === "hi" ? "अनुसंधान सलाहकार - एनएचएफ" : "Research Consultant-NHF",
      bio: language === "hi" ? "Topiwala National Medical College और BYL Nair Charitable Hospital, Mumbai में बाल रोग विभाग के पूर्व प्रोफेसर और विभागाध्यक्ष। King Edward Memorial Hospital और Seth G.S. Medical College में बाल रोग विभाग के पूर्व प्रोफेसर।" : "Former Professor and Head, Department of Pediatrics at Topiwala National Medical College and BYL Nair Charitable Hospital, Mumbai. Former Professor, Department of Pediatrics at King Edward Memorial Hospital and Seth G.S. Medical College.",
      image_url: sandeepBavdekarImg
    },
    {
      name: "Dr Hilla Sookhadwala",
      role: language === "hi" ? "परामर्शदाता विकासात्मक बाल रोग विशेषज्ञ, एनएचएफ कार्यक्रम प्रमुख" : "Consultant Developmental Pediatrician, NHF-Program Lead",
      bio: language === "hi" ? "" : "",
      image_url: hillaSookhadwalaImg,
      imagePosition: "center 8%"
    },
    {
      name: "Ms. Rucha Panchal",
      role: language === "hi" ? "अनुसंधान सहयोगी - एनएचएफ" : "Research Associate - NHF",
      bio: language === "hi" ? "" : "",
      image_url: ruchaPanchalImg
    },
    {
      name: "Ms. Anushka Samant",
      role: language === "hi" ? "अनुसंधान सहयोगी - एनएचएफ" : "Research Associate-NHF",
      bio: language === "hi" ? "" : "",
      image_url: anushkaSamantImg
    }
  ];

  const culturePoints = [
    { icon: Target, text: language === "hi" ? "परिणामों और डेटा के माध्यम से कार्य को वस्तुनिष्ठ रूप से देखना" : "View their work objectively through outcomes and data" },
    { icon: Lightbulb, text: language === "hi" ? "हस्तक्षेपों के वास्तविक दुनिया पर प्रभाव पर चिंतन करना" : "Reflect on the real-world impact of interventions" },
    { icon: Users, text: language === "hi" ? "नैदानिक वास्तविकता पर आधारित साक्ष्य निर्माण में योगदान देना" : "Contribute to evidence generation grounded in clinical reality" }
  ];

  return (
    <section id="team" ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#EC6F7B]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            {language === "hi" ? "हमारी टीम" : "Our Team"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
            {language === "hi" ? "हमारी टीम" : "Our Team"}
          </h2>
          <p className="text-gray-600 text-lg">
            {language === "hi" ? "ऐसे पेशेवरों की समर्पित टीम जो बच्चों के बेहतर परिणामों के साझा संकल्प से जुड़ी है।" : "A dedicated team of professionals united by a shared commitment to improving outcomes for children."}
          </p>
        </div>

        {/* Team Members - Vertical Layout */}
        <div className="max-w-6xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className={`group bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 overflow-hidden hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={getStaggerDelay(index, 100)}
            >
              <CardContent className="p-7 lg:p-8 relative h-full">
                {/* Left gradient line */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-pink-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                
                <div className="flex items-start gap-6">
                  {member.image_url ? (
                    <img 
                      src={member.image_url} 
                      alt={member.name}
                      className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300 flex-shrink-0"
                      style={{ objectPosition: member.imagePosition || "center" }}
                    />
                  ) : (
                    <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                      {member.name.split(' ').map(n => n.charAt(0)).join('').slice(0, 2)}
                    </div>
                  )}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {member.name}
                    </h4>
                    <p className="text-base font-semibold text-blue-500 mb-3 leading-relaxed">
                      {member.role}
                    </p>
                    {member.bio ? (
                      <p className="text-base text-gray-500 leading-relaxed">
                        {member.bio}
                      </p>
                    ) : null}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team & Research Culture */}
        <div className={`bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-8 lg:p-10 border border-blue-100 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">{language === "hi" ? "टीम और अनुसंधान संस्कृति" : "Team & Research Culture"}</h3>
          <p className="text-blue-600 font-semibold text-center text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
            {language === "hi" ? "सेवा-प्रदाय और अनुसंधान के बीच पुल बनाकर, एनएचएफ सुनिश्चित करता है कि ज्ञान-निर्माण व्यवहार से अलग न हो, बल्कि उसी से उत्पन्न हो।" : "By bridging service delivery and research, NHF ensures that knowledge creation is not removed from practice, but emerges directly from it."}
          </p>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-6 leading-relaxed">
            {language === "hi" ? "एनएचएफ, " : "NHF operates through a Memorandum of Understanding with "}
            <a href="https://www.newhorizonscdc.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline whitespace-nowrap">New Horizons Child Development Centre (<span className="whitespace-nowrap">NHCDC</span>)</a>,{" "}
            {language === "hi" ? "के साथ समझौता ज्ञापन के माध्यम से कार्य करता है, जिससे नैदानिक अभ्यास और अनुसंधान के बीच मजबूत एकीकरण संभव होता है।" : "enabling strong integration between clinical practice and research."}
          </p>
          <p className="text-gray-500 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            {language === "hi" ? "एनएचएफ सक्रिय रूप से " : "NHF actively encourages staff from "}
            <a href="https://www.newhorizonscdc.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline whitespace-nowrap">NHCDC</a>{" "}
            {language === "hi" ? " के स्टाफ को उनके पेशेवर विकास के हिस्से के रूप में शोध गतिविधियों में भाग लेने के लिए प्रोत्साहित करता है। यह एकीकरण क्लिनिशियनों और प्रैक्टिशनरों को सक्षम बनाता है कि वे:" : " to participate in research activities as part of their professional growth. This integration enables clinicians and practitioners to:"}
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {culturePoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-lg shadow-gray-100/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
