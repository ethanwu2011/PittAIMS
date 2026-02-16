import React from "react";
import { Link } from "react-router-dom";

const events = [
  { date: "Mar 15", title: "Python for Medical Data Analysis", tag: "Bootcamp" },
  { date: "Mar 22", title: "NIH All of Us Dataset Workshop", tag: "Workshop" },
  { date: "Apr 5", title: "AI Ethics in Clinical Decision Support", tag: "Journal Club" },
];

const tagColors: Record<string, string> = {
  Bootcamp: "bg-purple-50 text-purple-700",
  Workshop: "bg-blue-50 text-blue-700",
  "Journal Club": "bg-green-50 text-green-700",
};

const EventsPreview: React.FC = () => {
  return (
    <section className="py-14 md:py-20 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-8">Upcoming events</h2>
        <div className="space-y-0 divide-y divide-border">
          {events.map((e, i) => (
            <div key={i} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
              <span className="text-sm font-semibold text-primary w-16 shrink-0 pt-0.5">
                {e.date}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-base text-foreground font-medium">{e.title}</p>
              </div>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                  tagColors[e.tag] || "bg-muted text-muted-foreground"
                }`}
              >
                {e.tag}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm">
          <Link to="/events" className="text-primary hover:underline">
            See all events &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
};

export default EventsPreview;
