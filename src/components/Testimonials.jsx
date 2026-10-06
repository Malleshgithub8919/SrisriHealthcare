import { Star } from 'lucide-react';

import { testimonials } from '../data/testimonials';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Patient feedback"
          title="People feel seen, heard, and supported."
          description="Real care is reflected in how patients experience treatment—calmly, respectfully, and with clarity."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map(({ name, role, quote }) => (
            <article key={name} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={`${name}-${index}`} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-8 text-slate-700">“{quote}”</p>
              <div className="mt-6 border-t border-slate-200 pt-4">
                <p className="text-lg font-semibold text-slate-900">{name}</p>
                <p className="text-sm text-slate-500">{role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
