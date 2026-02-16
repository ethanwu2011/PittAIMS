import React from "react";

interface ScheduleRow {
  date: string;
  format: string;
  mainFocus: string;
  theorySegment: string;
  instructors: string;
}

const schedule: ScheduleRow[] = [
  {
    date: "Fri, June 5",
    format: "In-person",
    mainFocus: "Introduction to All of Us & Project Goals",
    theorySegment: "What is Machine Learning? Key Concepts & Terminology",
    instructors: "Ethan Wu",
  },
  {
    date: "Fri, June 12",
    format: "In-person",
    mainFocus: "Project Planning & Example project presentation",
    theorySegment: "What is Regression? Linear & Logistic Models",
    instructors: "Ethan Wu",
  },
  {
    date: "Fri, June 19",
    format: "In-person",
    mainFocus: "All of Us Cohort & Dataset Building",
    theorySegment: "Interpretable Modeling: Training, Testing, and how to prevent overfitting",
    instructors: "Alexis Cenname, Ethan Wu",
  },
  {
    date: "Fri, June 26",
    format: "In-person",
    mainFocus: "Python & Pandas Crash Course",
    theorySegment: "Decision trees + ML Evaluation: AUC, SHAP",
    instructors: "Ethan Wu",
  },
  {
    date: "Fri, July 3",
    format: "Async",
    mainFocus: "Optional mini Hackathon meetup",
    theorySegment: "—",
    instructors: "—",
  },
  {
    date: "Fri, July 10",
    format: "In-person",
    mainFocus: "Feature Selection, Overfitting, Generalization",
    theorySegment: "Neural Networks",
    instructors: "Ethan Wu",
  },
  {
    date: "Fri, July 17",
    format: "In-person",
    mainFocus: "Project work session",
    theorySegment: "TBD",
    instructors: "Ethan Wu",
  },
  {
    date: "Fri, July 24",
    format: "In-person",
    mainFocus: "Final presentations",
    theorySegment: "—",
    instructors: "Ethan Wu",
  },
];

const Course: React.FC = () => {
  return (
    <div className="pt-24 pb-20 md:pt-32">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
            Applied Machine Learning in Medicine
          </h1>
          <p className="text-base text-muted-foreground">
            Summer 2026 &middot; Fridays 6:00 – 7:30 PM &middot; Scaife Hall
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-3">Overview</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            An eight-session summer course where you learn machine learning by doing it.
            Using the NIH All of Us research dataset, you'll go from project planning to
            building and evaluating models on real patient data. Each session pairs a
            hands-on focus (6:00–6:45) with a theory segment (6:45–7:30). The course
            culminates in a final project on a clinical question of your choice. Past
            student projects have been published in peer-reviewed journals.
          </p>
        </section>

        {/* Schedule */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">Schedule</h2>
          <div className="border border-border rounded-lg overflow-hidden overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="bg-muted/50 text-sm text-muted-foreground">
                  <th className="py-2.5 px-4 font-medium whitespace-nowrap">Date</th>
                  <th className="py-2.5 px-4 font-medium">Main Focus<span className="hidden sm:inline"> (6:00–6:45)</span></th>
                  <th className="py-2.5 px-4 font-medium">ML Theory<span className="hidden sm:inline"> (6:45–7:30)</span></th>
                  <th className="py-2.5 px-4 font-medium whitespace-nowrap">Instructor(s)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {schedule.map((row, i) => (
                  <tr key={i} className="text-sm">
                    <td className="py-3 px-4 text-foreground font-medium whitespace-nowrap align-top">
                      {row.date}
                      <span className="block text-xs text-muted-foreground/60 font-normal">{row.format}</span>
                    </td>
                    <td className="py-3 px-4 text-foreground align-top">{row.mainFocus}</td>
                    <td className="py-3 px-4 text-muted-foreground align-top">{row.theorySegment}</td>
                    <td className="py-3 px-4 text-muted-foreground whitespace-nowrap align-top">{row.instructors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Materials will be linked here as the course progresses.
          </p>
        </section>

        {/* Assignments */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-3">Assignments</h2>
          <div className="text-base text-muted-foreground leading-relaxed">
            <p className="font-medium text-foreground mb-1">Final project</p>
            <p>
              Work solo or in teams of 2 to pick a clinical question, build cohorts from
              the All of Us dataset, train and evaluate models, and present your findings.
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-3">Resources</h2>
          <ul className="space-y-2 text-base text-muted-foreground">
            <li>
              <a
                href="https://www.researchallofus.org/data-tools/workbench/"
                className="text-primary hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                All of Us Researcher Workbench
              </a>{" "}
              -- where you'll run all analyses
            </li>
            <li>
              <a
                href="https://docs.python.org/3/tutorial/"
                className="text-primary hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Python tutorial
              </a>{" "}
              -- official docs, good for getting started
            </li>
            <li>
              <a
                href="https://scikit-learn.org/stable/user_guide.html"
                className="text-primary hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                scikit-learn user guide
              </a>{" "}
              -- reference for most models we cover
            </li>
            <li>
              <a
                href="https://www.kaggle.com/datasets"
                className="text-primary hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Kaggle datasets
              </a>{" "}
              -- additional practice datasets
            </li>
          </ul>
        </section>

        {/* Instructors */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-3">Instructors</h2>
          <ul className="space-y-1.5 text-base text-muted-foreground">
            <li>
              <span className="text-foreground font-medium">Ethan Wu</span> -- Main instructor
            </li>
            <li>Dr. Shyam Visweswaran</li>
            <li>Dr. Richard Steinman</li>
            <li>Dr. Vanathi Gopalakrishnan</li>
            <li>Dr. Ansuman Chattopadhyay</li>
            <li>Alexis Cenname, MS</li>
          </ul>
        </section>

        {/* Logistics */}
        <section className="border-t border-border pt-8">
          <h2 className="text-lg font-semibold text-foreground mb-3">Logistics</h2>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-base text-muted-foreground">
            <dt className="font-medium text-foreground">Location</dt>
            <dd>Scaife Hall</dd>
            <dt className="font-medium text-foreground">Schedule</dt>
            <dd>Fridays, 6:00 – 7:30 PM, Summer 2026</dd>
            <dt className="font-medium text-foreground">Capacity</dt>
            <dd>40 students</dd>
            <dt className="font-medium text-foreground">Attendance</dt>
            <dd>Expected but not enforced</dd>
            <dt className="font-medium text-foreground">Contact</dt>
            <dd>
              <a href="mailto:etw46@pitt.edu" className="text-primary hover:underline">
                etw46@pitt.edu
              </a>
            </dd>
          </dl>
        </section>
      </div>
    </div>
  );
};

export default Course;
