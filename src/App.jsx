import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <div className="pointer-events-none fixed inset-0 grid-bg animate-grid-pan" aria-hidden="true" />
      <FloatingParticles />
      <div
        className="pointer-events-none fixed -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-glow animate-orb"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-emerald-500/8 blur-[100px] animate-orb"
        style={{ animationDelay: '-4s' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed top-1/3 -left-32 h-[300px] w-[300px] rounded-full bg-violet-500/8 blur-[90px] animate-orb"
        style={{ animationDelay: '-7s' }}
        aria-hidden="true"
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
