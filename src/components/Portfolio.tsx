import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Github, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "MRU e-Books Website",
      description: "A comprehensive platform for students to access and watch story-based e-books with integrated YouTube functionality.",
      longDescription: "Developed a full-featured e-book platform that allows students to access educational content in an interactive format. The platform integrates with YouTube to provide multimedia learning experiences, making education more engaging and accessible.",
      technologies: ["HTML", "CSS", "javascript", "React.js"],
      features: [
        "User authentication and profile management",
        "Interactive e-book reader interface",
        "YouTube video integration",
        "Search and categorization system",
        "Progress tracking and bookmarks",
        "Responsive design for all devices"
      ],
      category: "Web Application",
      status: "Completed",
      year: "2023",
      deploymentLink: "https://dhanushraghava2004.github.io/MBOOKS/",
      githubLink: "https://github.com/hariprasadandas/mru-ebooks"
    },
    {
      id: 2,
      title: "Student Learning Portal",
      description: "A comprehensive management system for educational institutions to handle classwork and attendance records efficiently.",
      longDescription: "Built a robust learning management system that streamlines educational processes for institutions. The platform provides tools for teachers to manage classwork, track student attendance, and generate comprehensive reports.",
      technologies: ["Python", "Bootstrap", "MySQL", "HTML"],
      features: [
        "Student and teacher dashboards",
        "Attendance tracking system",
        "Assignment management",
        "Grade calculation and reporting",
        "Real-time notifications",
        "Data visualization with charts"
      ],
      category: "Education Management",
      status: "Completed",
      year: "2024",
      deploymentLink: "https://student-portal.example.com",
      githubLink: "https://github.com/username/student-learning-portal"
    },
    {
      id: 3,
      title: "DevConnect",
      description: "A feature-rich social platform for developers with CRUD operations, authentication, and social networking features.",
      longDescription: "Created a social networking platform specifically designed for developers to connect, share projects, and collaborate. The platform includes modern social media features adapted for the developer community.",
      technologies: ["Django", "React.js", "MySQL", "JWT", "Python"],
      features: [
        "User authentication and profiles",
        "Post creation and sharing",
        "Like and comment system",
        "Follow/unfollow functionality",
        "Real-time notifications",
        "Developer-focused content filtering"
      ],
      category: "Social Platform",
      status: "Completed",
      year: "2025",
      deploymentLink: "https://devconnect-six-peach.vercel.app/",
      githubLink: "https://github.com/hariprasadandas/Devconnect"
    },
    {
      id: 4,
      title: "Taaza - Freshness Delivered",
      description: "A complete e-commerce platform for a meat shop with separate admin and customer panels, including cart and billing systems.",
      longDescription: "Developed a comprehensive e-commerce solution for a meat delivery business with dual interfaces for administrators and customers. The platform handles the complete order lifecycle from product browsing to delivery.",
      technologies: [ "React.js","Node.js", "Firebase", "javascript", "api"],
      features: [
        "Dual-panel system (Admin & Customer)",
        "Product catalog with categories",
        "Shopping cart and wishlist",
        "Order management system",
        "Payment integration",
        "Inventory tracking",
        "Delivery scheduling"
      ],
      category: "E-commerce",
      status: "Completed",
      year: "2025",
      deploymentLink: "https://taaza-latest.vercel.app/",
      githubLink: "https://github.com/hariprasadandas/Taaza-5-main"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my recent projects and development expertise across various domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-card-gradient border-border shadow-card-elegant hover:shadow-glow-lg transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl bg-card border-border">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-primary">{project.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="flex gap-4 text-sm">
                          <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">
                            {project.category}
                          </span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full">
                            {project.status}
                          </span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full">
                            {project.year}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {project.longDescription}
                        </p>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, featureIndex) => (
                              <li 
                                key={featureIndex}
                                className="flex items-center text-muted-foreground"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  {project.deploymentLink && (
                    <a
                      href={project.deploymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex border border-border rounded-md p-2 mr-2 hover:border-primary hover:bg-primary/10"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="ml-1">Link</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex border border-border rounded-md p-2 hover:border-primary hover:bg-primary/10"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                      <span className="ml-1">Git hub</span>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card-gradient border border-border rounded-2xl p-8 shadow-card-elegant">
            <h3 className="text-2xl font-bold mb-4 text-primary">Interested in My Work?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These projects represent just a glimpse of what I can create. Let's discuss how I can help bring your ideas to life.
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
