import { Briefcase, Code, Trophy } from "lucide-react";

const experiences = [
  {
    title: "Web Team Lead",
    organization: "GDGC-CVR",
    description:
      "Leading the web development team for Google Developer Groups on Campus at CVR College of Engineering. Responsible for mentoring team members, overseeing web projects, and organizing technical workshops.",
    icon: Briefcase,
    type: "Leadership",
  },
  {
    title: "Open Source Contributor",
    organization: "GirlScript Summer of Code 2025",
    description:
      "Contributed to multiple open-source projects with features, bug fixes, and documentation improvements. Enhanced performance and accessibility through clean coding practices and active participation in peer reviews.",
    icon: Code,
    type: "Open Source",
  },
  {
    title: "Open Source Contributor",
    organization: "Hacktoberfest",
    description:
      "Actively contributed to open-source repositories through bug fixes, feature enhancements, and documentation improvements while collaborating with maintainers.",
    icon: Code,
    type: "Open Source",
  },  
  {
    title: "Hackathon Participant",
    organization: "Google Developer Clubs Solution Challenge 2025",
    description:
      "Built innovative tech solutions in an intensive 2-day hackathon, focusing on real-world problems with a collaborative team of 4. Applied rapid development, problem-solving, and teamwork skills.",
    icon: Trophy,
    type: "Competition",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-card/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              Experience
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Professional
              <span className="gradient-text"> Journey</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 md:-translate-x-1/2">
                    <div className="timeline-dot" />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 pl-8 md:pl-0 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <div
                      className={`p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 ${
                        index % 2 === 0 ? "md:ml-auto" : ""
                      }`}
                    >
                      {/* Type Badge */}
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                        {exp.type}
                      </span>

                      {/* Header */}
                      <div
                        className={`flex items-center gap-4 mb-4 ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <exp.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className={index % 2 === 0 ? "md:text-right" : ""}>
                          <h3 className="text-xl font-bold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">
                            {exp.organization}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        className={`text-muted-foreground ${
                          index % 2 === 0 ? "md:text-right" : ""
                        }`}
                      >
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty Space for Layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
