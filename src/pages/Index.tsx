import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
