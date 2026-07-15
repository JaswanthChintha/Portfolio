import { personalInfo } from '@/data/personal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-themeNeutral-900 bg-themeNeutral-950/80">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright info */}
        <p className="text-xs font-mono text-themeNeutral-500 text-center sm:text-left">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>

        {/* Right Side: Back to top / simple links */}
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-themeNeutral-400 hover:text-accent-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-themeNeutral-400 hover:text-accent-400 transition-colors"
          >
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}
