import React from 'react';

const reasons = [
  {
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    title: 'Expert Team',
    desc: 'Our dentists are highly trained specialists with decades of combined experience in all areas of dentistry.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    title: 'Advanced Technology',
    desc: 'Digital X-rays, 3D imaging, laser dentistry, and CAD/CAM technology for precise, comfortable treatments.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    title: 'Patient Comfort',
    desc: 'Sedation options, comfortable chairs, entertainment systems, and a calming environment for anxiety-free visits.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Transparent Pricing',
    desc: 'Clear, upfront pricing with flexible payment plans and insurance coordination. No hidden fees ever.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Same-Day Appointments',
    desc: 'We value your time. Book online 24/7 and get same-day appointments for urgent dental needs.',
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Sterilization Protocol',
    desc: 'Hospital-grade sterilization and strict infection control protocols exceeding industry standards.',
    color: 'from-rose-500 to-rose-600',
  },
];

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-dental-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-dental-500" />
            <span className="text-sm text-dental-700 font-medium">Why Choose Us</span>
          </div>

          <h2 className="reveal font-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            The SmileCare
            <span className="text-gradient"> Difference</span>
          </h2>

          <p className="reveal text-slate-600 text-lg leading-relaxed">
            We go above and beyond to deliver exceptional dental care that exceeds your expectations 
            at every visit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`reveal bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 card-hover group`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={reason.icon} />
                </svg>
              </div>

              <h3 className="font-semibold text-xl text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-500 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
