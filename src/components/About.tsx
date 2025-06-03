
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&h=400" 
              alt="Natural ingredients and peaceful environment"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl text-gray-800">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              NEPAKIE was born from a simple belief: skincare should be pure, gentle, and sustainable. 
              Founded by a team passionate about natural wellness, we handcraft each bar with love and 
              respect for both your skin and our planet.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every ingredient is ethically sourced through fair trade partnerships, ensuring that our 
              commitment to sustainability extends beyond our products to the communities that help 
              create them.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4">
                <div className="text-2xl mb-2">🌱</div>
                <div className="text-gray-800 font-medium">100% Natural</div>
                <div className="text-gray-600 text-sm">Organic ingredients only</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl mb-2">👥</div>
                <div className="text-gray-800 font-medium">Fair Trade</div>
                <div className="text-gray-600 text-sm">Supporting communities</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl mb-2">♻️</div>
                <div className="text-gray-800 font-medium">Zero Waste</div>
                <div className="text-gray-600 text-sm">Sustainable packaging</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl mb-2">❤️</div>
                <div className="text-gray-800 font-medium">Handmade</div>
                <div className="text-gray-600 text-sm">Crafted with care</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl text-gray-800 mb-8">Trusted by Industry Leaders</h3>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-60">
            <div className="text-gray-500 font-light text-lg">Organic Certified</div>
            <div className="text-gray-500 font-light text-lg">Dermatologist Tested</div>
            <div className="text-gray-500 font-light text-lg">Cruelty Free</div>
            <div className="text-gray-500 font-light text-lg">Eco Friendly</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
