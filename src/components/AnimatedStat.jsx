import { useEffect, useRef, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

function parseStat(value) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { number: null, suffix: value };
  return { number: parseFloat(match[1]), suffix: match[2] };
}

export default function AnimatedStat({ value, label, className = '' }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.5 });
  const { number, suffix } = parseStat(value);
  const [display, setDisplay] = useState(number === null ? value : `0${suffix}`);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!visible || number === null) return undefined;

    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = Math.round(number * eased);
      setDisplay(`${current}${suffix}`);

      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [visible, number, suffix]);

  return (
    <div ref={ref} className={`glass-card hover-lift p-5 text-center ${className}`}>
      <p className="text-2xl font-bold gradient-text-animated sm:text-3xl">{display}</p>
      <p className="mt-2 text-xs text-slate-500 sm:text-sm">{label}</p>
    </div>
  );
}
