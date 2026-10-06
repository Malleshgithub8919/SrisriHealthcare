import { Award, CheckCircle2, GraduationCap, HeartHandshake } from 'lucide-react';

import aboutSide from '../assets/about-side.png';
import drSritha from '../assets/dr-sritha.png';

const highlights = [
  'MBBS from GSL Medical College and University',
  'MD in Psychiatry from Jawaharlal Nehru Medical College, Belgaum',
  'Experienced consultant psychiatrist with a patient-first, evidence-based approach',
];

export default function AboutDoctor() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-teal-200/60 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#edf3f7] p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <img
              src={drSritha}
              alt="Dr. Sritha portrait"
              className="h-[520px] w-full rounded-[1.5rem] object-cover object-center"
            />

            <img
              src={aboutSide}
              alt="Dr. Sritha side portrait"
              className="absolute -bottom-6 right-5 h-36 w-36 rounded-full border-4 border-white object-cover shadow-[0_10px_28px_rgba(15,23,42,0.16)]"
            />
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-slate-500">Dr. Sritha</p>
            <h3 className="mt-3 font-display text-4xl font-semibold text-[#ad6b36]">DR.SRITHA</h3>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.24em] text-slate-600">
              MBBS,MD (PSYCHIATRY)
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">About us</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Trusted psychiatric care shaped by experience and compassion.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We are an outpatient mental health care center that offers the most up-to-date therapies in an accessible, welcoming, and open-minded setting.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Dr Sritha is a well-known and renowned psychiatrist, known for her calm, patient-friendly approach and strong clinical expertise. She completed her MBBS from GSL Medical College and University and her postgraduate training in psychiatry from Jawaharlal Nehru Medical College, Belgaum.
          </p>

          <div className="mt-8 space-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-teal-700" />
                <p className="text-base text-slate-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-800">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Education</p>
                <p className="mt-1 text-base font-medium text-slate-900">MBBS, MD Psychiatry</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Approach</p>
                <p className="mt-1 text-base font-medium text-slate-900">Warm, respectful, patient-first care</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-slate-700">
            <Award className="h-5 w-5 text-amber-700" />
            She has also contributed to psychiatry research and has published work in the field, including a case report on ECT in patients with ventricular septal defect.
          </div>
        </div>
      </div>
    </section>
  );
}
