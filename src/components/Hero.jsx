import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, CalendarHeart, Clock3, Sparkles, Stethoscope } from 'lucide-react';

import headerDoctor from '../assets/header-doctor.png';
import Button from './Button';

const headlineWords = ['Mental', 'wellness,', 'thoughtfully', 'guided.'];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(15,118,110,0.12),transparent_32%),linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)]">
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 16, ease: 'easeInOut', repeat: Infinity }}
        className="absolute inset-0 opacity-80"
      >
        <div className="absolute -left-12 top-10 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-sky-200/20 blur-3xl" />
      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 flex flex-col justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-medium text-teal-900 shadow-sm backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-teal-700" />
            Compassionate psychiatric care for every stage of healing
          </motion.div>

          <h1 className="max-w-xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-slate-900 sm:text-6xl lg:text-7xl">
            {headlineWords.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
          >
            Personalized psychiatric support for anxiety, mood challenges, stress, and sleep concerns—delivered with warmth, privacy, and clinical expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95, ease: 'easeOut' }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button className="h-12 px-6 text-base">
                Book an appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button variant="secondary" className="h-12 px-6 text-base">
                Talk to our team
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600"
          >
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
              <BadgeCheck className="h-4 w-4 text-teal-700" />
              Same-week consultations
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
              <Clock3 className="h-4 w-4 text-teal-700" />
              Confidential care
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-teal-200/60 blur-3xl" />
          <div className="absolute -right-4 bottom-10 h-24 w-24 rounded-full bg-sky-200/60 blur-3xl" />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-4 shadow-[0_30px_70px_rgba(15,23,42,0.12)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(167,243,208,0.18),transparent_36%)]" />
            <img
              src={headerDoctor}
              alt="Dr. Sritha smiling in clinic"
              className="relative h-[540px] w-full rounded-[1.5rem] object-cover object-center"
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7 }}
              className="absolute left-10 top-10 rounded-2xl border border-white/50 bg-white/88 p-4 shadow-lg backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Trusted care</p>
                  <p className="text-xl font-semibold text-slate-900">15+ Years</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="absolute bottom-10 right-10 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-800">
                  <CalendarHeart className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Patient reviews</p>
                  <p className="text-xl font-semibold text-slate-900">4.9/5</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
