import { certifications, education } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section id="education" className="border-y border-white/5 bg-white/[0.01] py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Education & Certifications" title="Academic foundation" />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {education.map((item, index) => (
              <Reveal key={item.degree} delay={index * 100} direction="right">
                <article className={`glass-card hover-lift p-6 ${index === 0 ? 'border-cyan-500/20' : ''}`}>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-white">{item.degree}</h3>
                      <p className="mt-1 text-sm text-cyan-400">{item.institution}</p>
                      {item.detail && (
                        <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.detail}</p>
                      )}
                    </div>
                    <span className="shrink-0 font-mono text-xs text-slate-500">{item.period}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} direction="left">
            <div className="glass-card hover-lift p-6">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-500">
                Certifications
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert, i) => (
                  <li key={cert.name} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-xs text-emerald-400 transition hover:scale-110">
                      ✓
                    </span>
                    <div style={{ transitionDelay: `${i * 50}ms` }}>
                      <p className="text-sm font-medium text-white">{cert.name}</p>
                      <p className="text-xs text-slate-500">{cert.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
