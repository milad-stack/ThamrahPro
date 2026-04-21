export default function ThamrahPremium() {
  const services = [
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
  ];

  const process = [
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
  ];

  const packages = [
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
  ];

  const faqs = [
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
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-green-400" />
            <div>
              <div className="text-lg font-bold tracking-[0.18em]">THAMRAH</div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Professional IT</div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#process" className="transition hover:text-white">Process</a>
            <a href="#packages" className="transition hover:text-white">Packages</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
            Managed IT Services for Modern Businesses
          </div>
          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              Reliable IT Solutions for Growing Businesses
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We provide managed IT services, cybersecurity, and cloud solutions to help businesses in Jordan operate securely and scale with confidence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-green-400 px-6 py-3 font-semibold text-black transition hover:scale-105">
              Request a Consultation
            </button>
            <button className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10">
              Our Services
            </button>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-4">
            {[
              "Responsive support",
              "Security-focused approach",
              "Affordable solutions",
              "Serving businesses in Jordan",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200 backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Our Services</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Practical IT services built for business growth</h2>
            <p className="mt-4 leading-8 text-slate-400">
              We help businesses run efficiently with dependable support, secure systems, and scalable technology planning.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900/90">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-green-400/20 text-xl font-bold text-cyan-300">
                  ●
                </div>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/5 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">About Us</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">A modern IT company with a professional mindset</h2>
            <p className="mt-5 leading-8 text-slate-300">
              Thamrah Professional for Information Technology helps businesses build reliable, secure, and practical IT environments that support daily operations and long-term growth.
            </p>
            <div className="mt-8 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Why Choose Thamrah</p>
              <h3 className="mt-3 text-2xl font-bold">Technology support that is accessible, affordable, and business-ready</h3>
              <p className="mt-4 leading-8 text-slate-300">
                We focus on practical solutions, responsive communication, and long-term value for startups and growing businesses.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { number: "01", title: "Client Focused", text: "Solutions aligned with real business needs." },
              { number: "02", title: "Reliable Delivery", text: "Consistent support and dependable service quality." },
              { number: "03", title: "Built to Grow", text: "Support designed to scale as your business expands." },
            ].map((card, i) => (
              <div key={card.number} className={`rounded-3xl border border-white/10 bg-slate-900 p-6 ${i === 2 ? "sm:col-span-2" : ""}`}>
                <div className="text-2xl font-bold text-cyan-300">{card.number}</div>
                <div className="mt-3 text-lg font-semibold">{card.title}</div>
                <p className="mt-2 text-sm leading-7 text-slate-400">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">How We Work</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">A clear process that keeps IT simple and manageable</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="rounded-[2rem] border border-white/10 bg-slate-900/65 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
                <div className="text-sm font-semibold text-cyan-300">Step {item.step}</div>
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Service Packages</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Support plans for different business stages</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`rounded-[2rem] border p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${pkg.featured ? "border-cyan-400/40 bg-gradient-to-b from-cyan-400/10 to-green-400/5" : "border-white/10 bg-slate-900/65"}`}>
                {pkg.featured ? (
                  <div className="mb-4 inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    Most Popular
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Frequently asked questions</h2>
          </div>
          <div className="mt-10 grid gap-4">
            {faqs.map((item) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Contact Us</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Let’s discuss your IT needs</h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-400">
              Reach out to learn how our managed services can support your business in Jordan.
            </p>
            <div className="mt-8 space-y-3 text-slate-300">
              <div>Email: info@thamrahpro.com</div>
              <div>Phone: +962 79 9150175</div>
              <div>Location: Amman, Jordan</div>
              <div>Domain: thamrahpro.com</div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/65 p-6 backdrop-blur-xl">
            <form className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input type="text" placeholder="Your Name" className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 placeholder:text-slate-500 outline-none focus:border-cyan-300" />
                <input type="email" placeholder="Your Email" className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 placeholder:text-slate-500 outline-none focus:border-cyan-300" />
              </div>
              <input type="text" placeholder="Company Name" className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 placeholder:text-slate-500 outline-none focus:border-cyan-300" />
              <textarea rows={6} placeholder="Tell us about your IT needs" className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 placeholder:text-slate-500 outline-none focus:border-cyan-300" />
              <button type="button" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-green-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 pt-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/65 p-8 backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
              Our Location
            </div>
            <p className="mt-4 max-w-xl leading-8 text-slate-300">
              Serving businesses in Amman and across Jordan with remote and on-site IT support.
            </p>
            <button className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-green-400 px-6 py-3 text-sm font-semibold text-slate-950">
              Open in Google Maps
            </button>
          </div>

          <div className="flex min-h-[260px] flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-cyan-950/30 p-8 text-center backdrop-blur-xl">
            <div className="rounded-full bg-cyan-400/10 p-4 text-cyan-300">📍</div>
            <p className="mt-4 max-w-md leading-8 text-slate-400">
              Reliable support for startups and growing businesses that need a trusted IT partner.
            </p>
          </div>
        </div>
      </section>

      <a href={`https://wa.me/962799150175?text=${encodeURIComponent("Hello, I'm interested in your IT services. مرحباً، أود الاستفسار عن خدماتكم التقنية")}`} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:-translate-y-1">WhatsApp</a>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
          <div className="text-sm text-slate-400">© 2026 Thamrah Professional for Information Technology. All rights reserved.</div>
          <div className="flex items-center gap-3">
            {[["Facebook","https://www.facebook.com/ThamraPro"],["LinkedIn","https://www.linkedin.com/company/thamrahpro"],["Instagram","https://instagram.com/thamrahpro"]].map(([item,link]) => (
              <a key={item} href={link} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10 hover:text-white">{item}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
