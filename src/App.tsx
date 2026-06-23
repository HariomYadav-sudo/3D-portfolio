import { useState, useEffect } from 'react';

// Global Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

// 3D & Particle Backgrounds
import StarsBackground from './components/3d/StarsBackground';
import MouseParticles from './components/3d/MouseParticles';

// Sections
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress for cyber neon top progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Cyber Boot Loader Screen */}
      <Loader onComplete={() => setLoading(false)} />

      {!loading && (
        <div className="relative min-h-screen bg-[#030014] text-white selection:bg-neon-cyan/30 selection:text-white">
          {/* Scroll progress bar */}
          <div className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple z-[999] pointer-events-none" style={{ width: `${scrollProgress}%` }} />

          {/* Background effects */}
          <StarsBackground />
          <MouseParticles />

          {/* Glowing lighting anchors in layout */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-cyan/5 rounded-full filter blur-[150px] pointer-events-none" />
          <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-neon-purple/5 rounded-full filter blur-[150px] pointer-events-none" />
          <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-neon-blue/5 rounded-full filter blur-[150px] pointer-events-none" />

          {/* Main Portfolio Assembly */}
          <Navbar />
          
          <main className="relative w-full overflow-hidden">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
