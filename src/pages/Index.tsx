
import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import EventsPreview from "@/components/EventsPreview";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index: React.FC = () => {
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
      <FeaturesSection />
      <EventsPreview />
      <TestimonialsSection />
      
      {/* Call to Action Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Future of AI in Medicine?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you're a beginner curious about AI or an experienced researcher, there's a place for you in our community. Join us to learn, collaborate, and innovate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg shadow-lg button-glow">
                Join Our Community
              </button>
              <button className="bg-card border-border hover:bg-card/80 px-6 py-3 rounded-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
