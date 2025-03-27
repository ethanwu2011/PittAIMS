
import React from "react";
import { Link } from "react-router-dom";
import LogoAnimation from "./LogoAnimation";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-card/30 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <LogoAnimation />
              <span className="ml-2 text-xl font-semibold tracking-tight">Pitt <span className="text-yellow-500">AI</span>Ms</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Pitt AI in Medicine Society is a student-led organization at the University of Pittsburgh School of Medicine dedicated to advancing AI education and research in healthcare.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-yellow-500 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-yellow-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-yellow-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-yellow-500 transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/research" className="text-muted-foreground hover:text-yellow-500 transition-colors">Research</Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-yellow-500 transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-yellow-500 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">NIH All of Us</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">Python Tutorials</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">ML Resources</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">Healthcare Datasets</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">Ethics Guidelines</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-yellow-500 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:etw46@pitt.edu" className="hover:text-yellow-500 transition-colors">etw46@pitt.edu</a>
              </li>
              <li className="flex items-center text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>University of Pittsburgh School of Medicine</span>
              </li>
              <li className="mt-4">
                <Link to="/contact" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pitt AI in Medicine Society. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
