import { SectionReveal } from '@/components/SectionReveal';
import { skillGroups } from '@/data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-themeNeutral-900 bg-themeNeutral-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <SectionReveal>
            <p className="section-label">02 // Technical Capabilities</p>
            <h2 className="section-heading mb-4">Skills & Core Competencies</h2>
            <p className="text-themeNeutral-400 font-light leading-relaxed">
              A structured overview of the languages, tools, frameworks, and cloud architectures I work with. Grouped by domain, representing hands-on project and academic experience.
            </p>
          </SectionReveal>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <SectionReveal
              key={group.category}
              delay={groupIndex * 0.05}
              className="h-full"
            >
              <div className="card-hover h-full flex flex-col justify-between">
                <div>
                  {/* Category Title */}
                  <h3 className="text-sm font-semibold tracking-tight text-themeNeutral-100 mb-4 border-b border-themeNeutral-800 pb-3 flex items-center justify-between">
                    <span>{group.category}</span>
                    <span className="text-[10px] font-mono text-themeNeutral-500 font-normal">
                      [0{groupIndex + 1}]
                    </span>
                  </h3>

                  {/* Skills Tags wrapper */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
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
