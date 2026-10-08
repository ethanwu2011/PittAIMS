// Applied Machine Learning in Medicine — syllabus data for /course.

export const course = {
  title: "Applied Machine Learning in Medicine",
  term: "Summer 2026",
  status: "Completed" as "Open" | "In session" | "Completed",
  meets: "Fridays, 6:00–7:30 PM",
  location: "Scaife Hall",
  capacity: 40,
  sessions: 8,
  dataset: { name: "NIH All of Us Research Program", url: "https://allofus.nih.gov/" },
};

export interface Session {
  date: string;
  format: "In person" | "Async";
  focus: string;
  theory: string;
  instructors: string;
}

// Each session: hands-on focus 6:00–6:45, ML theory 6:45–7:30.
export const schedule: Session[] = [
  {
    date: "June 5",
    format: "In person",
    focus: "Introduction to All of Us and project goals",
    theory: "What is machine learning? Key concepts and terminology",
    instructors: "Ethan Wu",
  },
  {
    date: "June 12",
    format: "In person",
    focus: "Project planning and an example project",
    theory: "Regression: linear and logistic models",
    instructors: "Ethan Wu",
  },
  {
    date: "June 19",
    format: "In person",
    focus: "All of Us cohort and dataset building",
    theory: "Interpretable modeling: training, testing, and preventing overfitting",
    instructors: "Alexis Cenname, Ethan Wu",
  },
  {
    date: "June 26",
    format: "In person",
    focus: "Python and pandas crash course",
    theory: "Decision trees and model evaluation: AUC, SHAP",
    instructors: "Ethan Wu",
  },
  {
    date: "July 3",
    format: "Async",
    focus: "Optional mini-hackathon meetup",
    theory: "—",
    instructors: "—",
  },
  {
    date: "July 10",
    format: "In person",
    focus: "Feature selection, overfitting, generalization",
    theory: "Neural networks",
    instructors: "Ethan Wu",
  },
  {
    date: "July 17",
    format: "In person",
    focus: "Project work session",
    theory: "—",
    instructors: "Ethan Wu",
  },
  {
    date: "July 24",
    format: "In person",
    focus: "Final presentations",
    theory: "—",
    instructors: "Ethan Wu",
  },
];

export const resources = [
  {
    label: "All of Us Researcher Workbench",
    note: "where every analysis in the course runs",
    url: "https://www.researchallofus.org/data-tools/workbench/",
  },
  {
    label: "Python tutorial",
    note: "the official docs, a good starting point",
    url: "https://docs.python.org/3/tutorial/",
  },
  {
    label: "scikit-learn user guide",
    note: "reference for most models we cover",
    url: "https://scikit-learn.org/stable/user_guide.html",
  },
  {
    label: "Kaggle datasets",
    note: "extra practice data",
    url: "https://www.kaggle.com/datasets",
  },
];
