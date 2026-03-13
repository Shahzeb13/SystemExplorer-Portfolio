"use client";


import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  // Stagger variants for the main content
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // Apple-like smooth ease out
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: "some" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-50%]"
        >
          <Image 
            src="/images/hero-image.png" 
            alt="Hero Background" 
            fill
            priority
            className="object-cover opacity-15 dark:opacity-40 select-none mix-blend-multiply dark:mix-blend-normal"
          />
        </motion.div>
        {/* Adds a slight gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </motion.div>
      
      <div className="max-w-4xl w-full relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: "some" }}
          className="space-y-6"
        >
          <motion.span 
            variants={itemVariants}
            className="font-mono text-[10px] uppercase tracking-[0.6em] text-foreground/50 block mb-4"
          >
            [ MISSION_LOG_01 ]
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="heading-wide text-4xl md:text-7xl text-foreground leading-tight drop-shadow-lg"
          >
            Hi! I'm Muhammad Shahzeb<br/>
            <span className="text-2xl md:text-4xl text-foreground/80 block mt-4">Full-Stack Developer based in Pakistan.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-foreground/80 text-sm md:text-base font-light leading-relaxed max-w-xl mt-8 drop-shadow-md"
          >
            Innovative and skilled full-stack web and mobile app developer with half a year of industry experience and 1 year of hands-on freelancing experience. Proficient in the MERN stack, Next.js, and React Native.
          </motion.p>
          
          <motion.div variants={itemVariants} className="pt-12">
            <a className="inline-flex items-center group" href="#projects">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "var(--color-foreground)", color: "var(--color-background)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="pill-button flex items-center gap-3 px-8 py-4 bg-transparent text-foreground font-mono text-[11px] uppercase tracking-[0.3em] border border-foreground/20 backdrop-blur-sm"
              >
                <span className="material-symbols-outlined text-sm group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                <span>View My Work</span>
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
