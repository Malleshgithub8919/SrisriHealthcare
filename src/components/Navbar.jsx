import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import logo from '../assets/sri-siri-logo.png';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'approach', label: 'Approach' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionNodes = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sectionNodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: '-20% 0px -40% 0px' },
    );

    sectionNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-200/80 bg-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Sri Siri Health Care logo" className="h-14 w-14 rounded-full object-cover shadow-md shadow-slate-200" />
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">Sri Siri</p>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-slate-500">
              Health Care
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative pb-1 transition ${
                activeSection === item.id ? 'text-slate-900' : 'hover:text-slate-900'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-sky-950"
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+914000000000"
            className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 sm:inline-flex"
          >
            <Phone className="h-4 w-4 text-teal-700" />
            Call Now
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-sky-950 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(9,34,40,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-sky-900"
          >
            <CalendarDays className="h-4 w-4" />
            Book Visit
          </a>

          <button
            type="button"
            aria-label="Toggle mobile navigation"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 md:hidden"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={mobileOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -20 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 20 }}
                transition={{ duration: 0.18 }}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="border-t border-slate-200 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm font-medium ${
                    activeSection === item.id ? 'bg-slate-100 text-slate-900' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
