import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Activity, BarChart2 } from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  gitUrl: string;
  icon: React.ReactNode;
}

const projectsData: Project[] = [
  {
    title: 'Smart Health Predictor',
    description: 'An AI-powered diagnostic platform that utilizes machine learning and user symptoms to evaluate potential health risks, complete with biological metric charts and dietary suggestion matrices.',
    image: '/project-health.png',
    tags: ['React.js', 'Node.js', 'MongoDB', 'TensorFlow', 'Tailwind'],
    demoUrl: 'https://github.com/HariomYadav-sudo',
    gitUrl: 'https://github.com/HariomYadav-sudo',
    icon: <Activity className="w-5 h-5 text-emerald-400" />
  },
  {
    title: 'Stocker - Trading Terminal',
    description: 'A mock-trading dashboard that displays real-time candlestick charts and tracks portfolio statistics, allowing users to practice transactions and analyze their investment holdings over time.',
    image: '/project-stocker.png',
    tags: ['React.js', 'Material UI', 'Chart.js', 'WebSockets'],
    demoUrl: 'https://github.com/HariomYadav-sudo',
    gitUrl: 'https://github.com/HariomYadav-sudo',
    icon: <BarChart2 className="w-5 h-5 text-neon-purple" />
  }
];

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = x / rect.width - 0.5;
    const yPercent = y / rect.height - 0.5;

    // Subtle 3D tilt: max 12 degrees
    setRotateX(-yPercent * 12);
    setRotateY(xPercent * 12);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      className="perspective-[1000px] w-full"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setHovered(true)}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
        className={`glass-card rounded-2xl overflow-hidden border border-white/5 relative group cursor-pointer h-full flex flex-col ${
          hovered ? 'glass-card-hover border-neon-cyan/20' : ''
        }`}
      >
        {/* Spot light overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/5 via-transparent to-neon-cyan/5 pointer-events-none group-hover:scale-105 transition-transform duration-700" />

        {/* Project Image Container */}
        <div className="relative w-full aspect-video overflow-hidden border-b border-white/5 bg-[#030014]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          {/* Neon corner tabs */}
          <div className="absolute top-4 left-4 p-2 bg-[#0a0520]/80 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center">
            {project.icon}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-grow text-left">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 border border-white/5 text-white/50 group-hover:border-neon-cyan/25 group-hover:text-neon-cyan transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-glow-cyan transition-all duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-white/60 leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold font-mono px-3.5 py-2 rounded bg-neon-cyan/10 hover:bg-neon-cyan/20 border border-neon-cyan/20 hover:border-neon-cyan/50 text-neon-cyan transition-all duration-300 cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              LIVE DEMO
            </a>

            <a
              href={project.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold font-mono px-3.5 py-2 rounded bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/80 hover:text-white transition-all duration-300 cursor-pointer"
            >
              <GithubIcon />
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10 box-border">
      {/* Background glowing blurs */}
      <div className="absolute top-1/3 left-[-10%] w-[300px] h-[300px] bg-neon-blue/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[300px] h-[300px] bg-neon-purple/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-display mb-2">
          FEATURED <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">PROJECTS</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} project={project} idx={idx} />
        ))}
      </div>
    </section>
  );
}
