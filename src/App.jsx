import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import AboutDoctor from './components/AboutDoctor';
import AppointmentCTA from './components/AppointmentCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import TrustHighlights from './components/TrustHighlights';
import Videos from './components/Videos';
import WhyChooseUs from './components/WhyChooseUs';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const value = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(value);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[80] h-[2px] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-teal-500 via-cyan-400 to-sky-500"
        animate={{ width: `${progress}%` }}
        transition={{ ease: 'easeOut', duration: 0.25 }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustHighlights />
        <AboutDoctor />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Videos />
        <Testimonials />
        <AppointmentCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
