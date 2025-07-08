import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Web Application Development",
      description: "Full-stack web applications using Django and React.js with modern design principles and responsive layouts.",
      features: [
        "Custom Django Backend Development",
        "React.js Frontend Implementation",
        "Database Design & Integration",
        "RESTful API Development",
        "Authentication & Security"
      ],
      icon: "🌐"
    },
    {
      title: "UI/UX Design & Prototyping",
      description: "Creating intuitive and engaging user interfaces with Figma, focusing on user experience and modern design trends.",
      features: [
        "User Interface Design",
        "Interactive Prototyping",
        "User Experience Research",
        "Design System Creation",
        "Responsive Design"
      ],
      icon: "🎨"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native, delivering native performance with code reusability.",
      features: [
        "React Native Development",
        "Cross-platform Compatibility",
        "Native Performance Optimization",
        "App Store Deployment",
        "Push Notifications"
      ],
      icon: "📱"
    },
    {
      title: "AI & ML Integration",
      description: "Implementing artificial intelligence and machine learning solutions to enhance web applications with smart features.",
      features: [
        "Machine Learning Models",
        "AI-powered Features",
        "Data Analysis & Insights",
        "Predictive Analytics",
        "Intelligent Automation"
      ],
      icon: "🤖"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services tailored to bring your digital ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border shadow-card-elegant hover:shadow-glow-lg transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="text-4xl mb-6 group-hover:animate-float">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-accent transition-colors duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card-gradient border border-border rounded-2xl p-8 shadow-card-elegant">
            <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge technology and modern design principles.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-glow"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;