import { motion } from 'motion/react';
import { GlassCard } from './ui/GlassCard';
import { Code2, Palette, Database } from 'lucide-react';

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">My Stack.</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto"> The tools I reach for first.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard hoverEffect className="p-8 h-full flex flex-col">
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-6 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                <Code2 size={28} />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Core</h3>
              <p className="text-gray-400 mb-6 flex-grow">The foundation of robust applications.</p>
              <div className="flex flex-wrap gap-2">
                {['ReactJS', 'JavaScript', 'C#', 'ASP.NET'].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard hoverEffect className="p-8 h-full flex flex-col">
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-6 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              >
                <Palette size={28} />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Motion & UI</h3>
              <p className="text-gray-400 mb-6 flex-grow">Crafting breathtaking user interfaces.</p>
              <div className="flex flex-wrap gap-2">
                {['Tailwind CSS', 'GSAP', 'Framer Motion', 'HTML5', 'CSS3'].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassCard hoverEffect className="p-8 h-full flex flex-col">
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-6 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                <Database size={28} />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Tools & Ecosystem</h3>
              <p className="text-gray-400 mb-6 flex-grow">Managing data and content at scale.</p>
              <div className="flex flex-wrap gap-2">
                {['MSSQL', 'MySQL', 'AEM', 'WordPress', 'Git'].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
