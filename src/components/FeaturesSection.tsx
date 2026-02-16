import React, { useEffect, useRef } from "react";
import { BookOpen, FlaskConical, FileText, Users, Code, Scale } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200 bg-card">
      <div className="flex items-center mb-3">
        <div className="mr-3 text-primary">{icon}</div>
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sectionRef.current?.classList.add("fade-in-view");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const features = [
    {
      title: "Workshops",
      description: "Hands-on sessions on AI and ML concepts, designed for medical students at any skill level.",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      title: "Research Collaboration",
      description: "Work on real research projects with faculty mentors across Pitt Med and UPMC.",
      icon: <FlaskConical className="w-5 h-5" />,
    },
    {
      title: "Journal Club",
      description: "Read and discuss the latest papers on AI applications in clinical medicine.",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      title: "Networking",
      description: "Meet researchers, clinicians, and industry professionals working in healthcare AI.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Coding Bootcamps",
      description: "Learn Python, ML frameworks, and healthcare data analysis from scratch.",
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: "Ethics & Equity",
      description: "Discuss the ethical implications and health equity considerations of medical AI.",
      icon: <Scale className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="section-fade-in text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-foreground">What We Do</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Resources and opportunities to explore AI in healthcare, no matter your background.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
