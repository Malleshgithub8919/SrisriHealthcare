import { Brain, HeartPulse, MoonStar, ShieldCheck } from 'lucide-react';

import { services } from '../data/services';
import SectionHeading from './SectionHeading';

const serviceIcons = {
  brain: Brain,
  shield: ShieldCheck,
  heart: HeartPulse,
  moon: MoonStar,
};

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our services"
          title="Focused psychiatric support for real life."
          description="Whether you are navigating stress, mood changes, burnout, or sleep disruption, we create care plans that are clear, realistic, and compassionate."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ id, title, description, highlights, icon }) => {
            const Icon = serviceIcons[icon] || Brain;

            return (
              <article
                key={id}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.03)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.07)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>

                <ul className="mt-5 space-y-2">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
