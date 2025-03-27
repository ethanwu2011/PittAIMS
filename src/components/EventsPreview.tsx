
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  type: string;
  delay: number;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description, type, delay }) => {
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

  const typeColorMap: Record<string, { bg: string; text: string }> = {
    workshop: { bg: "bg-blue-500/10", text: "text-blue-400" },
    bootcamp: { bg: "bg-purple-500/10", text: "text-purple-400" },
    journal: { bg: "bg-green-500/10", text: "text-green-400" },
    research: { bg: "bg-orange-500/10", text: "text-orange-400" },
  };

  const colors = typeColorMap[type.toLowerCase()] || { bg: "bg-primary/10", text: "text-primary" };

  return (
    <div
      ref={cardRef}
      className="section-fade-in neumorph-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
            {type}
          </span>
        </div>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <Button variant="ghost" className="px-0 text-primary hover:text-primary/90 hover:bg-transparent">
        Learn more
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
  );
};

const EventsPreview: React.FC = () => {
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

  const upcomingEvents = [
    {
      title: "Python for Medical Data Analysis",
      date: "Oct 15, 2023",
      description: "Introduction to Python libraries specifically for healthcare data analysis and visualization.",
      type: "Bootcamp"
    },
    {
      title: "NIH All of Us Research Dataset Workshop",
      date: "Oct 22, 2023",
      description: "Learn how to access and analyze the NIH All of Us research dataset for your projects.",
      type: "Workshop"
    },
    {
      title: "AI Ethics in Clinical Decision Support",
      date: "Nov 5, 2023",
      description: "Discussion on ethical considerations when implementing AI in clinical decision support systems.",
      type: "Journal"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="section-fade-in mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Join us for workshops, bootcamps, and discussions to enhance your AI and healthcare knowledge
            </p>
          </div>
          <Button className="bg-card hover:bg-card/80 border border-border/50 text-foreground">
            View All Events
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {upcomingEvents.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              description={event.description}
              type={event.type}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
