// People shown on /people. `role` and `program` are optional; leave them
// out rather than guessing.

export interface Person {
  name: string;
  role?: string;
  program?: string;
}

export const officersTerm = "2026–27";

export const officers: Person[] = [
  { name: "Ethan Wu", program: "MD-PhD student, Pitt–CMU MSTP" },
  { name: "Isuru Herath", program: "MD-PhD student, Pitt–CMU MSTP" },
  { name: "Mary Moon" },
  { name: "Peace Odiase" },
  { name: "Yash" },
  { name: "Ankit Raheja" },
];

export const founders: Person[] = [
  { name: "Ethan Wu" },
  { name: "Shaila Fye" },
  { name: "Isuru Herath" },
  { name: "Josh Pantanowitz" },
];

// Faculty and staff who have taught in the Applied ML in Medicine course.
export const faculty: Person[] = [
  { name: "Dr. Shyam Visweswaran" },
  { name: "Dr. Richard Steinman" },
  { name: "Dr. Vanathi Gopalakrishnan" },
  { name: "Dr. Ansuman Chattopadhyay" },
  { name: "Alexis Cenname, MS" },
];
