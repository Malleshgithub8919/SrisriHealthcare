import { AnimatePresence, motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const videos = [
  { id: 'RXvc4j4gg7g', title: 'Sri Siri Health Care', description: 'A calming introduction to our care approach.' },
  { id: 'T8RJhafiSdc', title: 'Patient experience', description: 'How we support patients with warmth and clarity.' },
  { id: '0JWzc1b9Ess', title: 'Care in motion', description: 'A closer look at our compassionate support.' },
];

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    if (!selectedVideo) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') setSelectedVideo(null);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedVideo]);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-950 via-sky-900 to-teal-800 p-8 text-white shadow-[0_30px_80px_rgba(8,47,73,0.25)] lg:p-12"
        >
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-200">Understanding care</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Support that feels personal, calm, and clinically grounded.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {videos.map(({ id, title, description }, index) => (
              <motion.button
                key={id}
                type="button"
                initial={{ opacity: 0, y: 28, x: index % 2 === 0 ? -18 : 18 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => setSelectedVideo(id)}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-2 text-left backdrop-blur-sm"
              >
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    alt={title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 transition duration-300 group-hover:bg-slate-950/25" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                      className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-white/15 text-white shadow-lg backdrop-blur-sm"
                    >
                      <Play className="ml-1 h-7 w-7 fill-current" />
                    </motion.div>
                  </div>
                </div>
                <div className="px-2 pb-1 pt-3">
                  <p className="text-base font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm text-slate-300">{description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950 shadow-[0_40px_120px_rgba(15,23,42,0.5)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-slate-900/60 p-2 text-white transition hover:bg-slate-800"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${selectedVideo}`}
                  title="Sri Siri Health Care video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
