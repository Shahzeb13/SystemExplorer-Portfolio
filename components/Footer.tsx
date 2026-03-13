"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-20 bg-background border-t border-outline" id="contact">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: "some" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-16"
      >
        <div className="space-y-8 max-w-sm">
          <h5 className="heading-wide text-lg text-foreground">Establish Link</h5>
          <p className="text-secondary text-xs font-light leading-relaxed">
            Open for collaborations on complex architectural research and system development projects.
          </p>
          <div className="flex flex-wrap gap-8">
            <Link className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors" href="https://www.linkedin.com/in/shahzaib-raza-26baa7343" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            <Link className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors" href="https://github.com/Shahzeb13" target="_blank" rel="noopener noreferrer">Github</Link>
            <Link className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors" href="https://www.instagram.com/mr_imperfectttttt?igsh=MWx3ODdpbWU5NjBwNQ==" target="_blank" rel="noopener noreferrer">Instagram</Link>
          </div>
        </div>
        <div className="text-left md:text-right w-full md:w-auto">
          <div className="font-mono text-[9px] text-foreground/20 uppercase tracking-[0.4em] mb-4">SYSTEM_STATUS: OPERATIONAL</div>
          <div className="font-mono text-[9px] text-foreground/40 uppercase tracking-[0.4em]">
            © 2024 OBSERVER_SYSTEM // REF_ID: 8446-8776
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
