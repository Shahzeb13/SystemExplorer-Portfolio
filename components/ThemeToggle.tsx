"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8 rounded-full bg-white/5 animate-pulse" />;
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-full border border-foreground/10 bg-background hover:bg-foreground/5 transition-colors relative overflow-hidden group"
      aria-label="Toggle Theme"
    >
      <span className={`material-symbols-outlined text-sm text-foreground transition-transform duration-500 flex items-center justify-center`} style={{ height: "20px", width: "20px" }}>
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </motion.button>
  );
}
