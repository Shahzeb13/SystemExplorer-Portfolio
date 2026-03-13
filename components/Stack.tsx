"use client";

import { motion, Variants } from "framer-motion";

const techStack = [
  { name: "TypeScript", icon: "code", level: "ADVANCED", id: "01" },
  { name: "MERN Stack", icon: "database", level: "FULL-STACK", id: "02" },
  { name: "React Native", icon: "smartphone", level: "MOBILE", id: "03" },
  { name: "Flutter", icon: "flutter_dash", level: "MOBILE", id: "04" },
  { name: "Next.js", icon: "rocket_launch", level: "PERFORMANCE", id: "05" },
];

export default function Stack() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="py-32 px-6 md:px-12 tactical-border border-x-0" id="stack">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div variants={itemVariants} className="max-w-xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground/50 dark:text-foreground/30">[ 03_TECH_CORE ]</span>
            <h2 className="heading-wide text-4xl text-foreground mt-4">Tech Stack</h2>
            <p className="text-foreground/80 dark:text-secondary text-xs mt-6 font-light leading-relaxed">
              Specialized in high-performance architectures and cross-platform systems development. Integrated tooling for modern digital infrastructure.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="font-mono text-[9px] text-foreground/40 dark:text-foreground/20 uppercase tracking-widest text-right">
            PROTOCOL: STACK_INSPECT<br/>VERIFIED_NODES: {techStack.length.toString().padStart(2, '0')}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1">
          {techStack.map((tech) => (
            <motion.div 
              key={tech.name}
              variants={itemVariants}
              className="group relative p-8 bg-white dark:bg-surface border border-outline hover:bg-gray-50 dark:hover:bg-background hover:border-primary flex flex-col items-center justify-center text-center transition-all duration-300 min-h-[220px]"
            >
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-primary/5 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <span className="font-mono text-[9px] text-foreground/60 dark:text-foreground/20 group-hover:text-primary transition-colors mb-6">[ {tech.id} ]</span>
                <span className="material-symbols-outlined text-4xl text-foreground/70 dark:text-foreground/40 group-hover:text-foreground group-hover:scale-110 transition-all duration-500 mb-6">
                  {tech.icon}
                </span>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-[#1a1a1a] dark:text-foreground font-semibold dark:font-normal mb-2">{tech.name}</h3>
                <span className="font-mono text-[8px] text-foreground/60 dark:text-foreground/30 group-hover:text-primary/60 transition-colors uppercase tracking-widest">{tech.level}</span>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-outline group-hover:border-primary transition-colors"></div>
              <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-outline group-hover:border-primary transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-outline group-hover:border-primary transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-outline group-hover:border-primary transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
