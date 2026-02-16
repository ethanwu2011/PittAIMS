import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            University of Pittsburgh School of Medicine
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
            AI in Medicine Society
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            A student-run community exploring how artificial intelligence can improve healthcare. 
            Workshops, research collaborations, journal clubs, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => navigate("/contact")}
            >
              Join Our Community
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/research")}
            >
              Explore Research
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Affiliated with</p>
            <div className="flex justify-center gap-10 items-center">
              <span className="text-muted-foreground font-semibold text-base">Pitt Med</span>
              <span className="text-muted-foreground font-semibold text-base">UPMC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
