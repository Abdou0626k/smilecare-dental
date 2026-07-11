import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      title: 'Phone',
      value: '(123) 456-7890',
      link: 'tel:+1234567890',
    },
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Email',
      value: 'hello@smilecare.com',
      link: 'mailto:hello@smilecare.com',
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Address',
      value: '123 Dental Avenue, Suite 100',
      link: '#',
    },
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Working Hours',
      value: 'Mon-Fri: 8AM - 8PM',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-dental-500" />
            <span className="text-sm text-dental-700 font-medium">Contact</span>
          </div>

          <h2 className="reveal font-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Get In
            <span className="text-gradient"> Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="reveal-left space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="glass rounded-2xl p-5 card-hover group block"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-dental-50 to-dental-100 flex items-center justify-center mb-4 group-hover:from-dental-500 group-hover:to-dental-600 transition-all">
                    <svg className="w-6 h-6 text-dental-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={info.icon} />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">{info.title}</h4>
                  <p className="text-sm text-slate-500">{info.value}</p>
                </a>
              ))}
            </div>

            <div className="map-placeholder rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-dental-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-slate-700">SmileCare Dental Clinic</p>
                <p className="text-sm text-slate-500 mt-1">123 Dental Avenue, Suite 100</p>
                <button className="mt-3 text-sm text-dental-600 font-medium hover:underline">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input w-full px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input w-full px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400"
                    placeholder="john@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-input w-full px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-input w-full px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400"
                    placeholder="General Inquiry"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="contact-input w-full px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400 resize-none"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <button
                type="submit"
                className="ripple-btn w-full py-4 bg-gradient-to-r from-dental-500 to-dental-600 text-white font-semibold rounded-xl shadow-lg shadow-dental-500/30 hover:shadow-dental-500/50 transition-all hover:-translate-y-0.5"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>

              {submitted && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm text-center">
                  Thank you! We will get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
