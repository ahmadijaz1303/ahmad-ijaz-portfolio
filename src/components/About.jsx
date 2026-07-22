import { profile, interests } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="section-container py-24">
      <SectionHeading
        eyebrow="About Me"
        title="Turning research into real-world AI impact"
        description="I specialize in building end-to-end machine learning systems — from data pipelines and model training to real-time deployment."
      />

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal direction="right">
          <div className="glass-card card-shine hover-lift p-8">
            <p className="text-lg leading-relaxed text-slate-300">{profile.summary}</p>

            <div className="mt-8 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                What drives my work
              </h3>
              <ul className="space-y-3 text-slate-400">
                {[
                  { color: 'text-cyan-400', bold: 'Accessibility-first AI', text: 'my FYP "Talking Hands" bridges communication gaps for the deaf community using Pakistan Sign Language.' },
                  { color: 'text-emerald-400', bold: 'Production-grade CV', text: 'building YOLO-based detection, tracking, and analytics systems in professional internship environments.' },
                  { color: 'text-violet-400', bold: 'Full-stack ML pipelines', text: 'from Jupyter notebooks and model training to TFLite deployment and React frontends.' },
                ].map((item, i) => (
                  <Reveal key={item.bold} delay={i * 100} direction="right">
                    <li className="flex gap-3">
                      <span className={`mt-1 ${item.color}`}>→</span>
                      <span>
                        <strong className="text-white">{item.bold}</strong> — {item.text}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={120} direction="left">
            <div className="glass-card hover-lift p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                Areas of Interest
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((item, i) => (
                  <span
                    key={item}
                    className="skill-pill rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} direction="left">
            <div className="glass-card hover-lift p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                Quick Facts
              </h3>
              <dl className="space-y-3 text-sm">
                {[
                  ['Education', 'BSCS, Riphah University'],
                  ['Current Role', 'CV Engineer Intern @ Matrix AE'],
                  ['Location', profile.location],
                  ['HEC NSCT', '96th Percentile'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <dt className="text-slate-500">{label}</dt>
                    <dd className={`text-right ${label === 'HEC NSCT' ? 'font-medium text-emerald-400' : 'text-slate-300'}`}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
