import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const coreTeam = [
    {
      name: "Dr. Samir H. Dalwai",
      role: "Founder & Director",
      bio: "Developmental Pediatrician with 25+ years of experience. Leads NHF's vision and strategic direction."
    },
    {
      name: "Dr. Hilla Sookhadwala",
      role: "Developmental Pediatrician",
      bio: "Medical leadership for research and clinical program development."
    },
    {
      name: "Dr. Sandeep B. Bavdekar",
      role: "Research Consultant",
      bio: "Guides research methodology, ethics, and publication development."
    },
    {
      name: "Ms. Rucha Panchal",
      role: "Research Associate",
      bio: "Supporting research operations, data analysis, and evidence generation."
    },
    {
      name: "Ms. Anushka Samant",
      role: "Research Associate",
      bio: "Clinical research coordination and outcome tracking."
    },
    {
      name: "Ms. Sandhya Kulkarni",
      role: "Training & Direction",
      bio: "Leading capacity building programs and training initiatives."
    }
  ];

  const supportTeam = [
    {
      name: "Data Entry & Coding Team",
      role: "Data Management",
      bio: "Ensuring accurate data collection, entry, and coding for research."
    },
    {
      name: "Interns & Volunteers",
      role: "Support Staff",
      bio: "Contributing to various programs while gaining valuable experience."
    }
  ];

  return (
    <section id="team" className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
            The People Behind{" "}
            <span className="text-primary">NHF</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A dedicated team of professionals united by a shared commitment 
            to improving outcomes for children.
          </p>
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Photo */}
                <div className="md:col-span-1 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center min-h-[400px] md:min-h-full p-4">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src="/image.png" 
                      alt="Dr. Samir Dalwai - Founder & Director of NHF"
                      className="w-full max-w-[280px] h-auto object-contain rounded-lg shadow-xl"
                    />
                  </div>
                </div>
                
                {/* Bio Content */}
                <div className="md:col-span-2 p-8 lg:p-10">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      Founder & Director
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-2">
                    Dr. Samir Dalwai
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    MD (Pediatrics), DCH, FCPS, FIAP (Developmental & Behavioral Pediatrics)
                  </p>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Dr. Samir Dalwai is a pioneering developmental pediatrician with over 25 years of experience 
                      in child development and behavioral pediatrics. As the Founder of New Horizons Health and 
                      Research Foundation (NHF) and Director of New Horizons Child Development Centre (NHCDC), 
                      he has been instrumental in shaping India's approach to early intervention and 
                      neurodevelopmental care.
                    </p>
                    <p>
                      A passionate advocate for evidence-based practice, Dr. Dalwai has trained over 2,000 
                      professionals across India and has contributed significantly to national guidelines on 
                      developmental disabilities. He serves on multiple advisory boards and ethics committees, 
                      ensuring that research and clinical practice remain centered on the child's best interests.
                    </p>
                    <p>
                      His philosophy of "What Works?" guides NHF's mission—focusing on measurable, 
                      real-world outcomes that transform the lives of children and their families. Under his 
                      leadership, NHF has established partnerships with UNICEF, government systems, and 
                      leading academic institutions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Grid */}
        <h3 className="text-xl font-semibold text-center mb-8">Our Core Team</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {coreTeam.slice(1).map((member, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 mx-auto text-primary-foreground font-bold text-lg">
                  {member.name.split(' ').map(n => n.charAt(0)).join('').slice(0, 2)}
                </div>
                <h4 className="text-base font-semibold text-center mb-1">
                  {member.name}
                </h4>
                <p className="text-xs text-primary text-center mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground text-center">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Team */}
        <h3 className="text-lg font-semibold text-center mb-6 text-muted-foreground">Support Team</h3>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {supportTeam.map((member, index) => (
            <Card 
              key={index}
              className="group hover:shadow-md transition-all duration-300 border-border/50 hover:border-secondary/30"
            >
              <CardContent className="p-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center mb-3 mx-auto text-secondary-foreground font-bold text-sm">
                  {member.name.charAt(0)}
                </div>
                <h4 className="text-sm font-semibold text-center mb-1">
                  {member.name}
                </h4>
                <p className="text-xs text-secondary text-center mb-1">
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground text-center">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team & Research Culture */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-xl font-semibold mb-4 text-center">Team & Research Culture</h3>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-6">
            NHF operates through a Memorandum of Understanding with New Horizons Child Development 
            Centre (NHCDC), enabling strong integration between clinical practice and research.
          </p>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-6">
            NHF actively encourages staff from NHCDC to participate in research activities as part 
            of their professional growth. This integration enables clinicians and practitioners to:
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-card rounded-lg p-4 text-center border border-border/50">
              <p className="text-sm text-muted-foreground">View their work objectively through outcomes and data</p>
            </div>
            <div className="bg-card rounded-lg p-4 text-center border border-border/50">
              <p className="text-sm text-muted-foreground">Reflect on the real-world impact of interventions</p>
            </div>
            <div className="bg-card rounded-lg p-4 text-center border border-border/50">
              <p className="text-sm text-muted-foreground">Contribute to evidence generation grounded in clinical reality</p>
            </div>
          </div>
          <p className="text-sm text-center text-primary font-medium mt-6">
            By bridging service delivery and research, NHF ensures that knowledge creation is not 
            removed from practice, but emerges directly from it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
