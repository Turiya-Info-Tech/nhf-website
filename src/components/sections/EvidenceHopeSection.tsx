import { Heart, Eye, Users, TrendingUp } from "lucide-react";

const EvidenceHopeSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Parents & Caregivers",
      description: "Clarity and reassurance through documented developmental progress"
    },
    {
      icon: Heart,
      title: "Clinicians",
      description: "Direction and professional confidence in intervention approaches"
    },
    {
      icon: TrendingUp,
      title: "Systems",
      description: "Evidence for informed decision-making and resource allocation"
    }
  ];

  return (
    <section id="evidence-hope" className="py-20 lg:py-28 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Impact on Families & Caregivers
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
              Evidence That Builds{" "}
              <span className="text-secondary">Hope</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              An outcome-oriented approach does more than inform systems—it restores confidence. 
              By documenting meaningful developmental progress, even when standardized tools are 
              unavailable, NHF provides something deeply valuable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 border border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-secondary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Main Message */}
          <div className="bg-gradient-to-br from-foreground via-foreground to-foreground/95 rounded-3xl p-8 lg:p-12 text-primary-foreground text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-secondary" />
              <Heart className="w-8 h-8 text-secondary fill-secondary" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
              Credible Hope Rooted in Observable Change
            </h3>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-6">
              This evidence-driven yet human-centred approach offers families something deeply 
              valuable: <span className="text-secondary font-medium">credible hope</span> rooted 
              in observable change.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/20 text-secondary">
              <Heart className="w-5 h-5 fill-current" />
              <span className="font-medium">Hope Through Evidence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceHopeSection;
