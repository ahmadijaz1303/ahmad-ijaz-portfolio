import { useEffect, useRef, useState } from 'react';

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -48px 0px',
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { ref, visible };
}
