import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  type: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description, type }) => {
  const typeColors: Record<string, string> = {
    workshop: "bg-blue-50 text-blue-700",
    bootcamp: "bg-purple-50 text-purple-700",
    journal: "bg-green-50 text-green-700",
    research: "bg-orange-50 text-orange-700",
  };

  const colors = typeColors[type.toLowerCase()] || "bg-primary/5 text-primary";

  return (
    <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200 bg-card">
      <div className="flex justify-between items-start mb-3">
        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${colors}`}>
          {type}
        </span>
        <span className="text-xs text-muted-foreground flex items-center">
          <Calendar className="w-3 h-3 mr-1" />
          {date}
        </span>
      </div>
      <h3 className="text-base font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center">
        Learn more
        <ArrowRight className="w-3.5 h-3.5 ml-1" />
      </button>
    </div>
  );
};

const EventsPreview: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const upcomingEvents = [
    {
      title: "Python for Medical Data Analysis",
      date: "Mar 15, 2026",
      description: "Intro to Python libraries for healthcare data analysis and visualization.",
      type: "Bootcamp",
    },
    {
      title: "NIH All of Us Dataset Workshop",
      date: "Mar 22, 2026",
      description: "Learn how to access and analyze the NIH All of Us research dataset.",
      type: "Workshop",
    },
    {
      title: "AI Ethics in Clinical Decision Support",
      date: "Apr 5, 2026",
      description: "Discussing ethical considerations when implementing AI in clinical settings.",
      type: "Journal",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="section-fade-in mb-10 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-2 text-foreground">Upcoming Events</h2>
            <p className="text-muted-foreground">
              Workshops, bootcamps, and discussions throughout the semester.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/events")}
          >
            View All Events
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {upcomingEvents.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              description={event.description}
              type={event.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
