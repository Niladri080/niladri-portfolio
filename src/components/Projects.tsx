import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
const projects = [
  {
    title: 'Gift of Memories',
    description: 'A comprehensive wedding and prewedding booking platform for memories and products, featuring admin-controlled client management, n8n-based service reminders, and an intelligent RAG-powered chatbot.',
    tags: ['MERN', 'n8n', 'Gen AI', 'Compute Engine', 'Framer Motion'],
    github: 'https://github.com/codeflare-labs/gift-of-memories',
    live: 'http://69.62.85.224',
    image: '/gift-of-memories.png',
    featured: true,
  },
  {
    title: 'NexusPro',
    description: 'NexusPro is an all-in-one AI-based career helper platform built to guide users in every step of their professional journey. Whether you are a student, job seeker, or working professional, NexusPro helps you plan, learn, and grow with confidence.',
    tags: ['MERN', 'Clerk (Auth)','Google Gemini AI', 'Vercel', 'RailWay', 'GCP'],
    github: 'https://github.com/Niladri080/NexusPro',
    live: 'https://nexus-pro-three.vercel.app/',
    image: '/NexusPro.png',
    featured: true,
  },
  {
    title: 'OpsFlow',
    description: 'OpsFlow is a robust operations management platform designed to streamline and optimize business workflows. It offers real-time monitoring, analytics, and automation tools to enhance operational efficiency and decision-making.',
    tags: ['Next.js', 'Supabase','GCP','Recharts', 'Docker'],
    github: 'https://github.com/Niladri080/opsflow',
    live: '/',
    image: '/opsflow.png',
    featured: true,
  },
  {
    title: 'DocVerify',
    description: 'A secure e-governance platform enabling citizens to upload documents, receive AI-driven quality analysis, and allowing admins to review, track, and manage submissions transparently.',
    tags: ['MERN','Framer Motion','Google Gemini API','Cloudinary','Tesseract.js (OCR)', 'LLM integration','Helmet', 'Rate Limiting', 'Winston Logging', 'WebSockets'],
    github: 'https://github.com/Niladri080/DocVerify',
    image: '/DocVerify.png',
    featured: false,
  },
  {
    title: 'bodyX',
    description: 'Engineered an AI-powered fitness platform delivering personalized workout and diet plans, real-time posture tracking, automated video evaluation, and live training sessions with integrated premium payments.',
    tags: ['MERN', 'Socket.io', 'Firebase' , 'Python', 'MediaPipe', 'OpenCV', 'WebRTC', 'AWS'],
    github: 'https://github.com/Niladri080/bodyX',
    image: '/bodyX.png',
    featured: false,
  },
  {
    title: 'ShopFusion',
    description: 'A Full Stack E-commerce Web Application with advanced search and recommendation features. Smooth User Experience and Responsive Design.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express','SMTP','JWT'],
    github: 'https://github.com/Niladri080/Product',
    image: '/shopfusion.png',
    featured: false,
  },
  {
    title: 'QuickChat',
    description: 'Built a real-time, event-driven platform with sub-100ms Socket.io messaging, optimized message persistence and read receipts, AI-powered thumbnail generation, and a fully responsive, cross-device user interface.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express','Socket.io','JWT'],
    github: 'https://github.com/Niladri080/Chat-App',
    image: '/QuickChat.png',
    featured: false,
  },
  {
    title: 'Velvet Pour',
    description: 'Designed a sleek, responsive landing page for Velvet Pour using React and GSAP, delivering smooth animations, refined visuals, and an engaging, high-performance user experience.',
    tags: ['React', 'GSAP', 'Tailwind CSS'],
    github: 'https://github.com/Niladri080/gsap-cocktails',
    image: '/Velvet-Pour.png',
    featured: false,
  },
  {
    title: 'AuraLis',
    description: 'AuraLis is a secure AI chatbot built with Clerk authentication and the Gemini API, delivering personalized, real-time conversations through a clean and responsive interface.',
    tags: ['React', 'Framer Motion','Three.js', 'Tailwind CSS','Clerk','Google Gemini API'],
    github: 'https://github.com/Niladri080/AuraLis',
    image: '/Auralis.png',
    featured: false,
  }
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
              className="glass-card overflow-hidden hover-lift group"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Project Visual */}
                <div className="lg:w-2/5 h-48 lg:h-auto overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Project Content */}
                <div className="flex-1 p-8">
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden hover-lift group"
            >
              {/* Project Visual */}
              <div className="h-40 overflow-hidden bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/20">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
