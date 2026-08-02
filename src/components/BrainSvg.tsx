import { useId } from 'react';
import { brainCategories, type BrainCategory } from '../data/content';

const LEFT_PATH =
  'M88,28A44.05,44.05,0,0,0,44,72v4a52,52,0,0,0-4,94.12h0A51.6,51.6,0,0,0,64,176h7.73A8.18,8.18,0,0,1,80,183.47,8,8,0,0,1,72,192H64a67.48,67.48,0,0,1-15.21-1.73,4,4,0,0,0-4.5,5.55A47.93,47.93,0,0,0,118.51,213a4,4,0,0,0,1.49-3.12V176a32,32,0,0,0-32-32,8,8,0,0,1-8-8.42A8.18,8.18,0,0,1,88.32,128a47.67,47.67,0,0,1,25.48,7.54,4,4,0,0,0,6.2-3.33V43.49a4,4,0,0,0-1.14-2.81A43.85,43.85,0,0,0,88,28Zm8,48a36,36,0,0,1-36,36H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,76V72a8,8,0,0,1,16,0Z';

const RIGHT_PATH =
  'M212,76V72a44,44,0,0,0-74.86-31.31,3.93,3.93,0,0,0-1.14,2.8v88.72a4,4,0,0,0,6.2,3.33A47.67,47.67,0,0,1,167.68,128a8.18,8.18,0,0,1,8.31,7.58,8,8,0,0,1-8,8.42,32,32,0,0,0-32,32v33.88a4,4,0,0,0,1.49,3.12,47.92,47.92,0,0,0,74.21-17.16,4,4,0,0,0-4.49-5.56A68.06,68.06,0,0,1,192,192h-7.73a8.18,8.18,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h8a51.6,51.6,0,0,0,24-5.88v0A52,52,0,0,0,212,76Zm-12,36h-4a36,36,0,0,1-36-36V72a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4a8,8,0,0,1,0,16Z';

export function BrainSvg({
  activeId,
  onHover,
  onSelect,
  interactive = true,
}: {
  activeId: string | null;
  onHover?: (id: string | null) => void;
  onSelect?: (id: string) => void;
  interactive?: boolean;
}) {
  const leftCats = brainCategories.filter((c) => c.side === 'left');
  const rightCats = brainCategories.filter((c) => c.side === 'right');
  const uid = useId();
  const leftGradId = `leftGrad-${uid}`;
  const rightGradId = `rightGrad-${uid}`;
  const brainGlowId = `brainGlow-${uid}`;
  const dotGlowId = `dotGlow-${uid}`;

  return (
    <svg viewBox="0 0 256 256" className="h-full w-full overflow-visible" role="img" aria-label="Illustration of a brain, split into left and right hemispheres">
      <defs>
        <linearGradient id={leftGradId} x1="128" y1="20" x2="128" y2="230" gradientUnits="userSpaceOnUse">
          {leftCats.map((c, i) => (
            <stop key={c.id} offset={i / (leftCats.length - 1)} stopColor={c.color} />
          ))}
        </linearGradient>
        <linearGradient id={rightGradId} x1="128" y1="20" x2="128" y2="230" gradientUnits="userSpaceOnUse">
          {rightCats.map((c, i) => (
            <stop key={c.id} offset={i / (rightCats.length - 1)} stopColor={c.color} />
          ))}
        </linearGradient>
        <filter id={brainGlowId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={dotGlowId} x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <line x1="128" y1="16" x2="128" y2="240" stroke="white" strokeOpacity="0.15" strokeDasharray="2 4" />
      <text x="118" y="14" fill="white" fillOpacity="0.35" fontSize="8" fontWeight="700">
        L
      </text>
      <text x="132" y="14" fill="white" fillOpacity="0.35" fontSize="8" fontWeight="700">
        R
      </text>

      <path d={LEFT_PATH} fill={`url(#${leftGradId})`} filter={`url(#${brainGlowId})`} stroke="white" strokeOpacity="0.25" strokeWidth="0.75" />
      <path d={RIGHT_PATH} fill={`url(#${rightGradId})`} filter={`url(#${brainGlowId})`} stroke="white" strokeOpacity="0.25" strokeWidth="0.75" />

      {brainCategories.map((cat: BrainCategory) => {
        const isActive = activeId === cat.id;
        return (
          <g
            key={cat.id}
            transform={`translate(${cat.pos.x} ${cat.pos.y})`}
            onMouseEnter={() => interactive && onHover?.(cat.id)}
            onMouseLeave={() => interactive && onHover?.(null)}
            onClick={() => onSelect?.(cat.id)}
            className={interactive ? 'cursor-pointer' : ''}
          >
            {isActive && <circle r="11" fill="none" stroke={cat.color} strokeWidth="1" strokeOpacity="0.6" />}
            <circle r={isActive ? 5 : 3.6} fill="white" stroke={cat.color} strokeWidth="2" filter={`url(#${dotGlowId})`} className={isActive ? '' : 'animate-pulse-dot'} />
            <circle r="13" fill="transparent" />
          </g>
        );
      })}
    </svg>
  );
}
