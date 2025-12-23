const CollaborationsSection = () => {
  const collaborations = [
    { name: "UNICEF India", type: "International Organization" },
    { name: "Ministry of Health", type: "Government" },
    { name: "District Early Intervention Centres", type: "Public Health" },
    { name: "Academic Institutions", type: "Research Partners" },
    { name: "Civil Society Organizations", type: "NGO Partners" },
    { name: "Ethics Committees", type: "Regulatory Bodies" }
  ];

  return (
    <section id="collaborations" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Collaborations
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
            Trusted <span className="text-primary">Partnerships</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We work alongside government bodies, international organizations, 
            and civil society to create systemic change.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {collaborations.map((collab, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 text-center group"
            >
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                {collab.name}
              </h3>
              <p className="text-sm text-muted-foreground">{collab.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
