
import React from 'react';

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 py-4">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-light text-gray-800">NEPAKIE</div>
        <div className="flex gap-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('product')}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Product
          </button>
          <button 
            onClick={() => scrollToSection('reviews')}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
