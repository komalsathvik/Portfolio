import {
  ExternalLink,
  Video,
  ShoppingCart,
  Utensils,
  Github,
} from "lucide-react";

const projects = [
  {
    title: "Clear-Connect",
    subtitle: "Online Video Conferencing Platform",
    icon: Video,
    techStack: [
      "MongoDB",
      "Bcrypt",
      "Crypto",
      "Socket.IO",
      "Express.js",
      "React",
      "Bootstrap",
      "Material UI",
      "WebRTC",
      "Axios",
      "CSS",
    ],
    details: [
      "Built a secure, user-friendly real-time video conferencing platform supporting one-on-one and group meetings.",
      "Implemented core features including video calls, screen sharing, and live chat using WebRTC and Socket.IO.",
      "Ensured smooth communication between frontend and backend through optimized data streaming with Axios and WebRTC APIs.",
      "Integrated MongoDB to handle user sessions, chat history, and real-time data storage for a seamless meeting experience.",
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
    // 🔗 TODO: paste your real URLs here
    liveDemo: "https://clear-connect.vercel.app/",
    github: "https://github.com/komalsathvik/Clear-Connect",
  },
  {
    title: "Intel Hackathon",
    subtitle: "Full-Stack Product Page for Direct Intel Sales",
    icon: ShoppingCart,
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Google AI Studio API",
      "Axios",
      "CORS",
    ],
    details: [
      "Developed an online product platform for Intel that enables direct sales to customers.",
      "Built a responsive and interactive web application to browse and purchase Intel products from the platform.",
      "Integrated an AI-powered chatbot using Google AI Studio to provide real-time assistance and answer customer queries.",
    ],
    gradient: "from-blue-500/20 to-indigo-500/20",
    // 🔗 TODO: paste your live demo & github (if repo is public)
    liveDemo: "https://intel-hackathon-two.vercel.app/",
    github: "https://github.com/komalsathvik/intel-hackathon",
  },
  {
    title: "FoodRestro Application",
    subtitle: "Restaurant Food Ordering System",
    icon: Utensils,
    techStack: [
      "HTML",
      "CSS",
      "EJS",
      "Node.js",
      "Express.js",
      "Twilio API",
      "MySQL",
    ],
    details: [
      "Designed a secure food ordering system for restaurants with real-time order tracking and authentication.",
      "Implemented OTP-based login using Twilio API for secure and quick customer access.",
      "Built a MySQL database structure to manage user accounts, menu items, orders, and payment transactions.",
      "Created backend services with Node.js and Express.js to handle order placement, tracking, and category-based menu navigation.",
    ],
    gradient: "from-orange-500/20 to-red-500/20",
    // Resume marks this with [GitHub]
    github: "https://github.com/komalsathvik/FoodRestro",
    // Optional: if you also have a deployed version
    liveDemo: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background relative">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Featured
              <span className="gradient-text"> Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world applications showcasing full-stack development
              expertise
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative p-6 md:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon & Title */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <project.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary/80 text-foreground/80 border border-border/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Details */}
                      <ul className="space-y-3">
                        {project.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex gap-3 text-muted-foreground"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex-shrink-0 lg:self-start flex flex-col gap-3">
                      {project.liveDemo && project.liveDemo.trim() !== "" && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                        >
                          <span className="text-sm font-medium">Live Demo</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}

                      {project.github && project.github.trim() !== "" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                        >
                          <Github className="h-4 w-4" />
                          <span className="text-sm font-medium">GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
