
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const patternRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollY = window.scrollY;
      const sectionHeight = sectionRef.current.offsetHeight;
      const parallaxRate = scrollY * 0.3;
      
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${parallaxRate * 0.3}px)`;
      }
      
      if (patternRef.current) {
        patternRef.current.style.transform = `translateY(${parallaxRate * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotatingWords = [
    "Innovation",
    "Collaboration",
    "Research",
    "Learning",
    "Discovery",
    "Advancement"
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Background pattern */}
      <div 
        ref={patternRef}
        className="absolute inset-0 pattern-dots opacity-10 z-0"
      />
      
      {/* Animated gradient blur */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[100px] animate-pulse-light" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-[100px] animate-pulse-light" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={textRef} className="flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-down">
            University of Pittsburgh School of Medicine
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 md:mb-6 animate-fade-down" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient">Pitt AI in Medicine Society</span>
          </h1>
          
          <div className="h-[2.5rem] md:h-[3rem] mb-6 md:mb-8 overflow-hidden animate-fade-down" style={{ animationDelay: "0.2s" }}>
            <div className="flex text-xl md:text-2xl font-medium text-muted-foreground">
              <span className="mr-2">Fostering</span>
              <div className="relative h-[2.5rem] md:h-[3rem] overflow-hidden">
                <div className="absolute animate-text-slide">
                  {rotatingWords.map((word, index) => (
                    <div key={index} className="h-[2.5rem] md:h-[3rem] flex items-center text-primary">
                      {word}
                    </div>
                  ))}
                </div>
              </div>
              <span className="ml-2">in AI & Medicine</span>
            </div>
          </div>
          
          <p className="max-w-2xl text-muted-foreground text-lg mb-8 animate-fade-down" style={{ animationDelay: "0.3s" }}>
            Promoting AI awareness, educational growth, and collaborative research in healthcare. Join us in exploring the future of medical innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-down" style={{ animationDelay: "0.4s" }}>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-6 rounded-lg shadow-lg button-glow">
              Join Our Community
            </Button>
            <Button variant="outline" className="bg-card border-border hover:bg-card/80 px-6 py-6 rounded-lg">
              Explore Projects
            </Button>
          </div>
          
          <div className="mt-12 md:mt-16 animate-fade-down" style={{ animationDelay: "0.5s" }}>
            <p className="text-muted-foreground text-sm mb-4">Affiliated with</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                <span className="font-semibold text-lg">UPMC</span>
              </div>
              <div className="text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                <span className="font-semibold text-lg">Pitt Med</span>
              </div>
              <div className="text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                <span className="font-semibold text-lg">NIH All of Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/70"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
