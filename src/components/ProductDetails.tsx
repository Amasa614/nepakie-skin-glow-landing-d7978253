import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import IngredientModal from './IngredientModal';
import DistributorsModal from './DistributorsModal';

const ProductDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDistributorsModalOpen, setIsDistributorsModalOpen] = useState(false);

  const ingredients = [
    'Water',
    'Sodium Laureth Sulfate',
    'C14-16 Olefin Sodium Sulfonate',
    'Cocamide-MEA',
    'Cocamidopropyl Betaine',
    'Sodium Chloride',
    'Glycol Distearate',
    'Citric Acid',
    'Papaya Extract (Phenomelides Sinensis)',
    'DMDM Hydantoin',
    'Natural Milk Essence',
    'Magnesium Compounds'
  ];

  const benefits = [
    'Removes aging cuticles and brightens skin tone',
    'Reveals smooth and transparent skin',
    'Rich nourishment with natural milk essence',
    'Improves dryness, roughness and tightness',
    'Restores skin\'s silky touch',
    'Fine, rich foam for gentle cleansing',
    'SPA soothing bathing experience'
  ];

  const sustainabilityFeatures = [
    { icon: '🥭', label: 'Papaya Extract' },
    { icon: '🥛', label: 'Natural Milk Essence' },
    { icon: '♻️', label: 'Recyclable Packaging' },
    { icon: '🌿', label: 'Skin Brightening' }
  ];

  return (
    <>
      <section id="product" className="py-20 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero section with product image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image Section */}
            <div className="relative">
              <img 
                src="/images/enhancedwin.png" 
                alt="NEPAKIE Papaya Brightening Bath Gel"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-2xl">🥭</span>
                  </div>
                  <div>
                    <div className="text-gray-800 font-medium">100% Natural</div>
                    <div className="text-gray-600 text-sm">Papaya Extract</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4">
                  Papaya Brightening Bath Gel
                </h2>
                <p className="text-lg text-gray-600 font-medium tracking-wide mb-8">
                  NATURAL PAPAYA EXTRACT FOR RADIANT SKIN
                </p>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Papaya extract contains papain and papaya acid, which help remove aging cuticles, 
                  brighten skin tone, and reveal smooth transparent skin. Natural milk essence provides 
                  rich nourishment to the skin, helping improve dryness, roughness and tightness while 
                  restoring your skin's silky touch.
                </p>
                
                <p>
                  The fine, rich foam provides gentle cleansing with SPA soothing benefits, making every 
                  wash a luxurious experience. Our natural formula works in harmony with your skin's needs, 
                  delivering visible brightening results without harsh chemicals.
                </p>
              </div>

              <div className="flex gap-4 pt-6">
                <button 
                  onClick={() => setIsDistributorsModalOpen(true)}
                  className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Shop Now
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  Learn About Ingredients
                </button>
              </div>
            </div>
          </div>

          {/* Product details grid - keeping the existing layout for the rest */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl text-gray-800 mb-6 flex items-center gap-3">
                  <Leaf className="text-orange-600" size={24} />
                  Key Ingredients
                </h3>
                <ul className="space-y-3">
                  {ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-600 flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-300 rounded-full"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl text-gray-800 mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-600 flex items-start gap-3">
                      <span className="text-orange-600 mt-1">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl text-gray-800 mb-6">Product Features</h3>
                <div className="space-y-4">
                  {sustainabilityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="text-2xl">{feature.icon}</span>
                      <span className="text-gray-600">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-xl text-gray-800 mb-6">How to Use</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 text-xl">1</span>
                  </div>
                  <p className="text-gray-600">Take appropriate amount on palm or bath cotton</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 text-xl">2</span>
                  </div>
                  <p className="text-gray-600">Rub gently until rich foam is produced, massage for 3-5 minutes</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 text-xl">3</span>
                  </div>
                  <p className="text-gray-600">Rinse thoroughly with clean water</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> For external use only. Avoid contact with eyes. If product gets into eyes, rinse thoroughly with water immediately. Store in a dry place at room temperature, away from direct sunlight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IngredientModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <DistributorsModal 
        isOpen={isDistributorsModalOpen} 
        onClose={() => setIsDistributorsModalOpen(false)} 
      />
    </>
  );
};

export default ProductDetails;
