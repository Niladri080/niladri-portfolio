import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'AI Document Assistant',
    description: 'A RAG-powered document Q&A system using embeddings and vector databases. Built with LangChain, Pinecone, and React for seamless document interaction.',
    tags: ['RAG', 'Pinecone', 'LangChain', 'React', 'Node.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Real-time Collaboration Hub',
    description: 'A WebRTC-powered video conferencing app with real-time document editing, screen sharing, and AI transcription using MediaPipe.',
    tags: ['WebRTC', 'Socket.io', 'MediaPipe', 'React', 'Express'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Cloud-Native E-commerce',
    description: 'Full-stack e-commerce platform deployed on AWS with Docker and Kubernetes. Features payment integration, real-time inventory, and microservices architecture.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'MERN', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'DevOps Dashboard',
    description: 'Monitoring and analytics dashboard for cloud infrastructure. Real-time metrics, alerting, and beautiful data visualizations.',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis'],
    github: 'https://github.com',
    featured: false,
  },
  {
    title: 'ML Model Serving API',
    description: 'Production-ready API for serving machine learning models with auto-scaling, request batching, and model versioning.',
    tags: ['Python', 'FastAPI', 'Docker', 'TensorFlow', 'Redis'],
    github: 'https://github.com',
    featured: false,
  },
  {
    title: 'Social Media Analytics',
    description: 'Analytics platform for tracking social media metrics across platforms with sentiment analysis and trend detection.',
    tags: ['React', 'Node.js', 'MongoDB', 'NLP', 'Chart.js'],
    github: 'https://github.com',
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">My work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card p-8 hover-lift group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={18} className="text-primary" />
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">Featured</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary hover:bg-primary/10 rounded-xl transition-colors"
                    aria-label="View GitHub"
                  >
                    <Github size={20} className="text-foreground" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary hover:bg-primary/10 rounded-xl transition-colors"
                      aria-label="View Live"
                    >
                      <ExternalLink size={20} className="text-foreground" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Github size={20} className="text-primary" />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="View GitHub"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
