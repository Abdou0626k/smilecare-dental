import React, { useState, useEffect } from 'react';

const services = [
  'Teeth Cleaning',
  'Teeth Whitening',
  'Dental Implants',
  'Orthodontics',
  'Veneers',
  'Cosmetic Dentistry',
  'Root Canal',
  'Emergency Dentistry',
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
];

function BookingModal({ onClose, prefillService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: prefillService || '',
    date: '',
    time: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (prefillService) {
      setFormData((prev) => ({ ...prev, service: prefillService }));
    }
  }, [prefillService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 2500);
  };

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="modal-overlay absolute inset-0" onClick={onClose} />

      <div className="modal-content relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar">
        {showSuccess ? (
          <div className="p-12 text-center success-popup">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">Appointment Requested!</h3>
            <p className="text-slate-500">We will confirm your appointment shortly.</p>
          </div>
        ) : (
          <>
            <div className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-slate-100 p-6 flex items-center justify-between z-10">
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">Book Appointment</h3>
                <p className="text-sm text-slate-500 mt-1">Fill in your details and preferred time</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input w-full px-4 py-3 rounded-xl text-slate-900"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-input w-full px-4 py-3 rounded-xl text-slate-900"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input w-full px-4 py-3 rounded-xl text-slate-900"
                  placeholder="john@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Service *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="contact-input w-full px-4 py-3 rounded-xl text-slate-900"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="contact-input w-full px-4 py-3 rounded-xl text-slate-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time *</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="contact-input w-full px-4 py-3 rounded-xl text-slate-900"
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="contact-input w-full px-4 py-3 rounded-xl text-slate-900 resize-none"
                  placeholder="Any specific concerns or requests..."
                />
              </div>

              <button
                type="submit"
                className="ripple-btn w-full py-4 bg-gradient-to-r from-dental-500 to-dental-600 text-white font-semibold rounded-xl shadow-lg shadow-dental-500/30 hover:shadow-dental-500/50 transition-all hover:-translate-y-0.5 text-lg"
              >
                Confirm Booking
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default BookingModal;
