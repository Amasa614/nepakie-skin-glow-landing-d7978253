import React from 'react';
import { Leaf } from 'lucide-react';

const NaturalTouch = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&h=600" 
              alt="Hands holding natural handcrafted soap with botanical elements"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Leaf className="text-orange-600" size={20} />
                </div>
                <div>
                  <div className="text-gray-800 font-medium">100% Natural</div>
                  <div className="text-gray-600 text-sm">Organic Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4">
                The Natural Touch
              </h2>
              <p className="text-lg text-gray-600 font-medium tracking-wide mb-8">
                CLEANLINESS AND PURITY TOGETHER
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Experience the gentle power of nature with every use. Our handcrafted soaps are carefully formulated 
                with premium organic ingredients that cleanse without stripping your skin's natural moisture barrier. 
                Each bar contains nourishing botanical extracts that work in harmony to leave your skin feeling soft, 
                balanced, and naturally radiant.
              </p>
              
              <p>
                From the calming properties of chamomile to the rejuvenating effects of essential oils, every ingredient 
                is selected for its proven benefits and sustainable sourcing. We believe that true luxury comes from 
                the purity of natural elements, not harsh chemicals or artificial additives.
              </p>
              
              <p>
                Our commitment extends beyond skincare – each purchase supports fair trade practices and eco-friendly 
                packaging, making every wash a step towards a healthier planet. Discover the difference that authentic, 
                handcrafted natural soap can make for your daily ritual.
              </p>
            </div>

            <div className="flex gap-4 pt-6">
              <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Shop Natural Collection
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-md">
                Learn About Ingredients
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaturalTouch; 