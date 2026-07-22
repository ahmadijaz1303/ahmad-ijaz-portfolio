import { achievements } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const icons = ['🏆', '💡', '📊'];

export default function Achievements() {
  return (
    <section id="achievements" className="section-container py-24">
      <SectionHeading
        eyebrow="Achievements"
        title="Recognition & milestones"
        description="Validated by national assessments and inter-university competitions."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {achievements.map((item, index) => (
          <Reveal key={item.title} delay={index * 120} direction="scale">
            <article className="glass-card card-shine hover-lift group h-full p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 text-2xl transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                {icons[index]}
              </div>
              <p className="font-mono text-xs text-cyan-400">{item.year}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-white transition group-hover:text-cyan-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500">{item.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
