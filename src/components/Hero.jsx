import { profile, stats } from '../data/portfolio';
import AnimatedStat from './AnimatedStat';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-16">
      <div className="section-container py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal delay={0}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Open to AI/ML & Computer Vision roles
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-cyan-400">
                {profile.title}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Hi, I&apos;m{' '}
                <span className="gradient-text-animated">{profile.name}</span>
              </h1>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={340}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500">
                BSCS graduate from Riphah International University. Currently building real-time computer
                vision systems at Matrix AE — from YOLO-based vehicle analytics to award-winning sign language
                translation for accessibility.
              </p>
            </Reveal>

            <Reveal delay={420}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  GitHub
                </a>
                <a href={profile.resumePath} download className="btn-ghost">
                  Download Resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                <span>{profile.location}</span>
                <span className="hidden sm:inline">·</span>
                <a href={`mailto:${profile.email}`} className="transition hover:text-cyan-400">
                  {profile.email}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} direction="left" className="hidden lg:block">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 blur-2xl animate-pulse-glow" />
              <div className="glass-card terminal-card relative overflow-hidden p-8 animate-float hover-glow">
                <div className="terminal-scan" />
                <div className="mb-6 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-mono text-xs text-slate-500">llm_service.py</span>
                </div>

                <pre className="overflow-x-auto font-mono text-xs leading-6 text-slate-300">
                  <code className="cursor-blink">{`# Real-time CV pipeline
model = load_tflite("talking_hands.tflite")
cap = cv2.VideoCapture(0)

while cap.isOpened():
    frame = cap.read()
    landmarks = mediapipe.detect(frame)
    prediction = model.predict(landmarks)

    if prediction.confidence > 0.95:
        output = translate_to_text(prediction)
        speak(output)  # Sign → Speech ✓`}</code>
                </pre>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {stats.slice(0, 2).map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-cyan-500/20"
                    >
                      <p className="text-xl font-bold gradient-text-animated">{stat.value}</p>
                      <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-20">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100} direction="scale">
              <AnimatedStat value={stat.value} label={stat.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
