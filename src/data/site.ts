// Site-wide settings. Edit here and every page picks it up.

export const site = {
  name: "Pitt AIMs",
  fullName: "AI in Medicine Society at the University of Pittsburgh",
  url: "https://pittaims.com",
  email: "etw46@pitt.edu",
  tagline: "A big tent for AI in medicine.",
  description:
    "Pitt AIMs, the AI in Medicine Society, is a student-run club at the University of Pittsburgh that's open to everyone. Journal club, coding workshops, a summer machine learning course, and research with Pitt and UPMC faculty. No coding experience needed.",
};

export const nav = [
  { label: "What we do", href: "/#what-we-do" },
  { label: "Events", href: "/#events" },
  { label: "Research", href: "/research/" },
  { label: "Course", href: "/course/" },
  { label: "People", href: "/people/" },
];

export const joinHref = `mailto:${site.email}?subject=${encodeURIComponent("I'd like to join Pitt AIMs")}`;

// Coverage of the club elsewhere. Newest first.
export const press = [
  {
    outlet: "University of Pittsburgh School of Medicine",
    title: "These Pitt School of Medicine Students Are Shaping the Future of AI-Driven Health Care",
    url: "https://www.medschool.pitt.edu/news/these-pitt-school-medicine-students-are-shaping-future-ai-driven-health-care",
  },
];
