import { Quote, Heart } from "lucide-react";

const FounderMessageSection = () => {
  return (
    <section id="founders-message" className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            From the Founder's Desk
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-4">
            A Message from{" "}
            <span className="text-primary">Dr. Samir H. Dalwai</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Photo and Title */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 text-center">
                <img 
                  src="/image.png" 
                  alt="Dr. Samir H. Dalwai - Founder & Director of NHF"
                  className="w-full max-w-[280px] h-auto object-contain rounded-lg shadow-xl mx-auto mb-4"
                />
                <h3 className="text-xl font-serif font-bold mb-1 text-foreground">Dr. Samir H. Dalwai</h3>
                <p className="text-sm text-muted-foreground mb-4">Founder & Director</p>
                <div className="flex items-center justify-center gap-2 text-primary text-sm">
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Developmental Pediatrician</span>
                </div>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border/50 shadow-sm relative">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />
              
              <div className="space-y-6 text-muted-foreground relative z-10">
                <p className="text-lg leading-relaxed">
                  At the heart of my work in developmental pediatrics lies a fundamental conviction: 
                  <span className="text-foreground font-medium"> every child has the capacity to grow, 
                  communicate, and connect when we respond to their unmet needs with understanding 
                  and consistent engagement.</span>
                </p>

                <p className="leading-relaxed">
                  Developmental delays and behavioural differences are not problems to be "fixed." 
                  They are signals. Signals that a child's environment, experiences, or relationships 
                  require adjustment, support, and human connection.
                </p>

                <p className="leading-relaxed">
                  Modern medicine has given us powerful tools for diagnosis, but progress cannot come 
                  from labels alone. <span className="text-primary font-medium">True development begins 
                  when we shift our focus from symptoms to engagement, from milestones to relationships, 
                  and from isolated interventions to everyday human interaction.</span>
                </p>

                <p className="leading-relaxed">
                  Parents are central to this journey. When caregivers are empowered with knowledge, 
                  clarity, and confidence, development becomes part of daily life, not just a clinic-based 
                  activity. This philosophy extends beyond families to professionals, institutions, and systems.
                </p>

                <p className="leading-relaxed">
                  Through the New Horizons Health and Research Foundation, we aim to embed this 
                  human-centred, evidence-based approach within research practices, government programs, 
                  and policy frameworks. Our goal is to ensure that developmental care is ethical, 
                  accessible, and grounded in dignity.
                </p>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mt-8 border-l-4 border-primary">
                  <p className="text-lg font-serif italic text-foreground">
                    "When science and humanity work together, development does not remain delayed. 
                    It simply begins anew."
                  </p>
                  <p className="text-sm text-primary font-medium mt-3">
                    — Dr. Samir H. Dalwai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessageSection;
