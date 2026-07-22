import { profile } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {year} {profile.name}. Built with React & Tailwind CSS.
        </p>
        <div className="flex gap-6 text-sm">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition hover:text-cyan-400">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition hover:text-cyan-400">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="text-slate-500 transition hover:text-cyan-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
