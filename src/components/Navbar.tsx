import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-1">
          THN<span className="text-purple-400">.</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-shadow duration-300"
        >
          <Download size={16} />
          <span className="hidden sm:inline">Resume</span>
          <a href="/public/documents/Resume - Tamzid Hassan Nabil.pdf" target="_blank" rel="noopener noreferrer" className="absolute inset-0 w-full h-full"></a>
        </motion.button>
      </div>
    </motion.nav>
  );
}
