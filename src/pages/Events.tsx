import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

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
      date: "March 15, 2026",
      time: "3:00 PM - 5:00 PM",
      location: "Scaife Hall, Room 101",
      description: "Intro to Python libraries for healthcare data analysis and visualization -- pandas, numpy, and matplotlib for medical data.",
      type: "bootcamp",
      registrationLink: "#",
    },
    {
      title: "NIH All of Us Dataset Workshop",
      date: "March 22, 2026",
      time: "2:00 PM - 4:00 PM",
      location: "Biomedical Science Tower, Room 303",
      description: "Learn how to access and work with the NIH All of Us research dataset: application process, data structures, and basic analysis.",
      type: "workshop",
      registrationLink: "#",
    },
    {
      title: "AI Ethics in Clinical Decision Support",
      date: "April 5, 2026",
      time: "5:00 PM - 6:30 PM",
      location: "Scaife Hall, Lecture Room A",
      description: "Discussing ethical considerations around AI in clinical decision support. We'll review recent papers and work through case studies.",
      type: "journal",
      registrationLink: "#",
    },
    {
      title: "Machine Learning for Medical Imaging",
      date: "April 15, 2026",
      time: "4:00 PM - 6:00 PM",
      location: "Biomedical Science Tower, Room 305",
      description: "Intro to CNNs and their use in medical imaging. Hands-on session with PyTorch and real imaging examples.",
      type: "workshop",
      registrationLink: "#",
    },
    {
      title: "Healthcare NLP: Mining Electronic Health Records",
      date: "May 3, 2026",
      time: "3:00 PM - 5:00 PM",
      location: "Virtual (Zoom)",
      description: "NLP techniques for clinical text: preprocessing, entity recognition, and information extraction from medical documents.",
      type: "bootcamp",
      registrationLink: "#",
    },
    {
      title: "Research Collaboration Meet & Greet",
      date: "May 10, 2026",
      time: "6:00 PM - 8:00 PM",
      location: "University Club, Ballroom B",
      description: "Connect with faculty researchers for potential collaboration on AI in medicine projects. Refreshments provided.",
      type: "networking",
      registrationLink: "#",
    },
  ];

  const filteredEvents = filter === "all" ? events : events.filter((e) => e.type === filter);

  const typeMap: Record<string, { label: string; color: string }> = {
    bootcamp: { label: "Coding Bootcamp", color: "bg-purple-50 text-purple-700" },
    workshop: { label: "Workshop", color: "bg-blue-50 text-blue-700" },
    journal: { label: "Journal Club", color: "bg-green-50 text-green-700" },
    networking: { label: "Networking", color: "bg-orange-50 text-orange-700" },
  };

  const filters = [
    { key: "all", label: "All Events" },
    { key: "bootcamp", label: "Bootcamps" },
    { key: "workshop", label: "Workshops" },
    { key: "journal", label: "Journal Club" },
    { key: "networking", label: "Networking" },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="mb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Events</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Workshops, bootcamps, and discussions throughout the semester.
            </p>
          </div>

          {/* Filters */}
          <div className="section-fade-in flex flex-wrap gap-2 justify-center mb-10">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filter === f.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className="section-fade-in border border-border rounded-lg p-6 bg-card hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      typeMap[event.type]?.color || "bg-primary/5 text-primary"
                    }`}
                  >
                    {typeMap[event.type]?.label || event.type}
                  </span>
                </div>

                <h3 className="text-base font-semibold mb-2 text-foreground">{event.title}</h3>

                <div className="space-y-1 mb-3">
                  <p className="text-xs text-muted-foreground flex items-center">
                    <Calendar className="w-3 h-3 mr-1.5" />
                    {event.date} &middot; {event.time}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <MapPin className="w-3 h-3 mr-1.5" />
                    {event.location}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{event.description}</p>

                {event.registrationLink && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Register
                  </Button>
                )}
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No events found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Propose an Event */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3 text-foreground">Have an event idea?</h2>
            <p className="text-muted-foreground">
              We're always open to new workshop topics, speakers, and formats.
              Email us at{" "}
              <a href="mailto:etw46@pitt.edu" className="text-primary hover:underline">etw46@pitt.edu</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
