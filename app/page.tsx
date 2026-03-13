import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Exploration from "@/components/Exploration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-body selection:bg-white selection:text-black overflow-x-hidden">
      {/* Grainy Texture Overlay */}
      <div className="fixed inset-0 grainy-bg z-50 pointer-events-none"></div>
      
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1">
          <Hero />
          <About />
          <Stack />
          <Projects />
          <Exploration />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
