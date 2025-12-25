import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { FloatingDock } from '../components/FloatingBar';
import { IconUser, IconLayoutGrid, IconTools, IconBriefcase, IconMail, IconFileText } from '@tabler/icons-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Index = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const links = [
    {
      title: 'About',
      icon: <IconUser className="h-full w-full text-muted-foreground dark:text-foreground" />,
      href: '#about',
    },
    {
      title: 'Projects',
      icon: <IconLayoutGrid className="h-full w-full text-muted-foreground dark:text-foreground" />,
      href: '#projects',
    },
    {
      title: 'Skills',
      icon: <IconTools className="h-full w-full text-muted-foreground dark:text-foreground" />,
      href: '#skills',
    },
    {
      title: 'Experience',
      icon: <IconBriefcase className="h-full w-full text-muted-foreground dark:text-foreground" />,
      href: '#experience',
    },
    {
      title: 'Contact',
      icon: <IconMail className="h-full w-full text-muted-foreground dark:text-foreground" />,
      href: '#contact',
    },
    {
      title: 'Resume',
      icon: <IconFileText className="h-full w-full text-primary-foreground" />,
      href: '/Job2026CvPlac.pdf',
      target: '_blank',
      highlight: true,
      onClick: () => setIsResumeOpen(true),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </main>

      <FloatingDock
        items={links}
        desktopClassName="fixed left-1/2 -translate-x-1/2 bottom-8 z-50"
        mobileClassName="fixed bottom-6 right-6 z-50"
      />

      <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
        <DialogContent className="w-full max-w-5xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>Resume — Niladri Mandal</DialogTitle>
          </DialogHeader>

          <div className="h-[70vh] mt-2">
            <iframe src="/Job2026CvPlac.pdf" title="Resume" className="w-full h-full border-0" />
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Index;
