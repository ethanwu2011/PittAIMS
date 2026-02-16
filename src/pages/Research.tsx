import React, { useEffect } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  collaborators: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, collaborators }) => {
  return (
    <div className="border border-border rounded-lg p-6 bg-card hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-primary/5 text-primary px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-base font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{description}</p>
      <p className="text-xs text-muted-foreground">
        <span className="font-medium text-foreground">Collaborators:</span> {collaborators.join(", ")}
      </p>
    </div>
  );
};

const Research: React.FC = () => {

  const projects = [
    {
      title: "3RC LLM for Clinical Documentation",
      description: "Building a language model trained on clinical notes to help with documentation, retrieval, and summarization of patient information.",
      tags: ["NLP", "LLM", "Clinical Notes"],
      collaborators: ["TBD"],
    },
    {
      title: "AI-Assisted Retinal Disease Classification",
      description: "A CNN-based system for detecting and classifying retinal diseases from OCT and fundus images.",
      tags: ["Computer Vision", "Deep Learning", "Ophthalmology"],
      collaborators: ["TBD"],
    },
    {
      title: "Predicting Antibiotic Resistance with ML",
      description: "Using machine learning to predict antibiotic resistance patterns from patient data, microbiology results, and hospital environmental factors.",
      tags: ["Predictive Modeling", "Infectious Disease"],
      collaborators: ["TBD"],
    },
    {
      title: "Federated Learning for Medical Data",
      description: "Implementing federated learning so multiple institutions can collaborate on models without sharing sensitive patient data.",
      tags: ["Federated Learning", "Privacy"],
      collaborators: ["TBD"],
    },
    {
      title: "NLP for Clinical Decision Support",
      description: "Building tools that extract relevant information from clinical notes and literature to support evidence-based decisions.",
      tags: ["NLP", "Decision Support"],
      collaborators: ["TBD"],
    },
  ];

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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-24 pb-20">
      {/* Introduction */}
      <section className="mb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Research</h1>
            <p className="text-muted-foreground text-lg">
              We want to be a computational resource for medical research at Pitt and UPMC. 
              Our members work on projects across NLP, computer vision, and predictive analytics 
              -- collaborating with clinicians and researchers to tackle real healthcare problems.
            </p>
          </div>

          {/* Focus Areas */}
          <div className="section-fade-in mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              <div className="border border-border rounded-lg p-6 bg-card border-t-2 border-t-primary">
                <h3 className="text-base font-semibold mb-2 text-foreground">Clinical NLP</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Extracting insights from medical text, clinical notes, and healthcare literature to support better decisions.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-card border-t-2 border-t-primary">
                <h3 className="text-base font-semibold mb-2 text-foreground">Medical Imaging AI</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Computer vision for diagnostic imaging, disease detection, and treatment planning.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-card border-t-2 border-t-primary">
                <h3 className="text-base font-semibold mb-2 text-foreground">Predictive Analytics</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Models that forecast patient outcomes, disease progression, and treatment responses.
                </p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="section-fade-in">
            <h2 className="text-2xl font-bold mb-3 text-center text-foreground">Current Projects</h2>
            <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
              Ongoing work where we're applying AI to healthcare challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  collaborators={project.collaborators}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3 text-foreground">Get Involved in Research</h2>
            <p className="text-muted-foreground">
              Interested in joining a project or proposing new research?
              Email us at{" "}
              <a href="mailto:etw46@pitt.edu" className="text-primary hover:underline">etw46@pitt.edu</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Research Resources</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="section-fade-in border border-border rounded-lg p-6 bg-card">
              <h3 className="text-base font-semibold mb-3 text-foreground">Datasets</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>MIMIC Critical Care Database</li>
                <li>UK Biobank</li>
                <li>Cancer Imaging Archive</li>
                <li>Pitt Clinical Data Warehouse</li>
                <li>PhysioNet Databases</li>
              </ul>
            </div>

            <div className="section-fade-in border border-border rounded-lg p-6 bg-card">
              <h3 className="text-base font-semibold mb-3 text-foreground">Computing</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>Pitt Center for Research Computing</li>
                <li>GPU Access Program</li>
                <li>Cloud Computing Credits</li>
                <li>Collaborative Coding Environments</li>
                <li>Version Control Systems</li>
              </ul>
            </div>

            <div className="section-fade-in border border-border rounded-lg p-6 bg-card">
              <h3 className="text-base font-semibold mb-3 text-foreground">Mentorship & Support</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>Faculty Mentor Matching</li>
                <li>Peer Research Networks</li>
                <li>Grant Application Help</li>
                <li>IRB Navigation Support</li>
                <li>Publication Guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
