import type { IconName } from '../data/icons';
import { Icon } from './Icon';

const cards: {
  id: string;
  icon: IconName;
  title: string;
  desc: string;
  cta: string;
  href: string;
  color: string;
}[] = [
  {
    id: 'about',
    icon: 'user',
    title: 'About Me',
    desc: 'Get to know me beyond the resume.',
    cta: 'Learn more',
    href: '#hero',
    color: '#38bdf8',
  },
  {
    id: 'work',
    icon: 'briefcase',
    title: 'Work Experience',
    desc: 'My professional journey and impact.',
    cta: 'View experience',
    href: '#experience',
    color: '#a78bfa',
  },
  {
    id: 'projects',
    icon: 'code',
    title: 'Projects',
    desc: "Things I've built and am proud of.",
    cta: 'See projects',
    href: '#projects',
    color: '#2dd4bf',
  },
  {
    id: 'contact',
    icon: 'mail',
    title: 'Contact Me',
    desc: "Let's connect and create something great.",
    cta: 'Get in touch',
    href: '#contact',
    color: '#f472b6',
  },
];

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

export function SummaryCards() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <div className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <a
            key={c.id}
            href={c.href}
            onClick={(e) => scrollTo(e, c.href)}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-white/20"
            style={{ boxShadow: `inset 0 0 0 1px transparent` }}
          >
            <div
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border transition-colors"
              style={{ color: c.color, borderColor: `${c.color}55`, background: `${c.color}14` }}
            >
              <Icon name={c.icon} className="h-5 w-5" />
            </div>
            <div className="mb-2 text-base font-bold tracking-wide text-white">{c.title.toUpperCase()}</div>
            <p className="mb-5 flex-1 text-sm text-gray-400">{c.desc}</p>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide" style={{ color: c.color }}>
              {c.cta.toUpperCase()}
              <Icon name="arrowRight" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-2 sm:hidden">
        {cards.map((c) => (
          <a
            key={c.id}
            href={c.href}
            onClick={(e) => scrollTo(e, c.href)}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4"
          >
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
              style={{ color: c.color, borderColor: `${c.color}55`, background: `${c.color}14` }}
            >
              <Icon name={c.icon} className="h-4 w-4" />
            </div>
            <span className="flex-1 text-sm font-bold tracking-wide text-white">{c.title.toUpperCase()}</span>
            <Icon name="arrowRight" className="h-4 w-4 text-gray-500" />
          </a>
        ))}
      </div>
    </div>
  );
}
