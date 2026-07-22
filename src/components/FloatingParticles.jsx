const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  size: 2 + (i % 4),
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  delay: `${(i % 8) * 0.7}s`,
  duration: `${8 + (i % 6) * 2}s`,
  opacity: 0.15 + (i % 5) * 0.08,
}));

export default function FloatingParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle absolute rounded-full bg-cyan-400"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
