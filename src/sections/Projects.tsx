import { SectionReveal } from '@/components/SectionReveal';
import { projects } from '@/data/projects';
import { Github, ExternalLink, HelpCircle } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-themeNeutral-900 bg-themeNeutral-950/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <SectionReveal>
            <p className="section-label">03 // Hand-built Software</p>
            <h2 className="section-heading mb-4">Selected Work</h2>
            <p className="text-themeNeutral-400 font-light leading-relaxed">
              Engineering solutions focusing on functional backend workflows, role-based dashboards, and targeted integration of AI pipelines.
            </p>
          </SectionReveal>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <SectionReveal key={project.id} delay={index * 0.1}>
              <div className="border border-themeNeutral-800 rounded-2xl bg-themeNeutral-900/40 overflow-hidden hover:border-themeNeutral-700/80 transition-all duration-300">
                <div className="p-8 md:p-10">
                  
                  {/* Top: Title, Subtitle, Links */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-themeNeutral-50 font-display">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-accent-400 mt-1 font-mono">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Project external links */}
                    <div className="flex items-center gap-3 shrink-0">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-themeNeutral-850 bg-themeNeutral-800 text-themeNeutral-300 hover:text-themeNeutral-50 hover:border-themeNeutral-600 transition-colors"
                          aria-label={`View GitHub repository for ${project.title}`}
                        >
                          <Github size={14} />
                          <span>Repository</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs text-themeNeutral-500 font-mono">
                          <HelpCircle size={12} />
                          <span>Private Repo</span>
                        </span>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-accent-500 hover:bg-accent-400 text-white transition-colors"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* PAR Grid (Problem, Approach, Result) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 border-y border-themeNeutral-800/60 py-8">
                    
                    {/* Problem */}
                    <div>
                      <h4 className="text-xs font-mono font-semibold tracking-wider text-themeNeutral-400 uppercase mb-3">
                        The Problem
                      </h4>
                      <p className="text-sm text-themeNeutral-300 font-light leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Approach */}
                    <div>
                      <h4 className="text-xs font-mono font-semibold tracking-wider text-themeNeutral-400 uppercase mb-3">
                        The Approach
                      </h4>
                      <p className="text-sm text-themeNeutral-300 font-light leading-relaxed">
                        {project.approach}
                      </p>
                    </div>

                    {/* Result */}
                    <div>
                      <h4 className="text-xs font-mono font-semibold tracking-wider text-themeNeutral-400 uppercase mb-3">
                        The Result
                      </h4>
                      <p className="text-sm text-themeNeutral-300 font-light leading-relaxed">
                        {project.result}
                      </p>
                    </div>

                  </div>

                  {/* Bottom: Tech Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-themeNeutral-500 mr-2">Built with:</span>
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded bg-themeNeutral-800 text-themeNeutral-300 border border-themeNeutral-800 hover:border-themeNeutral-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
