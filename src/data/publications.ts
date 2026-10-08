// Publications by Pitt AI in Medicine members. Newest first; the site groups them by year.
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
      "Clustering and interpretable models on All of Us records tie idiopathic epiretinal membrane to systemic conditions like hypertension, hyperlipidemia, and knee osteoarthritis.",
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
      "Re-runs a published pathology Delphi study with ChatGPT and Llama in place of the expert panel; the models reached consensus more often than the humans did.",
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
      "Models trained on patients' earlier diagnoses predict early-onset AMD. Hypertension, hyperlipidemia, and rheumatoid arthritis stood out and held up in All of Us.",
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
      "PDGrapher, a causally inspired graph neural network, predicts combinations of therapeutic targets that reverse disease phenotypes, and trains much faster than existing methods.",
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
      "Benchmarks a diffusion model against leading architectures for segmenting retinal fluid and pigment epithelial detachment on OCT; nnU-Net performed best overall.",
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
      "The opening review and glossary for a series on AI in pathology, covering the basics of generative and traditional machine learning.",
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
    title: "Ethical and Bias Considerations in Artificial Intelligence/Machine Learning",
    authors: "Hanna MG, Pantanowitz L, Jackson B, … Pantanowitz J, … Rashidi HH",
    members: ["Pantanowitz J"],
    journal: "Modern Pathology",
    year: 2025,
    doi: "10.1016/j.modpat.2024.100686",
    pmid: "39694331",
    summary:
      "Reviews where bias gets into medical AI (the data, the model's development, and how people use it) and the ethical questions from build to deployment.",
    tags: ["Review", "AI ethics", "Bias"],
  },
  {
    title: "Nongenerative Artificial Intelligence in Medicine: Advancements and Applications in Supervised and Unsupervised Machine Learning",
    authors: "Pantanowitz L, Pearce T, Abukhiran I, … Pantanowitz J, … Rashidi HH",
    members: ["Pantanowitz J"],
    journal: "Modern Pathology",
    year: 2025,
    doi: "10.1016/j.modpat.2024.100680",
    pmid: "39675426",
    summary:
      "Reviews supervised and unsupervised machine learning in medicine and whole-slide image analysis, including explainability and data drift.",
    tags: ["Review", "Pathology"],
  },
  {
    title: "Future of Artificial Intelligence-Machine Learning Trends in Pathology and Medicine",
    authors: "Hanna MG, Pantanowitz L, Dash R, … Pantanowitz J, Rashidi HH",
    members: ["Pantanowitz J"],
    journal: "Modern Pathology",
    year: 2025,
    doi: "10.1016/j.modpat.2025.100705",
    pmid: "39761872",
    summary:
      "The closing review of the series: managing models in clinical use, multimodal and multi-agent AI, and uses in research and teaching.",
    tags: ["Review", "Pathology"],
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


// Peace Odiase: neurosurgery and neuro-oncology.
publications.push(
  {
    title: "Prognostic impact of multi-divisional trigeminal neuralgia on pain outcomes following microvascular decompression",
    authors: "McKay W, Gopakumar A, Bhatia S, … Odiase P, … Zenonos GA",
    members: ["Odiase P"],
    journal: "Clinical Neurology and Neurosurgery",
    year: 2026,
    doi: "10.1016/j.clineuro.2026.109543",
    pmid: "42314543",
    summary:
      "Pain in more than one branch of the trigeminal nerve didn't predict worse outcomes after microvascular decompression than pain in a single branch.",
    tags: ["Neurosurgery", "Outcomes"],
  },
  {
    title: "Prognostic utility of tumor grade and IDH-mutation status for immunotherapy response in high grade glioma: a systematic review and meta-analysis",
    authors: "Srinivasan S, Eraghi MM, Odiase P, … Patel A",
    members: ["Odiase P"],
    journal: "Journal of Clinical Neuroscience",
    year: 2026,
    doi: "10.1016/j.jocn.2026.112202",
    pmid: "42475978",
    summary:
      "Reviews immunotherapy studies in high-grade glioma; newly diagnosed IDH-mutant tumors were linked to longer survival than recurrent ones.",
    tags: ["Neuro-oncology", "Meta-analysis"],
  },
  {
    title: "Spina bifida in Africa: A systematic review and Meta-Analysis of Presentation, Management, and outcomes",
    authors: "O'Leary S, Newsome-Cuby T, Odiase P, … Totimeh T",
    members: ["Odiase P"],
    journal: "Journal of Clinical Neuroscience",
    year: 2026,
    doi: "10.1016/j.jocn.2026.111986",
    pmid: "41849992",
    summary:
      "Pools African studies of spina bifida to describe how it presents, how it's managed, and outcomes, which varied by region.",
    tags: ["Global neurosurgery", "Meta-analysis"],
  },
  {
    title: "Foix-Alajouanine syndrome: A systematic review and meta-analysis of presentation, management, and outcomes",
    authors: "O'Leary S, Fredricks N, Odiase P, … Aoun S",
    members: ["Odiase P"],
    journal: "Neuro-Chirurgie",
    year: 2025,
    doi: "10.1016/j.neuchi.2025.101710",
    pmid: "40784607",
    summary:
      "Reviews published cases of a rare spinal vascular syndrome; surgical treatment was linked to improvement.",
    tags: ["Spine", "Meta-analysis"],
  },
  {
    title: "Comparing Gabapentin and Pregabalin for Perioperative Pain Management in Lumbar Spine Surgery: A Systematic Review and Meta-Analysis",
    authors: "Ebada A, Bever N, Carron CJ, Odiase P, … Aoun SG",
    members: ["Odiase P"],
    journal: "World Neurosurgery",
    year: 2025,
    doi: "10.1016/j.wneu.2025.124284",
    pmid: "40653011",
    summary:
      "Compares two nerve-pain drugs around lumbar spine surgery; neither clearly lowered next-day pain, though gabapentin reduced opioid use.",
    tags: ["Spine", "Pain", "Meta-analysis"],
  },
  {
    title: "Stereotactic laser ablation for pediatric central nervous system tumors: a systematic review and meta-analysis of the literature",
    authors: "O'Leary S, Haider MA, Truong N, … Odiase P, … Price AV",
    members: ["Odiase P"],
    journal: "Journal of Neurosurgery: Pediatrics",
    year: 2025,
    doi: "10.3171/2025.1.PEDS24387",
    pmid: "40344762",
    summary:
      "Pooled evidence suggests laser thermal therapy shrinks most pediatric brain tumors treated with it; the authors call for prospective trials.",
    tags: ["Pediatric neurosurgery", "Meta-analysis"],
  },
  {
    title: "Presentation, management and outcomes of ruptured intracranial aneurysms in Africa: A systematic review and meta-analysis",
    authors: "Darko K, Simmons G, Elorm Yevudza W, … Odiase P, … Totimeh T",
    members: ["Odiase P"],
    journal: "Journal of Clinical Neuroscience",
    year: 2025,
    doi: "10.1016/j.jocn.2025.111054",
    pmid: "39826293",
    summary:
      "Reviews how ruptured brain aneurysms present and are treated across African studies, where surgical clipping was most common.",
    tags: ["Cerebrovascular", "Global neurosurgery"],
  },
  {
    title: "Craniosynostosis in Africa: Insights from 8 Countries-A Systematic Review and Meta-Analysis",
    authors: "Darko K, Pulido S, Haider MA, … Odiase P, … Totimeh T",
    members: ["Odiase P"],
    journal: "World Neurosurgery",
    year: 2025,
    doi: "10.1016/j.wneu.2024.11.116",
    pmid: "39622285",
    summary:
      "Reviews craniosynostosis care across African countries; nearly all reported patients had surgery, with few complications.",
    tags: ["Pediatric neurosurgery", "Global neurosurgery"],
  },
  {
    title: "Presentation, management, and outcomes of central nervous system metastases in Africa: Systematic review and meta-analysis",
    authors: "O'Leary S, Yevudza WE, Odiase P, … Totimeh T",
    members: ["Odiase P"],
    journal: "Neuro-Oncology Advances",
    year: 2024,
    doi: "10.1093/noajnl/vdae219",
    pmid: "39925636",
    summary:
      "Reviews African studies of brain and spinal metastases, which mostly came from breast and lung cancer.",
    tags: ["Neuro-oncology", "Global neurosurgery"],
  },
  {
    title: "Presentation, management, and outcome of traumatic spine injuries in Africa: a systematic review and meta-analysis",
    authors: "Darko K, Shukla I, Hassan T, … Odiase P, … Totimeh T",
    members: ["Odiase P"],
    journal: "Journal of Neurosurgery: Spine",
    year: 2024,
    doi: "10.3171/2024.8.SPINE24614",
    pmid: "39705701",
    summary:
      "Across African studies, spine injuries most often came from road traffic accidents, often with long delays to care.",
    tags: ["Spine trauma", "Global neurosurgery"],
  },
);

// Yash Raka.
publications.push({
  title: "Hybrid novice-AI system achieves expert-level performance in intraoperative ischemia detection",
  authors: "Murali N, Mina AI, Sinha H, … Raka Y, … Visweswaran S",
  members: ["Raka Y"],
  journal: "medRxiv (preprint)",
  year: 2026,
  doi: "10.64898/2026.08.01.26359457",
  pmid: "42620188",
  summary:
    "Pairing novice EEG monitors with an AI model held up against expert neurophysiologists at catching brain ischemia during carotid surgery, with fewer false alarms than the AI alone.",
  tags: ["Preprint", "Human–AI teams", "Neuromonitoring"],
});

// Josh Pantanowitz: pathology and cytopathology.
publications.push(
  {
    title: "Pericardial Fluid Metastatic Tumor Distribution and Fluid Volume Analysis: A 10-Year Institutional Experience",
    authors: "Marshall M, Ramseyer T, Cuda J, … Pantanowitz J, … Khader S",
    members: ["Pantanowitz J"],
    journal: "Acta Cytologica",
    year: 2026,
    doi: "10.1159/000553127",
    pmid: "42319869",
    summary:
      "Cancer found in the fluid around the heart mostly spread from lung and breast tumors, and larger fluid samples caught it more often.",
    tags: ["Cytopathology", "Oncology"],
  },
  {
    title: "Aberrant CD45 Immunoreactivity in Neuroendocrine Neoplasms: A Diagnostic Pitfall-Report of 10 Specimens and Clinical Recommendations",
    authors: "Pantanowitz J, Huang T, Cantley R, … Pantanowitz L",
    members: ["Pantanowitz J"],
    journal: "International Journal of Surgical Pathology",
    year: 2025,
    doi: "10.1177/10668969241283481",
    pmid: "39350753",
    summary:
      "Some neuroendocrine tumors unexpectedly stain for a white-blood-cell marker used to spot lymphoma, so pathologists should use broader stain panels.",
    tags: ["Surgical pathology"],
  },
  {
    title: "Ki-67 proliferation index in neuroendocrine tumors: Can augmented reality microscopy with image analysis improve scoring?",
    authors: "Satturwar SP, Pantanowitz JL, Manko CD, … Pantanowitz L",
    members: ["Pantanowitz JL"],
    journal: "Cancer Cytopathology",
    year: 2020,
    doi: "10.1002/cncy.22272",
    pmid: "32401429",
    summary:
      "Compares ways to score a tumor growth marker; augmented reality microscopy with image analysis sped up scoring but wasn't always accurate.",
    tags: ["Digital pathology", "Image analysis"],
  },
  {
    title: "Volunteering at CerviCusco in Peru",
    authors: "Pantanowitz L, Pantanowitz J, Escalante EP, Krotish D",
    members: ["Pantanowitz J"],
    journal: "Cancer Cytopathology",
    year: 2020,
    doi: "10.1002/cncy.22212",
    pmid: "31816158",
    summary:
      "On volunteering with CerviCusco, a Peruvian nonprofit that brings cervical cancer screening to underserved rural communities.",
    tags: ["Global health", "Cytopathology"],
  },
  {
    title: "Sudden cardiac death due to primary malignant pericardial mesothelioma: Brief report and literature review",
    authors: "Martínez-Girón R, Pantanowitz L, Martínez-Torre S, Pantanowitz J",
    members: ["Pantanowitz J"],
    journal: "Respiratory Medicine Case Reports",
    year: 2019,
    doi: "10.1016/j.rmcr.2019.01.011",
    pmid: "30705816",
    summary:
      "A case report and review: a seemingly healthy man died suddenly when fluid from a rare cancer of the heart's lining compressed his heart.",
    tags: ["Case report", "Pathology"],
  },
);

// Newest first; ties keep file order.
publications.sort((a, b) => b.year - a.year);

export const doiUrl = (doi: string) => `https://doi.org/${doi}`;

/** Split an author string into parts, flagging club members. */
export const authorParts = (p: Publication) =>
  p.authors.split(", ").map((part) => {
    const elided = part.startsWith("… ");
    const name = elided ? part.slice(2) : part;
    return { elided, name, member: p.members.includes(name) };
  });
