import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      
      gsap.fromTo(words, 
        { opacity: 0.2, color: "#4b5563" },
        {
          opacity: 1,
          color: "#ffffff",
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: true,
          }
        }
      );
    }
  }, []);

  const text = "Crafting digital experiences for Dell, Microsoft, Pfizer, and GSK. I bring 5+ years of elite web development to the table. Now based in Adelaide, Australia, I am seeking Graduate roles and Internships to push the boundaries of what's possible on the web.";
  
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-8">The Story.</h2>
          <h3 ref={textRef} className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight">
            {text.split(' ').map((word, i) => (
              <span key={i} className="word inline-block mr-[0.25em]">{word}</span>
            ))}
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
