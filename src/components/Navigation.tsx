
import React from 'react';

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/20 backdrop-blur-md border-b border-white/20 z-50 py-4 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-light text-gray-800 hover:text-gray-600 transition-colors duration-300">
          NEPAKIE
        </div>
        <div className="flex gap-8">
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
            onClick={() => scrollToSection('about')}
            className="text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gray-800 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
