import { useEffect, useState } from 'react';
import { nav, site } from '../data/content';
import { Icon } from './Icon';

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('#hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    setActive(href);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="group">
          <div className="text-lg font-black tracking-wide text-white sm:text-xl">{site.name.toUpperCase()}</div>
          <div className="block whitespace-nowrap text-[10px] font-semibold tracking-tight md:hidden lg:block lg:text-xs lg:tracking-[0.15em]">
            {site.roles.map((r, i) => (
              <span key={r.label}>
                <span style={{ color: r.color }}>{r.label.toUpperCase()}</span>
                {i < site.roles.length - 1 && <span className="text-gray-500">, </span>}
              </span>
            ))}
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative text-sm font-semibold tracking-wide transition-colors ${
                active === item.href ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label.toUpperCase()}
              {active === item.href && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-400 to-purple-500" />
              )}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
        >
          <Icon name={open ? 'x' : 'list'} className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#05060a] px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block rounded-lg px-3 py-3 text-sm font-semibold tracking-wide ${
                    active === item.href ? 'bg-white/10 text-white' : 'text-gray-400'
                  }`}
                >
                  {item.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
