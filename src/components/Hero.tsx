
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-5xl text-gray-800 leading-tight">
            Handcrafted Organic Soap for Sensitive Skin
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Pure, gentle cleansing with natural ingredients that care for your skin and the environment.
          </p>
          <div className="flex gap-4">
            <button className="bg-green-100 text-green-800 px-8 py-3 rounded-full hover:bg-green-200 transition-colors">
              Shop Now
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
              View Ingredients
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&h=600" 
              alt="Person enjoying a relaxing shower"
              className="w-80 h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
