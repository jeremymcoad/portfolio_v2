import { useEffect, useRef, useState } from 'react';
import { brainCategories, site } from '../data/content';
import { BrainGraphic } from './BrainGraphic';
import { CategoryRow } from './CategoryRow';
import { Icon } from './Icon';
import { SummaryCards } from './SummaryCards';

export function Hero() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [tapped, setTapped] = useState<string | null>(null);
  const infoBoxRef = useRef<HTMLDivElement>(null);

  const leftCats = brainCategories.filter((c) => c.side === 'left');
  const rightCats = brainCategories.filter((c) => c.side === 'right');
  const tappedCat = brainCategories.find((c) => c.id === tapped);

  useEffect(() => {
    if (!tapped) return;
    // Listens for "click" (not pointerdown/mousedown) so it fires in the same event
    // type a dot button's onClick uses — that handler calls stopPropagation when
    // switching to a different dot, which reliably suppresses this listener only
    // when both are the same event type, avoiding a close-then-reopen flash.
    const onClick = (e: MouseEvent) => {
      if (!infoBoxRef.current?.contains(e.target as Node)) {
        setTapped(null);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [tapped]);

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 sm:pt-12">
      <div
        className="pointer-events-none absolute left-1/2 top-40 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
      />

      {/* Desktop / large tablet layout */}
      <div className="mx-auto hidden max-w-[1600px] px-8 lg:block">
        {/* max-w matches SummaryCards' rendered content width (max-w-6xl minus its px-8 padding),
            so the whole About Me section — heading included — lines up with the cards below.
            The centering wrapper is a plain block, not a grid/flex container itself — mx-auto
            directly on a grid/flex container here breaks percentage-width resolution for the
            brain's children. */}
        <div className="mx-auto w-[min(100%,1088px)]">
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
            </div>

            <div className="grid grid-cols-[minmax(140px,200px)_1fr_minmax(140px,200px)] items-stretch gap-3 xl:gap-5">
              <div className="flex flex-col justify-center">
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

              <div className="relative h-full w-full">
                <BrainGraphic activeId={hovered} onHover={setHovered} fit="height" />
              </div>

              <div className="flex flex-col justify-center">
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

        <div className="relative mx-auto mt-8 w-full">
          <BrainGraphic activeId={tapped} onSelect={(id) => setTapped((cur) => (cur === id ? null : id))} interactive={false} />

          {/* Overlays the brain instead of pushing content below it, so exploring a
              category never requires scrolling. Dismissed by the document click
              listener above when tapping anywhere outside this box. */}
          <div
            ref={infoBoxRef}
            className={`absolute inset-x-3 bottom-3 z-20 rounded-xl border p-4 text-left shadow-xl backdrop-blur-md transition-all duration-300 ${
              tappedCat
                ? 'translate-y-0 border-white/15 bg-[#05060a]/90 opacity-100'
                : 'pointer-events-none translate-y-2 border-transparent bg-[#05060a]/0 opacity-0'
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

        <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-semibold tracking-wide text-gray-500">
          <Icon name="arrowRight" className="h-3 w-3 rotate-[-45deg]" />
          TAP A DOT TO EXPLORE
        </p>
      </div>

      <div className="mt-14 sm:mt-16">
        <SummaryCards />
      </div>
    </section>
  );
}
