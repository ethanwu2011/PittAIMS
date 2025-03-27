
import React, { useEffect, useRef, useState } from "react";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, image }) => {
  return (
    <div className="neumorph-card p-6 md:p-8 rounded-2xl flex flex-col h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary/40 mb-4"
      >
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
      </svg>
      
      <p className="text-muted-foreground mb-6 flex-grow">{quote}</p>
      
      <div className="flex items-center">
        {image && (
          <div className="mr-3 w-10 h-10 rounded-full overflow-hidden bg-primary/10">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
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

  // Auto rotate testimonials on desktop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "The Pitt AIMs workshops have been instrumental in helping me understand how AI can be applied to my ophthalmology research. The community is supportive and the resources are excellent.",
      name: "Dr. Jay Chhablani",
      role: "Faculty Advisor, Ophthalmology"
    },
    {
      quote: "As a medical student with limited coding background, the Python bootcamps organized by Pitt AIMs gave me the confidence to start working with healthcare datasets and pursue research in this exciting field.",
      name: "Sarah Johnson",
      role: "MD Candidate, Class of 2024"
    },
    {
      quote: "The journal club discussions have broadened my understanding of how AI can address disparities in healthcare. It's a fantastic environment to learn and grow with like-minded peers.",
      name: "Dr. Hooman Rashidi",
      role: "Faculty Advisor, Pathology"
    }
  ];

  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="section-fade-in text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from students, faculty, and researchers who have participated in our programs
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="section-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Testimonial
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
              />
            </div>
          ))}
        </div>

        {/* Mobile slider */}
        <div className="md:hidden">
          <div className="section-fade-in">
            <Testimonial
              quote={testimonials[activeIndex].quote}
              name={testimonials[activeIndex].name}
              role={testimonials[activeIndex].role}
            />
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
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
