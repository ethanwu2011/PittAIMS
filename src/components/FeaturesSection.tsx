import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <h2 className="text-xl font-semibold text-foreground mb-6">What we do</h2>
        <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Workshops and bootcamps.</strong>{" "}
            We run hands-on coding sessions throughout the semester -- Python basics,
            machine learning frameworks, healthcare data analysis. No prior experience needed.
          </p>
          <p>
            <strong className="text-foreground">Journal club.</strong>{" "}
            Every other Monday we pick a recent paper on AI in clinical medicine and talk
            through it. It's low-key. You don't need to have read the whole thing.
          </p>
          <p>
            <strong className="text-foreground">Research.</strong>{" "}
            We collaborate with faculty at Pitt Med and UPMC on real projects --
            clinical NLP, medical imaging, predictive analytics. We can help match you
            with a project if you're interested.
          </p>
          <p>
            <strong className="text-foreground">Ethics and equity.</strong>{" "}
            We think it matters to talk about the implications of using AI in medicine,
            not just the technical side. We make space for those conversations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
