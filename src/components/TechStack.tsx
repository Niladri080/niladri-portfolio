import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const technologies = [
  // Languages
  { name: 'C++', icon: '💠', category: 'Languages' },
  { name: 'C', icon: '🔹', category: 'Languages' },
  { name: 'Python', icon: '🐍', category: ['Languages', 'Backend'] },
  { name: 'JavaScript', icon: '📜', category: 'Languages' },
  { name: 'PHP', icon: '🐘', category: 'Languages' },
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Next.js', icon: '➡️', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '🌬️', category: 'Frontend' },
  { name: 'Bootstrap', icon: '🧩', category: 'Frontend' },
  { name: 'GSAP', icon: '✨', category: 'Frontend' },
  { name: 'Express.js', icon: '🚂', category: 'Backend' },
  { name: 'MySQL', icon: '🐬', category: 'Databases' },
  { name: 'MongoDB', icon: '🍃', category: 'Databases' },
  { name: 'Redis', icon: '🔴', category: 'Databases' },
  { name: 'Pinecone', icon: '🌲', category: 'Generative AI' },
  { name: 'RAG', icon: '🧠', category: 'Generative AI' },
  { name: 'LangChain', icon: '🔗', category: 'Generative AI' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'GCP', icon: '☁️', category: 'Cloud' },
  { name: 'Railway', icon: '🚆', category: 'Cloud' },
  { name: 'Vercel', icon: '⚡', category: 'Cloud' },
  { name: 'Git', icon: '🔀', category: 'Tools' },
  { name: 'GitHub', icon: '🐙', category: 'Tools' },
  { name: 'Postman', icon: '📬', category: 'Tools' },
  { name: 'Figma', icon: '🎛️', category: 'Tools' },
];

const categories = [
  'All',
  'Languages',
  'Frontend',
  'Backend',
  'Databases',
  'Generative AI',
  'Cloud',
  'Tools',
  'Foundations',
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Technologies I work with</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Tech Stack</h2>
        </motion.div>

        <div className="space-y-8">
          {/* Preferred order for categories to display (only show those present) */}
          {([
            'Languages',
            'Frontend',
            'Backend',
            'Databases',
            'Generative AI',
            'Cloud',
            'Tools',
            'Foundations',
          ] as const)
            .filter((cat) => technologies.some((t) => Array.isArray(t.category) ? t.category.includes(cat) : t.category === cat))
            .map((cat, catIndex) => (
              <div
                key={cat}
                className="flex flex-col items-center"
              >
                <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">{cat}</h3>

                <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-5xl">
                  {technologies
                    .filter((t) => Array.isArray(t.category) ? t.category.includes(cat) : t.category === cat)
                    .map((tech, index) => (
                      <div
                        key={tech.name}
                        className="glass-card p-3 text-center hover-lift group cursor-default w-28 sm:w-32 md:w-36"
                      >
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                          {tech.icon}
                        </div>
                        <p className="text-sm font-medium text-foreground">{tech.name}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
