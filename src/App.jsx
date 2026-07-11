import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Dentists from './components/Dentists.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import Statistics from './components/Statistics.jsx';
import Appointment from './components/Appointment.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BookingModal from './components/BookingModal.jsx';

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState(null);

  useEffect(() => {
    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openBooking = (service = null) => {
    setBookingPrefill(service);
    setBookingOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBooking = () => {
    setBookingOpen(false);
    setBookingPrefill(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="relative">
      <Navbar onBook={() => openBooking()} />
      <Hero onBook={() => openBooking()} />
      <About />
      <Services onBook={openBooking} />
      <WhyChooseUs />
      <Dentists />
      <Gallery />
      <Testimonials />
      <Statistics />
      <Appointment onBook={() => openBooking()} />
      <FAQ />
      <Contact />
      <Footer onBook={() => openBooking()} />

      {bookingOpen && (
        <BookingModal 
          onClose={closeBooking} 
          prefillService={bookingPrefill}
        />
      )}
    </div>
  );
}

export default App;
