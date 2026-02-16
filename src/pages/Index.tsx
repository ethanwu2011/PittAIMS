import React from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import EventsPreview from "@/components/EventsPreview";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <EventsPreview />

      {/* Closing */}
      <section className="py-10 md:py-14 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <p className="text-base text-muted-foreground leading-relaxed">
            General meetings are every other Wednesday at 5 PM. We meet in Scaife Hall.
            Check the{" "}
            <Link to="/events" className="text-primary hover:underline">events page</Link>{" "}
            for the full schedule, or{" "}
            <Link to="/contact" className="text-primary hover:underline">reach out</Link>{" "}
            if you have questions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
