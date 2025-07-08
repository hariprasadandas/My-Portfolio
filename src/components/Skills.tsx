import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "React Native", level: 85 },
        { name: "JavaScript/TypeScript", level: 88 },
        { name: "HTML5 & CSS3", level: 92 },
        { name: "Figma", level: 80 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Django", level: 90 },
        { name: "Python", level: 88 },
        { name: "REST APIs", level: 85 },
        { name: "MySQL", level: 82 },
        { name: "Authentication", level: 87 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Linux/Unix", level: 75 },
        { name: "Docker", level: 70 },
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 92 },
        { name: "Team Collaboration", level: 88 },
        { name: "UI/UX Understanding", level: 85 },
        { name: "Project Management", level: 80 },
        { name: "Communication", level: 87 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-border shadow-card-elegant hover:shadow-glow transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Technologies Highlight */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-primary">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Django", "React.js", "Python", "JavaScript", "MySQL", "React Native", "Git", "Figma"].map((tech, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium hover:border-primary hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;