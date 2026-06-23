import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  icon: React.ReactNode;
  color: string;
}

const experienceData: ExperienceItem[] = [
  {
    role: 'Contributor',
    company: 'GirlScript Summer of Code',
    duration: 'May 2026 - August 2026 (Part-time)',
    description: [
      'Contributed actively to various open-source initiatives and repositories within the program.',
      'Engineered React/Next.js frontend panels, optimized API endpoints, and solved software bugs.',
      'Collaborated with maintainers and other developers to review, improve, and merge pull requests.'
    ],
    icon: <Code className="w-5 h-5" />,
    color: 'from-neon-cyan to-neon-blue'
  }
];

function TimelineCard({ item, idx }: { item: ExperienceItem; idx: number }) {
  return (
    <div className="flex gap-6 relative">
      {/* Connector vertical line (only rendered between nodes, handled by parent, but dots here) */}
      <div className="flex flex-col items-center">
        {/* Node Dot */}
        <div className={`w-10 h-10 rounded-full bg-[#0a0520] border border-white/10 flex items-center justify-center relative z-10 text-white shadow-lg`}>
          {/* Neon pulsating ring */}
          <span className={`absolute inset-0 rounded-full bg-gradient-to-tr ${item.color} opacity-20 animate-ping`} />
          <span className={`absolute inset-0 rounded-full bg-gradient-to-tr ${item.color} opacity-40`} />
          <div className="relative z-10">{item.icon}</div>
        </div>
        {/* Line segment for layout spacing */}
        <div className="w-[2px] flex-grow bg-white/10 mt-2 mb-2" />
      </div>

      {/* Experience Content Box */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: idx * 0.15 }}
        className="glass-card hover:glass-card-hover rounded-2xl p-6 mb-8 text-left border border-white/5 flex-grow relative overflow-hidden"
      >
        {/* Neon top border line */}
        <div className={`absolute top-0 left-0 h-[2px] w-32 bg-gradient-to-r ${item.color}`} />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white font-display leading-snug">{item.role}</h3>
            <span className="text-sm font-mono text-neon-cyan font-semibold">{item.company}</span>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white/50 text-xs font-mono font-medium h-fit w-fit">
            {item.duration}
          </span>
        </div>

        <ul className="space-y-2.5 text-sm text-white/70 leading-relaxed list-none pl-0">
          {item.description.map((bullet, index) => (
            <li key={index} className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-neon-purple/80">
              {bullet}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto relative z-10 box-border">
      {/* Background glowing spot */}
      <div className="absolute top-1/2 left-[-15%] w-[300px] h-[300px] bg-neon-purple/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-display mb-2">
          EXPERIENCE <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">JOURNEY</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="relative pl-2 md:pl-6">
        {/* Continuous background connector line */}
        <div className="absolute left-[21px] md:left-[37px] top-6 bottom-12 w-[2px] bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent opacity-30" />

        {experienceData.map((item, idx) => (
          <TimelineCard key={idx} item={item} idx={idx} />
        ))}
      </div>
    </section>
  );
}
