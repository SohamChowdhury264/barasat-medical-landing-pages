import { useState, useEffect } from 'react'
import doctorImg from './assets/doctor.png'

const DOCTOR = {
  name: 'Dr. Samik Sanyal',
  specialty: 'Gynaecologist & Obstetrician',
  shortSpecialty: 'Gynaecologist & Obs',
  phone: '9433669730',
  whatsapp: '919433669730',
  rating: '5.0',
  reviews: '100+',
  experience: '15+',
  location: 'Sukchar, Sodepur, Kolkata',
  address: 'Apollo Clinic, 16F, B.T. Road, Sukchar, Girja, Sodepur, Kolkata – 700115',
  degrees: 'MBBS, MS (Obs & Gynae – Gold Medalist), DNB, MRCOG (London)',
  mapSrc: 'https://maps.google.com/maps?q=22.7091559,88.3740747&t=&z=15&ie=UTF8&iwloc=&output=embed',
  mapLink: 'https://maps.app.goo.gl/XADCwfR8c63CyDGH7',
  services: [
    {
      icon: '🤰',
      title: 'Obstetrics & Maternity',
      desc: 'Complete prenatal, antenatal, and postnatal care. Safe deliveries with compassionate support throughout your pregnancy journey.'
    },
    {
      icon: '🔬',
      title: 'Gynaecology & Diagnostics',
      desc: 'Expert diagnosis and treatment of PCOS, endometriosis, uterine fibroids, menstrual disorders, and pelvic inflammatory disease.'
    },
    {
      icon: '💊',
      title: 'Women\'s Hormonal Health',
      desc: 'Personalised hormonal therapy, menopause management, fertility evaluation, and reproductive health consultations.'
    }
  ],
  hours: [
    { day: 'Monday – Friday', time: '10:00 AM – 2:00 PM' },
    { day: 'Monday – Friday', time: '5:00 PM – 8:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 2:00 PM' },
    { day: 'Sunday', time: 'By Appointment Only' },
  ]
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="font-sans bg-slate-50 min-h-screen">

      {/* ===== NAVBAR ===== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/98 shadow-xl backdrop-blur-sm' : 'bg-slate-900/90 backdrop-blur-sm'}`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-lg leading-tight tracking-tight">{DOCTOR.name}</p>
            <p className="text-pink-400 text-xs font-medium tracking-wide">{DOCTOR.shortSpecialty}</p>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-slate-300 font-medium text-sm">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#location" className="hover:text-white transition-colors">Map</a>
          </div>
          <a
            id="navbar-book-btn"
            href={`https://wa.me/${DOCTOR.whatsapp}?text=Hello%20Dr.%20Sanyal%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-4 py-2 rounded-full text-sm transition-all duration-200 shadow-lg hover:shadow-emerald-500/40"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            Book Appointment
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e0b2e 50%, #0f172a 100%)'}}>
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-10" style={{background: 'radial-gradient(circle, #db2777, transparent)', filter: 'blur(60px)'}}></div>
          <div className="absolute top-20 right-20 w-80 h-80 rounded-full opacity-10" style={{background: 'radial-gradient(circle, #9333ea, transparent)', filter: 'blur(80px)'}}></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full opacity-8" style={{background: 'radial-gradient(circle, #be185d, transparent)', filter: 'blur(100px)'}}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(219,39,119,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

        <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-pink-400 text-xs font-semibold tracking-widest uppercase">Barasat's Trusted Women's Health Specialist</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-5">
              Your Health,<br/>
              <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">In Trusted Hands.</span>
            </h1>

            <p className="text-slate-300 text-lg mb-4 leading-relaxed">
              Compassionate women's healthcare for the families of Barasat and North 24 Parganas. From maternity care to complex gynaecological conditions — expert help, close to home.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                id="hero-book-btn"
                href={`https://wa.me/${DOCTOR.whatsapp}?text=Hello%20Dr.%20Sanyal%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white font-bold px-6 py-3 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-pink-500/40 hover:-translate-y-0.5"
              >
                📅 Book Appointment
              </a>
              <a
                id="hero-call-btn"
                href={`tel:${DOCTOR.phone}`}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-full text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                📞 Call Now
              </a>
            </div>
          </div>

          {/* Doctor Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-[440px] lg:w-80 lg:h-[460px] rounded-2xl overflow-hidden border-2 border-pink-500/30 shadow-2xl flex flex-col justify-end relative" style={{background: `linear-gradient(180deg, rgba(15,23,42,0) 40%, rgba(15,23,42,0.95) 90%), url(${doctorImg})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 25px 80px rgba(219,39,119,0.3)'}}>
                <div className="p-6 relative z-10 text-left">
                  <p className="text-white font-extrabold text-xl">{DOCTOR.name}</p>
                  <p className="text-pink-400 text-sm font-semibold mb-1">{DOCTOR.specialty}</p>
                  <p className="text-slate-300 text-xs font-medium leading-relaxed">{DOCTOR.degrees}</p>
                  <p className="text-slate-400 text-xs mt-2 flex items-center gap-1">📍 {DOCTOR.location}</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-white text-sm font-extrabold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                ⭐ {DOCTOR.rating} Rated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section id="trust" className="bg-pink-600 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-white text-sm font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>{DOCTOR.rating} Google Rating</span>
            </div>
            <div className="hidden lg:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏥</span>
              <span>{DOCTOR.reviews} Verified Patient Reviews</span>
            </div>
            <div className="hidden lg:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span>{DOCTOR.experience} Years Experience</span>
            </div>
            <div className="hidden lg:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <span>Serving Barasat & Nearby Areas</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-pink-600 font-semibold tracking-widest text-sm uppercase mb-2">Specializations</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">Our Core Services</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">Comprehensive women's healthcare tailored for every stage of life.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {DOCTOR.services.map((s, i) => (
              <div
                key={i}
                id={`service-card-${i}`}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-50 transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-pink-700 transition-colors">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT STRIP ===== */}
      <section id="about" className="py-16" style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e0b2e 100%)'}}>
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-pink-400 font-semibold tracking-widest text-sm uppercase mb-2">About</p>
            <h2 className="text-3xl font-extrabold text-white mb-4">Why Women Trust {DOCTOR.name}</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              With over {DOCTOR.experience} years dedicated to women's health, Dr. Samik Sanyal is a name synonymous with trust and expertise in Barasat. His empathetic, patient-centred approach ensures every woman feels heard, respected, and well-cared-for — from their first consultation to long-term wellness.
            </p>
            <ul className="space-y-3">
              {['Safe, supported maternity journeys', 'Advanced laparoscopic & minimally invasive procedures', 'Warm, private consultation environment', 'Affordable care for local families'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                  <span className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center text-xs text-white flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: DOCTOR.experience + ' Yrs', label: 'Clinical Experience' },
              { num: DOCTOR.rating + ' ★', label: 'Google Rating' },
              { num: DOCTOR.reviews, label: 'Happy Patients' },
              { num: '3+', label: 'Specializations' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                <p className="text-3xl font-extrabold text-pink-400 mb-1">{stat.num}</p>
                <p className="text-slate-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHAMBER & MAP ===== */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-pink-600 font-semibold tracking-widest text-sm uppercase mb-2">Visit Us</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">Chamber Location & Hours</h2>
            <p className="text-slate-500 text-lg">Conveniently located in Barasat, West Bengal</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Hours */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-pink-600">🕐</span> Consultation Hours
              </h3>
              <div className="space-y-3 mb-8">
                {DOCTOR.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-0">
                    <span className="text-slate-700 font-medium">{h.day}</span>
                    <span className={`font-semibold ${h.time === 'Closed' ? 'text-red-400' : 'text-pink-600'}`}>{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="bg-pink-50 border border-pink-100 rounded-xl p-4">
                <p className="text-pink-800 font-medium text-sm flex items-start gap-2">
                  <span className="text-lg mt-0.5">📍</span>
                  <span><strong>Address:</strong> {DOCTOR.address}</span>
                </p>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  id="location-book-btn"
                  href={`https://wa.me/${DOCTOR.whatsapp}?text=Hello%20Dr.%20Sanyal%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-3 rounded-xl text-sm transition-colors"
                >
                  📅 Book via WhatsApp
                </a>
                <a
                  id="location-directions-btn"
                  href={DOCTOR.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-3 rounded-xl text-sm transition-colors"
                >
                  🗺 Get Directions
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg h-80 lg:h-full min-h-72">
              <iframe
                title="Dr. Samik Sanyal Chamber Location"
                src={DOCTOR.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FOOTER ===== */}
      <section className="py-16" style={{background: 'linear-gradient(135deg, #1e0b2e 0%, #0f172a 100%)'}}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Your Wellness Matters.</h2>
          <p className="text-slate-300 mb-8 text-lg">Take the first step toward better health. Book your consultation with Dr. Samik Sanyal today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              id="cta-whatsapp-btn"
              href={`https://wa.me/${DOCTOR.whatsapp}?text=Hello%20Dr.%20Sanyal%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/30"
            >
              💬 WhatsApp Us
            </a>
            <a
              id="cta-call-btn"
              href={`tel:${DOCTOR.phone}`}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200"
            >
              📞 {DOCTOR.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-950 py-6 text-center">
        <p className="text-slate-500 text-sm">
          © 2025 {DOCTOR.name} — {DOCTOR.specialty} | Barasat, West Bengal
        </p>
      </footer>

      {/* ===== FLOATING WHATSAPP FAB ===== */}
      <a
        id="whatsapp-fab"
        href={`https://wa.me/${DOCTOR.whatsapp}?text=Hello%20Dr.%20Sanyal%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 hover:bg-emerald-400 rounded-full shadow-xl shadow-emerald-500/40 flex items-center justify-center transition-all duration-200 hover:scale-110 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}
