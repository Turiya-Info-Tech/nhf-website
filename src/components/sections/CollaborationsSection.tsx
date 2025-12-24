import { Card, CardContent } from "@/components/ui/card";
import { Handshake, CheckCircle2 } from "lucide-react";

const CollaborationsSection = () => {
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
    <section id="collaborations" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Collaborations & Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
            Trusted <span className="text-primary">Partnerships</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We work alongside government bodies, international organizations, 
            and civil society to create systemic change. We value partnerships 
            rooted in shared ethical standards, transparency, and long-term impact.
          </p>
        </div>

        {/* Key Collaboration Highlight */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 mb-12 text-primary-foreground">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Handshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider opacity-80">Key Collaboration</span>
              <h3 className="text-xl font-semibold">UNICEF India: DEIC Capacity Building Initiative (2025)</h3>
            </div>
          </div>
          <p className="text-primary-foreground/80 ml-16">
            Designing and implementing training and monitoring systems for District Early 
            Intervention Centres, beginning with Aundh General Hospital, Pune.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {collaborations.map((collab, index) => (
            <Card 
              key={index}
              className={`border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 text-center group ${
                collab.highlight ? 'ring-2 ring-primary/30 bg-primary/5' : ''
              }`}
            >
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  {collab.name}
                </h3>
                <p className="text-sm text-muted-foreground">{collab.type}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Values */}
        <div className="bg-card rounded-2xl p-8 border border-border/50">
          <h3 className="text-lg font-semibold text-center mb-6">We Seek Partnerships That Value</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnershipValues.map((value, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
