
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  Mail, 
  Phone, 
  Send, 
  MessageSquare 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      
      setIsSubmitting(false);
      form.reset();
    }, 1000);
  }

  return (
    <div className="pt-24 pb-20">
      <section className="mb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-fade-in text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Have questions, ideas, or interested in collaboration? We'd love to hear from you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="section-fade-in">
              <div className="neumorph-card p-6 md:p-8 rounded-2xl border-l-4 border-yellow-500">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Name <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              className="bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Email <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email address" 
                              type="email" 
                              {...field} 
                              className="bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Subject <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <select
                              {...field}
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
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Message <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can we help you?"
                              {...field}
                              rows={5}
                              className="bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
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
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="section-fade-in lg:mt-10" style={{ animationDelay: "100ms" }}>
              <div className="space-y-8">
                <div className="neumorph-card p-8 rounded-2xl border-l-4 border-yellow-500 mb-8">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 p-3 bg-yellow-500/10 text-yellow-500 rounded-full">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a href="mailto:etw46@pitt.edu" className="text-primary hover:text-yellow-500 transition-colors">
                          etw46@pitt.edu
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 p-3 bg-yellow-500/10 text-yellow-500 rounded-full">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <a href="tel:5712327243" className="text-primary hover:text-yellow-500 transition-colors">
                          (571) 232-7243
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 p-3 bg-yellow-500/10 text-yellow-500 rounded-full">
                        <MessageSquare size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium">Contact Person</h4>
                        <p>Ethan Wu</p>
                        <p className="text-sm text-muted-foreground">Pitt AIMs Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="neumorph-card p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
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
