import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Heart, 
  FileText, 
  Apple, 
  Users 
} from "lucide-react";

const WorkSection = () => {
  const workAreas = [
    {
      icon: Heart,
      title: "Child Rights & Neurodevelopmental Inclusion",
      description: "Advocating for the rights of children with developmental challenges and ensuring inclusive policies."
    },
    {
      icon: Brain,
      title: "Early Intervention & Disability Awareness",
      description: "Promoting early detection and intervention for developmental conditions."
    },
    {
      icon: FileText,
      title: "Evidence-Driven Policy Engagement",
      description: "Translating research into actionable policies that impact child development systems."
    },
    {
      icon: Apple,
      title: "Nutrition & Public Health",
      description: "Addressing nutritional needs as a foundation for optimal child development."
    },
    {
      icon: Users,
      title: "Capacity Building for Government Systems",
      description: "Strengthening DEIC and public health infrastructure through training and support."
    }
  ];

  return (
    <section id="our-work" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
            Creating Lasting Impact Through{" "}
            <span className="text-primary">Research & Action</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We work across multiple domains to ensure holistic child development, 
            from ethical research to policy implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workAreas.map((area, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
