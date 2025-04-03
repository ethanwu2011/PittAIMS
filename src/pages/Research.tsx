import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  collaborators: string[];
  link?: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tags, 
  image, 
  collaborators, 
  link, 
  delay 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            cardRef.current?.classList.add("fade-in-view");
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="section-fade-in neumorph-card rounded-2xl overflow-hidden hover:translate-y-[-5px] transition-all duration-300"
    >
      {image && (
        <div className="h-48 overflow-hidden bg-primary/5">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x200?text=Project+Image";
            }}
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="mb-4">
          <p className="text-sm text-muted-foreground font-medium mb-1">Collaborators:</p>
          <p className="text-sm">{collaborators.join(", ")}</p>
        </div>
        {link && (
          <Button 
            variant="ghost" 
            className="px-0 text-primary hover:text-yellow-500 hover:bg-transparent"
          >
            View Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Button>
        )}
      </div>
    </div>
  );
};

const Research: React.FC = () => {
  const projects = [
    {
      title: "Pitt Med 3RC LLM for Clinical Documentation",
      description: "Development of a large language model specifically trained on clinical notes to assist with documentation, retrieval, and summarization of patient information.",
      tags: ["NLP", "LLM", "Clinical Notes"],
      image: "https://via.placeholder.com/400x200?text=3RC+LLM+Project",
      collaborators: ["TBD"],
      link: "#"
    },
    {
      title: "AI-Assisted Retinal Disease Classification",
      description: "CNN-based system for automated detection and classification of retinal diseases from optical coherence tomography (OCT) and fundus images.",
      tags: ["Computer Vision", "Deep Learning", "Ophthalmology"],
      image: "https://via.placeholder.com/400x200?text=Retinal+Disease+Project",
      collaborators: ["TBD"],
      link: "#"
    },
    {
      title: "ML-Based Prediction of Antibiotic Resistance",
      description: "Machine learning algorithms to predict antibiotic resistance patterns based on patient factors, microbiology data, and hospital environmental factors.",
      tags: ["Antibiotic Resistance", "Predictive Modeling", "Infectious Disease"],
      image: "https://via.placeholder.com/400x200?text=Antibiotic+Resistance+Project",
      collaborators: ["TBD"],
      link: "#"
    },
    {
      title: "Federated Learning for Privacy-Preserving Medical Analysis",
      description: "Implementation of federated learning techniques to enable multi-institutional collaboration without sharing sensitive patient data.",
      tags: ["Federated Learning", "Privacy", "Multi-institutional"],
      image: "https://via.placeholder.com/400x200?text=Federated+Learning+Project",
      collaborators: ["TBD"],
      link: "#"
    },
    {
      title: "Natural Language Understanding for Clinical Decision Support",
      description: "Development of NLP tools to extract relevant information from clinical notes and literature to support evidence-based clinical decision making.",
      tags: ["NLP", "Decision Support", "Evidence-Based Medicine"],
      image: "https://via.placeholder.com/400x200?text=Clinical+Decision+Support+Project",
      collaborators: ["TBD"],
      link: "#"
    }
  ];

  useEffect(() => {
    // Initialize fade-in animations
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

    document.querySelectorAll(".section-fade-in").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="pt-24 pb-20">
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Research at Pitt AIMs</h1>
            <div className="neumorph-card p-8 rounded-2xl border-l-4 border-yellow-500">
              <p className="text-lg mb-4">
                At Pitt AI in Medicine Society, we're dedicated to fostering innovative research at the intersection of artificial intelligence and healthcare. Our mission is to serve as the computational backbone for medical research initiatives throughout the University of Pittsburgh and UPMC.
              </p>
              <p className="text-lg mb-4">
                We actively seek collaborations with clinicians, researchers, and other computational teams to tackle challenging problems in healthcare. Our members bring expertise in machine learning, natural language processing, computer vision, and data science to support projects that have real-world impact on patient care.
              </p>
              <p className="text-lg">
                Whether you're looking for computational support for your medical research or you're a student interested in applying AI skills to healthcare problems, we welcome your involvement. Our collaborative approach emphasizes practical applications, ethical considerations, and rigorous methodology.
              </p>
            </div>
          </div>
          
          <div className="section-fade-in text-center mb-12 mt-16">
            <h2 className="text-3xl font-bold mb-4">Our Research Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
              <div className="neumorph-card p-6 rounded-2xl border-t-4 border-yellow-500">
                <h3 className="text-xl font-semibold mb-3">Clinical NLP</h3>
                <p className="text-muted-foreground">
                  Extracting insights from unstructured medical text, clinical notes, and healthcare literature to support decision-making.
                </p>
              </div>
              
              <div className="neumorph-card p-6 rounded-2xl border-t-4 border-primary" style={{ animationDelay: "100ms" }}>
                <h3 className="text-xl font-semibold mb-3">Medical Imaging AI</h3>
                <p className="text-muted-foreground">
                  Developing computer vision solutions for diagnostic imaging, disease detection, and treatment planning.
                </p>
              </div>
              
              <div className="neumorph-card p-6 rounded-2xl border-t-4 border-yellow-500" style={{ animationDelay: "200ms" }}>
                <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
                <p className="text-muted-foreground">
                  Creating models to forecast patient outcomes, disease progression, and treatment responses.
                </p>
              </div>
            </div>
          </div>
          
          <div className="section-fade-in text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">Current Projects</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-10">
              Explore our ongoing research initiatives where we're applying AI to solve important challenges in medicine
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  collaborators={project.collaborators}
                  link={project.link}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Research Opportunities */}
      <section className="py-12 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Research Community</h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for passionate students and collaborators to join our research projects. Whether you're experienced in AI or just starting out, there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground button-glow border border-yellow-500/20"
              >
                Apply to Join a Project
              </Button>
              <Button
                variant="outline"
                className="border-yellow-500/50 hover:bg-yellow-500/10 hover:text-yellow-500"
              >
                Propose New Research
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Research Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Research Resources</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Tools and resources to support your AI in medicine research journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="section-fade-in neumorph-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Datasets</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• MIMIC Critical Care Database</li>
                <li>• UK Biobank</li>
                <li>• Cancer Imaging Archive</li>
                <li>• Pitt Clinical Data Warehouse</li>
                <li>• PhysioNet Databases</li>
              </ul>
            </div>
            
            <div className="section-fade-in neumorph-card p-6 rounded-2xl" style={{ animationDelay: "100ms" }}>
              <h3 className="text-xl font-semibold mb-3">Computing Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Pitt Center for Research Computing</li>
                <li>• GPU Access Program</li>
                <li>• Cloud Computing Credits</li>
                <li>• Collaborative Coding Environments</li>
                <li>• Version Control Systems</li>
              </ul>
            </div>
            
            <div className="section-fade-in neumorph-card p-6 rounded-2xl" style={{ animationDelay: "200ms" }}>
              <h3 className="text-xl font-semibold mb-3">Mentorship & Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Faculty Mentor Matching</li>
                <li>• Peer Research Networks</li>
                <li>• Grant Application Assistance</li>
                <li>• IRB Navigation Support</li>
                <li>• Publication Guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
