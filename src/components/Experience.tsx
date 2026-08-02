import { site } from '../data/content';
import { Icon } from './Icon';

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <div className="text-xs font-bold tracking-[0.3em] text-purple-400">CAREER</div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">Work Experience</h2>
        </div>

        <div className="mb-16 grid gap-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4 text-sm leading-relaxed text-gray-400">
            {site.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div>
            <div className="mb-3 text-xs font-bold tracking-widest text-cyan-400">CORE COMPETENCIES</div>
            <ul className="space-y-2.5">
              {site.about.competencies.map((c) => (
                <li key={c} className="flex gap-2 text-xs leading-relaxed text-gray-400">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative space-y-10 border-l border-white/10 pl-8 sm:pl-10">
          {site.experiences.map((exp) => (
            <div key={`${exp.company}-${exp.period}`} className="relative">
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-[#05060a] bg-gradient-to-br from-cyan-400 to-purple-500 sm:-left-[49px]" />
              <div className="text-xs font-bold tracking-widest text-cyan-400">{exp.period}</div>
              <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">{exp.title}</h3>
              <div className="mt-0.5 text-sm font-semibold text-purple-300">{exp.company}</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{exp.summary}</p>
              <ul className="mt-3 space-y-2">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm leading-relaxed text-gray-400">
                    <Icon name="arrowRight" className="mt-1 h-3 w-3 shrink-0 text-cyan-500" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
