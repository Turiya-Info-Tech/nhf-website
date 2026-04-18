import { Card, CardContent } from "@/components/ui/card";
import { Handshake, CheckCircle2, Sparkles } from "lucide-react";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";

const CollaborationsSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  const collaborations = [
    { name: "UNICEF India", type: "International Organization", highlight: true },
    { name: "Government Health Systems", type: "Public Health" },
    { name: "District Early Intervention Centres", type: "Public Health" },
    { name: "Academic & Research Institutions", type: "Research Partners" },
    { name: "Clinical & Training Networks", type: "Healthcare Partners" },
    { name: "Civil Society Organizations", type: "NGO Partners" }
  ];

  const partnershipValues = [
    "Evidence-based approach",
    "Ethical standards",
    "Long-term systems impact",
    "Transparency & accountability"
  ];

  return (
    <section id="collaborations" ref={ref} className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-br from-teal-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Collaborations & Partners
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
            Trusted <span className="text-gradient">Partnerships</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We work alongside government bodies, international organizations, 
            and civil society to create systemic change. We value partnerships 
            rooted in shared ethical standards, transparency, and long-term impact.
          </p>
        </div>

        {/* Key Collaboration Highlight */}
        <div className={`relative bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-8 mb-12 text-white overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.15),transparent_50%)]" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg">
              <Handshake className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-teal-400 font-bold">Key Collaboration</span>
              <h3 className="text-xl font-bold">UNICEF India: DEIC Capacity Building Initiative (2025)</h3>
            </div>
          </div>
          <p className="text-white/70 md:ml-[72px] leading-relaxed">
            Designing and implementing training and monitoring systems for District Early 
            Intervention Centres, beginning with Aundh General Hospital, Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {collaborations.map((collab, index) => (
            <Card 
              key={index}
              className={`bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center group overflow-hidden ${
                collab.highlight ? 'ring-2 ring-teal-400/50 bg-gradient-to-br from-teal-50 to-cyan-50' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={getStaggerDelay(index + 3, 80)}
            >
              <CardContent className="p-6 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <h3 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-teal-600 transition-colors">
                  {collab.name}
                </h3>
                <p className="text-sm text-gray-500">{collab.type}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Values */}
        <div className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-bold text-center mb-8 text-gray-800">We Seek Partnerships That Value</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnershipValues.map((value, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
