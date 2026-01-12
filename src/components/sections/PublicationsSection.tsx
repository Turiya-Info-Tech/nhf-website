import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, ExternalLink, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContent } from "@/lib/content";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";

const PublicationsSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const { publications, loading } = useContent();

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "Research Paper":
        return { bg: "from-blue-500 to-indigo-600", text: "text-blue-600 bg-blue-50 border-blue-200" };
      case "Technical Report":
        return { bg: "from-cyan-500 to-teal-600", text: "text-cyan-600 bg-cyan-50 border-cyan-200" };
      case "Parent Guide":
        return { bg: "from-emerald-500 to-green-600", text: "text-emerald-600 bg-emerald-50 border-emerald-200" };
      default:
        return { bg: "from-gray-500 to-slate-600", text: "text-gray-600 bg-gray-50 border-gray-200" };
    }
  };

  return (
    <section id="publications" ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-indigo-100/30 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Our Research
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
            Publications & <span className="text-gradient">Resources</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Access our research papers, technical reports, and parent guides. 
            We believe in open knowledge sharing to advance child development practices.
          </p>
        </div>

        <div className="grid gap-4">
          {publications.map((pub, index) => {
            const typeStyles = getTypeStyles(pub.type);
            return (
            <Card 
              key={pub.id}
              className={`group bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={getStaggerDelay(index + 2, 80)}
            >
              <CardContent className="p-5 relative">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${typeStyles.bg} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${typeStyles.text}`}>
                        {pub.type}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {pub.year}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-800 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {pub.authors}
                    </p>
                    <p className="text-xs text-blue-500 font-medium">
                      {pub.journal}
                    </p>
                  </div>
                  
                  {/* Download Button */}
                  {pub.pdf_url && pub.pdf_url !== '#' && (
                  <div className="flex gap-2 shrink-0">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="gap-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 group/btn"
                      onClick={() => window.open(pub.pdf_url || '#', '_blank')}
                    >
                      <Download className="w-4 h-4 group-hover/btn:animate-bounce" />
                      <span className="hidden sm:inline">Download PDF</span>
                      <span className="sm:hidden">PDF</span>
                    </Button>
                  </div>
                  )}
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>

        {/* View All Link */}
        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:shadow-lg transition-all duration-300" 
            asChild
          >
            <a href="/research">
              <BookOpen className="w-5 h-5" />
              View All Research & Publications
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
