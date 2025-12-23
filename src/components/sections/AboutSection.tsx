import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "Clinical grounding with 12+ years of experience",
    "Ethics-first approach to all research",
    "Outcome-oriented methodology",
    "Government engagement capability"
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About NHF
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
              Bridging Science, Service & Policy for{" "}
              <span className="text-primary">Child Development</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Founded in 2012, New Horizons Foundation serves as the research and 
              advocacy arm of NHCDC, working at the intersection of science, 
              service delivery, and policy development.
            </p>
            <p className="text-muted-foreground mb-8">
              We believe in asking "What Works?" — focusing on observable, 
              functional improvements rather than labels. Our child-first, 
              whole-child approach ensures that every intervention is designed 
              with respect, dignity, and the protection of vulnerable populations 
              at its core.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-accent/50"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 text-primary-foreground">
              <h3 className="text-2xl font-serif font-bold mb-4">Our Philosophy</h3>
              <blockquote className="text-lg italic mb-6 opacity-90">
                "We focus on outcomes over labels — what truly matters is the 
                observable change in a child's life and their family's hope."
              </blockquote>
              <p className="text-sm opacity-80 font-medium">
                — Dr. Samir Dalwai, Founder
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
