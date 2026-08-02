import { useEffect, useState } from 'react';
import { site } from '../data/content';
import { Icon } from './Icon';

export function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const expandedProject = expanded !== null ? site.projects[expanded] : null;

  useEffect(() => {
    if (expanded === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpanded(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [expanded]);

  return (
    <section id="projects" className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <div className="text-xs font-bold tracking-[0.3em] text-teal-400">BUILT &amp; SHIPPED</div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">Featured Projects</h2>
        </div>

        <div className="space-y-8">
          {site.projects.map((p, i) => (
            <article
              key={p.title}
              className="grid gap-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:grid-cols-2"
            >
              <button
                type="button"
                onClick={() => setExpanded(i)}
                aria-label={`Expand image for ${p.title}`}
                className={`group relative aspect-[4/3] cursor-zoom-in text-left ${i % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${p.image}`}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/40 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full border border-white/30 bg-black/60 px-4 py-2 text-xs font-bold tracking-wide text-white backdrop-blur-sm">
                    <Icon name="cornersOut" className="h-4 w-4" />
                    VIEW LARGER
                  </span>
                </div>
              </button>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <div className="text-xs font-bold tracking-widest text-teal-400">{p.period}</div>
                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{p.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  <span className="font-semibold text-gray-300">Impact: </span>
                  {p.impact}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-[11px] font-medium text-teal-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {expandedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setExpanded(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setExpanded(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <Icon name="x" className="h-5 w-5" />
          </button>
          <img
            src={`${import.meta.env.BASE_URL}${expandedProject.image}`}
            alt={expandedProject.title}
            className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
