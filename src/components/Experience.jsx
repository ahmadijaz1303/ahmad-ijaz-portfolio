import { experience } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="section-container py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Professional journey"
        description="From frontend development to production computer vision engineering."
      />

      <div className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-cyan-500/50 before:via-emerald-500/30 before:to-transparent sm:before:left-[23px]">
        {experience.map((job, index) => (
          <Reveal key={job.company + job.role} delay={index * 150} direction="right">
            <article className="relative pl-12 sm:pl-14">
              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-slate-950 transition duration-300 hover:scale-110 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 sm:h-12 sm:w-12">
                <span className="font-mono text-xs font-bold text-cyan-400">{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className="glass-card card-shine hover-lift p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                    <p className="mt-1 text-cyan-400">{job.company}</p>
                  </div>
                  <div className="text-sm text-slate-500 sm:text-right">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="skill-pill rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
