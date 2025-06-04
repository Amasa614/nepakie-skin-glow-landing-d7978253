import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white pt-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl text-gray-800 leading-tight">
          Organic Soap For All Skin Types, Especially Yours.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Pure, gentle cleansing with natural ingredients that care for your skin and the environment.
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-100 text-orange-800 px-8 py-3 rounded-full hover:bg-orange-200 transition-all duration-300 hover:scale-105 hover:shadow-md">
              Shop Now
            </button>
            <button 
              onClick={() => scrollToSection('product')}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              View Ingredients
            </button>
          </div>
        </div>
        <div className="flex justify-center animate-fade-in">
          <div className="relative">
            <img 
              src="/images/nepakie hero.png" 
              alt="Nepakie organic soap hero image"
              className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-sm">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
