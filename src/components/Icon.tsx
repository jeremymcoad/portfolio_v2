import { iconPaths, type IconName } from '../data/icons';

export function Icon({ name, className = 'w-5 h-5' }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 256 256" fill="currentColor" className={className} aria-hidden="true">
      <path d={iconPaths[name]} />
    </svg>
  );
}
