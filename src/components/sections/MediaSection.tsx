import { Card, CardContent } from "@/components/ui/card";
import { 
  Camera, 
  Video, 
  Megaphone, 
  FileImage,
  Shield,
  ExternalLink
} from "lucide-react";

const MediaSection = () => {
  const mediaTypes = [
    {
      icon: Camera,
      title: "Training & Workshop Documentation",
      description: "Photographs from capacity building sessions, DEIC training programs, and collaborative workshops."
    },
    {
      icon: Video,
      title: "Educational Content & Recordings",
      description: "Recorded sessions, webinars, and educational videos on developmental pediatrics and ethical research."
    },
    {
      icon: Megaphone,
      title: "Public Awareness & Advocacy",
      description: "Awareness campaigns, public talks, and advocacy initiatives for child neurodevelopment."
    },
    {
      icon: FileImage,
      title: "Research Dissemination",
      description: "Infographics, presentations, and visual summaries of research findings and program outcomes."
    }
  ];

  return (
    <section id="media" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Media & Outreach
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
            Sharing Knowledge,{" "}
            <span className="text-primary">Building Awareness</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            NHF engages with professionals, communities, and institutions through 
            outreach activities and knowledge-sharing platforms.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mediaTypes.map((media, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                  <media.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{media.title}</h3>
                <p className="text-sm text-muted-foreground">{media.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ethical Note */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 lg:p-8 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Ethical Media Practices</h3>
              <p className="text-muted-foreground">
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
