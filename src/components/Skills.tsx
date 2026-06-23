import { motion } from 'framer-motion';
import { Layout, Server, Database, Settings } from 'lucide-react';
import SkillsSphere from './3d/SkillsSphere';

const skillCategories = [
  {
    title: 'Frontend Architecture',
    icon: <Layout className="w-5 h-5 text-neon-cyan" />,
    skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Redux', 'Tailwind CSS', 'Material UI']
  },
  {
    title: 'Backend Systems',
    icon: <Server className="w-5 h-5 text-neon-purple" />,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'WebSockets']
  },
  {
    title: 'Databases & Cache',
    icon: <Database className="w-5 h-5 text-neon-blue" />,
    skills: ['MongoDB', 'Mongoose ODM', 'SQL / MySQL', 'Redis']
  },
  {
    title: 'Developer Workflows',
    icon: <Settings className="w-5 h-5 text-emerald-400" />,
    skills: ['Git & GitHub', 'Docker']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10 box-border">
      {/* Background neon blur */}
      <div className="absolute bottom-10 right-[-10%] w-[300px] h-[300px] bg-neon-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-display mb-2">
          TECH <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">STACK</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
      </motion.div>

      {/* Grid Layout: 3D Canvas left, lists right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: 3D Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          <div className="text-center mb-2 font-mono text-xs text-white/40 tracking-wider">
            DRAG TO ROTATE TECH SPHERE
          </div>
          <SkillsSphere />
        </motion.div>

        {/* Right Side: Categorized lists */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card hover:glass-card-hover rounded-xl p-5 border border-white/5 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  {category.icon}
                </div>
                <h3 className="font-bold text-white text-base md:text-lg font-display">
                  {category.title}
                </h3>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-[#07031c] text-white/70 border border-white/10 hover:border-neon-cyan/50 hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
