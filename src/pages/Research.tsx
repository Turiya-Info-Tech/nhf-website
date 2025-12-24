import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  BookOpen, 
  Microscope, 
  Users, 
  ClipboardList,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const Research = () => {
  const ongoingResearch = [
    {
      title: "L-Carnosine Randomized Controlled Trial",
      status: "Ongoing",
      description: "A double-blind, placebo-controlled RCT investigating the effects of L-Carnosine supplementation on language development and behavioral outcomes in children with Autism Spectrum Disorder (ASD).",
      methodology: "Multi-center study with rigorous ethical oversight",
      expectedOutcome: "Evidence-based recommendations for nutritional interventions"
    },
    {
      title: "Clinical and Behavioral Profiling Study",
      status: "Active",
      description: "Comprehensive profiling of neurodevelopmental presentations in Indian children to develop culturally appropriate assessment tools and intervention models.",
      methodology: "Mixed-methods approach with standardized assessments",
      expectedOutcome: "Personalized intervention frameworks"
    },
    {
      title: "Early Intervention Impact Assessment",
      status: "Ongoing",
      description: "Longitudinal study tracking developmental outcomes of children receiving early intervention services through NHCDC and partner DEICs.",
      methodology: "Prospective cohort study with matched controls",
      expectedOutcome: "Evidence for policy recommendations on early intervention"
    },
    {
      title: "Parent Engagement Program Evaluation",
      status: "Active",
      description: "Evaluating the effectiveness of community and clinic-based modules in improving caregiver knowledge, goal-setting, and home-based strategies.",
      methodology: "Pre-post intervention design with qualitative components",
      expectedOutcome: "Scalable parent training models"
    }
  ];

  const publications = [
    {
      title: "Ethical Framework for Pediatric Neurodevelopmental Research in India",
      type: "Policy Brief",
      year: "2024",
      description: "Guidelines for conducting ethical research with vulnerable pediatric populations.",
      pdfUrl: "/publications/ethical-framework-2024.pdf"
    },
    {
      title: "DEIC Capacity Building: Training Curriculum and Implementation Guide",
      type: "Training Manual",
      year: "2025",
      description: "Comprehensive training modules developed in collaboration with UNICEF India.",
      pdfUrl: "/publications/deic-training-guide-2025.pdf"
    },
    {
      title: "Early Intervention Best Practices: An Indian Context",
      type: "Research Report",
      year: "2023",
      description: "Evidence synthesis for early intervention approaches suited to Indian healthcare systems.",
      pdfUrl: "/publications/early-intervention-2023.pdf"
    },
    {
      title: "Neurodevelopmental Screening Tools: Adaptation and Validation",
      type: "Technical Report",
      year: "2024",
      description: "Validation studies for culturally appropriate screening instruments.",
      pdfUrl: "/publications/screening-tools-2024.pdf"
    }
  ];

  const researchPhilosophy = [
    {
      icon: Microscope,
      title: "What Works?",
      description: "Our research is driven by a fundamental question: What interventions create real, measurable change in children's lives?"
    },
    {
      icon: Users,
      title: "Child-Centered Ethics",
      description: "Every study prioritizes the dignity, rights, and wellbeing of participating children and families."
    },
    {
      icon: ClipboardList,
      title: "Implementation Focus",
      description: "Research findings are translated into actionable protocols for clinical practice and policy."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-secondary/5">
          <div className="container">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">Research & Publications</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Evidence-Driven <span className="text-primary">Research</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                NHF conducts rigorous, ethical research to generate evidence that transforms 
                clinical practice, informs policy, and improves outcomes for children with 
                neurodevelopmental concerns.
              </p>
            </div>
          </div>
        </section>

        {/* Research Philosophy */}
        <section className="py-16 bg-card">
          <div className="container">
            <h2 className="text-2xl font-serif font-bold text-center mb-12">
              Our Research Philosophy
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {researchPhilosophy.map((item, index) => (
                <Card key={index} className="text-center border-border/50">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ongoing Research */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Ongoing Research Projects
              </h2>
              <p className="text-muted-foreground">
                Our current research initiatives span clinical trials, implementation science, 
                and community-based studies.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {ongoingResearch.map((project, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">Methodology:</span> {project.methodology}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        <span className="font-medium text-foreground">Expected Outcome:</span> {project.expectedOutcome}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Publications & Reports
              </h2>
              <p className="text-muted-foreground">
                Access our research outputs, policy briefs, and training materials.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {publications.map((pub, index) => (
                <Card key={index} className="border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        {pub.type === "Policy Brief" ? (
                          <FileText className="w-6 h-6 text-primary" />
                        ) : (
                          <BookOpen className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">{pub.type}</Badge>
                          <span className="text-xs text-muted-foreground">{pub.year}</span>
                        </div>
                        <h3 className="font-semibold mb-2">{pub.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{pub.description}</p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-2"
                          onClick={() => {
                            // For now, show a toast that PDFs will be available soon
                            const toast = document.createElement('div');
                            toast.className = 'fixed bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg z-50';
                            toast.textContent = 'PDF download will be available soon. Contact us for access.';
                            document.body.appendChild(toast);
                            setTimeout(() => toast.remove(), 3000);
                          }}
                        >
                          <Download className="w-4 h-4" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ethics Committee */}
        <section className="py-16 bg-card">
          <div className="container">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8 lg:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-4">
                      Ethics Committee for Neuro-Behavioral Pediatric Research
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      NHF has established an independent Ethics Committee dedicated to reviewing 
                      and overseeing all research involving children with neurodevelopmental conditions. 
                      The committee ensures compliance with national and international ethical standards.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Independent review of all research protocols
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Special focus on vulnerable pediatric populations
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Data protection and privacy safeguards
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Informed consent and assent procedures
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex flex-col items-center p-8 bg-background rounded-xl border border-border/50">
                      <span className="text-4xl font-bold text-primary mb-2">100%</span>
                      <span className="text-sm text-muted-foreground">Ethical Review Compliance</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;