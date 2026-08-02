import { site } from '../data/content';
import { Icon } from './Icon';

type Job = (typeof site.experiences)[number];
type Milestone = (typeof site.milestones)[number];

type TimelineEntry =
  | { kind: 'job'; sortKey: string; key: string; data: Job }
  | { kind: 'milestone'; sortKey: string; key: string; data: Milestone };

const timeline: TimelineEntry[] = [
  ...site.experiences.map((e) => ({ kind: 'job' as const, sortKey: e.startDate, key: `job-${e.title}`, data: e })),
  ...site.milestones.map((m) => ({ kind: 'milestone' as const, sortKey: m.date, key: `milestone-${m.title}`, data: m })),
].sort((a, b) => b.sortKey.localeCompare(a.sortKey));

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
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

        <div className="relative">
          <div className="absolute inset-y-0 left-4 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-6">
            {timeline.map((entry, i) => (
              <TimelineRow key={entry.key} entry={entry} isRight={i % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({ entry, isRight }: { entry: TimelineEntry; isRight: boolean }) {
  const align = isRight ? 'left' : 'right';
  const content =
    entry.kind === 'job' ? <JobCard job={entry.data} align={align} /> : <MilestoneCard milestone={entry.data} align={align} />;
  const dotSize = entry.kind === 'job' ? 'h-3.5 w-3.5' : 'h-2.5 w-2.5';
  const dotColor = entry.kind === 'job' ? 'bg-gradient-to-br from-cyan-400 to-purple-500' : 'bg-teal-400';

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
      <span
        className={`absolute left-4 top-1.5 -translate-x-1/2 rounded-full border-2 border-[#05060a] md:left-1/2 ${dotSize} ${dotColor}`}
      />
      {isRight ? (
        <>
          <div className="hidden md:block" />
          <div className="pl-10 md:pl-4">{content}</div>
        </>
      ) : (
        <>
          <div className="pl-10 md:pr-4 md:pl-0">{content}</div>
          <div className="hidden md:block" />
        </>
      )}
    </div>
  );
}

function JobCard({ job, align }: { job: Job; align: 'left' | 'right' }) {
  const rightAlign = align === 'right';
  return (
    <div className={rightAlign ? 'md:text-right' : ''}>
      <div className="text-xs font-bold tracking-widest text-cyan-400">{job.period}</div>
      <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">{job.title}</h3>
      <div className="mt-0.5 text-sm font-semibold text-purple-300">{job.company}</div>
      <p className="mt-3 text-sm leading-relaxed text-gray-400">{job.summary}</p>
      <ul className="mt-3 space-y-2">
        {job.highlights.map((h) => (
          <li
            key={h}
            className={`flex gap-2 text-sm leading-relaxed text-gray-400 ${rightAlign ? 'md:flex-row-reverse md:text-right' : ''}`}
          >
            <Icon name="arrowRight" className="mt-1 h-3 w-3 shrink-0 text-cyan-500" />
            {h}
          </li>
        ))}
      </ul>
      <div className={`mt-4 flex flex-wrap gap-2 ${rightAlign ? 'md:justify-end' : ''}`}>
        {job.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function MilestoneCard({ milestone, align }: { milestone: Milestone; align: 'left' | 'right' }) {
  const rightAlign = align === 'right';
  return (
    <div className={`rounded-xl border border-white/10 bg-white/[0.03] p-4 ${rightAlign ? 'md:text-right' : ''}`}>
      <div className="text-[11px] font-bold tracking-widest text-teal-400">{milestone.label}</div>
      <h4 className="mt-1 text-sm font-bold text-white">{milestone.title}</h4>
      <p className="mt-1 text-xs leading-relaxed text-gray-400">{milestone.description}</p>
    </div>
  );
}
