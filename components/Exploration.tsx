"use client";

import { motion, Variants } from "framer-motion";

export default function Exploration() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-32 px-6 md:px-12 tactical-border border-x-0" id="exploration">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: "some" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground/30">[ 03_RESEARCH_LOGS ]</span>
          <h2 className="heading-wide text-4xl text-foreground mt-4">Exploration Notes</h2>
        </motion.div>
        
        <div className="border-t border-outline">
          {/* Topic 1 */}
          <motion.div variants={itemVariants} className="group flex flex-col md:flex-row items-start md:items-center py-10 border-b border-outline hover:bg-foreground/[0.02] transition-colors px-4">
            <span className="font-mono text-foreground/30 text-xs w-32 shrink-0 group-hover:text-foreground transition-colors">ID: 03.1</span>
            <div className="flex-1 mt-4 md:mt-0">
              <h4 className="heading-wide text-sm text-foreground">Search Engines</h4>
              <p className="text-secondary text-xs mt-2 font-light">Information retrieval, indexing strategies, and semantic vector spaces.</p>
            </div>
            <span className="pill-button px-3 py-1 font-mono text-[8px] text-foreground/40 uppercase tracking-widest mt-4 md:mt-0">ST_PROGRESS</span>
          </motion.div>
          
          {/* Topic 2 */}
          <motion.div variants={itemVariants} className="group flex flex-col md:flex-row items-start md:items-center py-10 border-b border-outline hover:bg-foreground/[0.02] transition-colors px-4">
            <span className="font-mono text-foreground/30 text-xs w-32 shrink-0 group-hover:text-foreground transition-colors">ID: 03.2</span>
            <div className="flex-1 mt-4 md:mt-0">
              <h4 className="heading-wide text-sm text-foreground">Distributed Systems</h4>
              <p className="text-secondary text-xs mt-2 font-light">Consensus protocols, Byzantine fault tolerance, and eventual consistency.</p>
            </div>
            <span className="pill-button px-3 py-1 font-mono text-[8px] text-foreground/40 uppercase tracking-widest mt-4 md:mt-0">ST_ACTIVE</span>
          </motion.div>
          
          {/* Topic 3 */}
          <motion.div variants={itemVariants} className="group flex flex-col md:flex-row items-start md:items-center py-10 border-b border-outline hover:bg-foreground/[0.02] transition-colors px-4">
            <span className="font-mono text-foreground/30 text-xs w-32 shrink-0 group-hover:text-foreground transition-colors">ID: 03.3</span>
            <div className="flex-1 mt-4 md:mt-0">
              <h4 className="heading-wide text-sm text-foreground">Networking</h4>
              <p className="text-secondary text-xs mt-2 font-light">Low-level transport protocols and software-defined perimeters.</p>
            </div>
            <span className="pill-button px-3 py-1 font-mono text-[8px] text-foreground/40 uppercase tracking-widest mt-4 md:mt-0">ST_COMPLETE</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
