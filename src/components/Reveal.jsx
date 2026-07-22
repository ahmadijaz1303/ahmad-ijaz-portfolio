import useScrollReveal from '../hooks/useScrollReveal';

const directionMap = {
  up: 'reveal-up',
  down: 'reveal-down',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
  none: 'reveal-none',
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as: Tag = 'div',
  ...props
}) {
  const { ref, visible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${directionMap[direction] ?? directionMap.up} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
