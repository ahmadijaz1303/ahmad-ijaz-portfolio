import { profile } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const links = [
  { href: `mailto:${profile.email}`, icon: '✉', label: 'Email', value: profile.email, color: 'cyan' },
  { href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: '📞', label: 'Phone', value: profile.phone, color: 'emerald' },
  { href: profile.linkedin, icon: 'in', label: 'LinkedIn', value: 'sheikh-ahmad-ijaz-13q', color: 'violet', external: true },
  { href: profile.github, icon: '</>', label: 'GitHub', value: 'ahmadijaz1303', color: 'amber', external: true },
];

const colorMap = {
  cyan: 'hover:border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
  emerald: 'hover:border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
  violet: 'hover:border-violet-500/30 bg-violet-500/10 text-violet-400',
  amber: 'hover:border-amber-500/30 bg-amber-500/10 text-amber-400',
};

export default function Contact() {
  return (
    <section id="contact" className="section-container py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something intelligent together"
        description="I'm open to AI/ML engineering roles, computer vision projects, and collaborative research opportunities."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal direction="right">
          <div className="glass-card hover-lift p-8">
            <h3 className="text-lg font-semibold text-white">Get in touch</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Whether you have an opportunity, a project idea, or just want to connect about AI and computer vision —
              I&apos;d love to hear from you.
            </p>

            <div className="mt-8 space-y-4">
              {links.map((link, i) => (
                <Reveal key={link.label} delay={i * 80} direction="right">
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition duration-300 hover:translate-x-1 hover:bg-white/[0.04] ${colorMap[link.color].split(' ')[0]}`}
                  >
                    <span className={`flex h-10 w-10 items-center justify-center rounded-lg transition duration-300 group-hover:scale-110 ${colorMap[link.color].split(' ').slice(1).join(' ')}`}>
                      {link.icon}
                    </span>
                    <div>
                      <p className="text-xs text-slate-500">{link.label}</p>
                      <p className="text-sm font-medium text-white">{link.value}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} direction="left">
          <div className="glass-card card-shine hover-lift flex flex-col justify-center p-8 text-center lg:p-12">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-400">Currently</p>
            <h3 className="mt-4 text-2xl font-bold text-white">Computer Vision Engineer Intern</h3>
            <p className="mt-2 text-emerald-400">Matrix AE · Lahore, Pakistan</p>
            <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              Building real-time object detection, tracking, and analytics systems with YOLOv11, ByteTrack, and OpenCV.
            </p>
            <a
              href={`mailto:${profile.email}?subject=AI/ML Opportunity`}
              className="btn-primary mx-auto mt-8 px-8 py-3 text-sm"
            >
              Send an Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
