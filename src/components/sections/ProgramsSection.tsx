import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, GraduationCap, Database, Baby, Building2 } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      icon: Building2,
      title: "UNICEF Collaboration – DEIC Capacity Building (2025)",
      description: "Designing and implementing training and monitoring systems for District Early Intervention Centres (DEICs), beginning with Aundh General Hospital, Pune.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Database,
      title: "Clinical and Implementation Research",
      description: "Clinical and behavioural profiling, and intervention impact assessments to inform personalized intervention models.",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: GraduationCap,
      title: "Parent Engagement Program (PEP)",
      description: "Community and clinic-based modules that educate caregivers on goal-setting, home strategies, and system navigation.",
      color: "bg-teal/10 text-teal"
    },
    {
      icon: Shield,
      title: "Ethics Committee for Neuro-Behavioural Pediatric Research",
      description: "Establishing rigorous ethical standards and oversight for research involving children with neurodevelopmental conditions.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Baby,
      title: "Child Rights & Neurodevelopmental Inclusion",
      description: "Advocating for the rights of children with developmental challenges and ensuring inclusive policies across systems.",
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
