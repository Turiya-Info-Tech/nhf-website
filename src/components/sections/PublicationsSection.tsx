import { Card, CardContent } from "@/components/ui/card";
import { FileText, ExternalLink, BookOpen, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";
import { getPublicationsSortedByYear, Publication } from "@/data/publications";
import { useState } from "react";
import { useLanguage } from "@/lib/language";

const PublicationsSection = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [showAllModal, setShowAllModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const allPublications = getPublicationsSortedByYear();
  const displayPublications = allPublications.slice(0, 6); // Show only first 6 on homepage

  const totalPages = Math.ceil(allPublications.length / itemsPerPage);
  const paginatedPublications = allPublications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "Research Paper":
        return { bg: "from-blue-500 to-indigo-600", text: "text-blue-600 bg-blue-50 border-blue-200" };
      case "Case Report":
        return { bg: "from-purple-500 to-violet-600", text: "text-purple-600 bg-purple-50 border-purple-200" };
      case "Consensus Guidelines":
        return { bg: "from-emerald-500 to-teal-600", text: "text-emerald-600 bg-emerald-50 border-emerald-200" };
      case "Guidelines":
        return { bg: "from-teal-500 to-cyan-600", text: "text-teal-600 bg-teal-50 border-teal-200" };
      case "Review Article":
        return { bg: "from-amber-500 to-blue-600", text: "text-amber-600 bg-amber-50 border-amber-200" };
      case "Book Chapter":
        return { bg: "from-rose-500 to-pink-600", text: "text-rose-600 bg-rose-50 border-rose-200" };
      case "Position Paper":
        return { bg: "from-indigo-500 to-blue-600", text: "text-indigo-600 bg-indigo-50 border-indigo-200" };
      case "Commentary":
        return { bg: "from-slate-500 to-gray-600", text: "text-slate-600 bg-slate-50 border-slate-200" };
      default:
        return { bg: "from-gray-500 to-slate-600", text: "text-gray-600 bg-gray-50 border-gray-200" };
    }
  };

  const getTypeLabel = (type: string) => {
    if (language !== "hi") return type;

    switch (type) {
      case "Research Paper":
        return "शोध पत्र";
      case "Case Report":
        return "केस रिपोर्ट";
      case "Consensus Guidelines":
        return "सहमति दिशानिर्देश";
      case "Guidelines":
        return "दिशानिर्देश";
      case "Review Article":
        return "समीक्षा लेख";
      case "Book Chapter":
        return "पुस्तक अध्याय";
      case "Position Paper":
        return "पोज़िशन पेपर";
      case "Commentary":
        return "टिप्पणी";
      default:
        return type;
    }
  };

  return (
    <>
      <section id="publications" ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-indigo-100/30 to-transparent rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              {language === "hi" ? "हमारा अनुसंधान" : "Our Research"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
              {language === "hi" ? "प्रकाशन और संसाधन" : "Publications & Resources"}
            </h2>
            <p className="text-gray-600 text-lg">
              {language === "hi" ? "हमारे 50+ शोध पत्र, केस रिपोर्ट और नैदानिक दिशानिर्देश देखें। हम बाल विकास संबंधी व्यवहारों को आगे बढ़ाने के लिए खुले ज्ञान-साझाकरण में विश्वास करते हैं।" : "Access our 50+ research papers, case reports, and clinical guidelines. We believe in open knowledge sharing to advance child development practices."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {displayPublications.map((pub, index) => {
              const typeStyles = getTypeStyles(pub.type);
              const hasLink = pub.link && pub.link !== "" && pub.link !== "_";
              return (
              <Card 
                key={pub.id}
                className={`group bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={getStaggerDelay(index + 2, 80)}
              >
                <CardContent className="p-4 md:p-5 relative">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="flex items-start gap-3 md:gap-4">
                    {/* Icon */}
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${typeStyles.bg} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <FileText className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                        <span className={`text-[10px] md:text-xs font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full border ${typeStyles.text}`}>
                          {getTypeLabel(pub.type)}
                        </span>
                        <span className="text-[10px] md:text-xs text-gray-500 font-medium">
                          {pub.year}
                        </span>
                        {/* View Button - inline on mobile */}
                        {hasLink && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="ml-auto p-1 h-auto md:hidden text-blue-600 hover:bg-blue-50"
                            onClick={() => window.open(pub.link, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 mb-1 line-clamp-1">
                        {pub.authors}
                      </p>
                      <p className="text-[10px] md:text-xs text-blue-500 font-medium">
                        {pub.journal}
                      </p>
                    </div>
                    
                    {/* View Button - visible on desktop only */}
                    {hasLink && (
                    <div className="hidden md:flex gap-2 shrink-0 self-center">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="gap-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 group/btn"
                        onClick={() => window.open(pub.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{language === "hi" ? "देखें" : "View"}</span>
                      </Button>
                    </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>

          {/* View All Button */}
          <div className={`text-center mt-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg"
              onClick={() => setShowAllModal(true)}
            >
              <BookOpen className="w-5 h-5" />
              {language === "hi" ? `सभी ${allPublications.length} प्रकाशन देखें` : `View All ${allPublications.length} Publications`}
            </Button>
          </div>

        {/* Outcome-driven collaboration content */}
        <div className={`mt-14 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_60%)]" />
            <h3 className="relative text-2xl md:text-3xl font-serif font-bold mb-3">{language === "hi" ? "परिणाम-उन्मुख साझेदारियाँ" : "Outcome-oriented partnerships"}</h3>
            <p className="relative text-white/70 max-w-2xl mb-6">
              {language === "hi" ? "हम उन साझेदारों के साथ सहयोग करते हैं जो बच्चों और परिवारों के लिए मापनीय परिणामों को महत्व देते हैं। यदि आप स्पष्ट मानकों के साथ साक्ष्य-सूचित प्रभाव चाहते हैं, तो इसे साथ मिलकर बनाते हैं।" : "We collaborate with partners who value measurable outcomes for children and families. If you want evidence-informed impact with clear metrics, let's build it together."}
            </p>
            <Button
              variant="outline"
              size="lg"
              className="relative bg-white text-slate-900 border-white hover:bg-gray-100 font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {language === "hi" ? "मापनीय परिणामों के लिए साझेदारी करें" : "Partner for measurable outcomes"}
            </Button>
          </div>
        </div>

        <div className={`grid md:grid-cols-3 gap-6 mt-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            {
              title: language === "hi" ? "जानिए हमने पहले क्या किया है" : "Get to know what we have done before",
              description: language === "hi" ? "पिछले कार्यक्रमों, पायलटों और साक्ष्य-समर्थित पहलों को देखें।" : "Explore previous programs, pilots, and evidence-backed initiatives.",
              gradient: "from-blue-500 to-indigo-500",
            },
            {
              title: language === "hi" ? "निःशुल्क चिकित्सा शिविर (समानता पर केंद्रित)" : "Free Medical Camps (equity focus)",
              description: language === "hi" ? "वंचित बच्चों की पहुँच संबंधी खाइयों को कम करने के लिए बनाए गए सामुदायिक शिविर।" : "Community-based camps designed to close access gaps for underserved children.",
              gradient: "from-emerald-500 to-teal-500",
            },
            {
              title: language === "hi" ? "वकालत: चिल्ड्रन्स मैनिफेस्टो" : "Advocacy: Children’s Manifesto",
              description: language === "hi" ? "ऐसी नीतिगत प्रतिबद्धताएँ जो बाल विकास और समावेशी प्रणालियों को प्राथमिकता देती हैं।" : "Policy commitments that prioritize child development and inclusive systems.",
              gradient: "from-blue-500 to-pink-500",
            },
          ].map((item) => (
            <Card key={item.title} className="border-0 shadow-lg shadow-gray-100/60">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} mb-4`} />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

      {/* Full Publications Modal */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-7xl max-h-[95vh] md:max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-100 bg-white">
              <div>
                <h2 className="text-lg md:text-2xl font-serif font-bold text-gray-800">{language === "hi" ? "सभी प्रकाशन" : "All Publications"}</h2>
                <p className="text-gray-500 text-xs md:text-sm mt-1">
                  {language === "hi" ? `2010 से 2025 तक के ${allPublications.length} प्रकाशन` : `${allPublications.length} publications from 2010 to 2025`}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowAllModal(false)}
                className="rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Table Container */}
            <div className="flex-1 overflow-hidden flex flex-col">
              {/* Fixed Table Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-3 md:px-6">
                <table className="w-full table-fixed">
                  <thead>
                    <tr>
                      <th className="w-[50px] md:w-[70px] text-left py-3 md:py-4 px-2 md:px-4 text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider">{language === "hi" ? "वर्ष" : "Year"}</th>
                      <th className="text-left py-3 md:py-4 px-2 md:px-4 text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider">{language === "hi" ? "शीर्षक" : "Title"}</th>
                      <th className="w-[20%] text-left py-3 md:py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">{language === "hi" ? "जर्नल" : "Journal"}</th>
                      <th className="w-[80px] md:w-[140px] text-left py-3 md:py-4 px-2 md:px-4 text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">{language === "hi" ? "प्रकार" : "Type"}</th>
                      <th className="w-[50px] md:w-[70px] text-center py-3 md:py-4 px-2 md:px-4 text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider">{language === "hi" ? "लिंक" : "Link"}</th>
                    </tr>
                  </thead>
                </table>
              </div>

              {/* Scrollable Table Body */}
              <div className="flex-1 overflow-auto px-3 md:px-6">
                <table className="w-full table-fixed">
                  <tbody className="divide-y divide-gray-100">
                    {paginatedPublications.map((pub) => {
                      const typeStyles = getTypeStyles(pub.type);
                      const hasLink = pub.link && pub.link !== "" && pub.link !== "_";
                      return (
                        <tr key={pub.id} className="hover:bg-gray-50 transition-colors">
                          <td className="w-[50px] md:w-[70px] py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm font-medium text-gray-800 align-top">{pub.year}</td>
                          <td className="py-3 md:py-4 px-2 md:px-4 align-top">
                            <p className="text-xs md:text-sm font-medium text-gray-800 line-clamp-2">{pub.title}</p>
                            <p className="text-[10px] md:text-xs text-gray-500 mt-1 line-clamp-1">{pub.authors}</p>
                            {/* Show type badge on mobile inline */}
                            <span className={`sm:hidden inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${typeStyles.text}`}>
                              {getTypeLabel(pub.type)}
                            </span>
                          </td>
                          <td className="w-[20%] py-3 md:py-4 px-4 text-xs text-gray-600 hidden lg:table-cell align-top line-clamp-2">{pub.journal}</td>
                          <td className="w-[80px] md:w-[140px] py-3 md:py-4 px-2 md:px-4 align-top hidden sm:table-cell">
                            <span className={`inline-block text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-full border whitespace-nowrap ${typeStyles.text}`}>
                              {getTypeLabel(pub.type)}
                            </span>
                          </td>
                          <td className="w-[50px] md:w-[70px] py-3 md:py-4 px-2 md:px-4 text-center align-top">
                            {hasLink ? (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-1.5 md:p-2"
                                onClick={() => window.open(pub.link, '_blank')}
                              >
                                <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                              </Button>
                            ) : (
                              <span className="text-[10px] md:text-xs text-gray-400">-</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 md:p-4 border-t border-gray-100 bg-gray-50">
              <p className="text-xs md:text-sm text-gray-500 order-2 sm:order-1">
                {language === "hi" ? `दिखाया जा रहा है ${(currentPage - 1) * itemsPerPage + 1} - ${Math.min(currentPage * itemsPerPage, allPublications.length)} / ${allPublications.length}` : `Showing ${(currentPage - 1) * itemsPerPage + 1} - ${Math.min(currentPage * itemsPerPage, allPublications.length)} of ${allPublications.length}`}
              </p>
              <div className="flex items-center gap-1.5 md:gap-2 order-1 sm:order-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(p => p - 1)}
                  className="text-xs md:text-sm px-2 md:px-3"
                >
                  <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">{language === "hi" ? "पिछला" : "Previous"}</span>
                </Button>
                <span className="text-xs md:text-sm text-gray-600 px-1 md:px-2">
                  {currentPage}/{totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(p => p + 1)}
                  className="text-xs md:text-sm px-2 md:px-3"
                >
                  <span className="hidden sm:inline">{language === "hi" ? "अगला" : "Next"}</span>
                  <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PublicationsSection;
