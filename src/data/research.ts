// Research groups, shown on /research and the homepage.
//
// Each group lists the members in it, an optional feature (a short
// write-up of one project, with an optional image), example papers by DOI
// from publications.ts, and any presented abstracts.
//
// Only list work that's already public (published, posted as a preprint,
// or presented). Keep the writing plain and skip statistics.

export type Tone = "sky" | "gold" | "coral" | "mint";

export interface Feature {
  headline: string;
  body: string;
  /** DOI of the paper this feature describes, if any. */
  doi?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    credit?: string;
    creditHref?: string;
  };
}

export interface Abstract {
  meeting: string;
  /** Fill in once you have it; until then the entry shows the meeting. */
  title?: string;
}

export interface ResearchGroup {
  id: string;
  name: string;
  blurb: string;
  tone: Tone;
  people: string[];
  feature?: Feature;
  papers?: string[];
  abstracts?: Abstract[];
}

export const groups: ResearchGroup[] = [
  {
    id: "drug-discovery",
    name: "Drug discovery",
    blurb: "Graph neural networks that predict which drug targets could push a diseased cell back toward health.",
    tone: "gold",
    people: ["Isuru Herath"],
    feature: {
      headline: "Asking a neural network which drugs would make a sick cell healthy again",
      body: "Most models predict how a drug will change a cell. PDGrapher, a causally inspired graph neural network, solves the inverse problem: given a diseased cell's state, it predicts the combination of therapeutic targets that would push it back toward healthy. It found effective targets more often than competing methods, and trains much faster.",
      doi: "10.1038/s41551-025-01481-x",
      image: {
        src: "/images/research/pdgrapher-panel-c.jpg",
        alt: "Diagram: PDGrapher takes a diseased cell state, predicts a set of drug targets, and models how those targets move the cell toward a treated state.",
        width: 648,
        height: 475,
        credit: "Figure: Gonzalez, Lin, Herath et al., PDGrapher repository (MIT License)",
        creditHref: "https://github.com/mims-harvard/PDGrapher",
      },
    },
    papers: ["10.1038/s41551-025-01481-x"],
  },
  {
    id: "neurosurgery",
    name: "Neurosurgery and neuro-oncology",
    blurb:
      "Outcomes research in neurosurgery, from trigeminal neuralgia to brain tumors, and reviews of neurosurgical care across Africa.",
    tone: "mint",
    people: ["Peace Odiase"],
    feature: {
      headline: "Mapping neurosurgical care across Africa",
      body: "Peace has co-authored a series of reviews that pull together studies from across Africa on spina bifida, spine trauma, brain aneurysms, and craniosynostosis, to show how care and outcomes differ from place to place.",
    },
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
    id: "pathology",
    name: "Pathology",
    blurb:
      "Cytopathology and surgical pathology, what chatbots like ChatGPT and Llama can and can't do in the field, and reviews that explain AI to clinicians.",
    tone: "sky",
    people: ["Josh Pantanowitz"],
    feature: {
      headline: "Can a panel of chatbots stand in for a panel of pathologists?",
      body: "Josh re-ran a published Delphi study on the future of pathology, with ChatGPT and Llama in place of the expert panel. The models reached consensus more often than the humans did. It's an early proof of concept that AI might one day help run expert surveys like these.",
      doi: "10.1016/j.jpi.2026.100661",
    },
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
    id: "clinical-prediction",
    name: "Clinical prediction",
    blurb:
      "Interpretable models on large clinical datasets like NIH All of Us, aimed at questions that come up at the bedside.",
    tone: "coral",
    people: ["Ethan Wu"],
    feature: {
      headline: "Spotting who gets macular degeneration early, from health records alone",
      body: "Interpretable models trained on patients' earlier diagnoses predicted who develops age-related macular degeneration early. Hypertension, hyperlipidemia, and rheumatoid arthritis stood out, and held up in the NIH All of Us cohort.",
      doi: "10.1016/j.ajo.2025.07.020",
    },
    papers: ["10.1016/j.xops.2026.101124", "10.1016/j.ajo.2025.07.020"],
  },
  {
    id: "operating-room",
    name: "Human–AI teams in the operating room",
    blurb: "Pairing clinicians with AI models to watch for problems during surgery.",
    tone: "mint",
    people: ["Yash Raka"],
    feature: {
      headline: "Novices and AI, together, watching for stroke during surgery",
      body: "Pairing novice EEG monitors with an AI model held up against expert neurophysiologists at catching brain ischemia during carotid surgery, with fewer false alarms than the AI alone.",
      doi: "10.64898/2026.08.01.26359457",
    },
    papers: ["10.64898/2026.08.01.26359457"],
  },
  {
    id: "critical-care",
    name: "Critical care",
    blurb: "Research questions from the ICU.",
    tone: "coral",
    people: ["Peace Odiase", "Rehan Gupta", "Ronit Deshpande"],
  },
  {
    id: "obgyn",
    name: "Obstetrics and gynecology",
    blurb: "Members bringing their work to the ACOG annual meeting.",
    tone: "gold",
    people: ["Carly Mable", "Soo Kang"],
    abstracts: [{ meeting: "ACOG Annual Clinical and Scientific Meeting" }],
  },
  {
    id: "imaging",
    name: "Medical imaging",
    blurb: "Deep learning on retinal OCT scans.",
    tone: "sky",
    people: ["Ethan Wu"],
    papers: ["10.1371/journal.pone.0335615"],
  },
];
