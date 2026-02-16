import React from "react";

const features = [
  {
    label: "Workshops & bootcamps",
    description:
      "Hands-on coding sessions throughout the semester. Python basics, ML frameworks, healthcare data analysis. No experience needed -- we start from scratch.",
  },
  {
    label: "Journal club",
    description:
      "Every other Monday we discuss a recent paper on AI in clinical medicine. Low-key: you don't need to have read the whole thing to show up.",
  },
  {
    label: "Research",
    description:
      "We collaborate with Pitt Med and UPMC faculty on NLP, imaging, and predictive analytics projects. We can match you with something that fits your interests.",
  },
  {
    label: "Ethics & equity",
    description:
      "It matters to talk about what AI in medicine means for patients, not just the technical side. We make space for those conversations.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-10">What we do</h2>
        <div className="space-y-0 divide-y divide-border">
          {features.map((f, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-1 md:gap-8 py-6 first:pt-0 last:pb-0"
            >
              <p className="text-sm font-semibold text-foreground md:pt-0.5">{f.label}</p>
              <p className="text-base text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
