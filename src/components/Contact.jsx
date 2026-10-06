import { Clock3, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">Contact</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-slate-900">
              We’re here to help you begin.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Book a consultation with us for compassionate, personalized psychiatric support.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <Phone className="mt-1 h-5 w-5 text-teal-700" />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Phone</p>
                  <a href="tel:+919959255446" className="mt-1 block text-base font-medium text-slate-900">
                    +91 99592 55446
                  </a>
                  <a href="tel:+918331842680" className="mt-1 block text-base font-medium text-slate-900">
                    +91 83318 42680
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <Mail className="mt-1 h-5 w-5 text-teal-700" />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Email</p>
                  <a href="mailto:doctorshelpinghands@gmail.com" className="mt-1 block text-base font-medium text-slate-900">
                    doctorshelpinghands@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <MapPin className="mt-1 h-5 w-5 text-teal-700" />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Location</p>
                  <a
                    href="https://maps.app.goo.gl/XKQYAGjgPg3aVWh56"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-base font-medium text-slate-900"
                  >
                    DRNO.28-6-15 SRI MATHA TOWER, Velpur Rd, Tanuku, Andhra Pradesh 534211, India
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <Clock3 className="mt-1 h-5 w-5 text-teal-700" />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Hours</p>
                  <p className="mt-1 text-base font-medium text-slate-900">Mon - Sat · 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <div className="h-[420px] w-full bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.22),transparent_32%),linear-gradient(160deg,#0f172a_0%,#0b1f2d_40%,#082f49_100%)] p-8">
              <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-200">Quick inquiry</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">Let’s plan your consultation.</h3>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-300">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full border-none bg-transparent text-white outline-none placeholder:text-slate-400"
                    />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-300">Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border-none bg-transparent text-white outline-none placeholder:text-slate-400"
                    />
                  </div>
                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-teal-400">
                    Send inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
