import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
          Pitt AIMs
        </h1>
        <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
          <p>
            We're a group of students at the University of Pittsburgh School of Medicine
            who are interested in how AI can be used in healthcare. We run{" "}
            <Link to="/events" className="text-primary hover:underline">workshops</Link>,{" "}
            <Link to="/research" className="text-primary hover:underline">research projects</Link>,
            journal clubs, and coding bootcamps -- mostly for med students,
            but anyone at Pitt is welcome.
          </p>
          <p>
            We also teach a course on{" "}
            <Link to="/course" className="text-primary hover:underline">
              Applied Machine Learning in Medicine
            </Link>{" "}
            where students get hands-on experience with the NIH All of Us dataset.
          </p>
          <p>
            If any of that sounds interesting,{" "}
            <Link to="/contact" className="text-primary hover:underline">get in touch</Link> or
            just show up to a meeting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
