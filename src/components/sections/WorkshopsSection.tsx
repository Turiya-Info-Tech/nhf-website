import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Users, 
  MapPin, 
  GraduationCap,
  CheckCircle2,
  Building2
} from "lucide-react";

const WorkshopsSection = () => {
  const workshopTopics = [
    "Ethics in paediatric and behavioural research",
    "Child-centred informed consent and assent",
    "Responsible data collection and management",
    "Translating clinical insight into public systems",
    "Navigating ethical dilemmas in field research",
    "Child safeguarding and data protection"
  ];

  const notableEngagements = [
    {
      title: "DEIC Capacity Building Workshops",
      partner: "In collaboration with UNICEF",
      description: "Training and monitoring systems for District Early Intervention Centres"
    },
    {
      title: "Clinical and Research Training Sessions",
      partner: "Multidisciplinary Teams",
      description: "Evidence-based training for healthcare professionals and researchers"
    },
    {
      title: "Teacher Capacity Building Program",
      partner: "Educational Institutions",
      description: "Training teachers to identify and refer children with learning difficulties to child development centres for further assessment and certification required for school concessions"
    }
  ];

  return (
    <section id="workshops" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Workshops & Seminars
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
            Building Capacity Through{" "}
            <span className="text-primary">Training</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            NHF conducts workshops and seminars for healthcare professionals, researchers, 
            and government teams, focusing on ethical practice, developmental frameworks, 
            and real-world implementation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Key Themes */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Key Training Themes</h3>
            </div>
            <div className="space-y-3">
              {workshopTopics.map((topic, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notable Engagements */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Notable Engagements</h3>
            </div>
            <div className="space-y-4">
              {notableEngagements.map((engagement, index) => (
                <Card 
                  key={index}
                  className="border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-md"
                >
                  <CardContent className="p-5">
                    <h4 className="font-semibold mb-1">{engagement.title}</h4>
                    <p className="text-sm text-primary mb-2">{engagement.partner}</p>
                    <p className="text-sm text-muted-foreground">{engagement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center border border-primary/20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Upcoming Events
            </span>
          </div>
          <p className="text-muted-foreground mb-4">
            Interested in attending or hosting a workshop? Get in touch with us.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Users className="w-4 h-4" />
            Contact for Training
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
