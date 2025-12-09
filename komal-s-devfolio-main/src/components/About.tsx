import {
  Code2,
  Rocket,
  Users,
  Zap,
  Brain,
  Sparkles,
  Database,
  Cpu,
  Lightbulb,
  Code,
  Bot,
} from "lucide-react";

// Custom Icons (LeetCode + CodeChef)
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary">
    <path
      d="M13.54 7.77L10.8 10.5l2.74 2.73M9.25 5.44 4.5 10.2a2 2 0 000 2.83l4.75 4.75M14.75 17.5l4.75-4.75a2 2 0 000-2.83L14.75 5.17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CodeChefIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
    <path
      fill="currentColor"
      d="M4 7h16v10H4zm3 1v8h1V8zm3 0v8h1V8zm3 0v8h1V8zm3 0v8h1V8z"
    />
  </svg>
);

// ========================================== Highlights ==========================================

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Expertise in MERN stack with TypeScript and Next.js",
  },
  {
    icon: Zap,
    title: "Problem Solver",
    description: "Breaking down complex challenges into efficient solutions",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Creating secure, production-ready applications",
  },
  {
    icon: Users,
    title: "Open Source",
    description: "Contributor in Hackathons & OSS Programs",
  },
  {
    icon: LeetCodeIcon,
    title: "LeetCode",
    description: "120+ DSA Problems Solved",
    link: "https://leetcode.com/u/komalsathvik/",
  },
  {
    icon: CodeChefIcon,
    title: "CodeChef",
    description: "Competitive Programming Practice",
    link: "https://www.codechef.com/users/komalsathvik",
  },
];

const About = () => {
  const openLink = (link?: string) => {
    if (link) window.open(link, "_blank");
  };

  return (
    <section id="about" className="section-padding bg-background relative">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* ================= Header ================= */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Passionate About Building{" "}
              <span className="gradient-text">Digital Experiences</span>
            </h2>
          </div>

          {/* ================= About Content ================= */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Text */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a{" "}
                <span className="text-foreground font-medium">
                  B.Tech CSE student (2023–2027)
                </span>{" "}
                at CVR College of Engineering passionate about full-stack
                development, real-time apps & backend systems.
              </p>
              <p>
                I enjoy building{" "}
                <span className="text-primary font-medium">
                  scalable web applications
                </span>
                , optimizing frontend experiences & integrating real-time
                features like chat & video calls.
              </p>
              <p>
                I actively participate in{" "}
                <span className="font-medium text-foreground">hackathons</span>
                and{" "}
                <span className="font-medium text-foreground">
                  open-source contributions
                </span>{" "}
                to expand knowledge through collaboration.
              </p>
            </div>

            {/* Right Stats */}
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-xl bg-secondary/30">
                    <div className="text-3xl font-bold gradient-text mb-1">
                      9.38
                    </div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-secondary/30">
                    <div className="text-3xl font-bold gradient-text mb-1">
                      5+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Projects
                    </div>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-secondary/30">
                    <div className="text-xs font-bold gradient-text mb-1">
                      OPEN SOURCE CONTRIBUTOR
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Hacktober'25 & GSSoC'25
                    </div>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-secondary/30">
                    <div className="text-3xl font-bold gradient-text mb-1">
                      Lead
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Web Team
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl border border-primary/20" />
            </div>
          </div>

          {/* ================= Highlights ================= */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {highlights.map((item) => (
              <div
                key={item.title}
                onClick={() => openLink(item.link)}
                className="group p-6 rounded-xl bg-card border border-border/50 cursor-pointer hover:border-primary/40 hover:shadow-[0_0_25px_hsl(var(--primary)/0.15)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                  <item.icon />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* ================= Currently Learning Section ================= */}
          <section
            id="learning"
            className="mt-10 bg-primary/5 py-16 rounded-2xl"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Currently Learning
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-3">AI/ML & Generative AI</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Expanding skills to integrate smart intelligence into my
                full-stack applications
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Brain, text: "Foundations of Machine Learning" },
                { icon: Code, text: "Python-based ML Workflows" },
                {
                  icon: Database,
                  text: "Data Preprocessing & Feature Engineering",
                },
                { icon: Cpu, text: "ML Algorithms (SVM, Trees, Regression)" },
                { icon: Sparkles, text: "Neural Network Fundamentals" },
                { icon: Lightbulb, text: "Prompt Engineering & LLMs" },
                { icon: Bot, text: "Building GenAI Tools & Assistants" },
                { icon: Zap, text: "Integrating AI with Full-Stack" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground/90">{item.text}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
