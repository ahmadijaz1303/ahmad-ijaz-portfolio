import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-cyan-500/5' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <a href="#" className="group flex items-center gap-2 font-semibold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 font-mono text-sm text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
            AI
          </span>
          <span className="hidden sm:inline">{profile.name.split(' ')[0]}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link rounded-lg px-3 py-2 text-sm transition duration-300 ${
                  activeSection === link.href
                    ? 'bg-white/5 text-cyan-300'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 text-sm text-slate-400 transition duration-300 hover:scale-105 hover:text-white"
          >
            GitHub
          </a>
          <a href="#contact" className="btn-primary px-4 py-2 text-sm">
            Get in Touch
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-cyan-500/30 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {menuOpen && (
        <div className="menu-slide border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <ul className="section-container flex flex-col gap-1 py-4">
            {navLinks.map((link, i) => (
              <li key={link.href} style={{ animationDelay: `${i * 50}ms` }}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                className="btn-primary block px-4 py-3 text-center text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
