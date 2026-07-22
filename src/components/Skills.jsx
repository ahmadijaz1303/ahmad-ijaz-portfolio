import { skillGroups } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const accentColors = ['border-cyan-500/30', 'border-emerald-500/30', 'border-violet-500/30', 'border-amber-500/30'];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-white/5 bg-white/[0.01] py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools I use to build intelligent systems"
          description="A blend of deep learning frameworks, computer vision libraries, and modern web technologies."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 100} direction={index % 2 === 0 ? 'up' : 'scale'}>
              <div className={`glass-card card-shine hover-lift border-t-2 p-6 ${accentColors[index % accentColors.length]}`}>
                <h3 className="mb-4 text-lg font-semibold text-white">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span
                      key={skill}
                      className="skill-pill rounded-lg border border-white/10 bg-slate-900/50 px-3 py-1.5 font-mono text-xs text-slate-300 hover:border-cyan-500/30 hover:text-cyan-300"
                      style={{ transitionDelay: `${i * 25}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
