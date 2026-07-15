import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navItems, personalInfo } from '@/data/personal';
import { useScrolled, useActiveSection } from '@/lib/hooks';

export function Navbar() {
  const scrolled = useScrolled(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Track active section for indicator
  const activeSection = useActiveSection(navItems.map(item => item.href.substring(1)));

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      const offset = 80; // height of fixed header
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-themeNeutral-950/80 backdrop-blur-md border-themeNeutral-800/80 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="font-display font-bold text-lg tracking-tight text-themeNeutral-50 flex items-center gap-2 group"
        >
          <span className="text-accent-400 font-mono transition-transform duration-200 group-hover:translate-x-0.5">&lt;</span>
          {personalInfo.shortName}
          <span className="text-accent-400 font-mono transition-transform duration-200 group-hover:-translate-x-0.5">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
          >
            Resume
            <ArrowUpRight size={14} />
          </a>
        </nav>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-themeNeutral-300 hover:text-themeNeutral-50 transition-colors focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[69px] left-0 w-full h-[calc(100vh-69px)] bg-themeNeutral-950 border-t border-themeNeutral-800/80 px-6 py-8 z-35 animate-fade-in flex flex-col justify-between">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xl font-medium tracking-tight py-2 border-b border-themeNeutral-900 transition-colors ${
                  activeSection === item.href.substring(1) ? 'text-accent-400' : 'text-themeNeutral-300'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xl font-medium text-accent-400 py-2"
            >
              Download Resume
              <ArrowUpRight size={18} />
            </a>
          </nav>
          
          <div className="pb-10">
            <p className="text-xs font-mono text-themeNeutral-500 uppercase tracking-widest mb-3">Get in Touch</p>
            <a href={`mailto:${personalInfo.email}`} className="text-sm font-medium text-themeNeutral-300 hover:text-accent-400 transition-colors">
              {personalInfo.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
