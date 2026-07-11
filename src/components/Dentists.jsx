import React from 'react';

const dentists = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Lead Dentist & Founder',
    specialty: 'Cosmetic Dentistry',
    experience: '18 years',
    image: 'SM',
    color: 'from-dental-400 to-dental-600',
  },
  {
    name: 'Dr. James Chen',
    role: 'Oral Surgeon',
    specialty: 'Dental Implants',
    experience: '15 years',
    image: 'JC',
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Orthodontist',
    specialty: 'Invisalign & Braces',
    experience: '12 years',
    image: 'ER',
    color: 'from-teal-400 to-teal-600',
  },
  {
    name: 'Dr. Michael Park',
    role: 'Endodontist',
    specialty: 'Root Canal Therapy',
    experience: '14 years',
    image: 'MP',
    color: 'from-violet-400 to-violet-600',
  },
];

function Dentists() {
  return (
    <section id="dentists" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dental-50 border border-dental-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-dental-500" />
            <span className="text-sm text-dental-700 font-medium">Our Team</span>
          </div>

          <h2 className="reveal font-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Meet Our Expert
            <span className="text-gradient"> Dentists</span>
          </h2>

          <p className="reveal text-slate-600 text-lg leading-relaxed">
            Our team of board-certified specialists brings together expertise, compassion, 
            and the latest techniques to deliver outstanding results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dentists.map((dentist, index) => (
            <div
              key={index}
              className={`reveal-scale dentist-card group relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Area */}
              <div className={`aspect-[3/4] bg-gradient-to-br ${dentist.color} relative overflow-hidden`}>
                <div className="dentist-image absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                    <span className="text-4xl font-bold text-white">{dentist.image}</span>
                  </div>
                </div>

                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10" />
                <div className="absolute bottom-8 left-4 w-12 h-12 rounded-full bg-white/10" />

                {/* Overlay on hover */}
                <div className="dentist-overlay absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
                  <p className="text-white/90 text-sm mb-2">{dentist.specialty}</p>
                  <p className="text-white/70 text-sm">{dentist.experience} experience</p>

                  <div className="flex gap-3 mt-4">
                    <button className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="bg-white p-5">
                <h3 className="font-semibold text-lg text-slate-900">{dentist.name}</h3>
                <p className="text-dental-600 text-sm font-medium">{dentist.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dentists;
