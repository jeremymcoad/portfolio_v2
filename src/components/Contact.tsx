import { site } from '../data/content';
import { Icon } from './Icon';

const links = [
  { icon: 'mail' as const, label: site.contact.email, href: `mailto:${site.contact.email}`, color: '#f472b6' },
  { icon: 'linkedin' as const, label: 'LinkedIn', href: site.contact.linkedin, color: '#38bdf8' },
  { icon: 'githubLogo' as const, label: 'GitHub', href: site.contact.github, color: '#a78bfa' },
];

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/5 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)' }}
      />
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <div className="text-xs font-bold tracking-[0.3em] text-pink-400">GET IN TOUCH</div>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">Let's build something great.</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-400">
          Open to new opportunities and conversations about product strategy, healthcare technology, and everything in
          between. Reach out any time.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex w-full items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 sm:w-auto"
              style={{ borderColor: `${l.color}55`, color: l.color, background: `${l.color}14` }}
            >
              <Icon name={l.icon} className="h-4 w-4" />
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={`${import.meta.env.BASE_URL}${site.contact.resume}`}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 transition-colors hover:text-white"
        >
          <Icon name="downloadSimple" className="h-4 w-4" />
          DOWNLOAD RESUME
        </a>
      </div>
    </section>
  );
}
