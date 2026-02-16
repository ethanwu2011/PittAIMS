import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-muted/40 py-10 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Pitt AIMs
            </span>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              A student-run organization at the University of Pittsburgh School of Medicine exploring AI in healthcare.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              <a href="mailto:etw46@pitt.edu" className="hover:text-foreground transition-colors">
                etw46@pitt.edu
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Pages</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Events", path: "/events" },
                { name: "Research", path: "/research" },
                { name: "Course", path: "/course" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {["NIH All of Us", "Python Tutorials", "ML Resources", "Healthcare Datasets", "Ethics Guidelines"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Pitt AI in Medicine Society
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
