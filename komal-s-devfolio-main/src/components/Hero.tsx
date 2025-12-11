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
      className="min-h-screen flex items-center relative overflow-hidden bg-hero-pattern"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container-custom relative z-10 pt-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* LEFT SIDE — TEXT */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-sm mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Available for opportunities
              </span>
            </div>

            {/* Greeting */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-3 animate-fade-up">
              <span className="text-muted-foreground/80">Hello, Welcome!</span>
            </h1>

            {/* Name */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 animate-fade-up animation-delay-100">
              <span className="gradient-text">I'm Komal Sathvik</span>
            </h2>

            {/* Title */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-mono mb-6 animate-fade-up animation-delay-200">
              Full-Stack Web Developer • MERN Stack Engineer
            </p>

            {/* Tagline */}
            <p className="text-muted-foreground/80 max-w-md mx-auto lg:mx-0 mb-10 animate-fade-up animation-delay-300">
              I build secure, scalable applications and real-time experiences
              using modern engineering practices.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row lg:justify-start justify-center gap-4 mb-12 animate-fade-up animation-delay-400">
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

            {/* Contact Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 animate-fade-up animation-delay-400">
              <a
                href="mailto:mksathvik03@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">mksathvik03@gmail.com</span>
              </a>

              <a
                href="tel:+916301383980"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91-6301383980</span>
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/komalsathvik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a
                  href="https://github.com/komalsathvik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="flex justify-center lg:justify-end animate-fade-up animation-delay-200">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-xl border border-border/40 bg-secondary/20 backdrop-blur-md hover:scale-105 transition-all duration-500">
              <img
                src="/profile.jpg" // <-- replace with your image file
                alt="Profile Photo"
                className="w-full h-full object-cover"
              />
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
