import { ArrowRight, CalendarCheck2, PhoneCall } from 'lucide-react';

export default function AppointmentCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.16)] lg:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-200">Start your care</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Take the first step toward feeling more like yourself again.
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              <CalendarCheck2 className="h-4 w-4" />
              Schedule a visit
            </a>
            <a
              href="tel:+914000000000"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4" />
              Call clinic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
