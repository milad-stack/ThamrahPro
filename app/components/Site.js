import {
  Building2,
  Store,
  GraduationCap,
  Factory,
  HeartPulse,
  Network,
  ShieldCheck,
  Headset,
  Check,
  Phone,
  MessageCircle,
  ClipboardCheck,
  Mail,
  MapPin,
  Plus,
  ArrowRight,
  ArrowLeft,
  Users,
  FileCheck2,
  KeyRound,
  Scale,
  Languages,
} from 'lucide-react';
import { content, CONTACT } from '../content';
import Header from './Header';
import ContactForm from './ContactForm';

const sectorIcons = {
  enterprise: Building2,
  smb: Store,
  education: GraduationCap,
  manufacturing: Factory,
  healthcare: HeartPulse,
};
const practiceIcons = { infrastructure: Network, security: ShieldCheck, operations: Headset };
const whyIcons = [Users, FileCheck2, KeyRound, Scale, Languages];

function Kicker({ children, light = false }) {
  return <p className={`kicker ${light ? 'text-[#7fd4c4]' : 'text-brand-teal'}`}>{children}</p>;
}

function SectionTitle({ kicker, title, light = false, center = false }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <Kicker light={light}>{kicker}</Kicker>
      <h2 className={`mt-3 text-3xl font-semibold leading-tight md:text-4xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.6c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3v2.4H8v3.2h2.7V22h2.8Z" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M6.94 8.5H4V20h2.94V8.5ZM5.47 7.2a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM20 12.9c0-3.3-1.76-4.83-4.1-4.83-1.9 0-2.74 1.05-3.21 1.79V8.5H9.75c.04.9 0 11.5 0 11.5h2.94v-6.42c0-.34.03-.68.13-.92.27-.68.9-1.39 1.95-1.39 1.37 0 1.92 1.05 1.92 2.59V20H20v-7.1Z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Site({ locale }) {
  const t = content[locale];
  const isAr = locale === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;
  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t.whatsappText)}`;

  return (
    <>
      <Header t={t} />

      <main className="pb-20 lg:pb-0">
        {/* HERO */}
        <section className="relative overflow-hidden bg-navy text-white">
          <div className="circuit-bg absolute inset-0" aria-hidden="true" />
          <img
            src="/symbol-reversed.svg"
            alt=""
            aria-hidden="true"
            className={`pointer-events-none absolute top-1/2 hidden w-[520px] -translate-y-1/2 opacity-[0.06] lg:block ${isAr ? '-left-24' : '-right-24'}`}
          />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
            <div className="max-w-3xl">
              <Kicker light>{t.hero.kicker}</Kicker>
              <h1 className="mt-5 text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-6xl">
                <span className="text-gradient">{t.hero.title}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">{t.hero.text}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  data-service="assessment"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-gradient px-6 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110"
                >
                  {t.hero.cta1}
                  <Arrow className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  {t.hero.cta2}
                </a>
              </div>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
                {t.hero.chips.map((chip) => (
                  <li key={chip} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#7fd4c4]" aria-hidden="true" />
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-b border-hairline bg-white">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-hairline lg:grid-cols-4">
            {t.trust.map(([value, label]) => (
              <div key={value} className="bg-white px-4 py-7 sm:px-6">
                <dt className="text-2xl font-bold text-navy sm:text-3xl">{value}</dt>
                <dd className="mt-1.5 text-sm leading-6 text-slate2">{label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle kicker={t.services.kicker} title={t.services.title} />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.services.practices.map((practice) => {
                const Icon = practiceIcons[practice.icon];
                return (
                  <article key={practice.name} className="rounded-2xl border border-hairline bg-white p-6 sm:p-7">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist text-brand-teal">
                        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <h3 className="text-xl font-semibold text-navy">{practice.name}</h3>
                    </div>
                    <div className="mt-6 space-y-5">
                      {practice.groups.map(([groupName, items]) => (
                        <div key={groupName}>
                          <h4 className="font-semibold text-graphite">{groupName}</h4>
                          <ul className="mt-2 space-y-1.5">
                            {items.map((item) => (
                              <li key={item} className="flex gap-2 text-sm leading-6 text-slate2">
                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTORS */}
        <section id="sectors" className="bg-mist py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle kicker={t.sectors.kicker} title={t.sectors.title} />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.sectors.items.map((sector) => {
                const Icon = sectorIcons[sector.icon];
                return (
                  <article key={sector.name} className="rounded-2xl border border-hairline bg-white p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-navy">{sector.name}</h3>
                    <p className="mt-1 text-sm text-slate2">{sector.sub}</p>
                    <ul className="mt-4 space-y-2 border-t border-hairline pt-4">
                      {sector.points.map((point) => (
                        <li key={point} className="flex gap-2 text-sm leading-6 text-graphite">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
              {/* Sixth tile: invitation for sectors not listed */}
              <a
                href="#contact"
                data-service="assessment"
                className="group flex flex-col justify-between rounded-2xl bg-navy p-6 text-white transition hover:bg-navy-900"
              >
                <div>
                  <h3 className="text-lg font-semibold">{t.offer.kicker}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/80">{t.offer.text}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#7fd4c4]">
                  {t.offer.cta}
                  <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="relative overflow-hidden bg-navy py-20 text-white md:py-24">
          <div className="circuit-bg absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle kicker={t.process.kicker} title={t.process.title} light />
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {t.process.steps.map(([name, text, deliverable], i) => (
                <li key={name} className="flex flex-col rounded-2xl border border-white/15 bg-navy-900 p-6">
                  <span className="text-sm font-bold text-[#7fd4c4]">0{i + 1}</span>
                  <h3 className="mt-2 text-xl font-semibold">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/80">{text}</p>
                  <div className="mt-auto border-t border-white/15 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{t.process.youGet}</p>
                    <p className="mt-1 flex gap-2 text-sm font-medium leading-6">
                      <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#7fd4c4]" aria-hidden="true" />
                      {deliverable}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ENGAGEMENTS (no prices, by design) */}
        <section id="engagements" className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle kicker={t.engagements.kicker} title={t.engagements.title} />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.engagements.items.map((item) => (
                <article key={item.name} className="flex flex-col rounded-2xl border border-hairline p-6 sm:p-7">
                  <h3 className="text-xl font-semibold text-navy">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate2">{item.text}</p>
                  <ul className="mt-5 space-y-2.5">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-6 text-graphite">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    data-service={item.service}
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy px-5 py-3 font-semibold text-navy transition hover:bg-navy hover:text-white"
                  >
                    {item.cta}
                    <Arrow className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate2">{t.engagements.note}</p>
          </div>
        </section>

        {/* WHY */}
        <section id="about" className="bg-mist py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle kicker={t.why.kicker} title={t.why.title} />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {t.why.items.map(([name, text], i) => {
                const Icon = whyIcons[i];
                return (
                  <div key={name} className="rounded-2xl bg-white p-6">
                    <Icon className="h-6 w-6 text-brand-teal" strokeWidth={1.75} aria-hidden="true" />
                    <h3 className="mt-4 font-semibold text-navy">{name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate2">{text}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* FREE ASSESSMENT OFFER */}
        <section className="relative overflow-hidden bg-navy py-16 text-white">
          <div className="circuit-bg absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <Kicker light>{t.offer.kicker}</Kicker>
              <h2 className="mt-3 text-2xl font-semibold leading-snug md:text-3xl">{t.offer.title}</h2>
              <p className="mt-3 leading-7 text-white/80">{t.offer.text}</p>
            </div>
            <a
              href="#contact"
              data-service="assessment"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-navy transition hover:bg-mist"
            >
              {t.offer.cta}
              <Arrow className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <SectionTitle kicker={t.faq.kicker} title={t.faq.title} center />
            <div className="mt-10 divide-y divide-hairline rounded-2xl border border-hairline">
              {t.faq.items.map(([q, a]) => (
                <details key={q} className="group px-5 sm:px-6">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 font-semibold text-navy">
                    {q}
                    <Plus className="faq-icon h-5 w-5 shrink-0 text-brand-teal transition" aria-hidden="true" />
                  </summary>
                  <p className="pb-5 leading-7 text-slate2">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-mist py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionTitle kicker={t.contact.kicker} title={t.contact.title} />
              <p className="mt-4 max-w-md leading-7 text-slate2">{t.contact.text}</p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-teal" aria-hidden="true" />
                  <span className="sr-only">{t.contact.emailLabel}: </span>
                  <a href={`mailto:${CONTACT.email}`} className="font-medium text-navy hover:underline">
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-teal" aria-hidden="true" />
                  <span className="sr-only">{t.contact.phoneLabel}: </span>
                  <a href={`tel:${CONTACT.phoneTel}`} dir="ltr" className="font-medium text-navy hover:underline">
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-brand-teal" aria-hidden="true" />
                  <a href={whatsappHref} target="_blank" rel="noreferrer" className="font-medium text-navy hover:underline">
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-brand-teal" aria-hidden="true" />
                  <span className="sr-only">{t.contact.locationLabel}: </span>
                  <span className="text-graphite">{t.contact.location}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <ContactForm t={t.contact} lang={locale} />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-navy-950 text-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
          <div>
            <img src="/logo.svg" alt={t.legalName} width="176" height="40" className="h-10 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-6">{t.footer.tagline}</p>
            <p className="mt-2 text-sm text-white/60" lang={isAr ? 'en' : 'ar'}>
              {t.legalNameOther}
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {t.nav.map(([href, label]) => (
              <a key={href} href={href} className="hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {[
              ['Facebook', 'https://www.facebook.com/ThamrahPro', FacebookIcon],
              ['LinkedIn', 'https://www.linkedin.com/company/thamrahpro', LinkedinIcon],
              ['Instagram', 'https://instagram.com/thamrahpro', InstagramIcon],
            ].map(([name, href, Icon]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 transition hover:bg-white/10 hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-white/50 sm:px-6">
            © 2026 {t.legalName}. {t.footer.rights}
          </p>
        </div>
      </footer>

      {/* STICKY MOBILE BAR */}
      <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-hairline bg-white text-xs font-semibold text-navy shadow-[0_-4px_16px_rgba(11,47,107,0.08)] lg:hidden">
        <a href={`tel:${CONTACT.phoneTel}`} className="flex flex-col items-center gap-1 py-2.5">
          <Phone className="h-5 w-5" aria-hidden="true" />
          {t.mobileBar.call}
        </a>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 py-2.5 text-[#128C4B]">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          {t.mobileBar.whatsapp}
        </a>
        <a href="#contact" data-service="assessment" className="flex flex-col items-center gap-1 bg-navy py-2.5 text-white">
          <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          {t.mobileBar.assess}
        </a>
      </nav>

      {/* Desktop floating WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className={`fixed bottom-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 lg:flex ${isAr ? 'left-6' : 'right-6'}`}
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>
    </>
  );
}
