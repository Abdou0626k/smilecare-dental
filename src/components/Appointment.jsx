import React from 'react';

function Appointment({ onBook }) {
  return (
    <section id="appointment" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dental-100/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="reveal glass rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-dental-200/30 to-transparent rounded-full blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dental-50 border border-dental-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-dental-500" />
                <span className="text-sm text-dental-700 font-medium">Book Now</span>
              </div>

              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Ready for Your
                <span className="text-gradient"> Perfect Smile?</span>
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Schedule your appointment today and take the first step towards a healthier, 
                more confident smile. Our team is ready to welcome you.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onBook}
                  className="ripple-btn px-8 py-4 bg-gradient-to-r from-dental-500 to-dental-600 text-white font-semibold rounded-full shadow-lg shadow-dental-500/30 hover:shadow-dental-500/50 transition-all hover:-translate-y-1 text-lg"
                >
                  Book Appointment
                </button>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 px-6 py-4 border-2 border-slate-200 rounded-full hover:border-dental-300 hover:bg-dental-50 transition-all text-slate-700 font-medium"
                >
                  <svg className="w-5 h-5 text-dental-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (123) 456-7890
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-dental-100 to-dental-200 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-dental-400 to-dental-600 flex items-center justify-center shadow-2xl animate-float">
                    <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 glass rounded-xl p-4 shadow-lg animate-float-delayed">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Available Today</div>
                      <div className="text-xs text-slate-500">3 slots left</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointment;
