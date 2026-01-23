import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Niladri080', label: 'GitHub', username: '@Niladri080' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/niladri-mandal-737b53294/', label: 'LinkedIn', username: 'Niladri Mandal' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! I\'ll get back to you soon.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Let's connect</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, or just a friendly chat about tech. 
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:nilmandal098@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      nilmandal098@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+917439301473"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      +91-7439301473
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Phagwara, Punjab, India</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border my-8" />

              <h4 className="text-foreground font-medium mb-4">Find me on</h4>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <social.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{social.label}</p>
                        <p className="text-xs text-muted-foreground">{social.username}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground 
                               placeholder:text-muted-foreground focus:outline-none focus:border-primary 
                               focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground 
                               placeholder:text-muted-foreground focus:outline-none focus:border-primary 
                               focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground 
                               placeholder:text-muted-foreground focus:outline-none focus:border-primary 
                               focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Tell me about your project or just say hi!"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-medium 
                             flex items-center justify-center gap-2 hover:bg-primary/90 
                             transition-all duration-300 hover:shadow-glow"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
