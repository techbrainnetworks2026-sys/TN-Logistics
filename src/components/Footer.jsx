import React from 'react';

function Footer({ setCurrentPage }) {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#home" onClick={() => setCurrentPage('home')}>Home</a>
        <a href="#about" onClick={() => setCurrentPage('about')}>About</a>
        <a href="#services" onClick={() => setCurrentPage('services')}>Services</a>
        <a href="#industries" onClick={() => setCurrentPage('home')}>Industries</a>
        <a href="#careers" onClick={() => setCurrentPage('careers')}>Careers</a>
        <a href="#contact" onClick={() => setCurrentPage('contact')}>Contact Us</a>
        <a href="#">Privacy</a>
        <a href="#">Terms & Conditions</a>
      </div>
      <p>&copy; 2026 Techbrain Networks. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;