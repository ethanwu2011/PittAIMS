// Member research featured on the homepage and /research. Keep each blurb
// accurate to the paper; link the paper by DOI. Images need a license that
// allows reuse; credit them in `image.credit`.

export interface Spotlight {
  member: string;
  photo?: string;
  headline: string;
  body: string;
  paper: { title: string; journal: string; year: number; doi: string };
  role: string;
  image?: { src: string; alt: string; width: number; height: number; credit: string; creditHref: string };
}

export const spotlights: Spotlight[] = [
  {
    member: "Isuru Herath",
    photo: "/images/people/isuru.jpg",
    headline: "Asking a neural network which drugs would make a sick cell healthy again",
    body: "Most models predict how a drug will change a cell. PDGrapher, a causally inspired graph neural network, solves the inverse problem: given a diseased cell's state, it predicts the combination of therapeutic targets that would push it back toward healthy. Across nine cell lines it found effective targets in more test samples than competing methods, and it trains up to 25 times faster.",
    paper: {
      title: "Combinatorial prediction of therapeutic perturbations using causally inspired neural networks",
      journal: "Nature Biomedical Engineering",
      year: 2025,
      doi: "10.1038/s41551-025-01481-x",
    },
    role: "Co-author",
    image: {
      src: "/images/research/pdgrapher-panel-c.jpg",
      alt: "Diagram: PDGrapher takes a diseased cell state, predicts a set of drug targets, and models how those targets move the cell toward a treated state.",
      width: 648,
      height: 475,
      credit: "Figure: Gonzalez, Lin, Herath et al., PDGrapher repository (MIT License)",
      creditHref: "https://github.com/mims-harvard/PDGrapher",
    },
  },
  {
    member: "Ethan Wu",
    photo: "/images/people/ethan.jpg",
    headline: "Spotting who gets macular degeneration early, from health records alone",
    body: "Using comorbidities diagnosed before age 55, interpretable models predicted early-onset AMD with about 76% accuracy. The strongest signals (hypertension, hyperlipidemia, and rheumatoid arthritis) held up in the NIH All of Us cohort.",
    paper: {
      title: "Predicting Early Onset of Age-Related Macular Degeneration: A Machine Learning Approach",
      journal: "American Journal of Ophthalmology",
      year: 2025,
      doi: "10.1016/j.ajo.2025.07.020",
    },
    role: "First author",
  },
  {
    member: "Josh Pantanowitz",
    photo: "/images/people/josh.jpg",
    headline: "Can a panel of chatbots stand in for a panel of pathologists?",
    body: "Josh re-ran a published 180-question Delphi study on the future of pathology with ChatGPT-3.5, ChatGPT-4, and Llama 3. Every model reached consensus on more questions than the human experts did. It's an early proof of concept that AI might one day help run expert surveys like these.",
    paper: {
      title:
        "How does AI perform compared to human expert panels in medical Delphi studies? A pilot study through the lens of pathology",
      journal: "Journal of Pathology Informatics",
      year: 2026,
      doi: "10.1016/j.jpi.2026.100661",
    },
    role: "First author",
  },
];
