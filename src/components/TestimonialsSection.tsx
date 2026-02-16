import React, { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role }) => {
  return (
    <div className="border border-border rounded-lg p-6 bg-card flex flex-col h-full">
      <Quote className="w-6 h-6 text-muted-foreground/30 mb-4" />
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{quote}</p>
      <div>
        <p className="font-medium text-sm text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sectionRef.current?.classList.add("fade-in-view");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "Pitt AIMs helped me understand how AI connects to medicine. The workshops gave me enough confidence to start doing research in this space -- something I wouldn't have considered before.",
      name: "Neha Devineni",
      role: "MD Candidate, Class of 2028",
    },
    {
      quote: "The coding bootcamps and journal clubs gave me real, practical skills. It's a supportive group where you can ask questions without feeling behind.",
      name: "Jeffrey Ding",
      role: "MD Candidate, Class of 2028",
    },
    {
      quote: "I joined not knowing much about AI and left with a genuine interest in how it can help patients. The hands-on projects made it click for me.",
      name: "Joanna Yao",
      role: "MD Candidate, Class of 2028",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="section-fade-in text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-foreground">From Our Members</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            What students have to say about being part of Pitt AIMs.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <Testimonial key={index} quote={t.quote} name={t.name} role={t.role} />
          ))}
        </div>

        {/* Mobile slider */}
        <div className="md:hidden">
          <Testimonial
            quote={testimonials[activeIndex].quote}
            name={testimonials[activeIndex].name}
            role={testimonials[activeIndex].role}
          />
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-border"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
