import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Target, 
  MessageCircle, 
  Calendar, 
  Heart,
  CheckCircle2,
  Lightbulb,
  TrendingUp
} from "lucide-react";

const ParentSection = () => {
  const parentGains = [
    {
      icon: Lightbulb,
      title: "Practical Strategies",
      description: "Practical strategies to support development in daily routines"
    },
    {
      icon: Target,
      title: "Clear Action Plans",
      description: "Clear action plans tailored to their child's developmental profile"
    },
    {
      icon: TrendingUp,
      title: "Ongoing Coaching",
      description: "Ongoing coaching to strengthen confidence and consistency"
    },
    {
      icon: Calendar,
      title: "Predictability & Structure",
      description: "Predictability and structure, enabling children to feel safe and regulated"
    }
  ];

  const ultimateGoals = [
    "Be aware of and responsive to their environment",
    "Regulate themselves with increasing independence",
    "Communicate their needs effectively",
    "Make informed decisions that support their physical, emotional, and social well-being"
  ];

  return (
    <section id="parents" className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Role of Parents */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Role of Parents
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
              Parents as Partners in the{" "}
              <span className="text-primary">Developmental Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Parents play a central role in enabling healthy development. Families approach 
              the New Horizons (NH) program seeking clarity, guidance, and deeper understanding 
              of their child's needs, strengths, and challenges.
            </p>
            <p className="text-muted-foreground mb-6">
              At NH, parents are supported to move beyond uncertainty and into confident, 
              purposeful engagement with their child. The focus is not only on addressing 
              developmental concerns, but on strengthening everyday interactions that promote 
              growth, safety, and emotional connection.
            </p>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Through structured guidance, parents are empowered to help their children:
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>Engage meaningfully with their environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>Develop independence and self-awareness</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>Make sound decisions related to their health and well-being</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>Build skills that support long-term participation in family, school, and community life</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What Parents Gain */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              What Parents Gain
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
              From the <span className="text-secondary">NH Program</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Through the NH program, parents receive comprehensive support that transforms 
              their approach from reactive responses to intentional support, fostering 
              development that is both measurable and meaningful.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {parentGains.map((gain, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-md transition-all duration-300 border-border/50 hover:border-secondary/30"
                >
                  <CardContent className="p-5">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary/20 transition-colors">
                      <gain.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-1 text-sm">{gain.title}</h3>
                    <p className="text-xs text-muted-foreground">{gain.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Ultimate Goal */}
        <div className="bg-gradient-to-br from-foreground via-foreground to-foreground/95 rounded-3xl p-8 lg:p-12 text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                The Ultimate Goal
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-4">
                For Children to <span className="text-secondary">Thrive</span>
              </h2>
              <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
                By strengthening parents as partners and grounding intervention in human connection, 
                development becomes a lived process, not a checklist.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {ultimateGoals.map((goal, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <span className="text-secondary font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-primary-foreground/90">{goal}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/20 text-secondary">
                <Heart className="w-5 h-5 fill-current" />
                <span className="font-medium">Development through Connection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentSection;
