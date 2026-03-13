import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="flex items-center bg-background/40 backdrop-blur-xl p-6 justify-between border-b border-foreground/5 sticky top-0 z-[60]">
      <Link href="/" className="flex items-center gap-4 group">
        <span className="material-symbols-outlined text-foreground text-lg group-hover:rotate-90 transition-transform duration-500">radio_button_checked</span>
        <h2 className="font-mono text-xs font-light uppercase tracking-[0.3em] text-foreground">System.Explorer</h2>
      </Link>
      <nav className="hidden md:flex gap-10 items-center">
        <Link className="font-mono text-[10px] uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors" href="#about">About</Link>
        <Link className="font-mono text-[10px] uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors" href="#projects">Projects</Link>
        <Link className="font-mono text-[10px] uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors" href="#contact">Contact</Link>
        <ThemeToggle />
      </nav>
      {/* Mobile mapping for the toggle could go here, for now placing it visibly for small screens */}
      <div className="md:hidden">
        <ThemeToggle />
      </div>
    </header>
  );
}
