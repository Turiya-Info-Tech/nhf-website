import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, ExternalLink, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContent } from "@/lib/content";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";

const PublicationsSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const { publications, loading } = useContent();

  const orderedPublications = [...publications].sort((a, b) => {
    const yearA = Number(a.year) || 0;
    const yearB = Number(b.year) || 0;
    return yearB - yearA;
  });

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

        <div className="grid md:grid-cols-2 gap-4">
          {orderedPublications.map((pub, index) => {
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

        {/* Outcome-driven collaboration content */}
        <div className={`mt-14 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_60%)]" />
            <h3 className="relative text-2xl md:text-3xl font-serif font-bold mb-3">Outcome-oriented partnerships</h3>
            <p className="relative text-white/70 max-w-2xl mb-6">
              We collaborate with partners who value measurable outcomes for children and families.
              If you want evidence-informed impact with clear metrics, let's build it together.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="relative bg-white text-slate-900 border-white hover:bg-gray-100 font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Partner for measurable outcomes
            </Button>
          </div>
        </div>

        <div className={`grid md:grid-cols-3 gap-6 mt-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            {
              title: "Get to know what we have done before",
              description: "Explore previous programs, pilots, and evidence-backed initiatives.",
              gradient: "from-blue-500 to-indigo-500",
            },
            {
              title: "Free Medical Camps (equity focus)",
              description: "Community-based camps designed to close access gaps for underserved children.",
              gradient: "from-emerald-500 to-teal-500",
            },
            {
              title: "Advocacy: Children’s Manifesto",
              description: "Policy commitments that prioritize child development and inclusive systems.",
              gradient: "from-orange-500 to-pink-500",
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
