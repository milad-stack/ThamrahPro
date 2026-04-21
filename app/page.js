"use client";

import { useState } from "react";

export default function Page() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      brand: "Thamrah Professional IT",
      heroTitle: "Reliable IT Solutions for Growing Businesses",
      heroText:
        "We provide managed IT services, cybersecurity, cloud solutions, and technical support for businesses in Jordan.",
      cta: "Request a Consultation",
      servicesTitle: "Our Services",
      services: [
        "Managed IT Services",
        "Cybersecurity Solutions",
        "Cloud & Email Services",
        "Technical Support",
        "Network Setup & Support",
        "IT Consulting",
      ],
      contactTitle: "Contact Us",
      contactText: "Let’s discuss your business IT needs.",
      whatsapp: "WhatsApp",
    },
    ar: {
      brand: "ثمرة المهنية لتكنولوجيا المعلومات",
      heroTitle: "حلول تقنية موثوقة لنمو أعمالك",
      heroText:
        "نقدم خدمات تقنية مُدارة، وأمن سيبراني، وحلولاً سحابية، ودعماً فنياً للشركات في الأردن.",
      cta: "اطلب استشارة",
      servicesTitle: "خدماتنا",
      services: [
        "الخدمات التقنية المُدارة",
        "حلول الأمن السيبراني",
        "خدمات السحابة والبريد الإلكتروني",
        "الدعم الفني",
        "إعداد ودعم الشبكات",
        "الاستشارات التقنية",
      ],
      contactTitle: "تواصل معنا",
      contactText: "دعنا نناقش احتياجاتك التقنية.",
      whatsapp: "واتساب",
    },
  };

  const t = content[lang];
  const isArabic = lang === "ar";

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-slate-950 text-white"
    >
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Thamrah Pro Logo"
              className="h-10 w-10 rounded-xl object-cover"
            />
            <div className="font-bold tracking-wide">{t.brand}</div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang("en")}
              className={`rounded-lg px-3 py-1 text-sm ${
                lang === "en" ? "bg-white text-slate-950" : "bg-white/10"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("ar")}
              className={`rounded-lg px-3 py-1 text-sm ${
                lang === "ar" ? "bg-white text-slate-950" : "bg-white/10"
              }`}
            >
              عربي
            </button>
          </div>
        </div>
      </header>

      <section className="px-6 py-24 text-center">
        <h1 className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-5xl font-bold text-transparent">
          {t.heroTitle}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          {t.heroText}
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black"
          >
            {t.cta}
          </a>
        </div>
      </section>

      <section className="px-6 py-20">
        <h2 className="text-center text-3xl font-bold">{t.servicesTitle}</h2>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {t.services.map((service) => (
            <div
              key={service}
              className="rounded-2xl bg-slate-900 p-6 transition hover:scale-105"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">{t.contactTitle}</h2>
        <p className="mt-4 text-slate-400">{t.contactText}</p>
        <p className="mt-4 text-slate-300">info@thamrahpro.com</p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://www.facebook.com/ThamraPro"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:bg-white/10"
          >
            Facebook
          </a>

          <a
            href="https://www.linkedin.com/company/thamrahpro"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <a
        href="https://wa.me/962799150175?text=Hello, I'm interested in your IT services. مرحباً، أود الاستفسار عن خدماتكم التقنية"
        target="_blank"
        rel="noreferrer"
        className={`${isArabic ? "left-6" : "right-6"} fixed bottom-6 rounded-full bg-green-500 px-5 py-3 text-white shadow-xl`}
      >
        {t.whatsapp}
      </a>
    </div>
  );
}