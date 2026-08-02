import type { BrainCategory } from '../data/content';
import { Icon } from './Icon';

export function CategoryRow({
  cat,
  active,
  onHover,
  side,
}: {
  cat: BrainCategory;
  active: boolean;
  onHover: (id: string | null) => void;
  side: 'left' | 'right';
}) {
  return (
    <div
      className="group relative"
      onMouseEnter={() => onHover(cat.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div
        className={`flex items-start gap-3 rounded-lg px-2 py-1.5 transition-colors ${
          active ? 'bg-white/5' : ''
        } ${side === 'left' ? 'flex-row-reverse text-right' : 'text-left'}`}
      >
        <div
          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition-all"
          style={{
            color: cat.color,
            borderColor: active ? cat.color : 'rgba(255,255,255,0.15)',
            boxShadow: active ? `0 0 14px ${cat.color}80` : 'none',
            background: active ? `${cat.color}1a` : 'transparent',
          }}
        >
          <Icon name={cat.icon} className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <div
            className="text-[13px] font-bold tracking-wide transition-colors"
            style={{ color: active ? cat.color : '#e5e7eb' }}
          >
            {cat.title.toUpperCase()}
          </div>
          <div className="text-xs leading-snug text-gray-400">{cat.blurb}</div>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute top-full z-30 mt-1 w-64 rounded-xl border border-white/10 bg-[#0c0e16]/95 p-3 text-xs leading-relaxed text-gray-300 shadow-xl backdrop-blur transition-all duration-150 ${
          side === 'left' ? 'right-0' : 'left-0'
        } ${active ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'}`}
      >
        {cat.detail}
      </div>
    </div>
  );
}
