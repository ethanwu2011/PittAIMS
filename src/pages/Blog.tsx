
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  link: string;
  category: "journal" | "technical" | "ethics";
}

const Blog: React.FC = () => {
  const [filter, setFilter] = useState("all");
  
  const posts: BlogPost[] = [
    {
      title: "Federated Learning: Privacy-Preserving Collaboration in Healthcare",
      date: "September 28, 2023",
      author: "Michael Rodriguez",
      excerpt: "Exploring how federated learning enables healthcare institutions to collaboratively train AI models without sharing sensitive patient data.",
      tags: ["Federated Learning", "Privacy", "Collaboration"],
      readTime: "6 min read",
      link: "#",
      category: "technical"
    },
    {
      title: "Addressing Racial Bias in Clinical Algorithms",
      date: "September 15, 2023",
      author: "Dr. Sarah Chen",
      excerpt: "A critical examination of racial bias in widely used clinical algorithms and strategies for developing more equitable AI systems.",
      tags: ["Ethics", "Racial Bias", "Health Equity"],
      readTime: "8 min read",
      link: "#",
      category: "ethics"
    },
    {
      title: "AI-Enhanced Diagnosis: Current State and Future Directions",
      date: "August 30, 2023",
      author: "Emily Thompson",
      excerpt: "Review of recent papers on AI systems for medical diagnosis, with a focus on interpretability and clinical integration.",
      tags: ["Diagnosis", "Interpretability", "Clinical Integration"],
      readTime: "10 min read",
      link: "#",
      category: "journal"
    },
    {
      title: "Transfer Learning for Medical Imaging with Limited Data",
      date: "August 17, 2023",
      author: "Daniel Park",
      excerpt: "Technical strategies for applying transfer learning to overcome limited training data in medical imaging applications.",
      tags: ["Transfer Learning", "Medical Imaging", "Deep Learning"],
      readTime: "7 min read",
      link: "#",
      category: "technical"
    },
    {
      title: "The Responsibility Gap in Automated Clinical Decision Support",
      date: "August 5, 2023",
      author: "Dr. Hooman Rashidi",
      excerpt: "Ethical considerations regarding responsibility and accountability when AI systems assist in clinical decision making.",
      tags: ["Ethics", "Responsibility", "Decision Support"],
      readTime: "9 min read",
      link: "#",
      category: "ethics"
    },
    {
      title: "Natural Language Processing for Electronic Health Records",
      date: "July 22, 2023",
      author: "Michael Rodriguez",
      excerpt: "Discussion of recent advances in NLP techniques for extracting valuable insights from unstructured clinical text data.",
      tags: ["NLP", "EHR", "Clinical Text"],
      readTime: "8 min read",
      link: "#",
      category: "journal"
    }
  ];
  
  const filteredPosts = filter === "all" 
    ? posts 
    : posts.filter(post => post.category === filter);
  
  const categoryMap: Record<string, { label: string, color: string }> = {
    journal: { label: "Journal Review", color: "bg-green-500/10 text-green-400" },
    technical: { label: "Technical", color: "bg-blue-500/10 text-blue-400" },
    ethics: { label: "Ethics & Equity", color: "bg-purple-500/10 text-purple-400" }
  };

  return (
    <div className="pt-24 pb-20">
      <section className="mb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Journal Club</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Insights, analysis, and discussions on the latest developments in AI and medicine
            </p>
          </div>
          
          {/* Filters */}
          <div className="section-fade-in flex flex-wrap gap-3 justify-center mb-12">
            <Button 
              variant={filter === "all" ? "default" : "outline"} 
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-primary text-primary-foreground" : ""}
            >
              All Posts
            </Button>
            <Button 
              variant={filter === "journal" ? "default" : "outline"} 
              onClick={() => setFilter("journal")}
              className={filter === "journal" ? "bg-primary text-primary-foreground" : ""}
            >
              Journal Reviews
            </Button>
            <Button 
              variant={filter === "technical" ? "default" : "outline"} 
              onClick={() => setFilter("technical")}
              className={filter === "technical" ? "bg-primary text-primary-foreground" : ""}
            >
              Technical Insights
            </Button>
            <Button 
              variant={filter === "ethics" ? "default" : "outline"} 
              onClick={() => setFilter("ethics")}
              className={filter === "ethics" ? "bg-primary text-primary-foreground" : ""}
            >
              Ethics & Equity
            </Button>
          </div>
          
          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map((post, index) => (
              <div 
                key={index} 
                className="section-fade-in neumorph-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span 
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      categoryMap[post.category]?.color || "bg-primary/10 text-primary"
                    }`}
                  >
                    {categoryMap[post.category]?.label || post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-secondary/30 text-muted-foreground px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="px-0 text-primary hover:text-primary/90 hover:bg-transparent"
                >
                  Read more
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
              </div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found for this filter. Please try another category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Journal Club Information */}
      <section className="py-16 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">About Our Journal Club</h2>
                <p className="text-muted-foreground mb-4">
                  Our journal club meets bi-weekly to discuss the latest research papers in AI and medicine. We focus on critical analysis, methodology evaluation, and potential clinical applications.
                </p>
                <p className="text-muted-foreground mb-6">
                  We have two tracks: a general track accessible to all backgrounds and a technical track for those interested in deeper algorithmic and mathematical discussions.
                </p>
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground button-glow"
                >
                  Join Our Next Session
                </Button>
              </div>
              
              <div className="neumorph-card p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Upcoming Journal Club Sessions</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">General Track: AI Ethics in Radiology</p>
                    <p className="text-sm text-muted-foreground">October 18, 2023 • 5:00 PM • Scaife Hall</p>
                  </div>
                  <div>
                    <p className="font-medium">Technical Track: Attention Mechanisms in Medical NLP</p>
                    <p className="text-sm text-muted-foreground">October 25, 2023 • 5:00 PM • Biomedical Tower</p>
                  </div>
                  <div>
                    <p className="font-medium">General Track: AI for Global Health Equity</p>
                    <p className="text-sm text-muted-foreground">November 1, 2023 • 5:00 PM • Scaife Hall</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contribute Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contribute to Our Blog</h2>
            <p className="text-muted-foreground mb-8">
              We welcome contributions from students, faculty, and researchers. Share your insights, research summaries, or perspectives on AI in medicine.
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground button-glow"
            >
              Submit a Post
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
