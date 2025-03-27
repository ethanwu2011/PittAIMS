
import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import EventsPreview from "@/components/EventsPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index: React.FC = () => {
  const navigate = useNavigate();
  
  // Add scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section-fade-in").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".section-fade-in").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <HeroSection />
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <FeaturesSection />
      <div className="container mx-auto px-4">
        <div className="w-24 h-1 bg-yellow-500 mx-auto my-8 rounded-full"></div>
      </div>
      <EventsPreview />
      <div className="w-full h-1 bg-gradient-to-r from-yellow-500 via-transparent to-yellow-500"></div>
      <TestimonialsSection />
      
      {/* Call to Action Section */}
      <section className="py-20 md:py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-yellow-500/10"></div>
          <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-yellow-500/5"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="section-fade-in max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Ready to Join the Future of</h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 pitt-gradient">AI in Medicine?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you're a beginner curious about AI or an experienced researcher, there's a place for you in our community. Join us to learn, collaborate, and innovate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg shadow-lg button-glow border border-yellow-500/20"
                onClick={() => navigate("/contact")}
              >
                Join Our Community
              </Button>
              <Button 
                variant="outline"
                className="bg-card border-yellow-500/50 hover:bg-yellow-500/10 hover:text-yellow-500 px-6 py-3 rounded-lg"
                onClick={() => navigate("/events")}
              >
                Upcoming Events
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
