
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

  const handleSendAnother = () => {
    setSubmitted(false);
  };

  return (
    <div className="pt-24 pb-20">
      <section className="mb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Have questions, feedback, or interested in collaboration? We'd love to hear from you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="section-fade-in">
              <div className="neumorph-card p-6 md:p-8 rounded-2xl border-l-4 border-yellow-500">
                {submitted ? (
                  <div className="text-center py-8">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="48" 
                      height="48" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mx-auto text-yellow-500 mb-4"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button
                      onClick={handleSendAnother}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-1">
                            Subject <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                          >
                            <option value="">Select a subject</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Membership">Membership</option>
                            <option value="Events">Events</option>
                            <option value="Research Collaboration">Research Collaboration</option>
                            <option value="Feedback">Feedback</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-1">
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                          ></textarea>
                        </div>
                        
                        <div>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 button-glow relative"
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                              </>
                            ) : "Send Message"}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="section-fade-in lg:mt-10" style={{ animationDelay: "100ms" }}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                    Email Us
                  </h3>
                  <a 
                    href="mailto:etw46@pitt.edu" 
                    className="flex items-center text-primary hover:text-yellow-500 transition-colors"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    etw46@pitt.edu
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                    Location
                  </h3>
                  <p className="flex items-start text-muted-foreground">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-2 mt-1"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>
                      University of Pittsburgh School of Medicine<br />
                      3550 Terrace St<br />
                      Pittsburgh, PA 15261
                    </span>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                    Meeting Times
                  </h3>
                  <p className="flex items-start text-muted-foreground">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-2 mt-1"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>
                      General Meetings: Every other Wednesday, 5:00 PM - 6:30 PM<br />
                      Journal Club: Every other Monday, 5:00 PM - 6:00 PM<br />
                      Workshops: Scheduled throughout the semester (see Events page)
                    </span>
                  </p>
                </div>
                
                <div className="neumorph-card p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                    Connect with Us
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 bg-card hover:bg-yellow-500/10 hover:text-yellow-500 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-card hover:bg-yellow-500/10 hover:text-yellow-500 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-card hover:bg-yellow-500/10 hover:text-yellow-500 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-card hover:bg-yellow-500/10 hover:text-yellow-500 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                    Join Our Mailing List
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Stay updated with our latest events, workshops, and opportunities.
                  </p>
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="flex-grow px-4 py-2 bg-card border border-r-0 border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                    />
                    <Button
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-l-none"
                      onClick={() => {
                        toast({
                          title: "Subscribed!",
                          description: "You've been added to our mailing list.",
                        });
                      }}
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find answers to common questions about Pitt AIMs
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="section-fade-in neumorph-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">How can I join Pitt AIMs?</h3>
              <p className="text-muted-foreground">
                Membership is open to all University of Pittsburgh students, faculty, and staff. Simply attend one of our general meetings or fill out the membership form on our website to join our mailing list and receive updates about upcoming events.
              </p>
            </div>
            
            <div className="section-fade-in neumorph-card p-6 rounded-2xl" style={{ animationDelay: "100ms" }}>
              <h3 className="text-xl font-semibold mb-2">Do I need prior AI or coding experience?</h3>
              <p className="text-muted-foreground">
                No prior experience is required! We welcome members of all technical backgrounds. Our workshops and coding bootcamps are designed to accommodate beginners, and we provide resources for self-paced learning.
              </p>
            </div>
            
            <div className="section-fade-in neumorph-card p-6 rounded-2xl" style={{ animationDelay: "200ms" }}>
              <h3 className="text-xl font-semibold mb-2">How can I get involved in research projects?</h3>
              <p className="text-muted-foreground">
                We regularly announce research opportunities during our meetings and via email. You can also express your interest by filling out our research collaboration form, and we'll match you with appropriate projects based on your skills and interests.
              </p>
            </div>
            
            <div className="section-fade-in neumorph-card p-6 rounded-2xl" style={{ animationDelay: "300ms" }}>
              <h3 className="text-xl font-semibold mb-2">Are there membership fees?</h3>
              <p className="text-muted-foreground">
                No, Pitt AIMs is free to join. We're funded through university support and grants, allowing us to provide resources and events at no cost to members.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
