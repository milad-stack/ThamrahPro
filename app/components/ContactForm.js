'use client';
import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { CONTACT } from '../content';

const empty = { name: '', company: '', email: '', phone: '', service: 'assessment', message: '', website: '' };

const fieldClass =
  'w-full rounded-lg border border-hairline bg-white px-4 py-3 text-graphite placeholder:text-slate2 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15';

export default function ContactForm({ t, lang }) {
  const f = t.form;
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  // Any link with data-service (hero, engagement cards, mobile bar) preselects the service.
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('[data-service]');
      if (link) setForm((prev) => ({ ...prev, service: link.getAttribute('data-service') }));
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));
  const serviceLabel = (f.services.find(([v]) => v === form.service) || [, ''])[1];

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, serviceLabel, lang }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('sent');
      setForm(empty);
    } catch {
      setStatus('error');
    }
  };

  const summary = `${f.name}: ${form.name}\n${f.company}: ${form.company}\n${f.email}: ${form.email}\n${form.phone ? `${f.phone}: ${form.phone}\n` : ''}${f.service}: ${serviceLabel}\n\n${form.message}`;

  if (status === 'sent') {
    return (
      <div role="status" className="flex min-h-[360px] flex-col items-center justify-center text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
          <Check className="h-7 w-7" aria-hidden="true" />
        </span>
        <p className="mt-5 max-w-md text-lg leading-8 text-graphite">{f.sent}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium text-graphite">
          {f.name}
          <input name="name" required maxLength={100} value={form.name} onChange={update('name')} className={fieldClass} autoComplete="name" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-graphite">
          {f.company}
          <input name="company" maxLength={150} value={form.company} onChange={update('company')} className={fieldClass} autoComplete="organization" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium text-graphite">
          {f.email}
          <input name="email" type="email" required maxLength={150} value={form.email} onChange={update('email')} className={fieldClass} autoComplete="email" dir="ltr" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-graphite">
          {f.phone}
          <input name="phone" type="tel" maxLength={30} value={form.phone} onChange={update('phone')} className={fieldClass} autoComplete="tel" dir="ltr" />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium text-graphite">
        {f.service}
        <select name="service" value={form.service} onChange={update('service')} className={fieldClass}>
          {f.services.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-graphite">
        {f.message}
        <textarea name="message" required rows={5} maxLength={3000} value={form.message} onChange={update('message')} className={fieldClass} />
      </label>
      {/* Hidden field to catch spam bots; real visitors never see it */}
      <input type="text" name="website" value={form.website} onChange={update('website')} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-lg bg-navy px-6 py-3.5 font-semibold text-white transition hover:bg-navy-900 disabled:cursor-wait disabled:opacity-70"
      >
        {status === 'sending' ? f.sending : f.send}
      </button>
      {status === 'error' ? (
        <div role="alert" className="rounded-lg border border-amber-signal/40 bg-amber-signal/10 p-4 text-sm text-graphite">
          <p>{f.error}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(summary)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-[#25D366] px-4 py-2 font-semibold text-white"
            >
              {f.viaWhatsapp}
            </a>
            <a
              href={`mailto:${CONTACT.email}?subject=${encodeURIComponent('Website inquiry - ' + form.name)}&body=${encodeURIComponent(summary)}`}
              className="rounded-lg border border-navy px-4 py-2 font-semibold text-navy"
            >
              {f.viaEmail}
            </a>
          </div>
        </div>
      ) : null}
    </form>
  );
}
