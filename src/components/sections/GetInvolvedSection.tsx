import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HandHeart, Building, GraduationCap, Users } from "lucide-react";

const GetInvolvedSection = () => {
  const ways = [
    {
      icon: GraduationCap,
      title: "Research & Training Collaboration",
      description: "Collaborate with us on research, training initiatives, and systems strengthening."
    },
    {
      icon: Building,
      title: "CSR Partnership & Sponsorship",
      description: "Support our work through partnerships, sponsorships, or donor funding aligned with national priorities."
    },
    {
      icon: HandHeart,
      title: "Policy Engagement",
      description: "Join our policy engagement initiatives to influence systems change for children."
    },
    {
      icon: Users,
      title: "Advisory & Ethics Initiatives",
      description: "Join our advisory or ethics-focused initiatives and contribute your expertise."
    }
  ];

  return (
    <section id="get-involved" className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-accent/30 to-secondary/5">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Get Involved
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
            Join Us in Creating{" "}
            <span className="text-primary">Change</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            There are many ways to support our mission of improving outcomes 
            for children and strengthening systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ways.map((way, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card text-center"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                  <way.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{way.title}</h3>
                <p className="text-sm text-muted-foreground">{way.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us to Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
