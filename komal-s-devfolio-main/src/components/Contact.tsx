import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Soft gradient + grid background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.05)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative container-custom z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            Contact
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 mb-4">
            Let's Connect
            <span className="gradient-text"> Together</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking for a developer, collaborator, or just want
            to say hello — feel free to reach out!
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Email */}
          <a
            href="mailto:mksathvik03@gmail.com"
            className="group p-6 rounded-2xl bg-background/60 backdrop-blur border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold mt-4">Email</h4>
            <p className="text-muted-foreground mt-1">mksathvik03@gmail.com</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+916301383980"
            className="group p-6 rounded-2xl bg-background/60 backdrop-blur border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold mt-4">Phone</h4>
            <p className="text-muted-foreground mt-1">+91 6301383980</p>
          </a>

          {/* Location */}
          <div className="p-6 rounded-2xl bg-background/60 backdrop-blur border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold mt-4">Location</h4>
            <p className="text-muted-foreground mt-1">Hyderabad, India</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-3">Connect with me</p>

          <div className="flex justify-center gap-4">
            <a
              href="https://linkedin.com/in/komalsathvik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-background/60 backdrop-blur border border-border/60 hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href="https://github.com/komalsathvik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-background/60 backdrop-blur border border-border/60 hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
