import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Developmental Pediatricians",
      role: "Program Lead",
      bio: "Medical leadership for research and clinical program development."
    },
    {
      name: "Clinical Research Team",
      role: "Developmental Specialists & Coordinators",
      bio: "Multidisciplinary team conducting ethical studies and clinical assessments."
    },
    {
      name: "Research Associates",
      role: "Research Consultant & Associates",
      bio: "Supporting research operations, data analysis, and publication development."
    },
    {
      name: "Operations Team",
      role: "Admin Support & Operations",
      bio: "Ensuring smooth functioning of all administrative and operational activities."
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
                {/* Photo Placeholder */}
                <div className="md:col-span-1 bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center min-h-[300px] md:min-h-full">
                  <div className="text-center text-primary-foreground p-8">
                    <div className="w-32 h-32 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4 border-4 border-primary-foreground/30">
                      <User className="w-16 h-16" />
                    </div>
                    <p className="text-sm opacity-80">Photo Coming Soon</p>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 mx-auto text-primary-foreground font-bold text-lg">
                  {member.name.charAt(0)}
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
      </div>
    </section>
  );
};

export default TeamSection;
