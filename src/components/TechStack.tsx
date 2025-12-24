import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const technologies = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'Express', icon: '🚂', category: 'Backend' },
  { name: 'TypeScript', icon: '📘', category: 'Language' },
  { name: 'Python', icon: '🐍', category: 'Language' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  { name: 'Kubernetes', icon: '⎈', category: 'DevOps' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
  { name: 'Redis', icon: '🔴', category: 'Database' },
  { name: 'Pinecone', icon: '🌲', category: 'Vector DB' },
  { name: 'Socket.io', icon: '🔌', category: 'Real-time' },
  { name: 'WebRTC', icon: '📹', category: 'Real-time' },
  { name: 'GraphQL', icon: '◼️', category: 'API' },
  { name: 'TensorFlow', icon: '🧠', category: 'AI/ML' },
  { name: 'LangChain', icon: '🔗', category: 'AI/ML' },
  { name: 'Git', icon: '🔀', category: 'Tools' },
  { name: 'MySQL', icon: '🗄️', category: 'Database' },
  { name: 'Tailwind', icon: '🎨', category: 'Frontend' },
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Cloud', 'AI/ML', 'Real-time'];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Technologies I work with</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Tech Stack</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.03 }}
              className="glass-card p-4 text-center hover-lift group cursor-default"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="font-medium text-foreground mb-1">{tech.name}</h3>
              <p className="text-xs text-muted-foreground">{tech.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
