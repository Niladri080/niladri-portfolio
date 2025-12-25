import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Scene3D from './Scene3D.tsx';
import LightPillar from './Hero-background';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [topColor, setTopColor] = useState('#5227FF');
  const [bottomColor, setBottomColor] = useState('#FF9FFC');

  useEffect(() => {
    // derive colors from CSS tokens for better theme consistency
    const root = getComputedStyle(document.documentElement);
    const primary = root.getPropertyValue('--primary').trim(); // e.g. "270 70% 60%"
    const accent = root.getPropertyValue('--accent').trim();

    const parseHslTokens = (token: string) => {
      if (!token) return null;
      const parts = token.split(/\s+/).map((p) => p.replace('%', ''));
      const h = parseFloat(parts[0]) || 270;
      const s = parseFloat(parts[1]) || 70;
      const l = parseFloat(parts[2]) || 60;
      return { h, s, l };
    };

    const hslToHex = (h: number, s: number, l: number) => {
      s /= 100; l /= 100;
      const k = (n: number) => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      const r = Math.round(255 * f(0));
      const g = Math.round(255 * f(8));
      const b = Math.round(255 * f(4));
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    };

    const p = parseHslTokens(primary);
    const a = parseHslTokens(accent);

    if (p) setTopColor(hslToHex(p.h, p.s, Math.min(55, p.l)));
    if (a) setBottomColor(hslToHex(a.h, a.s, Math.max(45, a.l - 10)));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pillar (behind all content) */}
      <div className="absolute inset-0 z-0">
        <LightPillar
          topColor={topColor}
          bottomColor={bottomColor}
          intensity={0.28}
          rotationSpeed={0.12}
          glowAmount={0.0018}
          pillarWidth={2.4}
          pillarHeight={0.32}
          noiseIntensity={0.35}
          pillarRotation={0}
          interactive={false}
          mixBlendMode="normal"
          className="w-full h-full opacity-60"
        />
        {/* Muting overlay to ensure content readability */}
        <div className="absolute inset-0 z-[5] bg-background/70 backdrop-blur-sm pointer-events-none" />
      </div>

      <div className="absolute inset-0 z-10">
        <Scene3D />
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/14 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-primary font-medium mb-4 tracking-wide"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="text-foreground">Niladri </span>
              <span className="text-primary">Mandal</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground mb-4"
            >
              Software Developer / Full Stack Engineer
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg text-muted-foreground/80 max-w-2xl mx-auto lg:mx-0 mb-10"
            >
              I build intelligent, real-time systems that solve complex problems with clean code and scalable design
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium 
                           hover:bg-primary/90 transition-all duration-300 hover:shadow-glow hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-border text-foreground rounded-full font-medium 
                           hover:bg-secondary hover:border-primary/50 transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              {[
                { icon: Github, href: 'https://github.com/Niladri080', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/niladri-mandal-737b53294/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:nilmandal098@example.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-muted-foreground hover:text-primary hover:bg-secondary 
                             rounded-xl transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Developer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Circular portrait — clean, subtle border and soft shadow */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/10 bg-card/10 shadow-glow transition-transform duration-300 hover:scale-105">
                <img
                  src="WhatsApp Image 2025-11-22 at 1.33.21 AM.jpeg"
                  alt="Niladri Mandal - Software Developer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/8 to-transparent pointer-events-none" />
              </div>

              {/* subtle ring */}
              <div className="absolute -inset-0.5 rounded-full border border-primary/8 opacity-80" />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
