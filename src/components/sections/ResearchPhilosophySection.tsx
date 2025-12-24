import { Card, CardContent } from "@/components/ui/card";
import { 
  Microscope, 
  FileText, 
  Lightbulb, 
  Target,
  CheckCircle2,
  XCircle,
  TrendingUp,
  BookOpen
} from "lucide-react";

const ResearchPhilosophySection = () => {
  const researchDomains = [
    "Behaviour",
    "Communication", 
    "Social",
    "Participation",
    "Functionality"
  ];

  const outcomes = [
    { icon: Target, label: "Observable change" },
    { icon: TrendingUp, label: "Measurable progress" },
    { icon: Lightbulb, label: "Meaningful outcomes" }
  ];

  const currentResearch = [
    {
      title: "Randomized Controlled Trials",
      description: "E.g., L-Carnosine in Autism Spectrum Disorder"
    },
    {
      title: "Clinical Profiling & Outcome Tracking",
      description: "Comprehensive developmental assessments"
    },
    {
      title: "Implementation Research",
      description: "Within government systems and DEICs"
    },
    {
      title: "Evidence Generation",
      description: "To inform policy and program design"
    }
  ];

  const iterativeLearning = [
    { icon: CheckCircle2, text: "Identify effective interventions", color: "text-green-600" },
    { icon: TrendingUp, text: "Refine approaches that show partial impact", color: "text-amber-600" },
    { icon: XCircle, text: "Discontinue practices that do not meaningfully benefit children", color: "text-red-500" }
  ];

  return (
    <section id="research-philosophy" className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Research & Publications
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
            Asking the Right Question:{" "}
            <span className="text-primary">"What Works?"</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            At NHF, research begins with curiosity grounded in care. The central question 
            we ask across all initiatives is simple but powerful: What works for children, 
            in real settings, with real families?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Research Domains */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Microscope className="w-5 h-5 text-primary" />
              Research Domains
            </h3>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {researchDomains.map((domain, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-lg p-4 text-center border border-border/50 shadow-sm"
                  >
                    <span className="font-medium text-foreground">{domain}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-sm text-muted-foreground">This leads to</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {outcomes.map((outcome, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 justify-center p-3 bg-card rounded-lg border border-primary/30"
                  >
                    <outcome.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{outcome.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Current Research */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-secondary" />
              Current & Ongoing Work
            </h3>
            <div className="space-y-4">
              {currentResearch.map((research, index) => (
                <Card 
                  key={index}
                  className="border-border/50 hover:border-secondary/30 transition-all duration-300"
                >
                  <CardContent className="p-5">
                    <h4 className="font-semibold mb-1">{research.title}</h4>
                    <p className="text-sm text-muted-foreground">{research.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 italic">
              Research outputs include reports, toolkits, and publications that translate 
              data into actionable insights.
            </p>
          </div>
        </div>

        {/* Iterative Learning */}
        <div className="bg-gradient-to-br from-foreground via-foreground to-foreground/95 rounded-3xl p-8 lg:p-12 text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-serif font-bold mb-4">
                A Culture of Inquiry & Accountability
              </h3>
              <p className="text-primary-foreground/70">
                By encouraging iterative learning and reflective practice, NHF enables 
                clinicians, researchers, and systems to examine outcomes honestly.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {iterativeLearning.map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <item.icon className={`w-10 h-10 ${item.color} mb-4`} />
                  <p className="text-primary-foreground/90 text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-primary-foreground/70 mt-8 text-sm">
              This culture of inquiry supports accountability, learning, and continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPhilosophySection;
