// People shown on /people and the homepage. `role` and `photo` are
// optional; anyone without a photo gets a colored initials tile.
// Photos live in public/images/people/ (square, ~480px).

export interface Person {
  name: string;
  role?: string;
  photo?: string;
  /** An empty slot shown as "Announced soon". */
  placeholder?: boolean;
}

const tba = (count: number): Person[] =>
  Array.from({ length: count }, () => ({ name: "Announced soon", placeholder: true }));

// Incoming board. Replace the placeholders with real entries as officers
// are announced, e.g. { name: "Jane Doe", photo: "/images/people/jane.jpg" }.
// Once the whole board is in, make it the current board below.
export const incomingTerm = "2026 to 2027";
export const incomingOfficers: Person[] = tba(6);

export const officersTerm = "2025 to 2026";

export const officers: Person[] = [
  { name: "Ethan Wu", photo: "/images/people/ethan.jpg" },
  { name: "Isuru Herath", photo: "/images/people/isuru.jpg" },
  { name: "Mary Moon" },
  { name: "Peace Odiase" },
  { name: "Yash Raka" },
  { name: "Ankit Raheja" },
];

export const founders: Person[] = [
  { name: "Ethan Wu", photo: "/images/people/ethan.jpg" },
  { name: "Shaila Fye", photo: "/images/people/shaila.jpg" },
  { name: "Isuru Herath", photo: "/images/people/isuru.jpg" },
  { name: "Josh Pantanowitz", photo: "/images/people/josh.jpg" },
];

// Earlier boards, newest first. Add a { term, people } entry for each
// year, e.g. { term: "2024 to 2025", people: [{ name: "Jane Doe" }] }.
export const pastOfficers: { term: string; people: Person[] }[] = [
  { term: "Founding officers", people: founders },
];

// Faculty and staff who have taught in the Applied ML in Medicine course.
export const faculty: Person[] = [
  { name: "Dr. Shyam Visweswaran" },
  { name: "Dr. Richard Steinman" },
  { name: "Dr. Vanathi Gopalakrishnan" },
  { name: "Dr. Ansuman Chattopadhyay" },
  { name: "Alexis Cenname, MS" },
];

export const initials = (name: string) =>
  name
    .replace(/^Dr\.\s+/, "")
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

/** Look up a person by name across all lists, so their photo shows up anywhere. */
export const person = (name: string): Person =>
  [...officers, ...founders].find((p) => p.name === name) ?? { name };
