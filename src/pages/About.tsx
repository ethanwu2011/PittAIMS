import React, { useEffect, useRef } from "react";

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  delay: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, image, bio, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            cardRef.current?.classList.add("fade-in-view");
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="section-fade-in neumorph-card p-6 rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
    >
      <div className="mb-6 rounded-xl overflow-hidden aspect-[4/3] bg-primary/5">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/lovable-uploads/4e2a6e16-a01c-4d19-a302-ab6f7ece6643.png";
          }}
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-yellow-500 mb-4 text-sm font-medium">{role}</p>
      <p className="text-muted-foreground">{bio}</p>
    </div>
  );
};

const About: React.FC = () => {
  const founders = [
    {
      name: "Ethan Wu",
      role: "Co-Founder",
      description: "MD-PhD student at Pitt-CMU specializing in Machine Learning. His research focuses on interpretable and deep learning models for precision medicine and idiopathic disease mechanisms.",
      image: "/images/founders/ethan-wu.jpeg"
    },
    {
      name: "Shaila Fye",
      role: "Co-Founder",
      description: "Medical student with expertise in computational medicine. Her work focuses on AI solutions for clinical decision support and medical imaging analysis.",
      image: "/images/founders/shaila-fye.jpg"
    },
    {
      name: "Isuru Herath",
      role: "Co-Founder",
      description: "MD-PhD student at Pitt-CMU specializing in AI and machine learning. His research focuses on foundational models and transformers in healthcare applications.",
      image: "/images/founders/C2085EEB-12EB-43ED-A11B-5BD10A1C758DHerath, Isuru.jpeg"
    },
    {
      name: "Josh Pantanowitz",
      role: "Co-Founder",
      description: "Medical student specializing in AI ethics and education. His work focuses on responsible AI implementation and developing frameworks for ethical healthcare AI.",
      image: "/images/founders/IMG_0168.JPG"
    }
  ];

  useEffect(() => {
    // Add fade-in animation for sections
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
      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Pitt AIMs</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We're a dynamic community of students, researchers, and faculty at the University of Pittsburgh School of Medicine passionate about the intersection of artificial intelligence and healthcare
            </p>
          </div>

          <div className="section-fade-in max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-yellow-500 mr-3"></span>
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg mb-8 pl-9">
                At Pitt AI in Medicine Society, we aim to promote awareness of artificial intelligence applications in healthcare, foster educational growth for students of all technical backgrounds, and facilitate collaborative research projects that advance medical innovations at UPMC and Pitt Med.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-yellow-500 mr-3"></span>
                Our Vision
              </h2>
              <p className="text-muted-foreground text-lg mb-8 pl-9">
                We envision a future where AI tools are seamlessly integrated into healthcare workflows, enhancing patient outcomes while addressing critical challenges in healthcare equity and accessibility. Through education, research, and ethical discussions, we strive to prepare the next generation of medical professionals to lead this transformation.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-yellow-500 mr-3"></span>
                Our Affiliations
              </h2>
              <p className="text-muted-foreground text-lg mb-8 pl-9">
                Pitt AIMs is proudly affiliated with the University of Pittsburgh School of Medicine and UPMC. These institutional partnerships provide our members with access to cutting-edge research opportunities, clinical datasets, and mentorship from leading experts in healthcare AI.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Founders</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Meet the team behind Pitt AIMs, bringing together expertise from medicine, machine learning, and healthcare innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {founders.map((founder, index) => (
              <div 
                key={index}
                className="section-fade-in neumorph-card p-6 rounded-2xl text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-yellow-500/20">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover transform scale-105"
                    style={{ imageRendering: 'auto', backfaceVisibility: 'hidden' }}
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/200x200?text=Founder+Photo";
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
                <p className="text-yellow-500 mb-4">{founder.role}</p>
                <p className="text-muted-foreground text-sm">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide our work and community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="section-fade-in neumorph-card p-6 rounded-2xl border-t-4 border-yellow-500">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusive Innovation</h3>
              <p className="text-muted-foreground">We believe in making AI education and resources accessible to all, regardless of prior technical background. Our community welcomes diverse perspectives and experiences.</p>
            </div>
            
            <div className="section-fade-in neumorph-card p-6 rounded-2xl border-t-4 border-yellow-500" style={{ animationDelay: "100ms" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ethical Application</h3>
              <p className="text-muted-foreground">We prioritize the ethical implications of AI in healthcare, emphasizing fairness, transparency, privacy, and the reduction of algorithmic bias in all our discussions and projects.</p>
            </div>
            
            <div className="section-fade-in neumorph-card p-6 rounded-2xl border-t-4 border-yellow-500" style={{ animationDelay: "200ms" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Patient-Centered Focus</h3>
              <p className="text-muted-foreground">We never lose sight of the ultimate goal of medical AI: improving patient outcomes and healthcare delivery. All innovations must ultimately benefit the individuals receiving care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partnerships</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Collaborating with leading institutions to advance AI in medicine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="section-fade-in neumorph-card p-6 rounded-2xl text-center">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="80" height="80" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">University of Pittsburgh School of Medicine</h3>
              <p className="text-muted-foreground">Access to academic resources, research facilities, and faculty mentorship that empowers our educational initiatives and projects.</p>
            </div>
            
            <div className="section-fade-in neumorph-card p-6 rounded-2xl text-center" style={{ animationDelay: "100ms" }}>
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="80" height="80" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                  <path d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  <path d="M16 16a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6z"></path>
                  <path d="M22 12h-6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">UPMC (University of Pittsburgh Medical Center)</h3>
              <p className="text-muted-foreground">Collaboration on clinical AI applications, access to healthcare expertise, and opportunities for real-world implementation of AI solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
