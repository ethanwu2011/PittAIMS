// Site-wide settings. Edit here and every page picks it up.

export const site = {
  name: "Pitt AI in Medicine",
  // Older names people may still search for.
  alternateNames: ["Pitt AIMs", "AI in Medicine Society"],
  url: "https://pittaims.com",
  email: "etw46@pitt.edu",
  tagline: "A big tent for AI in medicine.",
  description:
    "Pitt AI in Medicine is a student-run club at the University of Pittsburgh, open to everyone. We read papers, teach each other to code, run a summer machine learning course, and do research with Pitt and UPMC faculty.",
};

export const nav = [
  { label: "Events", href: "/#events" },
  { label: "Research", href: "/research/" },
  { label: "Course", href: "/course/" },
  { label: "People", href: "/people/" },
];

export const mailto = (subject: string) => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

export const joinHref = mailto("Joining Pitt AI in Medicine");

// Coverage of the club elsewhere. Newest first.
export const press = [
  {
    outlet: "University of Pittsburgh School of Medicine",
    title: "These Pitt School of Medicine Students Are Shaping the Future of AI-Driven Health Care",
    url: "https://www.medschool.pitt.edu/news/these-pitt-school-medicine-students-are-shaping-future-ai-driven-health-care",
  },
];
