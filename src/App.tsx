import { useScrollProgress } from '@/lib/hooks';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Education } from '@/sections/Education';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { BackToTop } from '@/components/BackToTop';

function App() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="relative min-h-screen selection:bg-accent-500/30 selection:text-accent-100">
      {/* Top thin scroll-progress bar */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress * 100}%` }} 
      />

      {/* Navigation header */}
      <Navbar />

      {/* Main content flow */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer section */}
      <Footer />

      {/* Dynamic back to top trigger */}
      <BackToTop />
    </div>
  );
}

export default App;
