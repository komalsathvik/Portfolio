import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-pattern"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-sm mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up animation-delay-100">
            <span className="text-foreground">Mantripragada</span>
            <br />
            <span className="gradient-text">Komal Sathvik</span>
          </h1>

          {/* Title */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up animation-delay-200 font-mono">
            Full-Stack Web Developer | MERN Stack | CSE Undergrad
          </p>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-300">
            "Building secure, scalable web apps and real-time experiences with
            the MERN stack."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up animation-delay-400">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#projects")}
            >
              View Projects
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
            >
              Contact Me
            </Button>
          </div>

          {/* Contact & Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 animate-fade-up animation-delay-400">
            <a
              href="mailto:mksathvik03@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">mksathvik03@gmail.com</span>
            </a>
            <a
              href="tel:+916301383980"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91-6301383980</span>
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/komalsathvik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/komalsathvik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
