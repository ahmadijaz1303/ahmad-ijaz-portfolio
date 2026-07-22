import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <Reveal>
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-cyan-400">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
