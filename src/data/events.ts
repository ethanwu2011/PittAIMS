// Upcoming meetings and events, shown in "Coming up" on the homepage.
// Anything without a `date` shows as "TBA". When a date is set, fill in
// `date` (e.g. "Oct 21"), and optionally `time` and `place`.
// Delete events once they've happened.

export interface ClubEvent {
  title: string;
  kind: "Meeting" | "Journal club" | "Workshop" | "Course" | "Social";
  blurb: string;
  date?: string;
  time?: string;
  place?: string;
  link?: { label: string; href: string };
}

export const events: ClubEvent[] = [
  {
    title: "General body meeting",
    kind: "Meeting",
    blurb: "Meet the officers, hear what's planned for the year, and find people to work with.",
  },
  {
    title: "Journal club",
    kind: "Journal club",
    blurb: "A recent paper on AI in medicine, talked through together. No need to finish it first.",
  },
  {
    title: "Intro to Python workshop",
    kind: "Workshop",
    blurb: "Your first hands-on session: Python and pandas on health data, from scratch.",
  },
  {
    title: "Applied ML in Medicine, next cohort",
    kind: "Course",
    blurb: "Eight sessions building models on the NIH All of Us dataset. Dates and applications to come.",
    link: { label: "About the course", href: "/course/" },
  },
];
