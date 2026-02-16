import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import EventsPreview from "@/components/EventsPreview";

const people = [
  { name: "Ethan Wu", note: "Co-founder · MD-PhD, Pitt-CMU" },
  { name: "Shaila Fye", note: "Co-founder · MS4" },
  { name: "Isuru Herath", note: "Co-founder · MD-PhD, Pitt-CMU" },
  { name: "Josh Pantanowitz", note: "Co-founder · MS3" },
];

const Index: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />

      {/* Course callout */}
      <section className="bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl py-10 md:py-14">
          <h2 className="text-xl font-bold text-foreground mb-2">Applied ML in Medicine</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            A hands-on summer intensive where students learn machine learning using the NIH
            All of Us research dataset. Eight sessions of real analysis, real code, and a
            final project on a clinical question you choose.
          </p>
          <Link
            to="/course"
            className="text-sm font-medium text-primary hover:underline"
          >
            View syllabus and materials &rarr;
          </Link>
        </div>
      </section>

      <EventsPreview />

      {/* People */}
      <section className="py-14 md:py-20 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">People</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {people.map((p, i) => (
              <div key={i}>
                <p className="text-base font-medium text-foreground">{p.name}</p>
                <p className="text-sm text-muted-foreground">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            General meetings are every other Wednesday at 5 PM in Scaife Hall.
            Check the{" "}
            <Link to="/events" className="text-primary hover:underline">events page</Link>{" "}
            for the full schedule, or email{" "}
            <a href="mailto:etw46@pitt.edu" className="text-primary hover:underline">etw46@pitt.edu</a>{" "}
            if you have questions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
