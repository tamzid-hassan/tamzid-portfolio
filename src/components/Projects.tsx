import { motion } from 'motion/react';
import { GlassCard } from './ui/GlassCard';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "GET-FIT",
      description: "An intelligent web app for custom fitness routines and muscle group targeting.",
      tech: ["React", "Vite", "Tailwind CSS"],
      link: "https://get-fit-pro.vercel.app/",
      github: "https://github.com/tamzid-hassan/getFit",
      image: "/images/getfit-project.png"
    },
    {
      title: "Dynamic Blog",
      description: "A complete, full-stack blogging platform with WYSIWYG editing, state management, and user authentication.",
      tech: ["React", "Vite", "Redux Toolkit", "Appwrite", "Tailwind CSS"],
      link: "https://react-blog-app-omega.vercel.app/",
      github: "https://github.com/tamzid-hassan/react-blog-app",
      image: "/images/blog-project.png"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Featured Innovations.</h2>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard hoverEffect className="overflow-hidden group">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-10 md:p-14 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-shadow duration-300"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                      >
                        <Github size={18} /> GitHub
                      </motion.a>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/80 via-black/20 to-transparent" />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
