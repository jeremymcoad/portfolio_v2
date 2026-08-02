import { useState } from 'react';
import { brainCategories, site } from '../data/content';
import { BrainSvg } from './BrainSvg';
import { CategoryRow } from './CategoryRow';
import { Icon } from './Icon';
import { SummaryCards } from './SummaryCards';

export function Hero() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [tapped, setTapped] = useState<string | null>(null);

  const leftCats = brainCategories.filter((c) => c.side === 'left');
  const rightCats = brainCategories.filter((c) => c.side === 'right');
  const tappedCat = brainCategories.find((c) => c.id === tapped);

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
      <div
        className="pointer-events-none absolute left-1/2 top-40 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
      />

      {/* Desktop / large tablet layout */}
      <div className="mx-auto hidden max-w-7xl px-8 lg:block">
        <div className="grid grid-cols-[300px_1fr] items-center gap-10 xl:grid-cols-[340px_1fr]">
          <div>
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white xl:text-6xl">
              {site.hero.eyebrow}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {site.hero.highlight}
              </span>
            </h1>
            <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-400">{site.hero.tagline}</p>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-7 inline-block rounded-lg border border-cyan-400/50 px-5 py-2.5 text-xs font-bold tracking-widest text-cyan-300 transition-colors hover:bg-cyan-400/10"
            >
              EXPLORE MY WORLD
            </a>
          </div>

          <div className="grid grid-cols-[minmax(180px,240px)_minmax(280px,360px)_minmax(180px,240px)] items-center gap-3 xl:gap-6">
            <div>
              <div className="mb-4 text-right">
                <div className="text-sm font-black tracking-widest text-blue-400">LEFT BRAIN</div>
                <div className="text-[10px] font-semibold tracking-wide text-gray-500">LOGIC · ANALYTICAL · STRUCTURE</div>
              </div>
              <div className="flex flex-col gap-1.5">
                {leftCats.map((c) => (
                  <CategoryRow key={c.id} cat={c} active={hovered === c.id} onHover={setHovered} side="left" />
                ))}
              </div>
            </div>

            <div className="mx-auto aspect-square w-full max-w-[360px]">
              <BrainSvg activeId={hovered} onHover={setHovered} />
            </div>

            <div>
              <div className="mb-4">
                <div className="text-sm font-black tracking-widest text-purple-400">RIGHT BRAIN</div>
                <div className="text-[10px] font-semibold tracking-wide text-gray-500">CREATIVE · INTUITIVE · IMAGINATION</div>
              </div>
              <div className="flex flex-col gap-1.5">
                {rightCats.map((c) => (
                  <CategoryRow key={c.id} cat={c} active={hovered === c.id} onHover={setHovered} side="right" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs tracking-wide text-gray-500">HOVER OR CLICK THE DOTS TO EXPLORE</p>
      </div>

      {/* Mobile / small tablet layout */}
      <div className="mx-auto max-w-md px-5 text-center lg:hidden">
        <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
          {site.hero.eyebrow}{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {site.hero.highlight}
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-xs text-sm text-gray-400">{site.hero.tagline}</p>

        <div className="relative mx-auto mt-8 aspect-square w-full max-w-[320px]">
          <BrainSvg activeId={tapped} onSelect={(id) => setTapped((cur) => (cur === id ? null : id))} interactive={false} />
          {brainCategories.map((c) => (
            <button
              key={c.id}
              aria-label={c.title}
              onClick={() => setTapped((cur) => (cur === c.id ? null : c.id))}
              className="absolute h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ left: `${(c.pos.x / 256) * 100}%`, top: `${(c.pos.y / 256) * 100}%` }}
            />
          ))}
        </div>

        <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-semibold tracking-wide text-gray-500">
          <Icon name="arrowRight" className="h-3 w-3 rotate-[-45deg]" />
          TAP A DOT TO EXPLORE
        </p>

        <div
          className={`mt-5 overflow-hidden rounded-xl border text-left transition-all duration-300 ${
            tappedCat ? 'max-h-40 border-white/15 bg-white/[0.04] p-4 opacity-100' : 'max-h-0 border-transparent p-0 opacity-0'
          }`}
        >
          {tappedCat && (
            <>
              <div className="flex items-center gap-2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-md border"
                  style={{ color: tappedCat.color, borderColor: `${tappedCat.color}55`, background: `${tappedCat.color}14` }}
                >
                  <Icon name={tappedCat.icon} className="h-4 w-4" />
                </div>
                <div className="text-sm font-bold tracking-wide" style={{ color: tappedCat.color }}>
                  {tappedCat.title.toUpperCase()}
                </div>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-gray-300">{tappedCat.detail}</p>
            </>
          )}
        </div>
      </div>

      <div className="mt-14 sm:mt-16">
        <SummaryCards />
      </div>
    </section>
  );
}
