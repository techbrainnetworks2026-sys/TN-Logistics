import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import { products } from './data/products';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  const selectedProduct = products.find(p => p.id === currentProductId);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        scrollToSection={scrollToSection} 
        isScrolled={isScrolled} 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        products={products}
        onSelectProduct={(id) => {
          setCurrentProductId(id);
          setCurrentPage('product-detail');
        }}
      />

      {currentPage === 'home' && (
        <Home 
          scrollToSection={scrollToSection} 
          products={products} 
          onSelectProduct={(id) => {
            setCurrentProductId(id);
            setCurrentPage('product-detail');
          }} 
        />
      )}

      {currentPage === 'about' && <About />}

      {currentPage === 'careers' && <Careers />}

      {currentPage === 'services' && <Services />}

      {currentPage === 'contact' && <Contact />}

      {currentPage === 'product-detail' && (
        <ProductDetail 
          product={selectedProduct}
          products={products}
          onSelectProduct={(id) => {
            setCurrentProductId(id);
          }}
          onBack={() => setCurrentPage('home')} 
        />
      )}

      <Footer />
    </div>
  );
}

export default App;