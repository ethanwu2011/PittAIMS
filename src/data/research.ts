// Research groups shown on /research (and summarized on the homepage).
// Each group lists the members working in it, and any papers, conference
// abstracts, or tools. Papers are referenced by DOI from publications.ts.
// To add a group, copy one below. To add people, just add their names.

export type Tone = "sky" | "gold" | "coral" | "mint";

export interface Abstract {
  meeting: string;
  /** e.g. "Presented", "Accepted", "Submitted". Leave out if unsure. */
  status?: string;
  year?: number;
  count?: number;
  /** Fill in once you have it; until then the entry shows who and where. */
  title?: string;
  people: string[];
  andOthers?: boolean;
}

export interface Tool {
  name: string;
  tagline: string;
  body: string;
  url: string;
  linkLabel: string;
  code?: string;
  status?: string;
  people: string[];
  image?: { src: string; alt: string; width: number; height: number };
}

export interface ResearchGroup {
  id: string;
  name: string;
  blurb: string;
  tone: Tone;
  people: string[];
  papers?: string[];
  abstracts?: Abstract[];
  tools?: Tool[];
}

export const celtic: Tool = {
  name: "CELTIC",
  tagline: "Is it cellulitis or a mimic?",
  body: "An interpretable model that estimates whether a hospitalized adult's red, warm, swollen limb is cellulitis or something that looks like it, such as a clot or venous stasis. The bedside version needs five yes-or-no findings. It was built on 24,852 adults in MIMIC-IV, and on held-out patients it beat the ALT-70 score (AUROC 0.72 vs 0.60). The calculator runs entirely in the browser and the code is open source.",
  url: "https://www.cellulitiscalc.com/",
  linkLabel: "cellulitiscalc.com",
  code: "https://github.com/ethanwu2011/cellulitiscalc",
  status: "Manuscript under review. Research use only.",
  people: ["Ethan Wu"],
  image: {
    src: "/images/research/celtic-calculator.jpg",
    alt: "The CELTIC calculator with five findings answered and a 55% probability of cellulitis.",
    width: 1200,
    height: 682,
  },
};

export const groups: ResearchGroup[] = [
  {
    id: "health-records",
    name: "Health records and clinical prediction",
    blurb:
      "Interpretable models on large clinical datasets like NIH All of Us and MIMIC-IV, aimed at questions that come up at the bedside.",
    tone: "sky",
    people: ["Ethan Wu"],
    tools: [celtic],
    papers: ["10.1016/j.xops.2026.101124", "10.1016/j.ajo.2025.07.020"],
  },
  {
    id: "critical-care",
    name: "Critical care",
    blurb: "Research questions from the ICU.",
    tone: "coral",
    people: ["Peace Odiase", "Rehan Gupta", "Ronit Deshpande"],
    abstracts: [
      {
        meeting: "Critical Care Congress (Society of Critical Care Medicine)",
        status: "Submitted",
        count: 6,
        people: ["Peace Odiase", "Rehan Gupta", "Ronit Deshpande"],
        andOthers: true,
      },
    ],
  },
  {
    id: "drug-discovery",
    name: "Drug discovery",
    blurb: "Graph neural networks that predict which drug targets could push a diseased cell back toward health.",
    tone: "mint",
    people: ["Isuru Herath"],
    papers: ["10.1038/s41551-025-01481-x"],
    tools: [
      {
        name: "PDGrapher",
        tagline: "Open-source code for the model",
        body: "The PDGrapher code and data links are public under the MIT License.",
        url: "https://github.com/mims-harvard/PDGrapher",
        linkLabel: "github.com/mims-harvard/PDGrapher",
        people: ["Isuru Herath"],
      },
    ],
  },
  {
    id: "obgyn",
    name: "Obstetrics and gynecology",
    blurb: "Members bringing their work to the ACOG annual meeting.",
    tone: "gold",
    people: ["Carly Mable", "Soo Kang"],
    abstracts: [
      {
        meeting: "ACOG Annual Clinical and Scientific Meeting",
        people: ["Carly Mable", "Soo Kang"],
      },
    ],
  },
  {
    id: "operating-room",
    name: "Human–AI teams in the operating room",
    blurb: "Pairing clinicians with AI models to watch for problems during surgery.",
    tone: "sky",
    people: ["Yash Raka"],
    papers: ["10.64898/2026.08.01.26359457"],
  },
  {
    id: "language-models",
    name: "Language models in medicine",
    blurb: "Testing what chatbots like ChatGPT and Llama can and can't do in clinical work.",
    tone: "coral",
    people: ["Josh Pantanowitz"],
    papers: ["10.1016/j.jpi.2026.100661", "10.1016/j.modpat.2024.100687", "10.1016/j.jasc.2023.07.001"],
  },
  {
    id: "imaging",
    name: "Medical imaging",
    blurb: "Deep learning on retinal OCT scans.",
    tone: "mint",
    people: ["Ethan Wu"],
    papers: ["10.1371/journal.pone.0335615"],
  },
  {
    id: "education-ethics",
    name: "AI education, ethics, and regulation",
    blurb: "Reviews that explain AI to clinicians: how it works, how to evaluate it, where bias comes from, and how it's regulated.",
    tone: "gold",
    people: ["Josh Pantanowitz"],
    papers: [
      "10.1016/j.modpat.2024.100688",
      "10.1016/j.modpat.2024.100686",
      "10.1016/j.modpat.2024.100609",
      "10.1016/j.modpat.2024.100663",
      "10.1016/j.modpat.2024.100680",
      "10.1016/j.modpat.2025.100705",
      "10.1016/j.labinv.2024.102095",
      "10.1016/j.thromres.2024.109121",
    ],
  },
];

/** Everyone listed in any group, in order of first appearance. */
export const researchers = [...new Set(groups.flatMap((g) => g.people))];
