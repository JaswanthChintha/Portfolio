import { SectionReveal } from '@/components/SectionReveal';
import { aboutText, personalInfo } from '@/data/personal';
import { education } from '@/data/education';
import { MapPin, Mail, Phone, Calendar, GraduationCap } from 'lucide-react';

export function About() {
  const currentEdu = education.find((edu) => edu.current);

  return (
    <section id="about" className="py-24 border-t border-themeNeutral-900 bg-themeNeutral-950/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Heading & Paragraphs */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <SectionReveal>
              <p className="section-label">01 // Identity</p>
              <h2 className="section-heading mb-8">About Me</h2>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-6 text-themeNeutral-300 font-light leading-relaxed">
                {aboutText.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Contact & Quick Info */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <SectionReveal delay={0.2}>
              <div className="bg-themeNeutral-900/60 border border-themeNeutral-800 rounded-2xl p-8 space-y-8 sticky top-28">
                
                {/* Profile Photo & Name Badge */}
                <div className="flex items-center gap-4">
                  <img
                    src="/profile.jpg"
                    alt="Jaswanth Chinta"
                    className="w-20 h-20 rounded-2xl object-cover border border-themeNeutral-800 shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-themeNeutral-50 font-display">
                      {personalInfo.shortName}
                    </h3>
                    <p className="text-xs font-mono text-accent-400">
                      {personalInfo.title}
                    </p>
                  </div>
                </div>

                {/* Separator line */}
                <div className="border-t border-themeNeutral-800" />

                {/* Contact Information List */}
                <div>
                  <h3 className="text-xs font-mono font-medium tracking-wider text-themeNeutral-400 uppercase mb-4">
                    Contact Information
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm text-themeNeutral-300">
                      <MapPin size={16} className="text-accent-400 shrink-0" />
                      <span>{personalInfo.location}</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <Mail size={16} className="text-accent-400 shrink-0" />
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-themeNeutral-300 hover:text-accent-400 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <Phone size={16} className="text-accent-400 shrink-0" />
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-themeNeutral-300 hover:text-accent-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Separator line */}
                <div className="border-t border-themeNeutral-800" />

                {/* Quick Academic Facts */}
                <div>
                  <h3 className="text-xs font-mono font-medium tracking-wider text-themeNeutral-400 uppercase mb-4">
                    Quick Facts
                  </h3>
                  <div className="space-y-4">
                    {currentEdu && (
                      <div className="flex items-start gap-3">
                        <GraduationCap size={18} className="text-accent-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-themeNeutral-100">{currentEdu.institution}</p>
                          <p className="text-xs text-themeNeutral-400 mt-0.5">{currentEdu.degree}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-themeNeutral-800 border border-themeNeutral-700 text-themeNeutral-200">
                              <Calendar size={10} />
                              {currentEdu.period}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-accent-950 border border-accent-800/60 text-accent-300">
                              CGPA: {currentEdu.score}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
