import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = {
    degree: "Bachelor of Technology",
    institution: "Malla Reddy University",
    graduation: "June 2025",
    field: "Computer Science with focus on AI & ML"
  };

  const experience = [
    {
      title: "Full-Stack Web Developer Intern",
      company: "Innovimagine",
      period: "June 2025 – Present",
      description: "Developing end-to-end web applications using modern technologies and frameworks."
    },
    {
      title: "Backend Developer Intern",
      company: "MH Cognition",
      period: "Feb 2025 – May 2025",
      description: "Built robust backend systems and APIs using Django and Python."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Who I Am</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and professional journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">About Me</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a passionate Full-Stack Web Developer from a Computer Science background 
                focused on AI & ML, recently graduated from Malla Reddy University (June 2025). 
                I specialize in creating digital experiences that combine elegant design with 
                powerful functionality.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My journey in technology started with a curiosity about how things work behind 
                the scenes of the digital world. This led me to pursue computer science and 
                develop expertise in both frontend and backend technologies, with a special 
                interest in artificial intelligence and machine learning applications.
              </p>
            </div>

            {/* Education */}
            <Card className="bg-card-gradient border-border shadow-card-elegant">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-primary">Education</h4>
                <div>
                  <h5 className="font-semibold text-foreground">{education.degree}</h5>
                  <p className="text-muted-foreground">{education.institution}</p>
                  <p className="text-muted-foreground">{education.field}</p>
                  <p className="text-sm text-primary font-medium mt-1">{education.graduation}</p>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-primary">Work Experience</h4>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <Card key={index} className="bg-card-gradient border-border shadow-card-elegant hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h5 className="font-semibold text-foreground">{exp.title}</h5>
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground mb-2">{exp.company}</p>
                      <p className="text-muted-foreground text-sm">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;