import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Building2, 
  TrendingUp, 
  Shield, 
  Heart,
  Calendar
} from "lucide-react";

const WhyNHFSection = () => {
  const reasons = [
    {
      icon: Calendar,
      title: "Established in 2012",
      description: "Sustained clinical and research credibility over 12+ years"
    },
    {
      icon: TrendingUp,
      title: "Outcome-Focused Workflows",
      description: "Renewed, outcome-focused workflows aligned with real-world settings"
    },
    {
      icon: Building2,
      title: "Active Clinical Integration",
      description: "Embedded within an active pediatric neurodevelopment centre (NHCDC)"
    },
    {
      icon: CheckCircle2,
      title: "Reflective Practice Culture",
      description: "Strong culture of reflective practice and inquiry among team members"
    },
    {
      icon: Shield,
      title: "Ethical, Child-First Approach",
      description: "Ethical, child-first approach to research and data handling"
    },
    {
      icon: Heart,
      title: "Measurable Impact Focus",
      description: "Clear focus on measurable impact, even in complex environments"
    }
  ];

  const capabilities = [
    "Grounded in clinical evidence and field realities",
    "Proven ability to engage with government systems",
    "Clear pathways from data to implementation",
    "Strong ethical framework for child-focused research",
    "Backed by New Horizons Child Development Centre"
  ];

  return (
    <section id="why-nhf" className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Partner With Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6 text-foreground">
            Why <span className="text-primary">NHF</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            NHF is seeking long-term CSR partnerships, donor support, and institutional grants 
            aligned with national child health and development priorities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities */}
        <div className="bg-primary rounded-2xl p-8 lg:p-10">
          <h3 className="text-xl font-semibold text-center mb-8 text-primary-foreground">Our Capabilities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20"
              >
                <CheckCircle2 className="w-5 h-5 text-primary-foreground mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/90">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNHFSection;
