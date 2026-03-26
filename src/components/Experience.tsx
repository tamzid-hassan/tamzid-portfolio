import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlassCard } from './ui/GlassCard';

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      role: "Web Developer",
      company: "Wunderman Thompson Studios",
      period: "Jun 2020 – May 2024",
      description: "Built and shipped digital products from high-traffic web apps on Azure to pixel-perfect HTML5 banners animated with GSAP. Agile sprints, cross-functional teams, and zero missed deadlines."
    },
    {
      role: "Asst. Software Engineer",
      company: "personalVPN",
      period: "Aug 2019 - Apr 2020",
      description: "Developed and integrated features using C# to enhance VPN service reliability and user experience."
    },
    {
      role: ".NET Developer",
      company: "ERP Systems",
      period: "Sep 2018 - Apr 2019",
      description: "Built a full ERP system for a healthcare client from scratch — ASP.NET MVC 5, Entity Framework, Crystal Reports. Optimised SQL queries until the database stopped being the bottleneck."
    },
    {
      role: "Future Innovator",
      company: "Your team?",
      period: "2026 & Beyond",
      description: "Adelaide-based and immediately available for graduate or part-time roles. I bring enterprise-level thinking, a genuine interest in growing, and code I'm not embarrassed to commit."
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // Only apply horizontal scroll on desktop
      mm.add("(min-width: 768px)", () => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scrollWidth = scrollContainer.scrollWidth;
        const amountToScroll = scrollWidth - window.innerWidth;

        gsap.to(scrollContainer, {
          x: -amountToScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${amountToScroll}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="relative md:h-screen bg-transparent overflow-hidden flex items-center py-32 md:py-0">

      {/* Fixed Title (Desktop) / Normal Title (Mobile) */}
      <div className="md:absolute md:top-32 md:left-24 z-10 px-6 md:px-0 mb-12 md:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Proven Performance.</h2>
          <p className="text-xl text-gray-400">Where I've Been. Four years of real work for real clients — here's the short version.</p>
        </motion.div>
      </div>

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className="flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-24 md:pt-70 items-center md:w-max relative z-0"
      >
        {/* Horizontal Timeline Line (Desktop Only) */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 pointer-events-none hidden md:block" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative w-full md:w-[600px] flex-shrink-0"
          >
            {/* Timeline Nodes (Desktop Only) */}
            <div className="absolute top-1/2 -left-8 w-8 h-[2px] bg-white/20 hidden md:block" />
            <div className="absolute top-1/2 -left-2 w-4 h-4 rounded-full bg-black border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] hidden md:block -translate-y-1/2 z-10" />

            <GlassCard hoverEffect className="p-8 md:p-12 h-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-lg md:text-xl text-purple-400 font-medium">{exp.company}</p>
                </div>
                <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 whitespace-nowrap self-start md:self-auto">
                  {exp.period}
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                {exp.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}

        {/* End spacer for horizontal scroll padding */}
        <div className="hidden md:block w-[10vw] md:w-[200px] flex-shrink-0" />
      </div>
    </section>
  );
}
