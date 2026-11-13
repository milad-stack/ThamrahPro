'use client';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export default function Header({ t }) {
  const [open, setOpen] = useState(false);
  const isAr = t.lang === 'ar';

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href={isAr ? '/ar' : '/'} className="shrink-0" aria-label={t.legalName}>
          <img src="/logo-color.svg" alt={t.legalName} width="176" height="40" className="h-9 w-auto sm:h-10" />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-graphite lg:flex">
          {t.nav.map(([href, label]) => (
            <a key={href} href={href} className="transition hover:text-brand-blue">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={t.otherLangHref}
            hrefLang={isAr ? 'en' : 'ar'}
            lang={isAr ? 'en' : 'ar'}
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-navy transition hover:bg-mist"
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            <span className={isAr ? 'font-sans' : 'font-arabic'}>{t.otherLangLabel}</span>
          </a>
          <a
            href="#contact"
            data-service="assessment"
            className="hidden rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-900 sm:inline-block"
          >
            {t.navCta}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-hairline text-navy lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-menu" className="border-t border-hairline bg-white px-4 py-3 lg:hidden">
          {t.nav.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium text-graphite hover:bg-mist"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            data-service="assessment"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-navy px-3 py-3 text-center text-base font-semibold text-white"
          >
            {t.navCta}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
