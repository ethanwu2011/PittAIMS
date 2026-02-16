import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Send, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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

const API_URL = import.meta.env.VITE_API_URL || "/api";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

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

    return () => observer.disconnect();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-fade-in text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contact</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Questions, ideas, or interested in collaborating? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="section-fade-in space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h2 className="text-lg font-semibold mb-4 text-foreground">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a href="mailto:etw46@pitt.edu" className="text-sm text-primary hover:text-primary/80 transition-colors">
                      etw46@pitt.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a href="tel:5712327243" className="text-sm text-primary hover:text-primary/80 transition-colors">
                      (571) 232-7243
                    </a>
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-medium text-foreground">Ethan Wu</p>
                  <p className="text-xs text-muted-foreground">Pitt AIMs Founder</p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-base font-semibold mb-3 text-foreground flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Meeting Times
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-medium text-foreground">General Meetings</p>
                  <p className="text-muted-foreground">Every other Wednesday, 5:00 - 6:30 PM</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Journal Club</p>
                  <p className="text-muted-foreground">Every other Monday, 5:00 - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Workshops</p>
                  <p className="text-muted-foreground">Scheduled throughout the semester</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="section-fade-in">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h2 className="text-lg font-semibold mb-4 text-foreground">Send a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
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
                        <FormLabel className="text-sm">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" type="email" {...field} />
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
                        <FormLabel className="text-sm">Subject</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                          >
                            <option value="">Select a subject</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Research Collaboration">Research Collaboration</option>
                            <option value="Membership">Membership</option>
                            <option value="Events">Events</option>
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
                        <FormLabel className="text-sm">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can we help?"
                            {...field}
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      "Sending..."
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
        </div>

        {/* FAQ */}
        <div className="section-fade-in max-w-2xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">FAQ</h2>
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-base font-semibold mb-2 text-foreground">Do I need prior AI or coding experience?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nope. We welcome everyone regardless of technical background. Our workshops and
                bootcamps start from the basics, and there are plenty of resources for self-paced learning.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-base font-semibold mb-2 text-foreground">How can I get involved in research?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We announce research opportunities at meetings and via email. You can also reach out
                through this form, and we'll match you with projects based on your skills and interests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
