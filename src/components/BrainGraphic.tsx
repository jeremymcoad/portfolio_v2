import { useEffect, useRef, useState } from 'react';
import { brainCategories, type BrainCategory } from '../data/content';

const IMAGE_RATIO = 1402 / 1122;

export function BrainGraphic({
  activeId,
  onHover,
  onSelect,
  interactive = true,
  fit = 'width',
}: {
  activeId: string | null;
  onHover?: (id: string | null) => void;
  onSelect?: (id: string) => void;
  interactive?: boolean;
  /** "width": size from the parent's width (height derives from ratio), for normal-flow layouts.
   *  "height": fit as large as possible inside the parent's box in BOTH dimensions, for a
   *  parent that has already been stretched to a definite width and height (e.g. a grid row). */
  fit?: 'width' | 'height';
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [measured, setMeasured] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    if (fit !== 'height') return;
    const el = containerRef.current;
    if (!el) return;
    const compute = () => {
      const cw = el.clientWidth;
      const ch = el.clientHeight;
      if (!cw || !ch) return;
      let width = ch * IMAGE_RATIO;
      let height = ch;
      if (width > cw) {
        width = cw;
        height = cw / IMAGE_RATIO;
      }
      setMeasured({ width, height });
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, [fit]);

  const content = (
    <>
      <img
        src={`${import.meta.env.BASE_URL}brain.webp`}
        alt="Illustration of a brain, split into left and right hemispheres"
        className="absolute inset-0 h-full w-full select-none object-contain"
        draggable={false}
      />

      {brainCategories.map((cat: BrainCategory) => {
        const isActive = activeId === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            aria-label={cat.title}
            onMouseEnter={() => interactive && onHover?.(cat.id)}
            onMouseLeave={() => interactive && onHover?.(null)}
            onClick={() => onSelect?.(cat.id)}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            style={{ left: `${cat.pos.x}%`, top: `${cat.pos.y}%`, width: '5%', aspectRatio: '1 / 1' }}
          >
            {isActive && (
              <span
                className="absolute inset-0 rounded-full"
                style={{ border: `1px solid ${cat.color}`, opacity: 0.6 }}
              />
            )}
            <span
              className={`block rounded-full bg-white transition-all ${isActive ? '' : 'animate-pulse-dot'}`}
              style={{
                width: isActive ? '55%' : '40%',
                aspectRatio: '1 / 1',
                border: `2px solid ${cat.color}`,
                boxShadow: `0 0 8px ${cat.color}, 0 0 3px ${cat.color}`,
              }}
            />
          </button>
        );
      })}
    </>
  );

  if (fit === 'height') {
    return (
      <div ref={containerRef} className="relative h-full w-full">
        {measured && (
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: measured.width, height: measured.height }}
          >
            {content}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{ aspectRatio: '1402 / 1122' }}>
      {content}
    </div>
  );
}
