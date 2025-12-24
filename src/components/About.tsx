import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Rocket, Heart } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code Advocate',
    description: 'I believe in writing code that tells a story. Readable, maintainable, and elegant.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: '400+ LeetCode problems solved. I love breaking down complex problems into simple solutions.',
  },
  {
    icon: Rocket,
    title: 'Builder at Heart',
    description: 'From RAG systems to real-time apps, I love turning ideas into deployed products.',
  },
  {
    icon: Heart,
    title: 'Continuous Learner',
    description: 'Technology evolves fast. So do I. Always exploring new tools and frameworks.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hey there! I'm a passionate software developer currently in my final year of 
              Computer Science. My journey started with curiosity about how things work, 
              and it's grown into a deep love for building digital solutions that make a difference.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              During my internship, I dove deep into <span className="text-primary">RAG systems and embeddings</span>, 
              building intelligent applications that understand context. I've worked on 
              <span className="text-primary"> real-time applications</span> using WebRTC and Socket.io, 
              and deployed full-stack projects on AWS with Docker and Kubernetes.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source, or optimizing my development workflow. I believe in the power 
              of clean code and thoughtful design.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['MERN Stack', 'AWS', 'Docker', 'AI/ML', 'Real-time Systems'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 hover-lift"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
