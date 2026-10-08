// Research shown on /research and the homepage.
//
// `pipeline` is work that's on its way out: papers under review, preprints,
// submitted abstracts, tools about to launch. It shows under "Coming out".
// `groups` lists who works on what, with example papers (by DOI from
// publications.ts) and any presented abstracts.
//
// Keep the writing plain and skip statistics; link out for the details.

export type Tone = "sky" | "gold" | "coral" | "mint";

export interface Link {
  label: string;
  href: string;
}

export interface PipelineItem {
  /** Short status label, e.g. "Under review", "Preprint", "Submitted", "Coming soon". */
  status: string;
  title: string;
  body: string;
  people: string[];
  andOthers?: boolean;
  group: string;
  links?: Link[];
  image?: { src: string; alt: string; width: number; height: number };
}

export interface Abstract {
  meeting: string;
  /** Fill in once you have it; until then the entry shows who and where. */
  title?: string;
  people: string[];
}

export interface ResearchGroup {
  id: string;
  name: string;
  blurb: string;
  tone: Tone;
  people: string[];
  papers?: string[];
  abstracts?: Abstract[];
}

export const pipeline: PipelineItem[] = [
  {
    status: "Coming soon",
    title: "Contextualized machine learning for tuberculosis treatment",
    body: "Instead of one model for every patient, a neural network reads each patient's context, like other conditions and demographics, and builds a model for that person. It shows who benefits from which TB treatment, with anemia, age of onset, and HIV standing out.",
    people: ["Ethan Wu"],
    group: "clinical-prediction",
    links: [{ label: "Code", href: "https://github.com/ethanwu2011/ContextualizedTB" }],
    image: {
      src: "/images/research/contextualized-tb.jpg",
      alt: "Diagram comparing one population model for TB mortality with a contextualized model, where a neural network turns each patient's context into a patient-specific model.",
      width: 1200,
      height: 628,
    },
  },
  {
    status: "Abstracts submitted",
    title: "Critical care abstracts for the SCCM Critical Care Congress",
    body: "A group of members submitted several abstracts to the Society of Critical Care Medicine's annual meeting.",
    people: ["Peace Odiase", "Rehan Gupta", "Ronit Deshpande"],
    andOthers: true,
    group: "critical-care",
  },
  {
    status: "Under review",
    title: "CELTIC: telling cellulitis apart from its mimics",
    body: "A simple, interpretable model for whether a hospitalized patient's red, swollen limb is cellulitis or something that looks like it. There's a free calculator online.",
    people: ["Ethan Wu"],
    group: "clinical-prediction",
    links: [
      { label: "cellulitiscalc.com", href: "https://www.cellulitiscalc.com/" },
      { label: "Code", href: "https://github.com/ethanwu2011/cellulitiscalc" },
    ],
  },
  {
    status: "Preprint",
    title: "Novices and AI, together, watching for stroke during surgery",
    body: "Pairing novice EEG monitors with an AI model held up against expert neurophysiologists at catching brain ischemia during carotid surgery, with fewer false alarms than the AI alone.",
    people: ["Yash Raka"],
    group: "operating-room",
    links: [{ label: "medRxiv", href: "https://doi.org/10.64898/2026.08.01.26359457" }],
  },
];

export const groups: ResearchGroup[] = [
  {
    id: "clinical-prediction",
    name: "Clinical prediction and personalized medicine",
    blurb:
      "Interpretable models on large clinical datasets like NIH All of Us, MIMIC, and TB Portals, aimed at questions that come up at the bedside.",
    tone: "sky",
    people: ["Ethan Wu"],
    papers: ["10.1016/j.xops.2026.101124", "10.1016/j.ajo.2025.07.020"],
  },
  {
    id: "critical-care",
    name: "Critical care",
    blurb: "Research questions from the ICU.",
    tone: "coral",
    people: ["Peace Odiase", "Rehan Gupta", "Ronit Deshpande"],
  },
  {
    id: "neurosurgery",
    name: "Neurosurgery and neuro-oncology",
    blurb:
      "Outcomes research in neurosurgery, from trigeminal neuralgia to brain tumors, and reviews of neurosurgical care across Africa.",
    tone: "mint",
    people: ["Peace Odiase"],
    papers: [
      "10.1016/j.clineuro.2026.109543",
      "10.1016/j.jocn.2026.112202",
      "10.1016/j.jocn.2026.111986",
      "10.3171/2025.1.PEDS24387",
      "10.1016/j.wneu.2025.124284",
      "10.1016/j.neuchi.2025.101710",
      "10.1016/j.jocn.2025.111054",
      "10.1016/j.wneu.2024.11.116",
      "10.1093/noajnl/vdae219",
      "10.3171/2024.8.SPINE24614",
    ],
  },
  {
    id: "drug-discovery",
    name: "Drug discovery",
    blurb: "Graph neural networks that predict which drug targets could push a diseased cell back toward health.",
    tone: "gold",
    people: ["Isuru Herath"],
    papers: ["10.1038/s41551-025-01481-x"],
  },
  {
    id: "obgyn",
    name: "Obstetrics and gynecology",
    blurb: "Members bringing their work to the ACOG annual meeting.",
    tone: "coral",
    people: ["Carly Mable", "Soo Kang"],
    abstracts: [{ meeting: "ACOG Annual Clinical and Scientific Meeting", people: ["Carly Mable", "Soo Kang"] }],
  },
  {
    id: "pathology",
    name: "Pathology",
    blurb:
      "Cytopathology and surgical pathology, what chatbots like ChatGPT and Llama can and can't do in the field, and reviews that explain AI to clinicians: how it works, how to evaluate it, where bias comes from, and how it's regulated.",
    tone: "sky",
    people: ["Josh Pantanowitz"],
    papers: [
      "10.1016/j.jpi.2026.100661",
      "10.1159/000553127",
      "10.1177/10668969241283481",
      "10.1016/j.modpat.2024.100687",
      "10.1016/j.modpat.2024.100688",
      "10.1016/j.modpat.2024.100686",
      "10.1016/j.modpat.2024.100609",
      "10.1016/j.modpat.2024.100663",
      "10.1016/j.modpat.2024.100680",
      "10.1016/j.modpat.2025.100705",
      "10.1016/j.labinv.2024.102095",
      "10.1016/j.thromres.2024.109121",
      "10.1016/j.jasc.2023.07.001",
      "10.1002/cncy.22272",
      "10.1002/cncy.22212",
      "10.1016/j.rmcr.2019.01.011",
    ],
  },
  {
    id: "operating-room",
    name: "Human–AI teams in the operating room",
    blurb: "Pairing clinicians with AI models to watch for problems during surgery.",
    tone: "mint",
    people: ["Yash Raka"],
  },
  {
    id: "imaging",
    name: "Medical imaging",
    blurb: "Deep learning on retinal OCT scans.",
    tone: "gold",
    people: ["Ethan Wu"],
    papers: ["10.1371/journal.pone.0335615"],
  },
];
