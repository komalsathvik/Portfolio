const skillCategories = [
  {
    title: 'Web Technologies (MERN & Frontend)',
    skills: [
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'Bootstrap',
      'HTML',
      'CSS',
      'JavaScript',
      'EJS',
      'JWT',
      'Git',
      'GitHub',
      'WebRTC',
      'Socket.IO',
      'Axios',
      'CORS',
    ],
  },
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'SQL'],
  },
  {
    title: 'Libraries & Tools',
    skills: ['Tkinter', 'Turtle Graphics', 'Bcrypt', 'Crypto', 'Chart.js', 'MySQL'],
  },
  {
    title: 'Developer Tools & Platforms',
    skills: ['VS Code', 'Vercel', 'Render', 'PyCharm', 'Git', 'GitHub'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-card/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              Technical Skills
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Technologies I
              <span className="gradient-text"> Work With</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="group p-6 md:p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-3">
                  <span className="w-2 h-8 rounded-full bg-gradient-to-b from-primary to-primary/30" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
