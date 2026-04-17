import React from 'react';
import '../pages/ProductDetail.css';

function Navbar({ isScrolled, isMenuOpen, toggleMenu, setCurrentPage, products, onSelectProduct }) {
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo-wrapper">
          <span className="logo-text"> Techbrain Networks Logistics</span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setCurrentPage('home')}>Home</a></li>
          <li className="nav-item-dropdown">
            <a href="#products">Our Products</a>
            <div className="dropdown-menu">
              {products.map(product => (
                <div 
                  key={product.id} 
                  className="dropdown-item"
                  onClick={() => onSelectProduct(product.id)}
                >
                  {product.name}
                </div>
              ))}
            </div>
          </li>
          <li><a href="#about" onClick={() => setCurrentPage('about')}>About</a></li>
          <li><a href="#services" onClick={() => setCurrentPage('services')}>Services</a></li>
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