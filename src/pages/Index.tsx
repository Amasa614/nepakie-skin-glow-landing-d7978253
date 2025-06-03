import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import SoapCarousel from '../components/SoapCarousel';
import ProductDetails from '../components/ProductDetails';
import Reviews from '../components/Reviews';
import About from '../components/About';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <SoapCarousel />
      <ProductDetails />
      <Reviews />
      <About />
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-light text-gray-800 mb-4">NEPAKIE</div>
          <p className="text-gray-600 mb-8">Handcrafted organic soap for sensitive skin</p>
          <div className="flex justify-center gap-8 text-gray-500">
            <span>Contact</span>
            <span>•</span>
            <span>Privacy</span>
            <span>•</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
