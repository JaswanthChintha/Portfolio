import { SectionReveal } from '@/components/SectionReveal';
import { education, certifications } from '@/data/education';
import { Calendar, GraduationCap, Award, ExternalLink } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 border-t border-themeNeutral-900 bg-themeNeutral-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-6">
            <SectionReveal>
              <p className="section-label">04 // Credentials</p>
              <h2 className="section-heading mb-12">Education</h2>
            </SectionReveal>

            {/* Vertical timeline without glowing dots */}
            <div className="space-y-10 border-l border-themeNeutral-800/80 ml-3 pl-8 relative">
              {education.map((edu, idx) => (
                <SectionReveal key={edu.degree} delay={idx * 0.05} className="relative">
                  {/* Timeline Dot (Subtle gray ring, not glowing) */}
                  <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-themeNeutral-900 border-2 border-themeNeutral-850 flex items-center justify-center text-themeNeutral-400">
                    <GraduationCap size={12} />
                  </span>

                  <div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-accent-400 mb-2">
                      <Calendar size={10} />
                      {edu.period}
                    </span>
                    <h3 className="text-lg font-medium text-themeNeutral-50 font-display">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-themeNeutral-300 mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-xs font-mono text-themeNeutral-500 mt-2">
                      {edu.scoreLabel}: <span className="text-themeNeutral-300">{edu.score}</span>
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications Grid */}
          <div id="certifications" className="lg:col-span-6">
            <SectionReveal>
              <p className="section-label">05 // Validations</p>
              <h2 className="section-heading mb-12">Certifications</h2>
            </SectionReveal>

            {/* Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <SectionReveal key={cert.title} delay={idx * 0.05}>
                  <div className="bg-themeNeutral-900/60 border border-themeNeutral-800 rounded-xl p-5 hover:border-themeNeutral-750 transition-colors h-full flex flex-col justify-between">
                    <div>
                      <Award className="text-accent-400 mb-3" size={18} />
                      <h3 className="text-sm font-medium text-themeNeutral-100 font-display leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-themeNeutral-400 mt-1">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-themeNeutral-850">
                      <span className="text-[10px] font-mono text-themeNeutral-500">
                        {cert.date}
                      </span>
                      {cert.pdfUrl && (
                        <div className="flex items-center gap-3">
                          <a
                            href={cert.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-mono text-accent-400 hover:text-accent-300 flex items-center gap-0.5"
                          >
                            View
                            <ExternalLink size={10} />
                          </a>
                          <span className="text-[10px] text-themeNeutral-800">|</span>
                          <a
                            href={cert.pdfUrl}
                            download
                            className="text-[10px] font-mono text-themeNeutral-400 hover:text-accent-400 transition-colors"
                          >
                            Download
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
