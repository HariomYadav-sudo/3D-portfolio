import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import WorkspaceScene from './3d/WorkspaceScene';

const typingRoles = [
  'React Developer',
  'Node.js Developer',
  'MongoDB Enthusiast',
  'Competitive Programmer'
];

export default function Hero() {
  const [roleText, setRoleText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const currentFullText = typingRoles[roleIdx];

    const tick = () => {
      if (!isDeleting) {
        // Typing characters
        setRoleText(currentFullText.substring(0, roleText.length + 1));
        if (roleText === currentFullText) {
          // Pause at full word, then start deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting characters
        setRoleText(currentFullText.substring(0, roleText.length - 1));
        if (roleText === '') {
          setIsDeleting(false);
          setRoleIdx((prev) => (prev + 1) % typingRoles.length);
        }
      }

      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIdx]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center pt-24 pb-12 px-6 md:px-12 lg:px-24 relative overflow-hidden box-border z-10"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-neon-blue/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-neon-purple/10 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Left side: Bio Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full md:w-[55%] flex flex-col items-start text-left relative z-25"
      >
        <span className="font-mono text-neon-cyan font-semibold text-sm tracking-wider uppercase mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
          MERN STACK PROFESSIONAL
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-4 font-display">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
            Hariom Yadav
          </span>
        </h1>

        <h2 className="text-lg sm:text-xl font-medium text-white/80 tracking-wide mb-6">
          MERN Stack Developer <span className="text-neon-cyan">|</span> Full Stack Web Developer{' '}
          <span className="text-neon-purple">|</span> Problem Solver
        </h2>

        {/* Typing Box */}
        <div className="h-10 flex items-center mb-10 font-mono text-base sm:text-lg text-white/70 bg-white/5 border border-white/10 rounded-md px-4 py-2 w-fit">
          <span className="text-neon-cyan mr-2 font-bold">{`>`}</span>
          <span>{roleText}</span>
          <span className="w-1.5 h-4 bg-neon-cyan ml-1 animate-pulse" />
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm font-semibold rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/30 hover:scale-[1.03] transition-all duration-300 cursor-pointer border-none"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert('Resume download initialized! In production, this links directly to Hariom Yadav\'s Resume PDF.');
            }}
            className="flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-lg border border-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300 cursor-pointer"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </a>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-6 py-3.5 bg-transparent text-white/85 text-sm font-semibold rounded-lg border border-white/10 hover:border-neon-purple/50 hover:text-neon-purple transition-all duration-300 cursor-pointer"
          >
            Contact Me
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Right side: 3D Workspace Scene */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="w-full md:w-[45%] flex items-center justify-center mt-8 md:mt-0 relative z-20"
      >
        <WorkspaceScene />
      </motion.div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs font-mono pointer-events-none">
        <span>SCROLL DOWN</span>
        <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center p-[4px]">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-1.5 bg-neon-cyan rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
