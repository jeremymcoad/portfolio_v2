import { site } from '../data/content';

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center sm:flex-row sm:justify-between sm:px-8">
        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
        <div className="text-xs font-semibold tracking-widest text-gray-600">{site.role.toUpperCase()}</div>
      </div>
    </footer>
  );
}
