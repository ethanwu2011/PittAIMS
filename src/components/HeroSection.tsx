import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-14 md:pt-32 md:pb-20 bg-primary/[0.03]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">
          University of Pittsburgh School of Medicine
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-6">
          AI in Medicine Society
        </h1>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          <p>
            We're med students, PhD students, and faculty building practical skills
            in machine learning -- and figuring out where it actually matters in healthcare.
          </p>
          <p>
            Through{" "}
            <Link to="/events" className="text-primary hover:underline">workshops</Link>,{" "}
            <Link to="/research" className="text-primary hover:underline">research</Link>,
            and a hands-on{" "}
            <Link to="/course" className="text-primary hover:underline">ML course</Link>,
            we help people go from curious to capable.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/course"
            className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Explore the course
          </Link>
          <a
            href="mailto:etw46@pitt.edu"
            className="inline-flex items-center px-5 py-2.5 border border-border text-sm font-medium rounded-md text-foreground hover:bg-muted transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
