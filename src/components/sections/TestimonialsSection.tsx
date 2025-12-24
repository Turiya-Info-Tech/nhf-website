import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "NHF's Parent Engagement Program transformed our understanding of our child's needs. The team didn't just give us a diagnosis—they gave us hope and practical strategies that work.",
      author: "Parent of a 5-year-old with ASD",
      type: "Parent",
      location: "Mumbai"
    },
    {
      quote: "Working with NHF on the DEIC capacity building project has been exceptional. Their evidence-based approach and deep understanding of ground realities make them an ideal implementation partner.",
      author: "UNICEF India Representative",
      type: "Partner",
      location: "Maharashtra"
    },
    {
      quote: "Dr. Dalwai and his team bring a rare combination of clinical expertise and research rigor. Their commitment to ethical research with vulnerable children sets a benchmark for the field.",
      author: "Academic Collaborator",
      type: "Collaborator",
      location: "Delhi"
    },
    {
      quote: "The training we received from NHF has fundamentally changed how we approach early intervention at our center. The focus on measurable outcomes is exactly what the field needs.",
      author: "DEIC Medical Officer",
      type: "Partner",
      location: "Pune"
    },
    {
      quote: "After years of uncertainty, NHF helped us see our daughter's strengths, not just her challenges. The whole-child approach made all the difference for our family.",
      author: "Parent of a 7-year-old with developmental delays",
      type: "Parent",
      location: "Thane"
    },
    {
      quote: "NHF's research on nutritional interventions is groundbreaking. Their ethical frameworks ensure that children's welfare is always at the center of every study.",
      author: "Pediatric Neurologist",
      type: "Collaborator",
      location: "Mumbai"
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
            Voices of <span className="text-primary">Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from parents, partners, and collaborators who have experienced 
            NHF's commitment to improving children's lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {testimonial.type}
                    </span>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-sm font-medium text-foreground">
                  — {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
