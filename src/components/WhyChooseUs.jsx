import { ArrowUpRight, Check, HeartPulse, Shield, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Confidential, respectful care',
    text: 'We create a quiet, safe space where patients feel comfortable talking openly.',
  },
  {
    icon: HeartPulse,
    title: 'Integrated treatment guidance',
    text: 'From diagnosis to daily coping and lifestyle support, your plan is tailored to your needs.',
  },
  {
    icon: Sparkles,
    title: 'Clear, manageable steps',
    text: 'We focus on practical progress so the path to healing feels steady and achievable.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="approach" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">Why choose us</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Thoughtful psychiatry that respects the whole person.
          </h2>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
          <p className="text-lg leading-8 text-slate-600">
            We take time to understand your symptoms, goals, and life context—because sustainable recovery always begins with listening well.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {reasons.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-800">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-slate-900">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-teal-700">
              <Check className="h-4 w-4" />
              Patient-centered support
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50">
          Explore your next steps
          <ArrowUpRight className="h-4 w-4 text-teal-700" />
        </a>
      </div>
    </section>
  );
}
