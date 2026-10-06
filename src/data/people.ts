// People shown on /people and the homepage. `role` and `photo` are
// optional; anyone without a photo gets a colored initials tile.
// Photos live in public/images/people/ (square, ~480px).

export interface Person {
  name: string;
  role?: string;
  photo?: string;
}

export const officersTerm = "2025–26";

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
