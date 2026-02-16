import React from "react";
import { Link } from "react-router-dom";

const EventsPreview: React.FC = () => {
  const events = [
    { date: "Mar 15", title: "Python for Medical Data Analysis", note: "Bootcamp" },
    { date: "Mar 22", title: "NIH All of Us Dataset Workshop", note: "Workshop" },
    { date: "Apr 5", title: "AI Ethics in Clinical Decision Support", note: "Journal Club" },
  ];

  return (
    <section className="py-10 md:py-14 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <h2 className="text-xl font-semibold text-foreground mb-4">Upcoming events</h2>
        <ul className="space-y-3">
          {events.map((e, i) => (
            <li key={i} className="text-base text-muted-foreground">
              <span className="text-foreground font-medium">{e.date}</span>
              {" -- "}
              {e.title}
              <span className="text-muted-foreground/60"> ({e.note})</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm">
          <Link to="/events" className="text-primary hover:underline">
            See all events
          </Link>
        </p>
      </div>
    </section>
  );
};

export default EventsPreview;
