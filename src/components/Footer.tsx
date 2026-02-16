import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-muted/40 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-lg font-bold tracking-tight text-foreground">
              Pitt AIMs
            </span>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              A student-run organization at the University of Pittsburgh School of Medicine exploring AI in healthcare.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Events", path: "/events" },
                { name: "Research", path: "/research" },
                { name: "Contact", path: "/contact" },
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

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-2 shrink-0" />
                <a href="mailto:etw46@pitt.edu" className="hover:text-foreground transition-colors">
                  etw46@pitt.edu
                </a>
              </li>
              <li className="flex items-start text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 shrink-0 mt-0.5" />
                <span>University of Pittsburgh School of Medicine</span>
              </li>
              <li className="mt-4">
                <Link to="/contact" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center">
                  Contact Us
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pitt AI in Medicine Society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
