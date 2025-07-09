import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-hero-gradient flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <p className="text-muted-foreground text-lg mb-4">WELCOME TO MY WORLD</p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="text-primary">Hariprasad Andas</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
                a Full-Stack Web Developer
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Crafting digital experiences with Django, React.js, and Python. 
              I have been working since 2024 and am proficient in web development, 
              user experience, and AI & ML integration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3"
              >
                View Portfolio
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3"
              >
                Contact Me
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <p className="text-muted-foreground mr-4">FIND WITH ME</p>
              <a 
                href="https://github.com/hariprasadandas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:shadow-glow transition-all duration-300"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="https://linkedin.com/in/hariprasad-andas-5b4b28296" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:shadow-glow transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-glow-lg animate-float">
                <img 
                  src="/uploads/Hariprasad-profile.png" 
                  alt="Hariprasad Andas - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-glow-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-glow-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
