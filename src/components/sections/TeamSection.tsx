import { Card, CardContent } from "@/components/ui/card";
import { useContent } from "@/lib/content";
import { Sparkles, Users, Target, Lightbulb } from "lucide-react";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";

const TeamSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const { teamMembers, loading } = useContent();

  // Find founder (first member or the one with "Founder" in role)
  const founder = teamMembers.find(m => m.role.toLowerCase().includes('founder')) || teamMembers[0];
  
  // Core team (excluding founder)
  const coreTeam = teamMembers.filter(m => m.id !== founder?.id);

  const culturePoints = [
    { icon: Target, text: "View their work objectively through outcomes and data" },
    { icon: Lightbulb, text: "Reflect on the real-world impact of interventions" },
    { icon: Users, text: "Contribute to evidence generation grounded in clinical reality" }
  ];

  return (
    <section id="team" ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Our Team
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
            The People Behind{" "}
            <span className="text-gradient">NHF</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A dedicated team of professionals united by a shared commitment 
            to improving outcomes for children.
          </p>
        </div>

        {/* Founder Section */}
        {founder && (
        <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="overflow-hidden border-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 shadow-2xl">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Photo */}
                <div className="md:col-span-1 bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center min-h-[400px] md:min-h-full p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_70%)]" />
                  <div className="relative w-full h-full flex items-center justify-center group">
                    <img 
                      src={founder.image_url || "/image.png"} 
                      alt={`${founder.name} - ${founder.role}`}
                      className="w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Bio Content */}
                <div className="md:col-span-2 p-8 lg:p-10 text-white relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-teal-500" />
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                      {founder.role}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-2 text-white">
                    {founder.name}
                  </h3>
                  <p className="text-orange-300 font-medium mb-6">
                    MD (Pediatrics), DCH, FCPS, FIAP (Developmental & Behavioral Pediatrics)
                  </p>
                  <div className="space-y-4 text-white/70 leading-relaxed">
                    <p>{founder.bio}</p>
                    <p>
                      A passionate advocate for evidence-based practice, Dr. Dalwai has trained over 2,000 
                      professionals across India and has contributed significantly to national guidelines on 
                      developmental disabilities. He serves on multiple advisory boards and ethics committees, 
                      ensuring that research and clinical practice remain centered on the child's best interests.
                    </p>
                    <p>
                      His philosophy of "What Works?" guides NHF's mission—focusing on measurable, 
                      real-world outcomes that transform the lives of children and their families. Under his 
                      leadership, NHF has established partnerships with UNICEF, government systems, and 
                      leading academic institutions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        )}

        {/* Team Grid */}
        <h3 className={`text-2xl font-bold text-center mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Our Core Team
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coreTeam.map((member, index) => (
            <Card 
              key={index}
              className={`group bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 overflow-hidden hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={getStaggerDelay(index + 4, 100)}
            >
              <CardContent className="p-6 text-center relative">
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                {member.image_url ? (
                  <img 
                    src={member.image_url} 
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover mb-4 mx-auto ring-4 ring-orange-100 group-hover:ring-orange-200 transition-all duration-300"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center mb-4 mx-auto text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {member.name.split(' ').map(n => n.charAt(0)).join('').slice(0, 2)}
                  </div>
                )}
                <h4 className="text-base font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs font-semibold text-orange-500 mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team & Research Culture */}
        <div className={`bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 lg:p-10 border border-orange-100 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Team & Research Culture</h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-6 leading-relaxed">
            NHF operates through a Memorandum of Understanding with New Horizons Child Development 
            Centre (NHCDC), enabling strong integration between clinical practice and research.
          </p>
          <p className="text-gray-500 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            NHF actively encourages staff from NHCDC to participate in research activities as part 
            of their professional growth. This integration enables clinicians and practitioners to:
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {culturePoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-lg shadow-gray-100/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-center text-orange-600 font-semibold mt-8">
            By bridging service delivery and research, NHF ensures that knowledge creation is not 
            removed from practice, but emerges directly from it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
