import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import SoapCarousel from '../components/SoapCarousel';
import ProductDetails from '../components/ProductDetails';
import Reviews from '../components/Reviews';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProductDetails />
      <SoapCarousel />
      <Reviews />
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-light text-gray-800 mb-4">NEPAKIE</div>
              <p className="text-gray-600 mb-4">Papaya Brightening Bath Gel for radiant skin</p>
              <p className="text-sm text-gray-500">Distributed and marketed by The Sackey's Secret</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-4">Contact Us</h4>
              <div className="space-y-2 text-gray-600 text-sm">
                <p>📞 +233-264814013</p>
                <p>📧 info@nepakie.com</p>
                <p>📍 Lashihi Comm 17, GT-325-5519</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-600 text-sm">
                <p className="hover:text-orange-600 cursor-pointer transition-colors">Product Information</p>
                <p className="hover:text-orange-600 cursor-pointer transition-colors">How to Use</p>
                <p className="hover:text-orange-600 cursor-pointer transition-colors">Contact Support</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-8 text-gray-500 text-sm">
              <span className="hover:text-orange-600 cursor-pointer transition-colors">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-orange-600 cursor-pointer transition-colors">Terms of Service</span>
              <span>•</span>
              <span className="hover:text-orange-600 cursor-pointer transition-colors">Customer Support</span>
            </div>
            <p className="text-gray-500 text-sm">© 2024 NEPAKIE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
