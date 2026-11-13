"use client";
import { useEffect, useState } from "react";

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

function ServerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M3 4h18v6H3V4Zm0 10h18v6H3v-6Zm4-7h2v2H7V7Zm0 10h2v2H7v-2Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M12 2 4 5v6c0 5 3.8 9.7 8 11 4.2-1.3 8-6 8-11V5l-8-3Z" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M6 19h11a4 4 0 0 0 0-8 5 5 0 0 0-9.7-1.5A3.5 3.5 0 0 0 6 19Z" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M12 3a9 9 0 0 0-9 9v3h3v-3a6 6 0 1 1 12 0v3h3v-3a9 9 0 0 0-9-9Zm-3 14h6v2H9v-2Z" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M4 10h4v4H4v-4Zm6-6h4v4h-4V4Zm0 12h4v4h-4v-4Zm6-6h4v4h-4v-4Z" />
    </svg>
  );
}

function ConsultingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M3 3h18v12H3V3Zm2 2v8h14V5H5Zm4 10h6v2H9v-2Z" />
    </svg>
  );
}

export default function ThamrahPremium() {
 
		const [lang, setLang] = useState("en");
		const isArabic = lang === "ar";
		const [menuOpen, setMenuOpen] = useState(false);
		const [form, setForm] = useState({ name: "", email: "", company: "", message: "", website: "" });
		const [formStatus, setFormStatus] = useState("idle"); // idle | sending | sent | error

		const updateField = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

		const handleSubmit = async (e) => {
			e.preventDefault();
			setFormStatus("sending");
			try {
				const res = await fetch("/api/contact", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ ...form, lang }),
				});
				if (!res.ok) throw new Error("send failed");
				setFormStatus("sent");
				setForm({ name: "", email: "", company: "", message: "", website: "" });
			} catch {
				setFormStatus("error");
			}
		};

		const inquiryText = `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`;

		useEffect(() => {
			document.documentElement.lang = lang;
			document.documentElement.dir = isArabic ? "rtl" : "ltr";
		}, [lang, isArabic]);

		useEffect(() => {
 		 	const elements = document.querySelectorAll(".reveal");

 			 const observer = new IntersectionObserver(
 				 (entries) => {
     					 entries.forEach((entry) => {
       						 if (entry.isIntersecting) {entry.target.classList.add("revealed");}
									});
						},
    			{ threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
 			 );

 				 elements.forEach((el) => observer.observe(el));

 				 return () => observer.disconnect();
			}, []);


  const content = {
    en: {
      brand: "THAMRAH",
      sub: "Professional IT",
      badge: "Managed IT Services for Modern Businesses",
      heroTitle: "Reliable IT Solutions for Growing Businesses",
      heroText:
        "We provide managed IT services, cybersecurity, and cloud solutions to help businesses in Jordan operate securely and scale with confidence.",
      cta1: "Request a Consultation",
      cta2: "Our Services",
      highlights: [
        "Responsive support",
        "Security-focused approach",
        "Affordable solutions",
        "Serving businesses in Jordan",
      ],
      servicesTitle: "Our Services",
      servicesHeading: "Practical IT services built for business growth",
      servicesText:
        "We help businesses run efficiently with dependable support, secure systems, and scalable technology planning.",
      services: [
        {
          title: "Managed IT Services",
          text: "Proactive support, monitoring, maintenance, and daily IT management for growing businesses.",
        },
        {
          title: "Cybersecurity Solutions",
          text: "Practical protection for devices, users, access, and business data.",
        },
        {
          title: "Cloud & Email Services",
          text: "Modern cloud collaboration, business email, migration, and support.",
        },
        {
          title: "Technical Support",
          text: "Fast response for day-to-day issues so your team can stay productive.",
        },
        {
          title: "Network Setup & Support",
          text: "Reliable network design, setup, monitoring, and troubleshooting.",
        },
        {
          title: "IT Consulting",
          text: "Simple, scalable IT guidance for startups and growing businesses.",
        },
      ],
      aboutTitle: "About Us",
      aboutHeading: "A modern IT company with a professional mindset",
      aboutText:
        "Thamrah Professionals for Information Technology helps businesses build reliable, secure, and practical IT environments that support daily operations and long-term growth.",
      whyTitle: "Why Choose Thamrah",
      whyHeading:
        "Technology support that is accessible, affordable, and business-ready",
      whyText:
        "We focus on practical solutions, responsive communication, and long-term value for startups and growing businesses.",
      trustCards: [
        { number: "01", title: "Client Focused", text: "Solutions aligned with real business needs." },
        { number: "02", title: "Reliable Delivery", text: "Consistent support and dependable service quality." },
        { number: "03", title: "Built to Grow", text: "Support designed to scale as your business expands." },
      ],
      processTitle: "How We Work",
      processHeading: "A clear process that keeps IT simple and manageable",
      process: [
        {
          step: "01",
          title: "Assess",
          text: "We review your business needs, current setup, and technical priorities.",
        },
        {
          step: "02",
          title: "Plan",
          text: "We recommend practical solutions aligned with your budget and goals.",
        },
        {
          step: "03",
          title: "Implement",
          text: "We deploy and improve the systems your business depends on.",
        },
        {
          step: "04",
          title: "Support",
          text: "We stay available with ongoing support, maintenance, and monitoring.",
        },
      ],
      packagesTitle: "Service Packages",
      packagesHeading: "Support plans for different business stages",
      popular: "Most Popular",
      packages: [
        {
          name: "Basic Support",
          subtitle: "For small teams",
          features: ["Help desk support", "Basic monitoring", "Remote assistance", "Monthly reporting"],
          featured: false,
        },
        {
          name: "Professional Plan",
          subtitle: "For growing companies",
          features: ["Managed IT support", "Network support", "Security best practices", "Priority response"],
          featured: true,
        },
        {
          name: "Enterprise Solution",
          subtitle: "For larger needs",
          features: ["Full IT management", "Cloud and email support", "Preventive maintenance", "Strategic IT guidance"],
          featured: false,
        },
      ],
      faqTitle: "FAQ",
      faqHeading: "Frequently asked questions",
      faqs: [
        {
          q: "What services do you provide?",
          a: "We provide managed IT services, technical support, network support, cybersecurity solutions, cloud services, and IT consulting.",
        },
        {
          q: "Do you support small businesses?",
          a: "Yes. Our services are designed for startups and small to medium-sized businesses.",
        },
        {
          q: "Do you offer remote support?",
          a: "Yes. We provide remote support for many day-to-day IT issues, with on-site support when needed.",
        },
        {
          q: "Are your services available in Jordan?",
          a: "Yes. We are focused on supporting businesses in Amman and across Jordan.",
        },
        {
          q: "How can I request a consultation?",
          a: "You can contact us by email, phone, or WhatsApp to schedule a consultation.",
        },
      ],
      contactTitle: "Contact Us",
      contactHeading: "Let’s discuss your IT needs",
      contactText:
        "Reach out to learn how our managed services can support your business in Jordan.",
      name: "Your Name",
      email: "Your Email",
      company: "Company Name",
      message: "Tell us about your IT needs",
      send: "Send Inquiry",
      sending: "Sending...",
      sent: "Thank you! Your inquiry has been sent. We'll get back to you within one business day.",
      sendError: "Sorry, your message couldn't be sent. Please reach us directly instead:",
      sendViaWhatsapp: "Send via WhatsApp",
      sendViaEmail: "Send via email",
      menu: "Menu",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      locationValue: "Amman, Jordan",
      locationTitle: "Our Location",
      locationText:
        "Serving businesses in Amman and across Jordan with remote and on-site IT support.",
      locationCard:
        "Reliable support for startups and growing businesses that need a trusted IT partner.",
      openMaps: "Open in Google Maps",
      whatsapp: "WhatsApp",
      social: ["Facebook", "LinkedIn", "Instagram"],
      footer:
        "© 2026 Thamrah Professionals for Information Technology. All rights reserved.",
    },
    ar: {
      brand: "ثمرة",
      sub: "لتكنولوجيا المعلومات",
      badge: "خدمات تقنية مُدارة للشركات الحديثة",
      heroTitle: "حلول تقنية موثوقة لنمو أعمالك",
      heroText:
        "نقدم خدمات تقنية مُدارة، وأمنًا سيبرانيًا، وحلولًا سحابية لمساعدة الشركات في الأردن على العمل بأمان والتوسع بثقة.",
      cta1: "اطلب استشارة",
      cta2: "خدماتنا",
      highlights: [
        "دعم سريع الاستجابة",
        "نهج يركز على الأمان",
        "حلول بأسعار مناسبة",
        "نخدم الشركات في الأردن",
      ],
      servicesTitle: "خدماتنا",
      servicesHeading: "خدمات تقنية عملية تدعم نمو الأعمال",
      servicesText:
        "نساعد الشركات على العمل بكفاءة من خلال دعم موثوق وأنظمة آمنة وتخطيط تقني قابل للتوسع.",
      services: [
        {
          title: "الخدمات التقنية المُدارة",
          text: "دعم استباقي ومراقبة وصيانة وإدارة يومية لتقنية المعلومات للشركات المتنامية.",
        },
        {
          title: "حلول الأمن السيبراني",
          text: "حماية عملية للأجهزة والمستخدمين وصلاحيات الوصول وبيانات الأعمال.",
        },
        {
          title: "خدمات السحابة والبريد الإلكتروني",
          text: "تعاون سحابي حديث وبريد أعمال ونقل ودعم مستمر.",
        },
        {
          title: "الدعم الفني",
          text: "استجابة سريعة للمشكلات اليومية حتى يبقى فريقك منتجًا.",
        },
        {
          title: "إعداد ودعم الشبكات",
          text: "تصميم شبكات موثوق وإعداد ومراقبة وحل للمشكلات.",
        },
        {
          title: "الاستشارات التقنية",
          text: "إرشاد تقني بسيط وقابل للتوسع للشركات الناشئة والمتنامية.",
        },
      ],
      aboutTitle: "من نحن",
      aboutHeading: "شركة تقنية حديثة بعقلية احترافية",
      aboutText:
        "تساعد ثمرة المحترفون لتكنولوجيا المعلومات الشركات على بناء بيئات تقنية موثوقة وآمنة وعملية تدعم العمليات اليومية والنمو طويل المدى.",
      whyTitle: "لماذا ثمرة",
      whyHeading: "دعم تقني سهل الوصول ومناسب وجاهز للأعمال",
      whyText:
        "نركز على الحلول العملية والتواصل السريع والقيمة طويلة المدى للشركات الناشئة والمتنامية.",
      trustCards: [
        { number: "01", title: "العميل أولاً", text: "حلول مرتبطة باحتياجات العمل الحقيقية." },
        { number: "02", title: "تنفيذ موثوق", text: "دعم ثابت وجودة خدمة يمكن الاعتماد عليها." },
        { number: "03", title: "مصمم للنمو", text: "دعم يتوسع مع توسع أعمالك." },
      ],
      processTitle: "آلية العمل",
      processHeading: "عملية واضحة تجعل تقنية المعلومات بسيطة وسهلة الإدارة",
      process: [
        {
          step: "01",
          title: "التقييم",
          text: "نراجع احتياجات عملك ووضعك الحالي وأولوياتك التقنية.",
        },
        {
          step: "02",
          title: "التخطيط",
          text: "نوصي بحلول عملية تتوافق مع ميزانيتك وأهدافك.",
        },
        {
          step: "03",
          title: "التنفيذ",
          text: "نطبق ونحسن الأنظمة التي يعتمد عليها عملك.",
        },
        {
          step: "04",
          title: "الدعم",
          text: "نبقى متاحين للدعم والصيانة والمراقبة المستمرة.",
        },
      ],
      packagesTitle: "باقات الخدمة",
      packagesHeading: "خطط دعم لمراحل الأعمال المختلفة",
      popular: "الأكثر طلبًا",
      packages: [
        {
          name: "الدعم الأساسي",
          subtitle: "للفرق الصغيرة",
          features: ["دعم مكتب المساعدة", "مراقبة أساسية", "مساعدة عن بُعد", "تقارير شهرية"],
          featured: false,
        },
        {
          name: "الخطة الاحترافية",
          subtitle: "للشركات المتنامية",
          features: ["دعم تقني مُدار", "دعم الشبكات", "أفضل ممارسات الأمان", "استجابة ذات أولوية"],
          featured: true,
        },
        {
          name: "الحل المؤسسي",
          subtitle: "للاحتياجات الأكبر",
          features: ["إدارة تقنية كاملة", "دعم السحابة والبريد", "صيانة وقائية", "إرشاد تقني استراتيجي"],
          featured: false,
        },
      ],
      faqTitle: "الأسئلة الشائعة",
      faqHeading: "الأسئلة الأكثر شيوعًا",
      faqs: [
        {
          q: "ما الخدمات التي تقدمونها؟",
          a: "نقدم خدمات تقنية مُدارة ودعمًا فنيًا ودعم شبكات وحلول أمن سيبراني وخدمات سحابية واستشارات تقنية.",
        },
        {
          q: "هل تدعمون الشركات الصغيرة؟",
          a: "نعم. خدماتنا مصممة للشركات الناشئة والصغيرة والمتوسطة.",
        },
        {
          q: "هل توفرون دعمًا عن بُعد؟",
          a: "نعم. نقدم دعمًا عن بُعد للعديد من المشكلات اليومية، مع دعم ميداني عند الحاجة.",
        },
        {
          q: "هل خدماتكم متاحة في الأردن؟",
          a: "نعم. نحن نركز على دعم الشركات في عمّان وعبر الأردن.",
        },
        {
          q: "كيف يمكنني طلب استشارة؟",
          a: "يمكنك التواصل معنا عبر البريد الإلكتروني أو الهاتف أو واتساب لحجز استشارة.",
        },
      ],
      contactTitle: "تواصل معنا",
      contactHeading: "دعنا نناقش احتياجاتك التقنية",
      contactText:
        "تواصل معنا لمعرفة كيف يمكن لخدماتنا المُدارة دعم أعمالك في الأردن.",
      name: "الاسم",
      email: "البريد الإلكتروني",
      company: "اسم الشركة",
      message: "أخبرنا عن احتياجاتك التقنية",
      send: "إرسال الطلب",
      sending: "جارٍ الإرسال...",
      sent: "شكرًا لك! تم إرسال طلبك، وسنتواصل معك خلال يوم عمل واحد.",
      sendError: "عذرًا، تعذّر إرسال رسالتك. يمكنك التواصل معنا مباشرة:",
      sendViaWhatsapp: "أرسل عبر واتساب",
      sendViaEmail: "أرسل عبر البريد الإلكتروني",
      menu: "القائمة",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      locationLabel: "الموقع",
      locationValue: "عمّان، الأردن",
      locationTitle: "موقعنا",
      locationText:
        "نخدم الشركات في عمّان وعبر الأردن من خلال دعم تقني عن بُعد وميداني.",
      locationCard:
        "دعم موثوق للشركات الناشئة والمتنامية التي تحتاج إلى شريك تقني يعتمد عليه.",
      openMaps: "افتح في خرائط Google",
      whatsapp: "واتساب",
      social: ["فيسبوك", "لينكدإن", "إنستغرام"],
      footer:
        "© 2026 ثمرة المحترفون لتكنولوجيا المعلومات. جميع الحقوق محفوظة.",
    },
  };

  const t = content[lang];

  const navLinks = [
    ["#services", "Services", "الخدمات"],
    ["#about", "About", "من نحن"],
    ["#process", "Process", "العملية"],
    ["#packages", "Packages", "الباقات"],
    ["#faq", "FAQ", "الأسئلة"],
    ["#contact", "Contact", "تواصل"],
  ];

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <a href="#" className="flex shrink-0 items-center">
            <img src="/logo.svg" alt={isArabic ? "ثمرة المحترفون لتكنولوجيا المعلومات" : "Thamrah Professionals for Information Technology"} width="176" height="40" className="h-9 w-auto sm:h-10" />
          </a>

          <div className="flex items-center gap-3 md:gap-4">
            <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
              {navLinks.map(([href, en, ar]) => (
                <a key={href} href={href} className="transition hover:text-white">{isArabic ? ar : en}</a>
              ))}
            </nav>
         	  <button onClick={() => setLang(lang === "en" ? "ar" : "en")}
			className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10 sm:px-4">
 			 🌐 {lang === "en" ? "عربي" : "EN"}
			</button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={t.menu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {menuOpen ? (
          <nav id="mobile-menu" className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
            {navLinks.map(([href, en, ar]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-base text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {isArabic ? ar : en}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-24 right-0 h-72 w-72 rounded-full bg-green-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
            {t.badge}
          </div>
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              {t.heroTitle}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {t.heroText}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
 	 	
		<a href="#contact" className="rounded-xl bg-gradient-to-r from-cyan-400 to-green-400 px-6 py-3 font-semibold text-black transition hover:scale-105 inline-block">
 			 {t.cta1}
		</a>
           
		<a href="#services" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10 inline-block">
  			{t.cta2}
		</a>

          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-4">
            {t.highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200 backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-4 sm:px-6 lg:px-8 py-20 reveal">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{t.servicesTitle}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t.servicesHeading}</h2>
            <p className="mt-4 leading-8 text-slate-400">{t.servicesText}</p>
          </div>
        </div>
       <div className="mx-auto mt-12 grid max-w-7xl gap-10 lg:grid-cols-2 items-center">

  {/* IMAGE */}
  <img
    src="/services.jpg"
    alt="IT Services"
    className="rounded-2xl shadow-xl w-full"
  />

  {/* SERVICES CARDS */}
  <div className="grid gap-6 md:grid-cols-2">
    {t.services.map((service, index) => (
      <div
        key={service.title}
        className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900/90"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-green-400/20 text-xl font-bold text-cyan-300">
          	{index === 0 && <ServerIcon />}
  		{index === 1 && <ShieldIcon />}
  		{index === 2 && <CloudIcon />}
  		{index === 3 && <SupportIcon />}
  		{index === 4 && <NetworkIcon />}
  		{index === 5 && <ConsultingIcon />}
        </div>

        <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">{service.text}</p>
      </div>
    ))}
  </div>

</div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/5 px-6 py-20">
        
<div className="mt-12 grid gap-10 lg:grid-cols-2 items-center">

  {/* IMAGE */}
  <img
    src="/about.jpg"
    alt="About Thamrah"
    className="rounded-2xl shadow-xl w-full"
  />

  {/* TEXT */}
  <div>
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
      {t.aboutTitle}
    </p>

    <h2 className="mt-3 text-3xl font-bold md:text-4xl">
      {t.aboutHeading}
    </h2>

    <p className="mt-5 leading-8 text-slate-300">
      {t.aboutText}
    </p>

    <div className="mt-8 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
        {t.whyTitle}
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        {t.whyHeading}
      </h3>

      <p className="mt-4 leading-8 text-slate-300">
        {t.whyText}
      </p>
    </div>
  </div>

</div>
      </section>

      <section id="process" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{t.processTitle}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t.processHeading}</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.process.map((item) => (
              <div key={item.step} className="rounded-[2rem] border border-white/10 bg-slate-900/65 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
                <div className="text-sm font-semibold text-cyan-300">{isArabic ? `الخطوة ${item.step}` : `Step ${item.step}`}</div>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{t.packagesTitle}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t.packagesHeading}</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.packages.map((pkg) => (
              <div key={pkg.name} className={`rounded-[2rem] border p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${pkg.featured ? "border-cyan-400/40 bg-gradient-to-b from-cyan-400/10 to-green-400/5" : "border-white/10 bg-slate-900/65"}`}>
                {pkg.featured ? (
                  <div className="mb-4 inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {t.popular}
                  </div>
                ) : null}
                <div className="text-2xl font-bold">{pkg.name}</div>
                <div className="mt-2 text-sm text-cyan-300">{pkg.subtitle}</div>
                <div className="mt-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-300">
                      ✓ {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{t.faqTitle}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t.faqHeading}</h2>
          </div>
          <div className="mt-10 grid gap-4">
            {t.faqs.map((item) => (
              <div key={item.q} className="rounded-[2rem] border border-white/10 bg-slate-900/65 p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-300/30">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="mt-3 leading-7 text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-slate-900/70 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">{t.contactTitle}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t.contactHeading}</h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-400">{t.contactText}</p>
            <div className="mt-8 space-y-3 text-slate-300">
              <div>{t.emailLabel}: <a href="mailto:info@thamrahpro.com" className="text-cyan-300 hover:underline">info@thamrahpro.com</a></div>
              <div>{t.phoneLabel}: <a href="tel:+962799150175" dir="ltr" className="text-cyan-300 hover:underline">+962 79 9150175</a></div>
              <div>{t.locationLabel}: {t.locationValue}</div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/65 p-6 backdrop-blur-xl">
            {formStatus === "sent" ? (
              <div role="status" className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-green-400/20 text-2xl text-green-300">✓</div>
                <p className="mt-5 max-w-md leading-8 text-slate-200">{t.sent}</p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input type="text" name="name" required maxLength={100} value={form.name} onChange={updateField("name")} placeholder={t.name} aria-label={t.name} className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 placeholder:text-slate-500 outline-none focus:border-cyan-300" />
                <input type="email" name="email" required maxLength={150} value={form.email} onChange={updateField("email")} placeholder={t.email} aria-label={t.email} className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 placeholder:text-slate-500 outline-none focus:border-cyan-300" />
              </div>
              <input type="text" name="company" maxLength={150} value={form.company} onChange={updateField("company")} placeholder={t.company} aria-label={t.company} className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 placeholder:text-slate-500 outline-none focus:border-cyan-300" />
              <textarea rows={6} name="message" required maxLength={3000} value={form.message} onChange={updateField("message")} placeholder={t.message} aria-label={t.message} className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 placeholder:text-slate-500 outline-none focus:border-cyan-300" />
              {/* Hidden field to catch spam bots; real visitors never see it */}
              <input type="text" name="website" value={form.website} onChange={updateField("website")} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              <button type="submit" disabled={formStatus === "sending"} className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-green-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70">
                {formStatus === "sending" ? t.sending : t.send}
              </button>
              {formStatus === "error" ? (
                <div role="alert" className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-100">
                  <p>{t.sendError}</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a href={`https://wa.me/962799150175?text=${encodeURIComponent(inquiryText)}`} target="_blank" rel="noreferrer" className="rounded-xl bg-green-500 px-4 py-2 font-semibold text-white">{t.sendViaWhatsapp}</a>
                    <a href={`mailto:info@thamrahpro.com?subject=${encodeURIComponent("Website inquiry - " + form.name)}&body=${encodeURIComponent(inquiryText)}`} className="rounded-xl border border-white/20 px-4 py-2 font-semibold text-white">{t.sendViaEmail}</a>
                  </div>
                </div>
              ) : null}
            </form>
            )}
          </div>
        </div>
      </section>

     <section className="px-4 sm:px-6 lg:px-8 pb-20 pt-20 reveal">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/65 p-8 backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
              {t.locationTitle}
            </div>
            <p className="mt-4 max-w-xl leading-8 text-slate-300">{t.locationText}</p>
            <button className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-green-400 px-6 py-3 text-sm font-semibold text-slate-950">
              {t.openMaps}
            </button>
          </div>

          <div className="flex min-h-[260px] flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-cyan-950/30 p-8 text-center backdrop-blur-xl">
            <div className="rounded-full bg-cyan-400/10 p-4 text-cyan-300">📍</div>
            <p className="mt-4 max-w-md leading-8 text-slate-400">{t.locationCard}</p>
          </div>
        </div>
      </section>

      <a href={`https://wa.me/962799150175?text=${encodeURIComponent("Hello, I'm interested in your IT services. مرحباً، أود الاستفسار عن خدماتكم التقنية")}`} target="_blank" rel="noreferrer" className={`${isArabic ? "left-6" : "right-6"} fixed bottom-6 z-50 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:-translate-y-1`}>
        {t.whatsapp}
      </a>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
          <div className="text-sm text-slate-400">{t.footer}</div>
          <div className="flex items-center gap-3">
            {[
              [t.social[0], "https://www.facebook.com/ThamrahPro", FacebookIcon],
              [t.social[1], "https://www.linkedin.com/company/thamrahpro", LinkedinIcon],
              [t.social[2], "https://instagram.com/thamrahpro", InstagramIcon],
            ].map(([item, link, Icon]) => (
              <a
                key={item}
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label={item}
                title={item}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10 hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}