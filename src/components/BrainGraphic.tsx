import { brainCategories, type BrainCategory } from '../data/content';

const IMAGE_ASPECT = '1402 / 1122';

export function BrainGraphic({
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
  return (
    <div className="relative w-full" style={{ aspectRatio: IMAGE_ASPECT }}>
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
    </div>
  );
}
