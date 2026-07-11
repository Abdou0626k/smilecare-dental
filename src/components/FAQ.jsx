import React, { useState } from 'react';

const faqs = [
  {
    question: 'How often should I visit the dentist?',
    answer: 'We recommend visiting every 6 months for routine checkups and cleanings. However, if you have specific dental issues or are undergoing treatment, more frequent visits may be necessary.',
  },
  {
    question: 'Do you offer sedation dentistry?',
    answer: 'Yes! We offer multiple sedation options including nitrous oxide (laughing gas), oral sedation, and IV sedation for patients with dental anxiety or undergoing complex procedures.',
  },
  {
    question: 'What payment options do you accept?',
    answer: 'We accept all major credit cards, insurance plans, HSA/FSA cards, and offer flexible financing through CareCredit. We also provide in-house payment plans for qualifying treatments.',
  },
  {
    question: 'How long does teeth whitening take?',
    answer: 'Our in-office professional whitening takes about 90 minutes and can brighten your teeth by up to 8 shades in a single visit. We also offer take-home whitening kits for gradual results.',
  },
  {
    question: 'Are dental implants painful?',
    answer: 'Most patients report minimal discomfort during and after the procedure thanks to our advanced techniques and anesthesia options. Any post-procedure soreness typically resolves within a few days.',
  },
  {
    question: 'Do you see children?',
    answer: 'Absolutely! We welcome patients of all ages and have a kid-friendly environment. Our pediatric dental services include cleanings, sealants, fluoride treatments, and orthodontic evaluations.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dental-50 border border-dental-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-dental-500" />
            <span className="text-sm text-dental-700 font-medium">FAQ</span>
          </div>

          <h2 className="reveal font-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked
            <span className="text-gradient"> Questions</span>
          </h2>
        </div>

        <div className="reveal space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item rounded-2xl border border-slate-100 bg-slate-50/50 overflow-hidden transition-all ${openIndex === index ? 'open bg-white shadow-lg' : ''}`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <svg
                  className={`faq-icon w-5 h-5 text-dental-600 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`faq-answer px-6 ${openIndex === index ? 'pb-6' : ''}`}>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
