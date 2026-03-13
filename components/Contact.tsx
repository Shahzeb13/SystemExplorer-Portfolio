"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const loadingToast = toast.loading("TRANSMITTING_DATA...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "TRANSMISSION_FAILED");
      }

      toast.success("LINK_ESTABLISHED", { id: loadingToast });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      toast.error(error.message || "SYSTEM_ERROR", { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section className="py-32 px-6 md:px-12 tactical-border border-x-0" id="contact">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: "some" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground/30">[ 04_COMM_LINK ]</span>
          <h2 className="heading-wide text-4xl text-foreground mt-4">Establish Link</h2>
          <p className="text-secondary text-xs mt-4 font-light">Open for collaborations on complex architectural research and system development projects.</p>
        </motion.div>

        <motion.form variants={itemVariants} className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">Observer ID [Name]</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-surface shadow-sm border border-outline p-4 text-sm font-mono text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Enter Name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">Comms Channel [Gmail]</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-surface shadow-sm border border-outline p-4 text-sm font-mono text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="address@gmail.com"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">Transmission [Message]</label>
            <textarea 
              id="message" 
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-surface shadow-sm border border-outline p-4 text-sm font-mono text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              placeholder="Enter your message here..."
              required
            ></textarea>
          </div>
          
          <div className="pt-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="bg-primary text-white dark:bg-foreground dark:text-background shadow-sm font-mono text-[10px] uppercase tracking-[0.3em] px-10 py-4 w-full md:w-auto hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
            >
              {isSubmitting ? "Transmitting..." : "Transmit Data"}
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
