"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="px-6 py-24 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
          Reliable IT Solutions for Growing Businesses
        </h1>

        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
          We provide managed IT services, cybersecurity, and cloud solutions to help businesses in Jordan operate securely and scale with confidence.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="#contact" className="px-6 py-3 bg-cyan-400 text-black rounded-xl font-semibold">
            Request a Consultation
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            "Managed IT Services",
            "Cybersecurity Solutions",
            "Cloud & Email Services",
            "Technical Support",
            "Network Setup",
            "IT Consulting",
          ].map((s) => (
            <div key={s} className="p-6 bg-slate-900 rounded-2xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold">{s}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>

        <p className="mt-4 text-slate-400">
          info@thamrahpro.com
        </p>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/962799150175?text=Hello, I'm interested in your IT services. مرحباً، أود الاستفسار عن خدماتكم التقنية"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 px-5 py-3 rounded-full text-white shadow-xl"
      >
        WhatsApp
      </a>

    </div>
  );
}
