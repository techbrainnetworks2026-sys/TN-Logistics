import React from 'react';

function Navbar({ isScrolled, isMenuOpen, toggleMenu, setCurrentPage }) {
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
      <div className="logo-wrapper">
  {/* <img 
    src="data:image/png;base64,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" 
    alt="Techbrain Networks Logistics"
    className="logo"
  /> */}
  <span className="logo-text"> Techbrain Networks Logistics</span>
</div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setCurrentPage('home')}>Home</a></li>
          <li><a href="#about" onClick={() => setCurrentPage('about')}>About</a></li>
          <li><a href="#services" onClick={() => setCurrentPage('services')}>Services</a></li>
          <li><a href="#industries" onClick={() => setCurrentPage('home')}>Industries</a></li>
          <li><a href="#careers" onClick={() => setCurrentPage('careers')}>Careers</a></li>
          <li><a href="#contact" onClick={() => setCurrentPage('contact')}>Contact Us</a></li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;