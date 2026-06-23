import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Globe, Flame } from 'lucide-react';

// Reusable animated count component
function AnimatedCounter({ end, duration = 1.5, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

interface AchievementCardProps {
  platform: string;
  badge: string;
  statName: string;
  statVal: number;
  statSuffix: string;
  details: string[];
  link: string;
  glowColor: string;
}

const achievementsData: AchievementCardProps[] = [
  {
    platform: 'LeetCode',
    badge: 'Active Solver',
    statName: 'Questions Solved',
    statVal: 64,
    statSuffix: '+',
    details: [
      'Specialized in Dynamic Programming and Graph Algorithms'
    ],
    link: 'https://leetcode.com/u/RockingHariom',
    glowColor: 'hover:border-amber-500/30 group-hover:shadow-amber-500/10'
  },
  {
    platform: 'CodeChef',
    badge: '2-Star Coder',
    statName: 'Questions Solved',
    statVal: 338,
    statSuffix: '+',
    details: [
      'Maximum Rating: 1466',
      'Consistent division contest participant',
      'Solving data structure challenges'
    ],
    link: 'https://www.codechef.com/users/imhariom25',
    glowColor: 'hover:border-brown-400/30 group-hover:shadow-amber-700/10' // customized brown for chef
  },
  {
    platform: 'HackerRank',
    badge: '3-Star Problem Solving',
    statName: 'C++ Stars',
    statVal: 4,
    statSuffix: ' ★',
    details: [
      '3-Star in Problem Solving',
      '4-Star in C++',
      'Gold badge validation tracker'
    ],
    link: 'https://www.hackerrank.com/profile/imhariom25',
    glowColor: 'hover:border-emerald-500/30 group-hover:shadow-emerald-500/10'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10 box-border">
      {/* Background radial glowing spot */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-neon-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-display mb-2">
          CODING <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">ACHIEVEMENTS</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
      </motion.div>

      {/* Grid of Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievementsData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="group"
          >
            <div className={`glass-card rounded-2xl p-6 text-left border border-white/5 relative overflow-hidden h-full flex flex-col transition-all duration-300 ${item.glowColor}`}>
              {/* Card top edge gradient line */}
              <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-neon-cyan/40 transition-all duration-500" />
              
              {/* Badge Platform Info */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-semibold text-white/40 tracking-wider uppercase">
                  {item.platform}
                </span>
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-neon-cyan group-hover:text-white group-hover:bg-neon-cyan/10 transition-all duration-300">
                  <Award className="w-4 h-4" />
                </div>
              </div>

              {/* Main Rating / Solved Stat */}
              <div className="mb-4">
                <div className="text-3xl font-extrabold text-white font-display flex items-baseline tracking-tight">
                  <AnimatedCounter end={item.statVal} suffix={item.statSuffix} />
                </div>
                <span className="text-xs text-white/50 font-medium font-mono">{item.statName}</span>
              </div>

              {/* Title / Badge Name */}
              <h3 className="text-lg font-bold text-white font-display mb-4 flex items-center gap-2">
                <Flame className="w-4 h-4 text-neon-purple" />
                {item.badge}
              </h3>

              {/* Bullet details */}
              <ul className="space-y-2 text-xs text-white/60 leading-relaxed mb-8 flex-grow list-none pl-0">
                {item.details.map((detail, index) => (
                  <li key={index} className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-neon-cyan/50">
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Action Link Button */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-cyan/40 text-xs font-bold font-mono tracking-wider text-white rounded-lg transition-all duration-300 hover:text-neon-cyan cursor-pointer"
              >
                <Globe className="w-4.5 h-4.5" />
                VIEW CODING PROFILE
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
