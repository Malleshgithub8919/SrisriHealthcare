import cheyeRecognition from '../assets/cheye-recognition.png';
import clinicCommunityEvent from '../assets/clinic-community-event.png';
import doctorSiriYoutubeBanner from '../assets/doctor-siri-youtube-banner.png';
import mentalHealthClinicCollage from '../assets/mental-health-clinic-collage.png';
import pharmacistsDayEvent from '../assets/pharmacists-day-event.png';

export const gallery = [
  {
    title: 'Community care',
    image: clinicCommunityEvent,
    tag: 'Community healthcare',
    alt: 'Sri Siri Health Care team members presenting a plant at a community event',
    imageFit: 'object-contain bg-slate-100',
  },
  {
    title: 'World Pharmacists Day',
    image: pharmacistsDayEvent,
    tag: 'Pharmacists Day',
    alt: 'A pharmacist receiving flowers during a World Pharmacists Day celebration',
    imageFit: 'object-contain bg-slate-100',
  },
  {
    title: 'Mental health consultation',
    image: mentalHealthClinicCollage,
    tag: 'Mental health',
    alt: 'A mental health awareness image and a Sri Siri Health Care doctor',
    imageFit: 'object-contain bg-slate-100',
  },
  {
    title: 'Cheye recognition',
    image: cheyeRecognition,
    tag: 'Cheye',
    alt: 'A group recognition moment for the Cheye celebration with Sri Siri Health Care team members',
    imageFit: 'object-cover bg-slate-100',
  },
  {
    title: 'Doctor Siri — Mind and Body Health Tips',
    image: doctorSiriYoutubeBanner,
    tag: 'YouTube Short',
    videoId: 'Lre8Iw7dFWA',
    alt: 'Doctor Siri — Mind and Body Health Tips video thumbnail',
    imageFit: 'object-contain bg-slate-100',
  },
];
