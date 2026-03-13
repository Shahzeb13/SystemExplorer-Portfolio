"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Update the types to match the new structure, where some have live link and some have github links
type ProjectDetails = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  liveLink?: string;
  githubFrontend?: string;
  githubBackend?: string;
};

const projectsData: ProjectDetails[] = [
  {
    id: "001",
    title: "SpyroInc",
    description: "Corporate platform engineered for high-performance and seamless digital experience.",
    imageSrc: "/projects/spyroInc.png",
    tags: ["NEXT.JS", "REACT"],
    liveLink: "https://www.spyroinc.com/",
  },
  {
    id: "002",
    title: "Lepro Wellness",
    description: "Digital health platform providing wellness services and integrated care solutions.",
    imageSrc: "/projects/LeproWellness.png",
    tags: ["REACT", "FULL-STACK"],
    liveLink: "https://www.leprowellnesscenter.ca/",
  },
  {
    id: "003",
    title: "SolvixCore",
    description: "Technological solutions hub focusing on core system integrations and bespoke infrastructure.",
    imageSrc: "/projects/SolvixCore.png",
    tags: ["NEXT.JS", "TAILWIND"],
    liveLink: "https://www.solvixcore.com/",
  },
  {
    id: "004",
    title: "Nusra Palestine",
    description: "Community-driven front-end platform for outreach and digital connectivity.",
    imageSrc: "/projects/NusraPalestine.png",
    tags: ["FRONTEND", "UI/UX"],
    liveLink: "https://vercal-frontend-eight.vercel.app/",
  },
  {
    id: "005",
    title: "Gaming Oasis",
    description: "Comprehensive gaming platform with a dedicated backend infrastructure and interactive frontend.",
    imageSrc: "/projects/GamingOasis.png",
    tags: ["MERN STACK", "FULL-STACK"],
    githubFrontend: "https://github.com/Primecodia/GamingOasisFrontned.git",
    githubBackend: "https://github.com/Primecodia/GamingOasisBackend.git",
  }
];

export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-32 px-6 md:px-12" id="projects">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div variants={itemVariants} className="max-w-xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground/30">[ 02_DATA_PANELS ]</span>
            <h2 className="heading-wide text-4xl text-foreground mt-4">Project Logs</h2>
          </motion.div>
          <motion.div variants={itemVariants} className="font-mono text-[9px] text-foreground/20 uppercase tracking-widest text-right">
            FILTER: ALL_SYSTEMS<br/>ACTIVE_NODES: {projectsData.length.toString().padStart(2, '0')}
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants} 
              className="bg-surface border border-outline hover:border-foreground/20 shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300 group flex flex-col h-full min-h-[450px] overflow-hidden"
            >
              {/* Image Container with B&W theme */}
              <div className="relative h-48 w-full bg-foreground/10 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden outline outline-1 outline-outline">
                <Image 
                  src={project.imageSrc} 
                  alt={project.title} 
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 mix-blend-luminosity group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
              </div>

              <div className="p-8 flex flex-col flex-1 relative z-20 -mt-6">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[10px] text-foreground/40 group-hover:text-foreground transition-colors">[ {project.id} ]</span>
                  <span className="material-symbols-outlined text-foreground/20 group-hover:text-foreground transition-colors">terminal</span>
                </div>
                
                <h3 className="heading-wide text-lg text-foreground mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-secondary text-xs font-light mb-8 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-6 mt-auto">
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-mono text-[9px] text-foreground/30 uppercase tracking-widest border border-outline px-2 py-1 bg-foreground/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 pt-6 border-t border-outline">
                    {project.liveLink && (
                      <Link 
                        className="font-mono text-[9px] text-foreground/50 uppercase tracking-widest hover:text-foreground transition-colors flex items-center gap-1" 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                        Live System
                      </Link>
                    )}
                    {project.githubFrontend && (
                      <Link 
                        className="font-mono text-[9px] text-foreground/50 uppercase tracking-widest hover:text-foreground transition-colors flex items-center gap-1" 
                        href={project.githubFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-[12px]">code</span>
                        Frontend Repo
                      </Link>
                    )}
                    {project.githubBackend && (
                      <Link 
                        className="font-mono text-[9px] text-foreground/50 uppercase tracking-widest hover:text-foreground transition-colors flex items-center gap-1" 
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-[12px]">database</span>
                        Backend Repo
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
