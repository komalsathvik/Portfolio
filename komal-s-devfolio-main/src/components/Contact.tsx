import { useState } from "react";
import { Mail, Phone, Send, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-card/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Let's Work
              <span className="gradient-text"> Together</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Open to internships, freelance projects, and collaboration
              opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out for opportunities, collaborations, or
                  just to say hello!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <a
                  href="mailto:mksathvik03@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">
                      mksathvik03@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+916301383980"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">
                      +91-6301383980
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">
                      Hyderabad, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/in/komalsathvik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-background border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com/komalsathvik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-background border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
