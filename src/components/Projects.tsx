import { site } from '../data/content';

export function Projects() {
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
              <div className={`relative aspect-[4/3] ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img src={`${import.meta.env.BASE_URL}${p.image}`} alt={p.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

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
    </section>
  );
}
