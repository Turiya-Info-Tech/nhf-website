import { useEffect, useState, useRef } from "react";

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 12, suffix: "+", label: "Years of Impact" },
    { value: 5000, suffix: "+", label: "Children Supported" },
    { value: 200, suffix: "+", label: "Professionals Trained" },
    { value: 15, suffix: "+", label: "Government Partnerships" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="impact" 
      ref={sectionRef}
      className="py-20 lg:py-28 bg-gradient-to-br from-foreground via-foreground to-foreground/95 text-primary-foreground"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
            From Care to Evidence.{" "}
            <span className="text-secondary">From Evidence to Impact.</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Our work creates measurable change in the lives of children, families, 
            and the systems that serve them.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-2">
                {isVisible ? (
                  <CountUp end={stat.value} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
            <h3 className="text-xl font-semibold mb-4">Impact on Families</h3>
            <p className="text-primary-foreground/70">
              Our evidence-based approach builds hope through observable change. 
              Families report significant improvements in their children's 
              functional abilities and quality of life.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
            <h3 className="text-xl font-semibold mb-4">Districts & Institutions</h3>
            <p className="text-primary-foreground/70 mb-3">
              Active partnerships with government and institutional stakeholders:
            </p>
            <ul className="text-primary-foreground/70 text-sm space-y-1">
              <li>• Pune (UNICEF DEIC Collaboration)</li>
              <li>• Aundh General Hospital</li>
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
            <h3 className="text-xl font-semibold mb-4">Systems Implemented</h3>
            <ul className="text-primary-foreground/70 text-sm space-y-2">
              <li>• Digital data collection system</li>
              <li>• Research facilitation system</li>
              <li>• Implementation, monitoring & evaluation</li>
              <li>• Ethics committee for research with vulnerable populations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple count-up animation component
const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = end / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

export default ImpactSection;
