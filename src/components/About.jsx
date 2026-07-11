import React from 'react';

function About() {
  const features = [
    { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Certified Experts', desc: 'Board-certified dentists with years of experience' },
    { icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z', title: 'Advanced Technology', desc: 'State-of-the-art equipment and digital dentistry' },
    { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', title: 'Patient Comfort', desc: 'Relaxing environment with sedation options' },
    { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Flexible Hours', desc: 'Open evenings and weekends for your convenience' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-dental-100/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-dental-200/30 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="reveal-left relative">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-dental-500/10 relative z-10">
                <div className="aspect-[4/5] bg-gradient-to-br from-dental-100 to-dental-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-dental-400 to-dental-600 flex items-center justify-center shadow-xl">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-slate-800 mb-2">SmileCare Clinic</h3>
                      <p className="text-dental-600 font-medium">Excellence in Dentistry</p>
                    </div>
                  </div>

                  {/* Decorative overlay pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(14,165,233,0.3) 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }} />
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-xl z-20 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">ISO 9001</div>
                    <div className="text-xs text-slate-500">Certified</div>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-dental-500 to-dental-600 rounded-2xl p-4 shadow-xl z-20">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-xs text-white/80">Years of<br/>Excellence</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="reveal-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dental-50 border border-dental-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-dental-500" />
              <span className="text-sm text-dental-700 font-medium">About Our Clinic</span>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              We Care About Your
              <span className="text-gradient"> Dental Health</span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              At SmileCare Dental Clinic, we believe everyone deserves a healthy, beautiful smile. 
              Founded in 2009, our clinic has grown to become one of the most trusted dental practices 
              in the region, combining advanced technology with compassionate care.
            </p>

            <p className="text-slate-600 leading-relaxed mb-10">
              Our team of experienced dentists and specialists are committed to providing personalized 
              treatment plans tailored to your unique needs. From routine checkups to complex procedures, 
              we ensure every visit is comfortable, efficient, and delivers exceptional results.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-dental-50 to-dental-100 flex items-center justify-center flex-shrink-0 group-hover:from-dental-500 group-hover:to-dental-600 transition-all duration-300">
                    <svg className="w-6 h-6 text-dental-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
