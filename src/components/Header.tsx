import { useEffect, useRef, useState } from 'react';
import { nav, site } from '../data/content';
import { Icon } from './Icon';

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('#hero');
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Android Chrome's URL bar auto-hides on scroll by resizing the *visual*
  // viewport while leaving the *layout* viewport (what position:fixed's
  // "top:0" is anchored to) unchanged. That desync is what clips a pinned
  // header at the top. Compensating with visualViewport.offsetTop keeps the
  // header aligned to what's actually visible as the toolbar animates.
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv || !headerRef.current) return;
    const update = () => {
      if (headerRef.current) {
        headerRef.current.style.transform = `translateY(${vv.offsetTop}px)`;
      }
    };
    update();
    vv.addEventListener('resize', update);
    vv.addEventListener('scroll', update);
    return () => {
      vv.removeEventListener('resize', update);
      vv.removeEventListener('scroll', update);
    };
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => setHeaderHeight(entries[0].contentRect.height));
    observer.observe(el);
    return () => observer.disconnect();
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
    <>
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05060a] [will-change:transform]"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="group pl-2 sm:pl-4">
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
      <div style={{ height: headerHeight }} aria-hidden="true" />
    </>
  );
}
