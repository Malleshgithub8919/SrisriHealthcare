import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { gallery } from '../data/gallery';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const galleryTrack = useRef(null);
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

  const scrollGallery = (direction) => {
    galleryTrack.current?.scrollBy({
      left: direction * galleryTrack.current.clientWidth * 0.85,
      behavior: 'smooth',
    });
  };

  return (
    <section id="gallery" className="bg-white py-20">
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

        <div className="mt-10 flex justify-end gap-2">
          <button
            type="button"
            aria-label="Scroll gallery left"
            onClick={() => scrollGallery(-1)}
            className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Scroll gallery right"
            onClick={() => scrollGallery(1)}
            className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div
          ref={galleryTrack}
          className="mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-5"
          aria-label="Scrollable clinic photo and video gallery"
        >
          {gallery.map(({ title, image, tag, videoId, imageFit = 'object-cover', alt }, index) => (
            <motion.button
              key={title}
              type="button"
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.36), ease: 'easeOut' }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setSelectedIndex(index)}
              aria-label={`${videoId ? 'Play video' : 'View photo'}: ${title}`}
              className="group w-[82%] shrink-0 snap-start overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 text-left shadow-[0_18px_40px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_22px_50px_rgba(15,23,42,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:w-[calc(50%-0.625rem)] xl:w-[calc(33.333%-0.84rem)]"
            >
              <span className="relative block h-80 overflow-hidden">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full ${imageFit} transition duration-500 group-hover:scale-[1.03]`}
                />
                {videoId && (
                  <span className="absolute inset-0 flex items-center justify-center bg-slate-950/15">
                    <span className="rounded-full border border-white/60 bg-white/15 p-3 text-white backdrop-blur-sm">
                      <Play className="ml-0.5 h-6 w-6 fill-current" />
                    </span>
                  </span>
                )}
              </span>
              <span className="block space-y-2 p-4 pb-5">
                <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-teal-700">
                  {tag}
                </span>
                <span className="block text-[1.75rem] font-medium leading-tight text-slate-900">
                  {title}
                </span>
              </span>
            </motion.button>
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
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-[0_40px_120px_rgba(15,23,42,0.45)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 text-sm text-slate-200">
                <span>{selected.tag}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous gallery item"
                    onClick={showPrevious}
                    className="rounded-full border border-white/15 bg-white/5 p-2 transition hover:bg-white/10"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next gallery item"
                    onClick={showNext}
                    className="rounded-full border border-white/15 bg-white/5 p-2 transition hover:bg-white/10"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Close gallery"
                    onClick={() => setSelectedIndex(null)}
                    className="rounded-full border border-white/20 bg-white/5 p-2 text-white transition hover:bg-white/10"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {selected.videoId ? (
                <div className="mx-auto aspect-[9/16] max-h-[75vh] w-full max-w-[420px]">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${selected.videoId}?autoplay=1`}
                    title={selected.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img
                  src={selected.image}
                  alt={selected.alt}
                  className="max-h-[75vh] w-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
