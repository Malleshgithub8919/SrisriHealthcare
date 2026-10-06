import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { gallery } from '../data/gallery';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selected = selectedIndex === null ? null : gallery[selectedIndex];

  const showNext = () => setSelectedIndex((current) => (current + 1) % gallery.length);
  const showPrevious = () =>
    setSelectedIndex((current) => (current - 1 + gallery.length) % gallery.length);

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowRight') showNext();
      if (event.key === 'ArrowLeft') showPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <SectionHeading
            eyebrow="Healing environment"
            title="A calm, reassuring space for care."
            description="Every part of the experience is designed to feel steady, private, and comfortable from arrival to consultation."
            align="center"
          />
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map(({ title, image, tag }, index) => (
            <motion.figure
              key={title}
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedIndex(index)}
              className="group cursor-pointer overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-[0_18px_40px_rgba(15,23,42,0.04)]"
            >
              <div className="relative overflow-hidden rounded-t-[1.75rem]">
                <img
                  src={image}
                  alt={title}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="rounded-full border border-white/60 bg-white/15 p-3 text-white backdrop-blur-sm">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <figcaption className="space-y-2 p-4 pb-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-teal-700">{tag}</p>
                <p className="text-[1.75rem] font-medium leading-tight text-slate-900">{title}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-[0_40px_120px_rgba(15,23,42,0.45)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-slate-900/50 p-2 text-white transition hover:bg-slate-800/60"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center justify-between bg-slate-900/30 px-4 py-3 text-sm text-slate-200">
                <span>{selected.tag}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="rounded-full border border-white/15 bg-white/5 p-2 transition hover:bg-white/10"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="rounded-full border border-white/15 bg-white/5 p-2 transition hover:bg-white/10"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <img src={selected.image} alt={selected.title} className="max-h-[75vh] w-full object-cover" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
