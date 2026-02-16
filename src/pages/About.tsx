import React, { useEffect } from "react";

const About: React.FC = () => {
  const founders = [
    {
      name: "Ethan Wu",
      role: "Co-Founder",
      description: "MD-PhD student at Pitt-CMU focused on machine learning for precision medicine and understanding idiopathic disease mechanisms.",
      image: "/images/founders/ethan-wu.jpeg",
    },
    {
      name: "Shaila Fye",
      role: "Co-Founder",
      description: "Medical student working on computational approaches to clinical decision support and medical imaging analysis.",
      image: "/images/founders/shaila-fye.jpg",
    },
    {
      name: "Isuru Herath",
      role: "Co-Founder",
      description: "MD-PhD student at Pitt-CMU researching foundational models and transformers for healthcare applications.",
      image: "/images/founders/C2085EEB-12EB-43ED-A11B-5BD10A1C758DHerath, Isuru.jpeg",
    },
    {
      name: "Josh Pantanowitz",
      role: "Co-Founder",
      description: "Medical student focused on AI ethics in healthcare and building frameworks for responsible AI implementation.",
      image: "/images/founders/IMG_0168.JPG",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section-fade-in").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".section-fade-in").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Pitt AIMs</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A community of students, researchers, and faculty at the University of Pittsburgh
              School of Medicine interested in the intersection of AI and healthcare.
            </p>
          </div>

          <div className="section-fade-in max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                We promote awareness of AI in healthcare, support educational growth for students
                of all technical backgrounds, and help facilitate research projects that improve
                medical care at UPMC and Pitt Med.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-foreground">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe AI tools can meaningfully improve healthcare when developed responsibly.
                Through education, research, and open discussion, we want to help prepare future
                physicians to use these tools well -- and to ask the right questions about them.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-foreground">Affiliations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pitt AIMs is affiliated with the University of Pittsburgh School of Medicine and
                UPMC. These partnerships give our members access to research opportunities,
                clinical datasets, and mentorship from faculty working in healthcare AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-foreground">Our Founders</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The team that started Pitt AIMs, bringing together medicine and machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="section-fade-in border border-border rounded-lg p-6 bg-card text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/200x200?text=Photo";
                    }}
                  />
                </div>
                <h3 className="text-base font-semibold text-foreground">{founder.name}</h3>
                <p className="text-sm text-primary mb-3">{founder.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-foreground">Our Values</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The principles that guide how we work and learn together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="section-fade-in border border-border rounded-lg p-6 bg-card border-t-2 border-t-primary">
              <h3 className="text-base font-semibold mb-2 text-foreground">Inclusive Innovation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI education and resources should be accessible to everyone, regardless of technical
                background. We welcome diverse perspectives.
              </p>
            </div>

            <div className="section-fade-in border border-border rounded-lg p-6 bg-card border-t-2 border-t-primary">
              <h3 className="text-base font-semibold mb-2 text-foreground">Ethical Application</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We take the ethical implications of AI in healthcare seriously -- fairness, transparency,
                privacy, and reducing bias in algorithms.
              </p>
            </div>

            <div className="section-fade-in border border-border rounded-lg p-6 bg-card border-t-2 border-t-primary">
              <h3 className="text-base font-semibold mb-2 text-foreground">Patient-Centered Focus</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The goal of medical AI is to help patients. Every project and discussion we have
                keeps that at the center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-foreground">Partnerships</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <div className="section-fade-in border border-border rounded-lg p-6 bg-card text-center">
              <h3 className="text-base font-semibold mb-2 text-foreground">
                University of Pittsburgh School of Medicine
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Access to academic resources, research facilities, and faculty mentorship for our
                educational initiatives and projects.
              </p>
            </div>

            <div className="section-fade-in border border-border rounded-lg p-6 bg-card text-center">
              <h3 className="text-base font-semibold mb-2 text-foreground">
                UPMC
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Collaboration on clinical AI applications, healthcare expertise, and opportunities
                to work on real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
