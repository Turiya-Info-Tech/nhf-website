import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Target, Users, Baby, Brain } from "lucide-react";

const PhilosophySection = () => {
  const stages = [
    {
      icon: Baby,
      title: "Foundation",
      description: "Building trust, safety, and early engagement with caregivers and environment."
    },
    {
      icon: Heart,
      title: "Connection",
      description: "Developing meaningful relationships and emotional regulation through consistent support."
    },
    {
      icon: Brain,
      title: "Growth",
      description: "Acquiring skills across developmental domains with appropriate structure and responsiveness."
    },
    {
      icon: Target,
      title: "Independence",
      description: "Building self-awareness, decision-making, and meaningful integration into society."
    }
  ];

  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Aim & Purpose */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Aim & Purpose
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
            Closing the Gap Between{" "}
            <span className="text-primary">Insight & Action</span>
          </h2>
          
          <div className="bg-card rounded-2xl p-8 border border-border/50 text-left mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Our Aim</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>Close the gap between clinical insight, ethical research, and systems-level action in child neurodevelopment in Indian and South Asian contexts</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>Demonstrate institutional credibility through consistent execution, accountability, and measurable outcomes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>Attract sustained funding and strategic partnerships for capacity building and research-driven work</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border/50 text-left">
            <h3 className="text-xl font-semibold mb-4 text-primary">Our Purpose</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <span>Drive cross-sector collaboration to strengthen public systems that influence child health, wellbeing, and safety</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <span>Generate community awareness and catalyse collective action around child neurodevelopment and disability inclusion</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <span>Advance evidence-informed advocacy to influence policy, practice, and resource allocation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <span>Secure and deploy funding to sustain mission-critical programs, applied research, and on-ground implementation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <span>Equip families and caregivers to function as primary agents of change for children with unmet neurodevelopmental needs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <span>Build workforce capacity among medical, paramedical, clinical and non-clinical workforce to respond effectively to public-health challenges affecting at least 1% of the global pediatric population</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Core Principle */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Core Principle
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
              The Child is a <span className="text-primary">Whole</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              A very well understood and communicated system helps children understand 
              their abilities, goals and challenges, understand their emotional responses, 
              and helps in attaining ability across developmental areas with the priority 
              of human connection.
            </p>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-lg">Trust & Autonomy</h3>
              </div>
              <p className="text-muted-foreground">
                A good mix of safe trust formation helps children navigate challenges of growth. 
                It gives them the ability to develop independence, responsibility, self-regulation, 
                and also to make decisions. The strongest people around them then become support 
                for those same hurdles in cultivating a stronger foundation.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 text-primary-foreground">
              <h3 className="text-2xl font-serif font-bold mb-4">Child-First Approach</h3>
              <p className="text-lg opacity-90 mb-6">
                Our work is rooted in a simple belief: children thrive when systems respond 
                to their unmet developmental needs with understanding, structure, and respect.
              </p>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <Heart className="w-4 h-4 fill-current" />
                <span>Every child deserves to be understood</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Stages of Child Development */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Developmental Framework
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
            Stages of <span className="text-primary">Child Development</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A child progresses through multiple stages of development with the ultimate goal 
            of becoming independent and meaningfully integrated into society. Development is 
            not limited to acquiring skills in isolation; it involves learning how to express 
            needs, feel safe, engage with others, and function confidently within one's environment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stages.map((stage, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card text-center relative overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-4xl font-bold text-primary/10">
                  {index + 1}
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                  <stage.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{stage.title}</h3>
                <p className="text-sm text-muted-foreground">{stage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border/50 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground">
            Each stage builds upon the previous one. When a child is supported with appropriate 
            engagement, structure, and responsiveness, developmental growth becomes more natural 
            and sustainable. <span className="text-primary font-medium">Independence emerges not 
            from pressure, but from consistent opportunities to connect, explore, and self-regulate.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
