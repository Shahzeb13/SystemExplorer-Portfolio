"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-32 px-6 md:px-12 tactical-border border-x-0 bg-background" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] bg-foreground/10 grayscale brightness-75 contrast-125 overflow-hidden">
            <Image 
              src="/profile/1751977982735.png"
              alt="Portrait" 
              fill
              className="object-cover opacity-80 mix-blend-luminosity" 
            />
          </div>
          <div className="absolute -bottom-4 -right-4 p-4 bg-foreground tactical-border font-mono text-[9px] text-background uppercase tracking-widest">
            BIO_SCAN // ID_VERIFIED
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-10"
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground/30">[ 01_THE_EXPLORER ]</span>
            <h2 className="heading-wide text-3xl text-foreground mt-4">Muhammad Shahzeb</h2>
          </div>
          
          <div className="space-y-8 text-secondary font-light leading-relaxed text-sm md:text-base">
            <p>
              Hi! I'm Muhammad Shahzeb, a Full-Stack Developer based in Pakistan. Innovative and skilled full-stack web and mobile app developer with half a year of industry experience and 1 year of hands-on freelancing experience.
            </p>
            <p>
              Proficient in MERN stack, Next.js, and React Native. I build with the intent of creating something that feels less like a tool and more like an instrument—precise, resilient, and inherently intelligent.
            </p>
          </div>
          
          <div className="pt-4 border-t border-outline">
            <span className="font-mono text-[10px] text-foreground/20 uppercase tracking-[0.4em]">Architectural Observer // Log v1.0.4</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
