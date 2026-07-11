import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Jennifer Adams',
    role: 'Marketing Director',
    text: 'The team at SmileCare transformed my smile completely. I used to hide my teeth in photos, but now I can not stop smiling. The veneers look incredibly natural!',
    rating: 5,
    initials: 'JA',
    color: 'from-dental-400 to-dental-600',
  },
  {
    name: 'Robert Chen',
    role: 'Software Engineer',
    text: 'Best dental experience I have ever had. The technology they use is amazing - I got a crown made in a single visit. No temporary crown, no second appointment.',
    rating: 5,
    initials: 'RC',
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Maria Gonzalez',
    role: 'Teacher',
    text: 'I was terrified of dentists until I found SmileCare. Their sedation options and gentle approach made my root canal completely painless. Highly recommend!',
    rating: 5,
    initials: 'MG',
    color: 'from-teal-400 to-teal-600',
  },
  {
    name: 'David Thompson',
    role: 'Business Owner',
    text: 'My whole family comes here now. The kids actually look forward to their checkups because the staff is so friendly and the office has such a calming vibe.',
    rating: 5,
    initials: 'DT',
    color: 'from-violet-400 to-violet-600',
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dental-100 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dental-50 border border-dental-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-dental-500" />
            <span className="text-sm text-dental-700 font-medium">Testimonials</span>
          </div>

          <h2 className="reveal font-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our Patients
            <span className="text-gradient"> Say</span>
          </h2>
        </div>

        <div className="reveal max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  i === active
                    ? 'opacity-100 translate-x-0 relative'
                    : 'opacity-0 absolute inset-0 translate-x-8 pointer-events-none'
                }`}
              >
                <div className="glass rounded-3xl p-8 md:p-12 shadow-xl text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                    {t.initials}
                  </div>

                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(t.rating)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>

                  <div>
                    <h4 className="font-semibold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === active ? 'bg-dental-500 w-8' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
