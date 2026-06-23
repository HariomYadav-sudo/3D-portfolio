import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const logs = [
  'SYSTEM INITIATING...',
  'ESTABLISHING WEBGL RENDER SYSTEM...',
  'IMPORTING THREE.JS COMPONENT LIBRARIES...',
  'COMPILING SHADERS & STARFIELD PARTICLES...',
  'MOUNTING MERN WORKSPACE MODELLER...',
  'OPTIMIZING LAYOUT RESPONSIVENESS...',
  'SYSTEM SECURE. INITIALIZATION COMPLETE.'
];

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [activeLog, setActiveLog] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    // Map progress to logs
    const logIndex = Math.min(
      Math.floor((progress / 100) * logs.length),
      logs.length - 1
    );
    setActiveLog(logIndex);

    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setVisible(false);
        setTimeout(onComplete, 800); // Allow fadeout animation to complete
      }, 1000);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[999] bg-[#030014] flex flex-col items-center justify-center font-mono overflow-hidden"
        >
          {/* Cyber grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))] pointer-events-none" />

          {/* Loader Content */}
          <div className="w-[90%] max-w-lg p-8 rounded-lg border border-white/5 bg-[#0a0520]/60 backdrop-blur-md relative z-10 box-border">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-neon-cyan animate-pulse" />
                <span className="text-white font-bold text-sm tracking-wider uppercase">HARIOM.SYS v1.0.4</span>
              </div>
              <span className="text-xs text-white/40">SECURE SHELL</span>
            </div>

            {/* Simulated terminal logs */}
            <div className="h-28 flex flex-col justify-end text-left text-xs mb-6 text-white/50 space-y-1.5 overflow-hidden">
              {logs.slice(0, activeLog + 1).map((log, idx) => (
                <div key={idx} className={`${idx === activeLog ? 'text-neon-cyan font-bold' : 'text-white/40'}`}>
                  {idx === activeLog ? '> ' : '✔ '}
                  {log}
                </div>
              ))}
            </div>

            {/* Progress Counter */}
            <div className="flex items-end justify-between mb-2">
              <span className="text-xs text-white/40 font-semibold tracking-wide">INITIALIZATION PROGRESS</span>
              <span className="text-lg text-neon-cyan font-bold tabular-nums">{progress}%</span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan rounded-full"
                style={{ width: `${progress}%` }}
                layoutId="loader-bar"
              />
            </div>

            {/* Matrix code lines indicator */}
            <div className="mt-8 flex justify-between text-[10px] text-white/20">
              <span>CORE TEMP: 34.2°C</span>
              <span>PORT: 3000</span>
              <span>EST_RTT: 12ms</span>
            </div>
          </div>

          {/* Glow spots in corners */}
          <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-neon-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-neon-purple/5 rounded-full filter blur-[120px] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
