/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

const Header = ({ activeSection }) => {
  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="app-header">
      <div className="container">
        {/*<img src="" alt="Paragon Logo" className="logo-image" /> */}
        <a href="#hero" className="logo">Paragon</a>
        <nav className="main-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className={activeSection === link.href.substring(1) ? 'active' : ''}
                  aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="hero" className="hero">
    <h1>Innovating the Future</h1>
    <p>We build elegant solutions for a complex world. Discover how our technology can propel your business forward.</p>
    <a href="#contact" className="cta-button">Get in Touch</a>
  </section>
);

const About = () => (
  <section id="about">
    <div className="container">
      <h2>Who We Are</h2>
      <div className="about-content">
        <div className="about-text">
          <h3>Pioneering Digital Excellence</h3>
          <p>We are a team of passionate creators, thinkers, and developers dedicated to pushing the boundaries of technology. Our mission is to transform ideas into impactful digital experiences.</p>
          <p>With a focus on user-centric design and robust engineering, we craft solutions that are not only beautiful but also scalable and reliable.</p>
        </div>
        <div className="about-image">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4AC6FF" d="M48.1,-63.9C62.5,-55.2,74.5,-42.6,79.5,-27.4C84.5,-12.3,82.5,5.2,75.7,20.4C69,35.7,57.5,48.7,44.1,58.8C30.7,68.9,15.3,76.1,1.5,74.5C-12.3,73,-24.7,62.8,-39,54C-53.3,45.2,-69.6,37.8,-76.3,25.2C-83,12.7,-80.1,-4.9,-72.9,-20.1C-65.7,-35.3,-54.2,-48,-41,-57.1C-27.8,-66.1,-13.9,-71.4,-0.1,-71.3C13.7,-71.2,27.3,-66.9,37.6,-63.9" transform="translate(100 100)" />
            </svg>
        </div>
      </div>
    </div>
  </section>
);

const servicesData = [
    { icon: 'design', title: 'UI/UX Design', description: 'Crafting intuitive and beautiful user interfaces that delight users.' },
    { icon: 'code', title: 'Web Development', description: 'Building responsive, high-performance websites and applications.' },
    { icon: 'cloud', title: 'Cloud Solutions', description: 'Leveraging cloud infrastructure for scalable and secure solutions.' },
];

const ServiceIcons = {
    design: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>,
    code: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>,
    cloud: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>,
};


const Services = () => (
  <section id="services">
    <div className="container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            {ServiceIcons[service.icon]}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact">
    <div className="container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <input type="text" id="name" name="name" placeholder="Your Name" aria-label="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="Your Email" aria-label="Your Email" required />
        </div>
        <div className="form-group">
          <textarea id="message" name="message" placeholder="Your Message" aria-label="Your Message" required></textarea>
        </div>
        <button type="submit" className="cta-button submit-button">Send Message</button>
      </form>
      <div className="socials">
        <a href="#" aria-label="Twitter"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a>
        <a href="#" aria-label="LinkedIn"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a>
        <a href="#" aria-label="GitHub"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a>
      </div>
    </div>
  </section>
);

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  // Fix: Provide a specific type for the ref to avoid type errors in the useEffect cleanup function.
  const sectionRefs = useRef<Record<string, Element>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' } // highlight when section is in the middle 40% of the viewport
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      sectionRefs.current[section.id] = section;
      observer.observe(section);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
          if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
