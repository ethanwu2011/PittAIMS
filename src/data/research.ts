// Research groups, shown on /research and the homepage.
//
// Each group lists its faculty mentors, the projects members are leading
// (with the lead named first), an optional feature (a short write-up of one
// published project, with an optional image), and example papers by DOI from
// publications.ts.
//
// Projects that aren't published yet show only the question, the people,
// and where it was submitted. Don't add results, numbers, or the real
// abstract title until the work is out, so we don't scoop ourselves.

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

export interface Project {
  /** Short name, if the project has one. */
  name?: string;
  /** The question in plain words. No results. */
  question: string;
  /** Who's leading it. Usually one person. */
  leads: string[];
  team?: string[];
  /** e.g. "Submitted to ARVO". */
  status: string;
}

export interface ResearchGroup {
  id: string;
  name: string;
  blurb: string;
  tone: Tone;
  mentors?: string[];
  /** Anyone in the group who isn't already on one of its projects. */
  people?: string[];
  projects?: Project[];
  feature?: Feature;
  papers?: string[];
}

export const groups: ResearchGroup[] = [
  {
    id: "critical-care",
    name: "Critical care",
    blurb:
      "Questions from the ICU: whose blood pressure is about to drop, who is stuck on a ventilator, and which treatment fits which patient.",
    tone: "coral",
    mentors: ["Dr. Sumit Kapoor", "Dr. Eric Xing"],
    projects: [
      {
        question:
          "Which patients on a ventilator are stuck, not getting worse but not getting off it, and might have something fixable holding them back?",
        leads: ["Ronit Deshpande"],
        team: ["Ethan Wu", "Joseph Yap", "Rehan Ghanta", "Peace Odiase", "Mina Kim"],
        status: "Submitted to the Critical Care Congress",
      },
      {
        question:
          "Can we tell, before feeding starts, which ICU patients will develop refeeding syndrome and how bad it will get?",
        leads: ["Peace Odiase"],
        status: "Submitted to the Critical Care Congress",
      },
      {
        question:
          "Does a patient's sodium level decide whether mannitol or hypertonic saline does more to lower pressure in the brain?",
        leads: ["Mina Kim"],
        status: "Submitted to the Critical Care Congress",
      },
      {
        name: "HemoArc",
        question:
          "Can a model that learns from a patient's first day in the ICU tell whose blood pressure is about to drop?",
        leads: ["Ethan Wu"],
        team: ["Joseph Yap", "Mina Kim", "Rehan Ghanta", "Peace Odiase", "Ronit Deshpande"],
        status: "Submitted to the Critical Care Congress",
      },
    ],
  },
  {
    id: "dermatology",
    name: "Dermatology",
    blurb:
      "Skin problems in hospitalized patients: drug reactions that turn serious, and rashes that look like infection but aren't.",
    tone: "gold",
    mentors: ["Dr. Melissa Pugliano-Mauro", "Dr. Eric Xing"],
    projects: [
      {
        question:
          "Are there severe drug reactions that get missed because they don't fit any of the named syndromes?",
        leads: ["Aya Youssef"],
        team: ["Alice Lee", "Ethan Wu", "Eric Mason"],
        status: "Abstract submitted",
      },
      {
        name: "CELTIC",
        question:
          "Can a simple model that doctors can follow tell cellulitis apart from the conditions that mimic it?",
        leads: ["Alice Lee"],
        team: ["Aya Youssef", "Ethan Wu"],
        status: "Abstract submitted",
      },
      {
        name: "DermState",
        question:
          "Can we flag patients whose drug rash is about to turn serious, before the rash is even written down?",
        leads: ["Ethan Wu"],
        team: ["Aya Youssef", "Alice Lee", "Eric Mason"],
        status: "Abstract submitted",
      },
    ],
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    blurb:
      "What the eyes can tell us about the rest of the body, using large health record datasets like NIH All of Us.",
    tone: "sky",
    mentors: ["Dr. Jay Chhablani"],
    projects: [
      {
        question: "Which eye conditions are linked to how people rate their own mental health?",
        leads: ["Katherine Du"],
        team: ["Ethan Wu", "Justin Navidzadeh", "Jessica Jiang", "Joanna Yao"],
        status: "Submitted to ARVO",
      },
      {
        question:
          "Can a patient's other health conditions predict whether dry macular degeneration turns into wet?",
        leads: ["Joanna Yao"],
        team: ["Ethan Wu", "Tanner Thomas", "Jessica Jiang", "Justin Navidzadeh", "Nasiq Hasan"],
        status: "Submitted to ARVO",
      },
      {
        question:
          "When a hospitalized patient has eye inflammation, does anyone look for the disease that might be causing it?",
        leads: ["Ethan Wu", "Jessica Jiang"],
        status: "Paper submitted",
      },
    ],
    feature: {
      headline: "Spotting who gets macular degeneration early, from health records alone",
      body: "Interpretable models trained on patients' earlier diagnoses predicted who develops age-related macular degeneration early. Hypertension, hyperlipidemia, and rheumatoid arthritis stood out, and held up in the NIH All of Us cohort.",
      doi: "10.1016/j.ajo.2025.07.020",
    },
    papers: [
      "10.1016/j.xops.2026.101124",
      "10.1016/j.ajo.2025.07.020",
      "10.1371/journal.pone.0335615",
    ],
  },
  {
    id: "womens-health",
    name: "Women's health",
    blurb: "What smartwatches and symptom diaries can and can't tell people about their cycle.",
    tone: "mint",
    mentors: ["Dr. Vanathi Gopalakrishnan"],
    projects: [
      {
        question:
          "Can a smartwatch pick up period symptoms beyond what a period-tracking app already knows?",
        leads: ["Carly Marble"],
        team: ["Ethan Wu", "Soo Kang", "Ryan McConnell", "Neha Devineni"],
        status: "Submitted to ACOG",
      },
      {
        question: "Can smartwatch and symptom-diary data tell someone when they're fertile?",
        leads: ["Soo Kang"],
        team: ["Ethan Wu", "Carly Marble", "Neha Devineni"],
        status: "Submitted to ACOG",
      },
    ],
  },
  {
    id: "drug-discovery",
    name: "Drug discovery",
    blurb: "Graph neural networks that predict which drug targets could push a diseased cell back toward health.",
    tone: "sky",
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
    tone: "coral",
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
    id: "operating-room",
    name: "Humans and AI in the operating room",
    blurb: "Pairing clinicians with AI models to watch for problems during surgery.",
    tone: "gold",
    people: ["Yash Raka"],
    feature: {
      headline: "Novices and AI, together, watching for stroke during surgery",
      body: "Pairing novice EEG monitors with an AI model held up against expert neurophysiologists at catching brain ischemia during carotid surgery, with fewer false alarms than the AI alone.",
      doi: "10.64898/2026.08.01.26359457",
    },
    papers: ["10.64898/2026.08.01.26359457"],
  },
];

/** Everyone in a group: project leads first, then teammates, then anyone else listed. */
export const groupPeople = (g: ResearchGroup): string[] => [
  ...new Set([
    ...(g.projects ?? []).flatMap((p) => p.leads),
    ...(g.projects ?? []).flatMap((p) => p.team ?? []),
    ...(g.people ?? []),
  ]),
];

/** One project per lead, in group order, so the homepage shows a range of people. */
export const spotlight = (): (Project & { group: ResearchGroup })[] => {
  const seen = new Set<string>();
  return groups.flatMap((g) =>
    (g.projects ?? [])
      .filter((p) => !seen.has(p.leads[0]) && seen.add(p.leads[0]))
      .map((p) => ({ ...p, group: g })),
  );
};
