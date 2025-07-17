import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_dymuo4p',
      'template_olq1wjo',     
      formRef.current,
      'FHD4ga6-zd0Fepndk'       
    ).then(() => {
      toast({
        title: 'Message sent successfully!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      formRef.current.reset();
    }).catch(() => {
      toast({
        title: 'Message failed!',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive'
      });
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  const contactInfo = [
    {
      label: "Email",
      value: "hariprasadandas@gmail.com",
      href: "mailto:hariprasadandas@gmail.com"
    },
    {
      label: "Phone",
      value: "+91 93463 89261",
      href: "tel:+919346389261"
    },
    {
      label: "LinkedIn",
      value: "hariprasad-andas-5b4b28296",
      href: "https://linkedin.com/in/hariprasad-andas-5b4b28296"
    },
    {
      label: "GitHub",
      value: "hariprasadandas",
      href: "https://github.com/hariprasadandas"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card-gradient border-border shadow-card-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send Me a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="user_name"
                    type="text"
                    required
                    className="bg-muted border-border focus:border-primary"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="user_email"
                    type="email"
                    required
                    className="bg-muted border-border focus:border-primary"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="bg-muted border-border focus:border-primary resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card-gradient border-border shadow-card-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-primary/60 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card-gradient border-border shadow-card-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Follow Me</h3>

                <div className="flex space-x-4">
                  <a
                    href="https://github.com/hariprasadandas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-card border border-border rounded-lg hover:border-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                  <a
                    href="https://linkedin.com/in/hariprasad-andas-5b4b28296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-card border border-border rounded-lg hover:border-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-card-gradient border-border shadow-card-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Availability</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-foreground font-medium">Available for new projects</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  I'm currently open to freelance opportunities and full-time positions.
                  Let's discuss how we can work together to bring your ideas to life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
