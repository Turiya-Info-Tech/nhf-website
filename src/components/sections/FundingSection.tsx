import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  FileText, 
  Handshake,
  Sparkles
} from "lucide-react";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";

const FundingSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const partnershipTypes = [
    {
      icon: Building2,
      title: "CSR Partnerships",
      description: "Long-term partnerships with corporations aligned with child development and healthcare priorities.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Handshake,
      title: "Institutional Grants",
      description: "Collaborative funding from government bodies, foundations, and international organizations.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Donor Support",
      description: "Individual and family philanthropy supporting specific programs or general operations.",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      icon: FileText,
      title: "Project-Based Funding",
      description: "Targeted support for specific research studies, training initiatives, or community programs.",
      gradient: "from-amber-500 to-orange-600"
    },
  ];

  return (
    <section id="funding" ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Funding & Partnerships
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
            Support Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-gray-600 text-lg">
            NHF is seeking long-term partnerships and funding support to sustain and scale 
            our impact on children's lives across India.
          </p>
        </div>

        {/* Partnership Types - Combined Section */}
        <div className="mb-16">
          <h3 className={`text-2xl font-serif font-bold text-center mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Looking for Long-term Partnerships
          </h3>
          <p className={`text-gray-600 text-center max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We partner with organisations and individuals committed to measurable, evidence-based outcomes for children and families.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipTypes.map((type, index) => (
              <Card 
                key={index} 
                className={`group bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={getStaggerDelay(index + 4, 100)}
              >
                <CardContent className="p-6 text-center relative">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${type.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    <type.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">{type.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CSR Alignment */}
        <Card className={`border-0 shadow-xl bg-gradient-to-br from-orange-50 via-white to-pink-50 overflow-hidden transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <CardContent className="p-6 md:p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-gray-800">
                  CSR-Aligned Initiatives
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  NHF's work aligns with Schedule VII of the Companies Act, 2013, particularly 
                  in areas of healthcare, education, and child welfare. Our programs offer 
                  measurable outcomes and transparent reporting for CSR partners.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <span className="text-sm text-gray-600">
                      Promoting healthcare including preventive healthcare
                    </span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <span className="text-sm text-gray-600">
                      Promoting education and livelihood enhancement for differently-abled children
                    </span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <span className="text-sm text-gray-600">
                      Measures for reducing inequalities faced by socially disadvantaged groups
                    </span>
                  </li>
                </ul>
                <Button 
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Discuss Partnership
                </Button>
              </div>
              <div className="text-center">
                <div className="inline-grid grid-cols-2 gap-4">
                  <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                    <span className="text-3xl font-bold text-gradient">80G</span>
                    <p className="text-xs text-gray-500 mt-1 font-medium">Tax Exemption</p>
                  </div>
                  <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                    <span className="text-3xl font-bold text-gradient">12A</span>
                    <p className="text-xs text-gray-500 mt-1 font-medium">Registered</p>
                  </div>
                  <div className="col-span-2 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <span className="text-2xl font-bold text-white">Transparent</span>
                    <p className="text-xs text-white/60 mt-1">Audited Financials & Impact Reports</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FundingSection;