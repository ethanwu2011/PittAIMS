import React from "react";
import { Link } from "react-router-dom";

const Course: React.FC = () => {
  return (
    <div className="pt-28 pb-20 md:pt-36">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
          Applied Machine Learning in Medicine
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          A course by Pitt AIMs at the University of Pittsburgh School of Medicine
        </p>

        <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
          <p>
            This course gives you hands-on experience with one of the largest patient
            datasets in the world: the{" "}
            <strong className="text-foreground">NIH All of Us Research Program</strong>.
            You'll combine practical coding, foundational ML theory, and project-based
            learning to explore real clinical questions -- working solo or in teams to
            build models that matter. Past students have published their work in
            peer-reviewed journals and conferences.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-2">What you'll learn</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              Key machine learning techniques: regression, decision trees, neural networks,
              PCA/T-SNE, interpretability tools, and model evaluation
            </li>
            <li>
              How to use the All of Us Dataset responsibly through the Researcher Workbench
            </li>
            <li>
              The full data science workflow -- from cohort building to analysis to presentation
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground pt-2">Final project</h2>
          <p>
            You'll work on a collaborative final project where you pick a real clinical
            question, build cohorts from the All of Us data, develop and evaluate models,
            and present your findings. It's the core of the course.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-2">Details</h2>
          <dl className="space-y-2">
            <div>
              <dt className="inline font-medium text-foreground">Location: </dt>
              <dd className="inline">Scaife Hall</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Capacity: </dt>
              <dd className="inline">40 students</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Attendance: </dt>
              <dd className="inline">Mandatory, but not enforced</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Contact: </dt>
              <dd className="inline">
                Ethan Wu ({" "}
                <a href="mailto:etw46@pitt.edu" className="text-primary hover:underline">
                  etw46@pitt.edu
                </a>
                {" "})
              </dd>
            </div>
          </dl>

          <h2 className="text-xl font-semibold text-foreground pt-2">Instructors</h2>
          <ul className="space-y-1.5">
            <li>
              <strong className="text-foreground">Ethan Wu</strong> -- Main Instructor, Medical Student
            </li>
            <li>Dr. Shyam Visweswaran</li>
            <li>Dr. Richard Steinman</li>
            <li>Dr. Vanathi Gopalakrishnan</li>
            <li>Dr. Ansuman Chattopadhyay</li>
            <li>Alexis Cenname, MS</li>
          </ul>

          <div className="pt-4 border-t border-border mt-6">
            <p>
              Questions about the course?{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
