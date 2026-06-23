import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Server, Database } from 'lucide-react';

export default function About() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = x / rect.width - 0.5;
    const yPercent = y / rect.height - 0.5;

    setRotateX(-yPercent * 20); // Tilt up/down
    setRotateY(xPercent * 20);  // Tilt left/right
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const skillProgress = [
    { name: 'Frontend Development (React, Next.js, Redux)', value: 92, icon: <Code2 className="w-4 h-4 text-neon-cyan" /> },
    { name: 'Backend Systems (Node.js, Express, REST APIs)', value: 88, icon: <Server className="w-4 h-4 text-neon-purple" /> },
    { name: 'Databases & Cloud (MongoDB, SQL, Redis)', value: 84, icon: <Database className="w-4 h-4 text-neon-blue" /> },
    { name: 'Problem Solving & DSA (C++, Competitive Programming)', value: 85, icon: <GraduationCap className="w-4 h-4 text-emerald-400" /> }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech) in Computer Science',
      institution: 'Madan Mohan Malaviya University of Technology',
      duration: '2024 - 2028',
      description: 'Specializing in Computer Science & Engineering, with core focus on Algorithms, Web Architectures, Database Systems, and Object-Oriented Software Design.'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10 box-border">
      {/* Visual background element */}
      <div className="absolute top-1/2 left-[-10%] w-[300px] h-[300px] bg-neon-purple/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-display mb-2">
          ABOUT <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">ME</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
      </motion.div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        {/* Left Side: 3D Tilt profile card (Grid 4 cols) */}
        <div className="lg:col-span-4 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[320px] perspective-[1000px]"
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d',
              }}
              className="glass-card hover:glass-card-hover rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden group select-none border border-white/5 shadow-2xl cursor-pointer"
            >
              {/* Highlight spotlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/5 via-transparent to-neon-cyan/10 pointer-events-none group-hover:scale-110 transition-transform duration-700" />

              {/* Avatar Container */}
              <div 
                className="w-40 h-40 rounded-2xl overflow-hidden mb-6 border border-white/10 relative p-[3px] bg-gradient-to-tr from-neon-blue to-neon-purple"
                style={{ transform: 'translateZ(50px)' }}
              >
                <img
                  src="/avatar.png"
                  alt="Hariom Yadav"
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Identity info */}
              <h3 
                className="text-xl font-bold text-white font-display mb-1"
                style={{ transform: 'translateZ(30px)' }}
              >
                Hariom Yadav
              </h3>
              <p 
                className="text-xs text-neon-cyan font-mono mb-4"
                style={{ transform: 'translateZ(20px)' }}
              >
                @hariom_yadav
              </p>

              {/* Short stats */}
              <div 
                className="grid grid-cols-3 gap-2 w-full border-t border-white/5 pt-4 text-xs font-mono"
                style={{ transform: 'translateZ(10px)' }}
              >
                <div>
                  <span className="block text-white font-bold">4+</span>
                  <span className="text-white/40">Projects</span>
                </div>
                <div>
                  <span className="block text-white font-bold">500+</span>
                  <span className="text-white/40">DSA Solved</span>
                </div>
                <div>
                  <span className="block text-white font-bold">CSE</span>
                  <span className="text-white/40">Major</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Bio, Skills indicators, and Education timeline (Grid 8 cols) */}
        <div className="lg:col-span-8 space-y-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white font-display">Professional Summary</h3>
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              I am a highly motivated Computer Science student and MERN Stack Developer. I am passionate about building fast, responsive, and aesthetically outstanding web applications. With expertise in building REST APIs, MongoDB architectures, React/Next.js interfaces, and state-management, I thrive on writing clean, modular, and optimized code.
            </p>
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              Beyond developing full stack applications, I am highly interested in competitive programming and problem-solving, which has helped me build strong foundations in data structures and algorithmic efficiency.
            </p>
          </motion.div>

          {/* Skill Progress Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white font-display">Key Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillProgress.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-white/80 font-medium flex items-center gap-2">
                      {skill.icon}
                      {skill.name}
                    </span>
                    <span className="font-mono text-neon-cyan font-bold">{skill.value}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white font-display">Education</h3>
            <div className="relative border-l border-white/10 pl-6 space-y-10 ml-3">
              {education.map((item, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#030014] border border-neon-cyan flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                  </span>
                  
                  {/* Item Content */}
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-mono font-semibold">
                      {item.duration}
                    </span>
                    <h4 className="text-lg font-bold text-white leading-tight">
                      {item.degree}
                    </h4>
                    <p className="text-white/40 text-xs font-mono">
                      {item.institution}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
