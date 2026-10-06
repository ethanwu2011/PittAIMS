// Selected publications by Pitt AIMs members. Newest first.
// Only add entries you can link to (DOI, ideally PubMed too). Put member
// names in `members` exactly as they appear in `authors` so they render bold.
// `summary` is one plain-English sentence for the website.

export interface Publication {
  title: string;
  authors: string;
  members: string[];
  journal: string;
  year: number;
  doi: string;
  pmid?: string;
  summary: string;
  tags: string[];
}

export const publications: Publication[] = [
  {
    title: "Novel Systemic Associations of Idiopathic Epiretinal Membrane Identified via Machine Learning",
    authors: "Wu E, Jiang J, Hasan N, … Chhablani J",
    members: ["Wu E"],
    journal: "Ophthalmology Science",
    year: 2026,
    doi: "10.1016/j.xops.2026.101124",
    pmid: "41908500",
    summary:
      "Clustering and interpretable models on 10,380 All of Us patients tie idiopathic epiretinal membrane to systemic conditions, including hypertension, hyperlipidemia, and knee osteoarthritis.",
    tags: ["All of Us", "Ophthalmology", "Interpretable ML"],
  },
  {
    title:
      "How does AI perform compared to human expert panels in medical Delphi studies? A pilot study through the lens of pathology",
    authors: "Pantanowitz J, Manko CD, Majewski J, … Rashidi H",
    members: ["Pantanowitz J"],
    journal: "Journal of Pathology Informatics",
    year: 2026,
    doi: "10.1016/j.jpi.2026.100661",
    pmid: "42164630",
    summary:
      "Re-runs a published 180-question pathology Delphi study with ChatGPT-3.5, ChatGPT-4, and Llama 3; every model reached consensus on more questions than the human panel.",
    tags: ["LLMs", "Pathology"],
  },
  {
    title: "Predicting Early Onset of Age-Related Macular Degeneration: A Machine Learning Approach",
    authors: "Wu E, Hasan N, Vupparaboina S, … Chhablani J",
    members: ["Wu E"],
    journal: "American Journal of Ophthalmology",
    year: 2025,
    doi: "10.1016/j.ajo.2025.07.020",
    pmid: "40701376",
    summary:
      "Models trained on comorbidities diagnosed before age 55 predict early-onset AMD with about 76% accuracy; hypertension, hyperlipidemia, and rheumatoid arthritis are validated in All of Us.",
    tags: ["All of Us", "Ophthalmology", "EHR"],
  },
  {
    title: "Combinatorial prediction of therapeutic perturbations using causally inspired neural networks",
    authors: "Gonzalez G, Lin X, Herath I, … Zitnik M",
    members: ["Herath I"],
    journal: "Nature Biomedical Engineering",
    year: 2025,
    doi: "10.1038/s41551-025-01481-x",
    pmid: "40925962",
    summary:
      "PDGrapher, a causally inspired graph neural network, predicts combinations of therapeutic targets that reverse disease phenotypes, and trains up to 25 times faster than existing methods.",
    tags: ["Graph neural networks", "Drug discovery", "Causal ML"],
  },
  {
    title: "Benchmarking diffusion models against state-of-the-art architectures for OCT fluid biomarker segmentation",
    authors: "Du K, Doshi U, DiCenzo B, … Wu E, … Vupparaboina KK",
    members: ["Wu E"],
    journal: "PLOS ONE",
    year: 2025,
    doi: "10.1371/journal.pone.0335615",
    pmid: "41160596",
    summary:
      "Benchmarks a diffusion model against four leading architectures for segmenting retinal fluid and pigment epithelial detachment on OCT; nnU-Net performed best overall.",
    tags: ["Deep learning", "OCT imaging", "Ophthalmology"],
  },
  {
    title:
      "Introduction to Artificial Intelligence and Machine Learning in Pathology and Medicine: Generative and Nongenerative Artificial Intelligence Basics",
    authors: "Rashidi HH, Pantanowitz J, Hanna MG, … Pantanowitz L",
    members: ["Pantanowitz J"],
    journal: "Modern Pathology",
    year: 2025,
    doi: "10.1016/j.modpat.2024.100688",
    pmid: "39755237",
    summary:
      "The opening review and glossary for a seven-part series on AI in pathology, covering the basics of generative and traditional machine learning.",
    tags: ["Review", "Pathology"],
  },
  {
    title: "Generative Artificial Intelligence in Pathology and Medicine: A Deeper Dive",
    authors: "Rashidi HH, Pantanowitz J, Chamanzar A, … Pantanowitz L",
    members: ["Pantanowitz J"],
    journal: "Modern Pathology",
    year: 2025,
    doi: "10.1016/j.modpat.2024.100687",
    pmid: "39689760",
    summary:
      "Reviews LLMs, GANs, and diffusion models in medicine: where they help, the tools available, and concerns about privacy, bias, and cost.",
    tags: ["Review", "Generative AI", "Pathology"],
  },
  {
    title:
      "Statistics of Generative Artificial Intelligence and Nongenerative Predictive Analytics Machine Learning in Medicine",
    authors: "Rashidi HH, Hu B, Pantanowitz J, … Hanna MG",
    members: ["Pantanowitz J"],
    journal: "Modern Pathology",
    year: 2025,
    doi: "10.1016/j.modpat.2024.100663",
    pmid: "39579984",
    summary:
      "Compares how generative AI is evaluated (perplexity, BLEU) with how predictive ML is evaluated (AUC, F1, RMSE), for clinicians reading the literature.",
    tags: ["Review", "ML evaluation"],
  },
  {
    title: "Synthetic Data and Its Utility in Pathology and Laboratory Medicine",
    authors: "Pantanowitz J, Manko CD, Pantanowitz L, Rashidi HH",
    members: ["Pantanowitz J"],
    journal: "Laboratory Investigation",
    year: 2024,
    doi: "10.1016/j.labinv.2024.102095",
    pmid: "38925488",
    summary:
      "A primer on generating synthetic data (rule-based, ML-based, or hybrid), its uses for training AI and for teaching, and its limits.",
    tags: ["Review", "Synthetic data", "Pathology"],
  },
  {
    title: "Venous thromboembolism in the era of machine learning and artificial intelligence in medicine",
    authors: "Reyes Gil M, Pantanowitz J, Rashidi HH",
    members: ["Pantanowitz J"],
    journal: "Thrombosis Research",
    year: 2024,
    doi: "10.1016/j.thromres.2024.109121",
    pmid: "39213896",
    summary:
      "Reviews current and possible uses of AI in venous thromboembolism care, including LLMs and synthetic data, with an emphasis on validation and governance.",
    tags: ["Review", "Hematology"],
  },
  {
    title: "Regulatory Aspects of Artificial Intelligence and Machine Learning",
    authors: "Pantanowitz L, Hanna M, Pantanowitz J, … Rashidi HH",
    members: ["Pantanowitz J"],
    journal: "Modern Pathology",
    year: 2024,
    doi: "10.1016/j.modpat.2024.100609",
    pmid: "39260776",
    summary:
      "Reviews how medical AI is regulated: data privacy, software as a medical device, approval and clearance routes, payment, and lab-developed tests.",
    tags: ["Review", "Regulation"],
  },
  {
    title:
      "Implications of ChatGPT for cytopathology and recommendations for updating JASC guidelines on the responsible use of artificial intelligence",
    authors: "Pantanowitz J, Pantanowitz L",
    members: ["Pantanowitz J"],
    journal: "Journal of the American Society of Cytopathology",
    year: 2023,
    doi: "10.1016/j.jasc.2023.07.001",
    pmid: "37714732",
    summary:
      "An editorial on what ChatGPT means for cytopathology, with proposed updates to the journal's rules on responsible AI use.",
    tags: ["Editorial", "LLMs", "Cytopathology"],
  },
];

export const doiUrl = (doi: string) => `https://doi.org/${doi}`;

/** Split an author string into parts, flagging Pitt AIMs members. */
export const authorParts = (p: Publication) =>
  p.authors.split(", ").map((part) => {
    const elided = part.startsWith("… ");
    const name = elided ? part.slice(2) : part;
    return { elided, name, member: p.members.includes(name) };
  });
