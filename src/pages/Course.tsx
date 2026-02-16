import React from "react";

interface WeekRow {
  week: number;
  topic: string;
  slides?: string;
  notebook?: string;
  recording?: string;
}

const schedule: WeekRow[] = [
  { week: 1, topic: "Course intro / Python refresher" },
  { week: 2, topic: "Data exploration and visualization" },
  { week: 3, topic: "All of Us Researcher Workbench setup" },
  { week: 4, topic: "Regression models" },
  { week: 5, topic: "Decision trees and random forests" },
  { week: 6, topic: "Neural networks basics" },
  { week: 7, topic: "Dimensionality reduction (PCA, t-SNE)" },
  { week: 8, topic: "Model evaluation and validation" },
  { week: 9, topic: "Interpretability tools" },
  { week: 10, topic: "Final project kickoff / cohort building" },
  { week: 11, topic: "Project work sessions" },
  { week: 12, topic: "Final presentations" },
];

const MaterialLink: React.FC<{ label: string; href?: string }> = ({ label, href }) => {
  if (href) {
    return (
      <a href={href} className="text-primary hover:underline text-sm" target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }
  return <span className="text-muted-foreground/50 text-sm">{label}</span>;
};

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
            Spring 2026 &middot; Wednesdays &middot; Scaife Hall
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-3">Overview</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A twelve-week course where you learn machine learning by doing it. Using the
            NIH All of Us research dataset, you'll go from Python fundamentals to building
            and evaluating models on real patient data. The course ends with a collaborative
            final project on a clinical question of your choice. Past student projects have
            been published in peer-reviewed journals.
          </p>
        </section>

        {/* Schedule */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">Schedule</h2>
          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-muted/50 text-sm text-muted-foreground">
                  <th className="py-2.5 px-4 font-medium w-16">Wk</th>
                  <th className="py-2.5 px-4 font-medium">Topic</th>
                  <th className="py-2.5 px-4 font-medium text-right hidden sm:table-cell">Materials</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {schedule.map((row) => (
                  <tr key={row.week} className="text-sm">
                    <td className="py-3 px-4 text-muted-foreground font-medium">{row.week}</td>
                    <td className="py-3 px-4 text-foreground">{row.topic}</td>
                    <td className="py-3 px-4 text-right hidden sm:table-cell">
                      <span className="inline-flex gap-3">
                        <MaterialLink label="Slides" href={row.slides} />
                        <MaterialLink label="Notebook" href={row.notebook} />
                        <MaterialLink label="Recording" href={row.recording} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Materials will be linked here as the semester progresses.
          </p>
        </section>

        {/* Assignments */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-3">Assignments</h2>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <div>
              <p className="font-medium text-foreground">Final project</p>
              <p>
                Teams of 2-4 pick a clinical question, build cohorts from the All of Us
                dataset, train and evaluate models, and present findings in Week 12. A
                project proposal is due in Week 10.
              </p>
            </div>
            <div>
              <p className="font-medium text-foreground">Weekly notebooks</p>
              <p>
                Short coding exercises each week that reinforce the lecture material. These
                are graded for completion, not correctness.
              </p>
            </div>
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
              -- official docs, good refresher for Weeks 1-2
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
            <dd>Wednesdays, Spring 2026</dd>
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
