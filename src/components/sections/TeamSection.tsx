import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const team = [
    {
      name: "Director",
      role: "Leadership",
      bio: "Strategic direction and oversight of all NHF operations and initiatives."
    },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 mx-auto text-primary-foreground font-bold text-xl">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary text-center mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground text-center">
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
