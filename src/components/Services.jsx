import React from 'react';

const services = [
  {
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    title: 'Teeth Cleaning',
    desc: 'Professional deep cleaning to remove plaque, tartar, and stains for a healthier, brighter smile.',
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Teeth Whitening',
    desc: 'Advanced whitening treatments that safely brighten your teeth by several shades in one visit.',
  },
  {
    icon: 'M12 2a8 8 0 00-8 8c0 3.866 3.582 7.317 7.185 8.66.387.13.815.13 1.202 0C16.418 17.317 20 13.866 20 10a8 8 0 00-8-8z',
    title: 'Dental Implants',
    desc: 'Permanent tooth replacement solutions that look, feel, and function like natural teeth.',
  },
  {
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    title: 'Orthodontics',
    desc: 'Straighten your teeth with modern braces and clear aligners for a perfectly aligned smile.',
  },
  {
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    title: 'Veneers',
    desc: 'Custom porcelain shells that transform the appearance of your teeth for a Hollywood smile.',
  },
  {
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Cosmetic Dentistry',
    desc: 'Comprehensive smile makeovers combining multiple treatments for your dream smile.',
  },
  {
    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    title: 'Root Canal',
    desc: 'Pain-free root canal therapy to save infected teeth and eliminate discomfort.',
  },
  {
    icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Emergency Dentistry',
    desc: 'Same-day emergency appointments for toothaches, broken teeth, and dental trauma.',
  },
];

function Services({ onBook }) {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dental-50 border border-dental-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-dental-500" />
            <span className="text-sm text-dental-700 font-medium">Our Services</span>
          </div>

          <h2 className="reveal font-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Dental
            <span className="text-gradient"> Solutions</span>
          </h2>

          <p className="reveal text-slate-600 text-lg leading-relaxed">
            From preventive care to advanced restorative procedures, we offer a full spectrum 
            of dental services using the latest technology and techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`reveal-scale service-card gradient-border p-6 card-hover cursor-pointer group`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => onBook(service.title)}
            >
              <div className="service-icon-wrapper w-14 h-14 rounded-2xl bg-gradient-to-br from-dental-50 to-dental-100 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-dental-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                </svg>
              </div>

              <h3 className="font-semibold text-lg text-slate-900 mb-3 group-hover:text-dental-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {service.desc}
              </p>

              <div className="flex items-center gap-2 text-dental-600 text-sm font-medium group-hover:gap-3 transition-all">
                <span>Book Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
