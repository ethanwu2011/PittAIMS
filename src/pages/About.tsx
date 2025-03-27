
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
      className="section-fade-in neumorph-card p-6 rounded-2xl overflow-hidden"
    >
      <div className="mb-6 rounded-xl overflow-hidden aspect-[4/3] bg-primary/5">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/400x300?text=Profile+Image";
          }}
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-primary mb-4 text-sm">{role}</p>
      <p className="text-muted-foreground">{bio}</p>
    </div>
  );
};

const About: React.FC = () => {
  const founders = [
    {
      name: "Emily Thompson",
      role: "Co-Founder & President",
      image: "https://via.placeholder.com/400x300?text=Emily+Thompson", 
      bio: "MD-PhD student specializing in computational neuroscience. Emily's research focuses on neural network models for predicting treatment responses in neurological disorders."
    },
    {
      name: "Michael Rodriguez",
      role: "Co-Founder & Technical Lead",
      image: "https://via.placeholder.com/400x300?text=Michael+Rodriguez",
      bio: "Medical student with a background in computer science. Michael has contributed to several open-source healthcare AI projects and leads the technical workshops."
    },
    {
      name: "Dr. Sarah Chen",
      role: "Co-Founder & Faculty Advisor",
      image: "https://via.placeholder.com/400x300?text=Dr.+Sarah+Chen",
      bio: "Assistant Professor of Biomedical Informatics with expertise in machine learning for genomics and personalized medicine. Dr. Chen guides research directions and mentors students."
    },
    {
      name: "Daniel Park",
      role: "Co-Founder & Educational Director",
      image: "https://via.placeholder.com/400x300?text=Daniel+Park",
      bio: "MD student with prior experience in educational technology. Daniel coordinates the curriculum for workshops and ensures content is accessible to students of all technical backgrounds."
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Pitt AIMs</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We're a dynamic community of students, researchers, and faculty passionate about the intersection of artificial intelligence and healthcare
            </p>
          </div>

          <div className="section-fade-in max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-lg mb-8">
              At Pitt AI in Medicine Society, we aim to promote awareness of artificial intelligence applications in healthcare, foster educational growth for students of all technical backgrounds, and facilitate collaborative research projects that advance medical innovations.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground text-lg mb-8">
              We envision a future where AI tools are seamlessly integrated into healthcare workflows, enhancing patient outcomes while addressing critical challenges in healthcare equity and accessibility. Through education, research, and ethical discussions, we strive to prepare the next generation of medical professionals to lead this transformation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Founders Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Founders</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the dedicated individuals who established and continue to guide Pitt AIMs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {founders.map((founder, index) => (
              <ProfileCard
                key={index}
                name={founder.name}
                role={founder.role}
                image={founder.image}
                bio={founder.bio}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The core principles that guide our work and community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="section-fade-in neumorph-card p-6 rounded-2xl">
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
            
            <div className="section-fade-in neumorph-card p-6 rounded-2xl" style={{ animationDelay: "100ms" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ethical Application</h3>
              <p className="text-muted-foreground">We prioritize the ethical implications of AI in healthcare, emphasizing fairness, transparency, privacy, and the reduction of algorithmic bias in all our discussions and projects.</p>
            </div>
            
            <div className="section-fade-in neumorph-card p-6 rounded-2xl" style={{ animationDelay: "200ms" }}>
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
    </div>
  );
};

export default About;
