import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const accentStyles = {
  emerald: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-400',
  cyan: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-400',
  violet: 'from-violet-500/20 to-violet-500/5 border-violet-500/20 text-violet-400',
  amber: 'from-amber-500/20 to-amber-500/5 border-amber-500/20 text-amber-400',
  rose: 'from-rose-500/20 to-rose-500/5 border-rose-500/20 text-rose-400',
};

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-y border-white/5 bg-white/[0.01] py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="AI systems I've built"
          description="From award-winning assistive technology to real-time computer vision pipelines."
        />

        {featured && (
          <Reveal direction="scale">
            <article className="glass-card card-shine hover-lift mb-8 overflow-hidden border-emerald-500/20">
              <div className="grid lg:grid-cols-2">
                <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 p-8 lg:p-10">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl animate-pulse-glow" />
                  <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Featured · {featured.category}
                  </span>
                  <h3 className="mt-4 text-3xl font-bold text-white">{featured.title}</h3>
                  <p className="mt-1 text-lg text-emerald-400">{featured.subtitle}</p>
                  <p className="mt-4 text-sm text-slate-500">{featured.period}</p>

                  <div className="mt-8 rounded-xl border border-white/10 bg-slate-950/50 p-4">
                    <p className="font-mono text-xs text-slate-500">Recognition accuracy</p>
                    <p className="mt-1 text-4xl font-bold gradient-text-animated">~95%</p>
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <p className="leading-relaxed text-slate-400">{featured.description}</p>

                  <ul className="mt-6 space-y-2">
                    {featured.highlights.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-slate-400">
                        <span className="text-emerald-400">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.tech.map((t) => (
                      <span key={t} className="skill-pill rounded-md border border-white/10 px-2.5 py-1 font-mono text-xs text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  {featured.github && (
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                    >
                      View on GitHub
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {others.map((project, index) => {
            const accent = accentStyles[project.accent] || accentStyles.cyan;
            return (
              <Reveal key={project.title} delay={index * 100} direction={index % 2 === 0 ? 'up' : 'left'}>
                <article className={`glass-card card-shine hover-lift flex h-full flex-col border bg-gradient-to-br p-6 ${accent}`}>
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">{project.category}</p>
                      <h3 className="mt-1 text-xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-0.5 text-sm opacity-80">{project.subtitle}</p>
                    </div>
                    <span className="shrink-0 text-xs text-slate-500">{project.period}</span>
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

                  <ul className="mt-4 space-y-1.5">
                    {project.highlights.slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-2 text-xs text-slate-500">
                        <span>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="rounded bg-slate-950/40 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-xs font-medium text-cyan-400 hover:text-cyan-300"
                      >
                        GitHub
                        <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
