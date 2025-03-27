
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: string;
  registrationLink?: string;
}

const Events: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("all");

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

    return () => {
      document.querySelectorAll(".section-fade-in").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const events: Event[] = [
    {
      title: "Python for Medical Data Analysis",
      date: "October 15, 2023",
      time: "3:00 PM - 5:00 PM",
      location: "Scaife Hall, Room 101",
      description: "Introduction to Python libraries specifically for healthcare data analysis and visualization. Learn how to use pandas, numpy, and matplotlib for medical data.",
      type: "bootcamp",
      registrationLink: "#"
    },
    {
      title: "NIH All of Us Research Dataset Workshop",
      date: "October 22, 2023",
      time: "2:00 PM - 4:00 PM",
      location: "Biomedical Science Tower, Room 303",
      description: "Learn how to access and analyze the NIH All of Us research dataset for your projects. This workshop will cover the application process, data structures, and basic analysis techniques.",
      type: "workshop",
      registrationLink: "#"
    },
    {
      title: "AI Ethics in Clinical Decision Support",
      date: "November 5, 2023",
      time: "5:00 PM - 6:30 PM",
      location: "Scaife Hall, Lecture Room A",
      description: "Discussion on ethical considerations when implementing AI in clinical decision support systems. We'll review recent publications and discuss case studies.",
      type: "journal",
      registrationLink: "#"
    },
    {
      title: "Machine Learning for Medical Imaging",
      date: "November 15, 2023",
      time: "4:00 PM - 6:00 PM",
      location: "Biomedical Science Tower, Room 305",
      description: "Introduction to convolutional neural networks and their applications in medical imaging analysis. Hands-on session with practical examples using PyTorch.",
      type: "workshop",
      registrationLink: "#"
    },
    {
      title: "Healthcare NLP: Text Mining Electronic Health Records",
      date: "December 3, 2023",
      time: "3:00 PM - 5:00 PM",
      location: "Virtual Event (Zoom)",
      description: "Learn techniques for natural language processing on clinical text data. We'll cover text preprocessing, entity recognition, and information extraction from medical documents.",
      type: "bootcamp",
      registrationLink: "#"
    },
    {
      title: "Research Collaboration Meet & Greet",
      date: "December 10, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "University Club, Ballroom B",
      description: "Networking event to connect students with faculty researchers for potential collaboration on AI in medicine projects. Refreshments will be provided.",
      type: "networking",
      registrationLink: "#"
    }
  ];

  const filteredEvents = filter === "all" 
    ? events 
    : events.filter(event => event.type === filter);

  const typeMap: Record<string, { label: string, color: string }> = {
    bootcamp: { label: "Coding Bootcamp", color: "bg-purple-500/10 text-purple-400" },
    workshop: { label: "Workshop", color: "bg-blue-500/10 text-blue-400" },
    journal: { label: "Journal Club", color: "bg-green-500/10 text-green-400" },
    networking: { label: "Networking", color: "bg-orange-500/10 text-orange-400" }
  };

  return (
    <div className="pt-24 pb-20">
      <section className="mb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Workshops</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Join us for hands-on workshops, insightful discussions, and networking opportunities to enhance your AI and healthcare knowledge
            </p>
          </div>
          
          {/* Filters */}
          <div className="section-fade-in flex flex-wrap gap-3 justify-center mb-12">
            <Button 
              variant={filter === "all" ? "default" : "outline"} 
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-primary text-primary-foreground" : ""}
            >
              All Events
            </Button>
            {Object.entries(typeMap).map(([key, { label }]) => (
              <Button 
                key={key} 
                variant={filter === key ? "default" : "outline"} 
                onClick={() => setFilter(key)}
                className={filter === key ? "bg-primary text-primary-foreground" : ""}
              >
                {label}
              </Button>
            ))}
          </div>
          
          {/* Events List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredEvents.map((event, index) => (
              <div 
                key={index} 
                className="section-fade-in neumorph-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span 
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      typeMap[event.type]?.color || "bg-primary/10 text-primary"
                    }`}
                  >
                    {typeMap[event.type]?.label || event.type}
                  </span>
                  <div className="text-sm text-muted-foreground text-right">
                    <div>{event.date}</div>
                    <div>{event.time}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block mr-1"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {event.location}
                </p>
                
                <p className="text-muted-foreground text-sm mb-6">{event.description}</p>
                
                {event.registrationLink && (
                  <Button 
                    className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30"
                  >
                    Register Now
                  </Button>
                )}
              </div>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No events found for this filter. Please try another category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Propose an Event Section */}
      <section className="py-12 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have an Event Idea?</h2>
            <p className="text-muted-foreground mb-8">
              We welcome suggestions for workshops, speakers, or topics you'd like to see covered in our future events. Let us know your ideas!
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-6 rounded-lg shadow-lg button-glow"
            >
              Propose an Event
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
