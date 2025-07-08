import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Hariprasad Andas</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full-Stack Web Developer passionate about creating digital experiences 
              with modern technologies and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/hariprasadandas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-secondary border border-border rounded-lg hover:border-primary hover:shadow-glow transition-all duration-300"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="https://linkedin.com/in/hariprasad-andas-5b4b28296" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-secondary border border-border rounded-lg hover:border-primary hover:shadow-glow transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a 
                  href="mailto:hariprasadandas@gmail.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  hariprasadandas@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919346389261"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +91 93463 89261
                </a>
              </li>
              <li>Available for freelance work</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Hariprasad Andas. All rights reserved. 
            <span className="block sm:inline sm:ml-2 mt-2 sm:mt-0">
              Built with React.js & Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;