import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  IndianRupee, 
  Building2, 
  Users, 
  FileText, 
  Handshake,
  Target
} from "lucide-react";

const FundingSection = () => {
  const budgetBreakdown = [
    { label: "Research Operations", percentage: 35, amount: "₹17,50,000" },
    { label: "Training & Capacity Building", percentage: 25, amount: "₹12,50,000" },
    { label: "Outreach & Community Programs", percentage: 20, amount: "₹10,00,000" },
    { label: "Technical Collaborations", percentage: 15, amount: "₹7,50,000" },
    { label: "Administration", percentage: 5, amount: "₹2,50,000" },
  ];

  const partnershipTypes = [
    {
      icon: Building2,
      title: "CSR Partnerships",
      description: "Long-term partnerships with corporations aligned with child development and healthcare priorities."
    },
    {
      icon: Handshake,
      title: "Institutional Grants",
      description: "Collaborative funding from government bodies, foundations, and international organizations."
    },
    {
      icon: Users,
      title: "Donor Support",
      description: "Individual and family philanthropy supporting specific programs or general operations."
    },
    {
      icon: FileText,
      title: "Project-Based Funding",
      description: "Targeted support for specific research studies, training initiatives, or community programs."
    },
  ];

  return (
    <section id="funding" className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Funding & Partnerships
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
            Support Our <span className="text-primary">Mission</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            NHF is seeking long-term partnerships and funding support to sustain and scale 
            our impact on children's lives across India.
          </p>
        </div>

        {/* Annual Budget Card */}
        <Card className="mb-16 border-primary/20 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              {/* Budget Overview */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <IndianRupee className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Annual Estimated Budget</p>
                    <h3 className="text-3xl lg:text-4xl font-bold">₹50,00,000</h3>
                  </div>
                </div>
                <p className="text-primary-foreground/90 mb-6">
                  Our annual budget supports comprehensive research operations, training 
                  program development, community outreach initiatives, and strategic 
                  technical collaborations aligned with national child development priorities.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Target className="w-4 h-4" />
                  <span>Aligned with National Developmental Goals</span>
                </div>
              </div>

              {/* Budget Breakdown */}
              <div className="p-8 lg:p-12 bg-card">
                <h4 className="font-semibold mb-6">Budget Allocation</h4>
                <div className="space-y-4">
                  {budgetBreakdown.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium">{item.amount}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Partnership Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-center mb-10">
            Partnership Opportunities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipTypes.map((type, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <type.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{type.title}</h4>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CSR Alignment */}
        <Card className="border-secondary/30 bg-gradient-to-br from-secondary/5 to-transparent">
          <CardContent className="p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">
                  CSR-Aligned Initiatives
                </h3>
                <p className="text-muted-foreground mb-6">
                  NHF's work aligns with Schedule VII of the Companies Act, 2013, particularly 
                  in areas of healthcare, education, and child welfare. Our programs offer 
                  measurable outcomes and transparent reporting for CSR partners.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Promoting healthcare including preventive healthcare
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Promoting education and livelihood enhancement for differently-abled children
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Measures for reducing inequalities faced by socially disadvantaged groups
                    </span>
                  </li>
                </ul>
                <Button 
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Discuss Partnership
                </Button>
              </div>
              <div className="text-center">
                <div className="inline-grid grid-cols-2 gap-4">
                  <div className="p-6 bg-card rounded-xl border border-border/50">
                    <span className="text-3xl font-bold text-primary">80G</span>
                    <p className="text-xs text-muted-foreground mt-1">Tax Exemption</p>
                  </div>
                  <div className="p-6 bg-card rounded-xl border border-border/50">
                    <span className="text-3xl font-bold text-secondary">12A</span>
                    <p className="text-xs text-muted-foreground mt-1">Registered</p>
                  </div>
                  <div className="col-span-2 p-6 bg-card rounded-xl border border-border/50">
                    <span className="text-2xl font-bold text-foreground">Transparent</span>
                    <p className="text-xs text-muted-foreground mt-1">Audited Financials & Impact Reports</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FundingSection;