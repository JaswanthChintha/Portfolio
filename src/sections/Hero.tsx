import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      const offset = 80;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Subtle Hairline Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#A1A1AA_1px,transparent_1px),linear-gradient(to_bottom,#A1A1AA_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* A single quiet layout grid */}
      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col justify-center text-left relative z-10">
        
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-themeNeutral-400 uppercase">
            Available for Internships & Roles · 2027 Grad
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tighter text-themeNeutral-50 max-w-3xl leading-[1.08] mb-6"
        >
          I'm <span className="text-accent-400">{personalInfo.name}</span>. {personalInfo.heroLine}
        </motion.h1>

        {/* Sub-Headline / Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-themeNeutral-300 max-w-2xl font-light leading-relaxed mb-10"
        >
          Specializing in the <span className="text-themeNeutral-100 font-normal">MERN stack</span> and <span className="text-themeNeutral-100 font-normal">AI integration (watsonx.ai, NLP)</span>. B.Tech Computer Science student at VIT-AP with a focus on building systems that solve practical challenges.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <button
            onClick={handleScrollToProjects}
            className="btn-primary group"
          >
            <span>View Work</span>
            <ArrowDown size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>
          
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <span>Download Resume</span>
            <ArrowUpRight size={16} className="text-themeNeutral-400" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Bottom Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest text-themeNeutral-500 uppercase"
        >
          <span>Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1 h-3 rounded-full bg-themeNeutral-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
