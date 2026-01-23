import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Rocket, Heart, Award } from 'lucide-react';
const aboutIntro = `
I'm Niladri — a software engineer who builds systems that think, talk, and work in real time.

Right now, I'm in my final year of Computer Science at Lovely Professional University with a CGPA of 8.59, and actively shaping ideas into deployed products through my internships at CodeFlare Labs and AlgoUniversity. I've solved 500+ DSA problems, explored Generative AI (RAG, vector embeddings, Pinecone, LangChain), and engineered real-time experiences using WebRTC and Socket.io.

My work spans AI-driven platforms like BodyX, where I combined computer vision (MediaPipe, OpenCV) with LLM feedback, and integrated premium monetization through Razorpay and Razorpay-like payment flows. I deploy full-stack apps on AWS and GCP using Docker, Kubernetes, and CI/CD pipelines (GitHub Actions).

I care deeply about clean, maintainable code, thoughtful architecture, and building scalable systems that solve real problems — with a constant appetite for learning what's next in tech.
`;

const highlights = [
  {
    icon: Code2,
    title: 'Crafts Clean Code',
    description: 'I write code like prose — clear, structured, and built to be understood by humans first.',
  },
  {
    icon: Lightbulb,
    title: 'DSA Problem Crusher',
    description: '500+ problems solved across platforms. 400+ on LeetCode with strong optimization focus.',
  },
  {
    icon: Rocket,
    title: 'Real-Time Systems Engineer',
    description: 'Built live platforms with WebRTC, Socket.io, and AI feedback loops. Deploy-ready always.',
  },
  {
    icon: Award,
    title: 'Graph Challenge Winner',
    description: 'Secured 3rd place in AlgoUniversity’s competitive graph problem-solving challenge.',
  },
  {
    icon: Award,
    title: 'AI Builder',
    description: 'Created RAG systems, posture-aware fitness feedback, resume scoring, and vector DB workflows.',
  }
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
            {aboutIntro.trim().split('\n\n').map((para, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
