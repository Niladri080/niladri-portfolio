import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Trophy, Code } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Software Development Intern',
    company: 'Tech Innovations Inc.',
    period: 'May 2024 - Present',
    description: 'Building RAG-powered applications, working with embeddings and vector databases. Developing real-time features using WebRTC and Socket.io.',
    highlights: ['RAG Systems', 'Vector Databases', 'Real-time Apps'],
  },
  {
    type: 'education',
    title: 'B.Tech Computer Science',
    company: 'University of Technology',
    period: '2021 - 2025',
    description: 'CGPA: 8.59/10. Focused on Data Structures, Algorithms, Machine Learning, and Cloud Computing.',
    highlights: ['8.59 CGPA', 'ML Specialization', 'Cloud Computing'],
  },
];

const achievements = [
  {
    icon: Code,
    title: '400+ LeetCode',
    description: 'Problems solved across all difficulty levels',
  },
  {
    icon: Trophy,
    title: '8.59 CGPA',
    description: 'Academic excellence maintained throughout',
  },
  {
    icon: Briefcase,
    title: '10+ Projects',
    description: 'Full-stack applications deployed in production',
  },
  {
    icon: GraduationCap,
    title: 'Multiple Certifications',
    description: 'AWS, Docker, and ML certifications',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">My journey so far</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Experience & Achievements</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Briefcase size={20} className="text-primary" />
              Experience & Education
            </h3>
            
            <div className="relative space-y-8">
              {/* Timeline line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-border" />
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center border-2 border-background">
                    {exp.type === 'work' ? (
                      <Briefcase size={14} className="text-primary" />
                    ) : (
                      <GraduationCap size={14} className="text-primary" />
                    )}
                  </div>
                  
                  <div className="glass-card p-6">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <h4 className="text-lg font-semibold text-foreground mt-1">{exp.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((h) => (
                        <span key={h} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Trophy size={20} className="text-primary" />
              Key Achievements
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 hover-lift text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon size={28} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-1">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
