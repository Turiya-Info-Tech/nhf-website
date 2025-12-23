import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, GraduationCap, Database, Baby, Building2 } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      icon: Shield,
      title: "Ethical Pediatric Research Frameworks",
      description: "Establishing rigorous ethical standards for research involving children, ensuring dignity and protection.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: GraduationCap,
      title: "Capacity Building & Training",
      description: "Training healthcare professionals, teachers, and government staff in child development best practices.",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Database,
      title: "Data Ethics & Protection Initiatives",
      description: "Implementing data protection protocols for sensitive child development information.",
      color: "bg-teal/10 text-teal"
    },
    {
      icon: Baby,
      title: "Early Intervention Programs",
      description: "Designing and implementing early detection and intervention programs for developmental delays.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Building2,
      title: "DEIC & Government Partnerships",
      description: "Strengthening District Early Intervention Centres in collaboration with UNICEF India.",
      color: "bg-secondary/10 text-secondary"
    }
  ];

  return (
    <section id="programs" className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Programs & Initiatives
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
              Delivering Meaningful{" "}
              <span className="text-primary">Outcomes</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Our programs span from ethical research frameworks to on-ground 
              implementation, creating a comprehensive ecosystem for child development.
            </p>
            <p className="text-muted-foreground mb-8">
              Each initiative is designed with measurable outcomes, ensuring 
              accountability and real-world impact for children and families.
            </p>
            <Button 
              className="group"
              onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More About Our Programs
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="space-y-6">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl border border-border/50 hover:border-primary/30 bg-background hover:shadow-md transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-lg ${program.color} flex items-center justify-center shrink-0`}>
                    <program.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
