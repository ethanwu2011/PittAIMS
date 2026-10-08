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
    body: "Most models predict how a drug will change a cell. PDGrapher, a causally inspired graph neural network, solves the inverse problem: given a diseased cell's state, it predicts the combination of therapeutic targets that would push it back toward healthy. It found effective targets more often than competing methods, and trains much faster.",
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
    member: "Peace Odiase",
    headline: "Mapping neurosurgical care across Africa",
    body: "Peace has co-authored a series of reviews that pull together studies from across Africa on spina bifida, spine trauma, brain aneurysms, and craniosynostosis, to show how care and outcomes differ from place to place.",
    paper: {
      title: "Spina bifida in Africa: A systematic review and Meta-Analysis of Presentation, Management, and outcomes",
      journal: "Journal of Clinical Neuroscience",
      year: 2026,
      doi: "10.1016/j.jocn.2026.111986",
    },
    role: "Co-author",
  },
  {
    member: "Josh Pantanowitz",
    photo: "/images/people/josh.jpg",
    headline: "Can a panel of chatbots stand in for a panel of pathologists?",
    body: "Josh re-ran a published Delphi study on the future of pathology, with ChatGPT and Llama in place of the expert panel. The models reached consensus more often than the humans did. It's an early proof of concept that AI might one day help run expert surveys like these.",
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
