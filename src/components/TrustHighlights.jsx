import { ArrowRight, Lock, ShieldPlus, Stethoscope } from 'lucide-react';

const items = [
  {
    icon: Stethoscope,
    title: 'Evidence-based care',
    text: 'Thoughtful assessments and treatment planning rooted in current psychiatric practice.',
  },
  {
    icon: Lock,
    title: 'Private & respectful',
    text: 'A calm clinical environment designed to protect dignity, trust, and confidentiality.',
  },
  {
    icon: ShieldPlus,
    title: 'Holistic guidance',
    text: 'Support that looks at the whole person—including lifestyle, recovery, and daily functioning.',
  },
];

export default function TrustHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.04)] md:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 text-sm font-medium text-slate-700">
        <span className="inline-flex h-2 w-2 rounded-full bg-teal-600" />
        Personalized care plans for adults and young adults
        <ArrowRight className="h-4 w-4 text-teal-700" />
      </div>
    </section>
  );
}
