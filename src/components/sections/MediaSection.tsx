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

const MediaSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  const mediaTypes = [
    {
      icon: Camera,
      title: "Training & Workshop Documentation",
      description: "Photographs from capacity building sessions, DEIC training programs, and collaborative workshops.",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Video,
      title: "Educational Content & Recordings",
      description: "Recorded sessions, webinars, and educational videos on developmental pediatrics and ethical research.",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      icon: Megaphone,
      title: "Public Awareness & Advocacy",
      description: "Awareness campaigns, public talks, and advocacy initiatives for child neurodevelopment.",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: FileImage,
      title: "Research Dissemination",
      description: "Infographics, presentations, and visual summaries of research findings and program outcomes.",
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
            Media & Outreach
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
            Sharing Knowledge,{" "}
            <span className="text-gradient">Building Awareness</span>
          </h2>
          <p className="text-gray-600 text-lg">
            NHF engages with professionals, communities, and institutions through 
            outreach activities and knowledge-sharing platforms.
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
              <h3 className="font-bold text-lg text-white mb-2">Ethical Media Practices</h3>
              <p className="text-white/70 leading-relaxed">
                All media is shared in accordance with ethical guidelines and appropriate permissions. 
                We actively engage with the research and practitioner community through outreach and 
                awareness initiatives, ensuring that content involving children maintains dignity, 
                privacy, and proper consent protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
