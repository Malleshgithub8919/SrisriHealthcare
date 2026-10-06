import { Clock3, Mail, MapPin, Phone } from 'lucide-react';

import logo from '../assets/sri-siri-logo.png';

const socialLinks = [
  { href: 'https://srisirihealthcare.com/#', label: 'Facebook', icon: 'f' },
  { href: 'https://srisirihealthcare.com/#', label: 'Twitter', icon: 'X' },
  { href: 'https://www.youtube.com/@doctorsiri9090/shorts', label: 'YouTube', icon: 'YT' },
  { href: 'https://www.youtube.com/@doctorsiri9090/shorts', label: 'Cheye', icon: 'C' },
  { href: 'https://srisirihealthcare.com/#', label: 'LinkedIn', icon: 'in' },
  { href: 'https://srisirihealthcare.com/#', label: 'Instagram', icon: '◎' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Sri Siri Health Care logo" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-lg font-semibold text-white">Sri Siri</p>
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-slate-400">
                  Health Care
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              We are an outpatient mental health care center that offers the most up-to-date therapies in an accessible, welcoming, and open-minded setting.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white">Quick links</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
              <a href="#home" className="transition hover:text-white">Home</a>
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#approach" className="transition hover:text-white">Approach</a>
              <a href="#gallery" className="transition hover:text-white">Gallery</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white">Clinic hours</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-teal-300" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white">Social</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xs font-bold text-slate-200 transition hover:border-teal-400 hover:text-white"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-teal-300" />
                <a href="tel:+919959255446" className="transition hover:text-white">+91 99592 55446</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-teal-300" />
                <a href="tel:+918331842680" className="transition hover:text-white">+91 83318 42680</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-teal-300" />
                <a href="mailto:doctorshelpinghands@gmail.com" className="transition hover:text-white">doctorshelpinghands@gmail.com</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-teal-300" />
                <a
                  href="https://www.google.com/maps/search/Sri+Siri+Health+Care+Tanuku/@16.815058,81.4526367,15z?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  DRNO.28-6-15 SRI MATHA TOWER, Velpur Rd, Tanuku, Andhra Pradesh 534211, India
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          © 2026 Sri Siri Health Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
