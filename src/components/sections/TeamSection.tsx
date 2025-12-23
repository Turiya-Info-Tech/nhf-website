import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Samir Dalwai",
      role: "Founder & Director",
      bio: "Pioneering pediatrician with over 25 years of experience in developmental pediatrics and child advocacy."
    },
    {
      name: "Research Team",
      role: "Clinical Researchers",
      bio: "Multidisciplinary team of researchers conducting ethical studies in neurodevelopmental conditions."
    },
    {
      name: "Training Faculty",
      role: "Capacity Building",
      bio: "Experienced professionals dedicated to training healthcare workers and educators."
    },
    {
      name: "Advisory Board",
      role: "Strategic Guidance",
      bio: "Experts from medicine, policy, and ethics providing oversight and direction."
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
