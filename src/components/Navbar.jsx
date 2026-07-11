import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Dentists', href: '#dentists' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-dental-400 to-dental-600 flex items-center justify-center shadow-lg group-hover:shadow-dental-400/50 transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className={`font-serif text-xl font-bold leading-none transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                  SmileCare
                </span>
                <span className={`text-[10px] tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-dental-600' : 'text-dental-300'}`}>
                  Dental Clinic
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link text-sm font-medium transition-colors ${
                    scrolled ? 'text-slate-700 hover:text-dental-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={onBook}
                className="ripple-btn px-6 py-2.5 bg-gradient-to-r from-dental-500 to-dental-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-dental-500/30 hover:shadow-dental-500/50 transition-all hover:-translate-y-0.5"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden hamburger ${mobileOpen ? 'open' : ''} p-2`}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`hamburger-line block h-0.5 w-full rounded-full transition-all ${scrolled || mobileOpen ? 'bg-slate-800' : 'bg-white'}`} />
                <span className={`hamburger-line block h-0.5 w-full rounded-full transition-all ${scrolled || mobileOpen ? 'bg-slate-800' : 'bg-white'}`} />
                <span className={`hamburger-line block h-0.5 w-full rounded-full transition-all ${scrolled || mobileOpen ? 'bg-slate-800' : 'bg-white'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed inset-y-0 right-0 w-80 glass-dark z-50 lg:hidden pt-20 px-6 ${mobileOpen ? 'open' : ''}`}>
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white/90 hover:text-white font-medium py-2 border-b border-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMobileOpen(false); onBook(); }}
            className="mt-4 ripple-btn px-6 py-3 bg-gradient-to-r from-dental-500 to-dental-600 text-white font-semibold rounded-full shadow-lg"
          >
            Book Appointment
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
