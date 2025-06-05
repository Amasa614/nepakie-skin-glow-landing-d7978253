import React, { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/20 backdrop-blur-md border-b border-white/20 z-50 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-light text-gray-800 hover:text-gray-600 transition-colors duration-300">
          NEPAKIE
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gray-800 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('product')}
            className="text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gray-800 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Product
          </button>
          <button 
            onClick={() => scrollToSection('reviews')}
            className="text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gray-800 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gray-800 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            FAQ
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-left py-2"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('product')}
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-left py-2"
          >
            Product
          </button>
          <button 
            onClick={() => scrollToSection('reviews')}
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-left py-2"
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-left py-2"
          >
            FAQ
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
