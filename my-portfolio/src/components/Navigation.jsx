import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        <div className="nav-container">
          <div className="nav-content">
            <button
              onClick={() => scrollToSection('home')}
              className="nav-logo"
            >
              USN
            </button>

            <div className="nav-links-desktop">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="nav-link"
                >
                  {item}
                  <span className="underline-animation"></span>
                </button>
              ))}
            </div>

            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-links">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="mobile-link"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;