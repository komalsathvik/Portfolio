import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "CVR College of Engineering, Hyderabad",
    duration: "2023 – 2027",
    grade: "CGPA: 9.38",
    gradeNote: "(up to 2nd year)",
    icon: GraduationCap,
    current: true,
  },
  {
    degree: "Secondary board (Intermediate)",
    institution: "MIMS College",
    duration: "2021 – 2023",
    grade: "Percentage: 96.1%",
    gradeNote: "",
    icon: Award,
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-background relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              Education
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Academic
              <span className="gradient-text"> Background</span>
            </h2>
          </div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {educationData.map((edu, index) => (
              <div
                key={edu.degree}
                className={`group relative p-6 md:p-8 rounded-2xl bg-card border transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)] ${
                  edu.current
                    ? "border-primary/50"
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
                {/* Current Badge */}
                {edu.current && (
                  <div className="absolute -top-3 right-6">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Currently Pursuing
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <edu.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="px-2.5 py-1 rounded-md bg-secondary/50">
                      {edu.duration}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold gradient-text">
                        {edu.grade}
                      </span>
                      {edu.gradeNote && (
                        <span className="text-sm text-muted-foreground">
                          {edu.gradeNote}
                        </span>
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

export default Education;
