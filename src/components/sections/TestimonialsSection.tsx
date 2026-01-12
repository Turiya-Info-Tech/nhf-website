import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Sparkles } from "lucide-react";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const testimonials = [
    {
      quote: "NHF's Parent Engagement Program transformed our understanding of our child's needs. The team didn't just give us a diagnosis—they gave us hope and practical strategies that work.",
      author: "Parent of a 5-year-old with ASD",
      type: "Parent",
      location: "Mumbai",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      quote: "Working with NHF on the DEIC capacity building project has been exceptional. Their evidence-based approach and deep understanding of ground realities make them an ideal implementation partner.",
      author: "UNICEF India Representative",
      type: "Partner",
      location: "Maharashtra",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      quote: "Dr. Dalwai and his team bring a rare combination of clinical expertise and research rigor. Their commitment to ethical research with vulnerable children sets a benchmark for the field.",
      author: "Academic Collaborator",
      type: "Collaborator",
      location: "Delhi",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      quote: "The training we received from NHF has fundamentally changed how we approach early intervention at our center. The focus on measurable outcomes is exactly what the field needs.",
      author: "DEIC Medical Officer",
      type: "Partner",
      location: "Pune",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      quote: "After years of uncertainty, NHF helped us see our daughter's strengths, not just her challenges. The whole-child approach made all the difference for our family.",
      author: "Parent of a 7-year-old with developmental delays",
      type: "Parent",
      location: "Thane",
      gradient: "from-teal-500 to-green-500"
    },
    {
      quote: "NHF's research on nutritional interventions is groundbreaking. Their ethical frameworks ensure that children's welfare is always at the center of every study.",
      author: "Pediatric Neurologist",
      type: "Collaborator",
      location: "Mumbai",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
            Voices of <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from parents, partners, and collaborators who have experienced 
            NHF's commitment to improving children's lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`group bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 overflow-hidden hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={getStaggerDelay(index, 100)}
            >
              <CardContent className="p-6 relative">
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`} />
                
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      {testimonial.type}
                    </span>
                    <p className="text-xs text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-800">
                    — {testimonial.author}
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
